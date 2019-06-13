export default ({ key, query, max = 5 }) => {
  var url = new URL('https://www.googleapis.com/youtube/v3/search'),
    params = {
      part: "snippet",
      key: key,
      q: query,
      maxResults: max,
      type: "video",
      videoEmbeddable: "true"
    }
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  return fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
}
