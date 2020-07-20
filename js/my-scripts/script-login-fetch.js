let login = document.getElementById('btnSubmitLogin')
login.addEventListener('click', submitDataPost)

let url = 'https://truequemundov1.herokuapp.com/login'

console.log(url)

// fetch(url)
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(myJson) {
//     console.log(myJson)
//   });

function submitDataPost(){
    let email = document.querySelector('#frmEmailLogin')
    let password = document.querySelector('#frmPasswordLogin')

    var data = {
        "user": email.value,
        "pass": password.value
    };

    console.log(data.email + data.password)
    debugger

    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => {
        let response = res.json()
        console.log(response);
        debugger
    })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}