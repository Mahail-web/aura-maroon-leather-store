import { NextResponse } from 'next/server';
import { testGoogleSheetConnection } from '@/lib/googleSheets';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { sheetUrlOrId } = await req.json();

    if (!sheetUrlOrId) {
      return NextResponse.json(
        { success: false, error: 'Please provide a Google Sheet URL or ID.' },
        { status: 400 }
      );
    }

    // Extract ID if a full URL was provided
    let sheetId = sheetUrlOrId.trim();
    const match = sheetId.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      sheetId = match[1];
    }

    const result = await testGoogleSheetConnection(sheetId);

    if (result.success) {
      return NextResponse.json({
        success: true,
        sheetId,
        sheetTitle: result.title,
        message: `Successfully connected to Google Sheet: "${result.title}"! Service account has verified access.`,
      });
    } else {
      return NextResponse.json({
        success: false,
        sheetId,
        error: result.error,
        message: `Unable to access Google Sheet. Please make sure you clicked "Share" on your Google Sheet and added: women-leather-jackets@ecommerce-chatbot-515011.iam.gserviceaccount.com as "Editor".`,
      });
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
