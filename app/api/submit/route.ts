import { google } from 'googleapis'
import { GoogleAuth } from 'google-auth-library'

type SheetForm = {
  visitor: string
  email: string
  message: string
}

export async function POST(req: Request) {
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON_BASE64) {
    throw new Error(
      'GOOGLE_APPLICATION_CREDENTIALS_JSON_BASE64 is not set in environment variables'
    )
  }

  // Decode the base64 string
  const credentialsJson = Buffer.from(
    process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON_BASE64,
    'base64'
  ).toString()

  // Parse the JSON string into an object
  const credentials = JSON.parse(credentialsJson)

  // Create a Google Auth client
  const auth = new GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  // query
  const range = 'message!A:D'
  const body = await req.json()
  const time = new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date())

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[time, body.visitor, body.email, body.message]],
      },
    })

    console.log('Response data:', response.data)

    return new Response(JSON.stringify({ status: 'success' }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error appending data to Google Sheet:', error)
    return new Response(JSON.stringify({ status: 'error' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
}
