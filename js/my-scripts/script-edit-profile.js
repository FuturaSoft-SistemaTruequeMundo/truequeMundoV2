const btnLoad = document.getElementById('btnLoadData');

btnLoad.addEventListener('click', watchProfile);

let fName = document.getElementById('editFName');
let lName = document.getElementById('editLName');
let email = document.getElementById('editEmail');
let password = document.getElementById('editPassword');
let phone = document.getElementById('editPhone');
let cellular = document.getElementById('editCell');
let dateBirth = document.getElementById('editDateBirth');
let country = document.getElementById('editCountry');
let city = document.getElementById('editCity');
let address = document.getElementById('editAddress');

const btnLoadModal = document.getElementById('btnEditProfile');

btnLoadModal.addEventListener('click', initModal);

function initModal(){
    fName.value = '';
    lName.value = '';
    email.value = '';
    password.value = '';
    phone.value = '';
    cellular.value = '';
    dateBirth.value = '';
    country.value = '';
    city.value = '';
    address.value = '';
}

async function watchProfile(){
    const url = 'https://truequeprueba.herokuapp.com/events/buscar_usuario';

    const dataDetails = {
        method: 'POST',
        body: JSON.stringify({
        "email": dataUserLogged.email
        }),
        headers:{
            'Content-Type': 'application/json',
        }
        };     

    const response = await fetch(url, dataDetails);
    const data = await response.json();
    
    fName.value = data.nombre;
    lName.value = data.apellido;
    email.value = data.email;
    password.value = data.password;
    phone.value = data.telefono;
    cellular.value = data.celular;
    dateBirth.value = data.fechaNacimiento;
    country.value = data.pais;
    city.value = data.ciudad;
    address.value = data.direccion;
}

const btnSave = document.getElementById('btnSaveData');

btnSave.addEventListener('click', saveProfile);

async function saveProfile(){
    const url = 'https://truequeprueba.herokuapp.com/events/update_usuario';

    const dataDetails = {
        method: 'POST',
        body: JSON.stringify({
        "codigo": dataUserLogged.code,
        "nombre": fName.value,
        "apellido": lName.value,
        "password": password.value,
        "telefono": phone.value,
        "celular": cellular.value,
        "fechaNacimiento": dateBirth.value,
        "pais": country.value,
        "ciudad": city.value,
        "direccion": address.value
        }),
        headers:{
            'Content-Type': 'application/json',
        }
        };     

    const response = await fetch(url, dataDetails);
        
    const data = await response.text();

    if(data == "ok")
        alert("Sus datos se han actualizado");
    else
        alert("Error al actualizar los datos");
}

