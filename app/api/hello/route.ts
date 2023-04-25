export async function POST(request: { method: string }) {
  if (request.method !== 'POST') {
    return new Response('wrong')
  }
  return new Response('heelo')
}
