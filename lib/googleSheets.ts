import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

// Resolve service account key
function getServiceAccountCredentials() {
  try {
    const keyPath = path.join(process.cwd(), 'service-account.json');
    if (fs.existsSync(keyPath)) {
      const fileData = fs.readFileSync(keyPath, 'utf8');
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error('Error loading service-account.json:', error);
  }
  return null;
}

export async function getGoogleSheetsClient() {
  const credentials = getServiceAccountCredentials();
  if (!credentials) {
    throw new Error('Service account key (service-account.json) not found in project root.');
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

export interface OrderRowData {
  orderId: string;
  customerName: string;
  phone: string;
  city: string;
  address: string;
  itemsSummary: string;
  subtotalPKR: number;
  shippingFeePKR: number;
  totalPKR: number;
  paymentMethod: string;
  trackingId: string;
  notes?: string;
  orderDate?: string;
}

export async function appendOrderToGoogleSheet(
  order: OrderRowData,
  customSheetId?: string
) {
  const sheetId = customSheetId || process.env.GOOGLE_SHEET_ID;

  if (!sheetId) {
    console.warn('No GOOGLE_SHEET_ID provided in environment or request.');
    return {
      success: false,
      message: 'Google Sheet ID not configured. Order stored locally in session.',
    };
  }

  try {
    const sheets = await getGoogleSheetsClient();

    // 1. Check if headers exist
    const sheetData = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1:L1',
    });

    const hasHeaders = sheetData.data.values && sheetData.data.values.length > 0;

    // 2. If no headers, create them
    if (!hasHeaders) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: 'Sheet1!A1:L1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [
              'Order ID',
              'Date & Time (PKT)',
              'Customer Name',
              'Phone',
              'City',
              'Delivery Address',
              'Items Ordered (Size & Shade)',
              'Subtotal (PKR)',
              'Shipping (PKR)',
              'Total (PKR)',
              'Payment Method',
              'Courier Tracking',
              'Status',
              'Notes'
            ]
          ]
        }
      });
    }

    // 3. Format row data
    const now = new Date();
    const formattedDate = order.orderDate || now.toLocaleString('en-PK', { timeZone: 'Asia/Karachi' });

    const newRow = [
      order.orderId,
      formattedDate,
      order.customerName,
      order.phone,
      order.city,
      order.address,
      order.itemsSummary,
      `Rs. ${order.subtotalPKR.toLocaleString()}`,
      order.shippingFeePKR === 0 ? 'FREE' : `Rs. ${order.shippingFeePKR}`,
      `Rs. ${order.totalPKR.toLocaleString()}`,
      order.paymentMethod.toUpperCase(),
      order.trackingId,
      'Confirmed / Dispatched to Sialkot Atelier',
      order.notes || 'None'
    ];

    // 4. Append row
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:N',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [newRow]
      }
    });

    return {
      success: true,
      updatedRange: response.data.updates?.updatedRange,
      message: 'Order successfully synced to Google Sheet!',
    };

  } catch (error: any) {
    console.error('Failed to append order to Google Sheet:', error);
    return {
      success: false,
      error: error.message || 'Unknown error occurred while accessing Google Sheet',
    };
  }
}

export async function testGoogleSheetConnection(sheetId: string) {
  try {
    const sheets = await getGoogleSheetsClient();
    const response = await sheets.spreadsheets.get({
      spreadsheetId: sheetId,
    });

    return {
      success: true,
      title: response.data.properties?.title || 'Google Sheet',
      sheetsCount: response.data.sheets?.length || 1,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
}
