import request from 'request'

const basicRequest = () =>
  request(
    'https://s3.amazonaws.com/bottle-rocket/restaurants.json',
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err)
      }
      let print = JSON.stringify(body, null, 2)
      document.getElementById('response').innerHTML = '<pre>' + print + '</pre>'
    }
  )

export default basicRequest
