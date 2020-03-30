import { jsonResponse } from './jsonResponse'

function resValidator (res) {
  // Data doesnt have the required structure
  if (!res || !res.status || !res.data) {
    return jsonResponse(500, 'Something went wrong.')
  }
  // When the status is diffent of 2xx and is an error
  const firstStatusNumber = res.status.toString()[0]
  if (firstStatusNumber !== '2') {
    return jsonResponse(
      500,
      firstStatusNumber === '4'
        ? res.message
        : 'Something went wrong.'
    )
  }

  return jsonResponse(200, res)
}

export { resValidator }