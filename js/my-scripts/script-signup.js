let btnSignup = document.getElementById('btnSubmitSignup');

btnSignup.addEventListener('click', submitDataSignup);

async function submitDataSignup(){
    let firstName = document.getElementById('frmFirstName');
    let lastName = document.getElementById('frmLastName');
    let email = document.getElementById('frmEmail');
    let password = document.getElementById('frmPassword');

    let validation = validateFields(firstName.value, lastName.value, email.value, password.value);

    if(validation == 'ok'){
        let url = 'https://truequemundov1.herokuapp.com/events/new_usuario';

        const dataDetails = {
            method: 'POST',
            body: JSON.stringify({
            "nombre": firstName.value,
            "apellido": lastName.value,
            "email": email.value,
            "password": password.value
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
            
            alert("El usuario ha sido creado");
            setTimeout(10000);
            window.location.href = "http://127.0.0.1:5500/frontend/index.html"; 
    }
    else{
        alert('Los espacios no pueden estar en blanco');
    }
}

function validateFields(fName, lName, email, pass){
    if(fName=='' || lName=='' || email=='' || pass=='')
        return 'error';
    else
        return 'ok';
}
