let btnLogin = document.getElementById('btnSubmitLogin');

btnLogin.addEventListener('click', submitDataLogin);

async function submitDataLogin(){
    let email = document.getElementById('frmEmailLogin');
    let password = document.getElementById('frmPasswordLogin');

    let validation = validateFields(email.value, password.value);

    if(validation == 'ok'){
        let url = 'https://truequemundov1.herokuapp.com/login';

        const dataDetails = {
            method: 'POST',
            body: JSON.stringify({
            "user": email.value,
            "pass": password.value
            }),
            headers:{
                'Content-Type': 'application/json',
            }
            };     

        console.log(dataDetails);

        const response = await fetch(url, dataDetails);
        console.log(response);
        
        const data = await response.text();
        console.log(data);
    
        messageToUserLogin(data);
    }
    else{
        alert('Los espacios no pueden estar en blanco');
    }
}

function validateFields(email, pass){
    if(email=='' || pass=='')
        return 'error';
    else
        return 'ok';
}

function messageToUserLogin(data){
    let aviso = document.getElementById('pAviso');
    if(data == 'Validado'){
        // alert("Acceso correcto");
        aviso.style.color = 'green';
        aviso.innerHTML = 'Clave Correcta</br>Redireccionando...';
        setTimeout(10000);
        window.location.href = "http://127.0.0.1:5500/frontend/html/principal.html"
    }
    else{
        // alert("Acceso incorrecto");
        aviso.style.color = 'red';
        aviso.innerHTML = 'Clave Incorrecta';
    }
}
