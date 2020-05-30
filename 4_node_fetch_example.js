// Real world example using node-fetch
const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
    .then(isStatus200)
    .then(getPostJson)
    .then(json => console.log(json))
    .catch(err => console.error(err))

function isStatus200(res) {
    if (res.status === 200) {
        return res
    } else {
        let err = new Error(res.statusText);
        err.response = res;
        throw err;
    }
}

function getPostJson(res) {
    return res.json()
  }