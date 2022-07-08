exports.handler = async function (request) {
  const svgFavicon = 'data:image/svg+xml,'

  const defaultIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#4a5568">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`

  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
    redirect: 'follow',
  }

  let requestURL = new URL(request.url)

  const url = requestURL.searchParams.get('url')

  const targetURL = new URL(url.startsWith('https') ? url : 'https://' + url)

  let favicon = ''
  const response = await fetch(targetURL.origin, init).catch(() => {
    console.log('failed')
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
}