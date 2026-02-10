const offset = 0
const limit = 10
const url = 'file:///C:/Users/pedro%20cortes/Documents/html-css/java-script/pokedex.js/index.html'
fetch(url)
.then((response) => response.json())
.then((jsonBody) => console.json(jsonBody))
.catch((error) => console.json(error))