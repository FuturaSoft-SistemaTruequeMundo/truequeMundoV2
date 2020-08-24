const btnLoadProfile = document.getElementById('btnEditProfile');

btnLoadProfile.addEventListener('click', watchProfile);

async function watchProfile(){
    document.getElementById('btnWatchMore').style.display = 'none';
    document.getElementById('btnAddProduct').style.display = 'none';
    document.getElementById('titlePrincipal').innerHTML = "EDIT MY PROFILE"

    const sectPrincipal = document.getElementById('sectionPrincipal');
    sectPrincipal.innerHTML = "";

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
    console.log(response);
    const data = await response.json();
    console.log(data);

    function itemTemplate(it){
        const urlFotos = 'https://truequeprueba.herokuapp.com/Public/uploads/';
        return (`<article class="card text-center">
        <div class="card-header">${it.nombre} ${it.apellido}</div>
        <div class="card-body">
            <div class="d-flex">
                <label for="editFName" class="label-style">First name:</label>
                <input type="text" required id="editFName" class="tam-data mb-3" value="${it.nombre}">
            </div>
            <div class="d-flex">
                <label for="editLName" class="label-style">Last Name:</label>
                <input type="text" required id="editLName" class="tam-data mb-3" value="${it.apellido}">
            </div>
            <div class="d-flex">
                <label for="editEmail" class="label-style">Email:</label>
                <input type="email" disabled id="editEmail" class="tam-data mb-3" value="${it.email}">
            </div>
            <div class="d-flex">
                <label for="editPassword" class="label-style">Password:</label>
                <input type="password" required id="editPassword" class="tam-data mb-3" value="${it.password}">
            </div>
            <div class="d-flex">
                <label for="editPhone" class="label-style">Telephone:</label>
                <input type="text" id="editPhone" class="tam-data mb-3" value="${it.telefono}">
            </div>
            <div class="d-flex">
                <label for="editCell" class="label-style">Cell Phone:</label>
                <input type="text" id="editCell" class="tam-data mb-3" value="${it.celular}">
            </div>
            <!-- <div class="d-flex">
                <label for="editPhoto" class="label-style">Photo:</label>
                <input type="file" id="editPhoto" class="tam-data mb-3" value="${urlFotos}${it.foto}">
            </div> -->
            <div class="d-flex">
                <label for="editDateBirth" class="label-style">Date of birth:</label>
                <input type="date" id="editDateBirth" class="tam-data mb-3" value="${it.fechaNacimiento}">
            </div>
            <div>
                <label class="label-style">Sex:</label>
                <input type="radio" id="male" name="gender" value="male" class="mr-1">
                <label for="male" class="mr-3">Male</label>
                <input type="radio" id="female" name="gender" value="female" class="mr-1">
                <label for="female" class="mr-3">Female</label>
                <input type="radio" id="other" name="gender" value="other" class="mr-1">
                <label for="other">Other</label>
            </div>
            <div class="d-flex">
                <label for="editCountry" class="label-style">Country:</label>
                <input type="text" id="editCountry" class="tam-data mb-3" value="${it.pais}">
            </div>
            <div class="d-flex">
                <label for="editCity" class="label-style">City:</label>
                <input type="text" id="editCity" class="tam-data mb-3" value="${it.ciudad}">
            </div>
            <div class="d-flex">
                <label for="editAddress" class="label-style">Address:</label>
                <input type="text" id="editAddress" class="tam-data mb-3" value="${it.direccion}">
            </div>       
        </div>
        <div class="modal-footer">
                <button class="btn btn-primary btn-bkg text-white" id="btnSaveData">Save changes</button>
        </div>
    </article>`)
    }

    HTMLString = itemTemplate(data);
    sectPrincipal.innerHTML = sectPrincipal.innerHTML + HTMLString;

    const btnSave = document.getElementById('btnSaveData');

    btnSave.addEventListener('click', saveProfile);

    async function saveProfile(){
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

    cont = 0;
    HTMLString = [];
    cTot = 0;
    cPar = 0;
}



