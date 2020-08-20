const btnSignup = document.getElementById('btnSubmitSignup');

btnSignup.addEventListener('click', submitDataSignup);

async function submitDataSignup(){
    const firstName = document.getElementById('frmFirstName');
    const lastName = document.getElementById('frmLastName');
    const email = document.getElementById('frmEmail');
    const password = document.getElementById('frmPassword');

    const validation = validateFields(firstName.value, lastName.value, email.value, password.value);

    if(validation == 'ok'){
        const url = 'https://truequeprueba.herokuapp.com/events/new_usuario';

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
<<<<<<< HEAD

            alert("El usuario ha sido creado");
            setTimeout(10000);
            window.location.href = "./index.html";
=======
            
            alert("El usuario ha sido creado");
            setTimeout(10000);
            window.location.href = "./index.html"; 
>>>>>>> b9a8b5fbcd5be564ce38c4079b4aac58aea1b2e8
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
