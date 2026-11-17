import { NextResponse } from 'next/server';
import { appendOrderToGoogleSheet, OrderRowData } from '@/lib/googleSheets';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const orderData: OrderRowData = {
      orderId: body.orderId || `AURA-PK-${Math.floor(10000 + Math.random() * 90000)}`,
      customerName: body.fullName || 'Valued Customer',
      phone: body.phone || '',
      city: body.city || 'Lahore',
      address: body.address || '',
      itemsSummary: body.itemsSummary || (body.items?.map((i: any) => `${i.product.name} (Size ${i.selectedSize}, ${i.selectedColor}) x${i.quantity}`).join('; ') || '1x Women Maroon Leather Jacket'),
      subtotalPKR: body.subtotalPKR || 0,
      shippingFeePKR: body.shippingFeePKR || 0,
      totalPKR: body.totalPKR || 0,
      paymentMethod: body.paymentMethod || 'Cash on Delivery (COD)',
      trackingId: body.trackingId || `TCS-${Math.floor(100000 + Math.random() * 900000)}`,
      notes: body.notes || '',
      orderDate: new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
    };

    // Attempt to append to Google Sheet
    const sheetResult = await appendOrderToGoogleSheet(orderData, body.customSheetId);

    return NextResponse.json({
      success: true,
      orderId: orderData.orderId,
      trackingId: orderData.trackingId,
      sheetSynced: sheetResult.success,
      sheetMessage: sheetResult.message || sheetResult.error,
    });
  } catch (error: any) {
    console.error('Error placing order:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to process order' },
      { status: 500 }
    );
  }
}
