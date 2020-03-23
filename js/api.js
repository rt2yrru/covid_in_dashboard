_url='https://corona.lmao.ninja/countries/india'
fetch('_url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
  console.log('Error')
  })
