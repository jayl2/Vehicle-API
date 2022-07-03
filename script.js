console.log('test')
const API_KEY = 'db393afdb5985e4b7970c3caf69c8d79'
const carRes = document.querySelector('#search-input')
const button = document.querySelector('#search')

button.addEventListener('click', async () => {
  let movResp = await axios.get(
    `https://car-data.p.rapidapi.com/cars/types${car.value}&api_key=${API_KEY}`
  )

  console.log(carRes)
})

//----------------Code Snippet / ENDPOINT from ..------------------
//https://rapidapi.com/principalapis/api/car-data/

//----------------------------------------------
//
//
//
// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://car-data.p.rapidapi.com/cars',
//   params: {limit: '10', page: '0'},
//   headers: {
//     'X-RapidAPI-Key': '5e3b41836bmsh9ba9c6e2ee37b7dp135356jsn222f79f4982e',
//     'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//----------------------------------------------
