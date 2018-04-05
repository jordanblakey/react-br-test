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
      // document.getElementById('response').innerHTML = '<pre>' + print + '</pre>'
      let list = Object.entries(body)[0][1]
      let output = ``
      console.log(list)
      for (let i = 0; i < list.length; i++) {
        console.log(list[i].name)
        console.log(list[i].backgroundImageURL)
        console.log(list[i].category)
        console.log(list[i].location.formattedAddress[0])
        console.log(list[i].location.formattedAddress[1])
        console.log(list[i].location.formattedAddress[2])
        console.log(list[i].contact)
        output += `
          <Column small={12} className="restaurantListItem">
            <img src="${list[i].backgroundImageURL}" />
            <h2>${list[i].name}</h2>
            <h3>${list[i].category}</h3>
          </Column>
        `
      }
      document.getElementById('restaurantList').innerHTML = output
    }
  )

export default basicRequest
