_url='https://corona.lmao.ninja/countries/india'
let _data
fetch(_url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    data = _data
  })
  .catch(err => {
    // Do something for an error here
  console.log('Error')
  })
