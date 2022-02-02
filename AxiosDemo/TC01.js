const { default: axios } = require("axios");

axios.get('https://reqres1.in/api/users/2').then(function (res) {

    // console.log(res.data)
    console.log('Status code :: ' + res.status)
    console.log('Status message :: ' + res.statusText)

    console.log('id = ' + res.data.data.id)
}).catch(function (err) {
    console.log(err)
}).then(function (res) {
    console.log('TearDown :: Closed Database Connection')
})





