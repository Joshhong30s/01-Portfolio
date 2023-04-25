import { google, Auth as googleAuth } from 'googleapis'
type SheetForm = {
  visitor: string
  email: string
  message: string
}
export async function POST(req: Request) {
  // Parse the JSON string from the environment variable
  const credentials = JSON.parse(
    process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON ?? '{}'
  )

  // auth
  const auth = new googleAuth.JWT(
    credentials.client_email,
    undefined,
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
    undefined
  )
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
