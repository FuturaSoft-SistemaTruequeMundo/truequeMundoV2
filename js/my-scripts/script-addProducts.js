const btnAddProduct = document.getElementById('btnAddProduct');
btnAddProduct.addEventListener('click', addNewProduct);

async function addNewProduct(){
    document.getElementById('btnWatchMore').style.display = 'none';
    document.getElementById('btnAddProduct').style.display = 'none';
    document.getElementById('titlePrincipal').innerHTML = "AGREGAR PRODUCTO NUEVO"

    const sectPrincipal = document.getElementById('sectionPrincipal');
    sectPrincipal.innerHTML = "";

    HTMLString = `<article class="card text-center">
        <div class="card-header">Nuevo producto</div>
        <div class="card-body">
            <div class="d-flex">
                <label for="editProductCode" class="label-style">Código:</label>
                <input type="text" class="tam-data mb-3" disabled id="editProductCode" value="">
            </div>
            <div class="d-flex">
                <label for="editProductName" class="label-style">Nombre:</label>
                <input type="text" class="tam-data mb-3" required id="editProductName" value="">
            </div>
            <div class="d-flex">
                <label for="editProductType" class="label-style">Tipo:</label>
                <select class="tam-data mb-3" required id="editProductType">
                    <option value="Producto">Producto</option>
                    <option value="Servicio">Servicio</option>
                </select>
            </div>
            <div class="d-flex">
                <label for="editProductCategory" class="label-style">Categoría:</label>
                <select class="tam-data mb-3" required id="editProductCategory">
                    <option value="Inmuebles">Inmuebles</option>
                    <option value="Electrodomesticos">Electrodomésticos</option>
                    <option value="Muebles">Muebles</option>
                    <option value="Ropa">Ropa</option>
                    <option value="Accesorios">Accesorios</option>
                    <option value="Informatica">Informatica</option>
                    <option value="Oficina">Oficina</option>
                    <option value="Seguridad">Seguridad</option>
                    <option value="Salud">Salud</option>
                    <option value="Belleza">Belleza</option>
                    <option value="Peluqueria">Peluquería</option>
                    <option value="Vehiculos">Vehículos</option>
                    <option value="Juguetes">Juguetes</option>
                    <option value="Telefonia">Telefonía</option>
                    <option value="Comunicacion">Comunicacion</option>
                    <option value="Otros">Otros</option>
                </select>
            </div>
            <div class="d-flex">
                <label for="editProductCondition" class="label-style">Condición:</label>
                <input type="number" class="tam-data mb-3" required id="editProductCondition" min="1" max="10">
            </div>
            <div class="d-flex">
                <label for="editProductState" class="label-style">Estado:</label>
                <select class="tam-data mb-3" required id="editProductState">
                    <option value="disponible">Disponible</option>
                    <option value="truequeado">Truequeado</option>
                </select>
            </div>
            <div class="d-flex">
                <label for="editProductDescription" class="label-style">Descripción:</label>
                <textarea required rows="4" class="tam-data mb-3" id="editProductDescription"></textarea>
            </div>
            <div class="d-flex">
                <label for="editProductPhoto" class="label-style">Foto:</label>
                <input type="file" required id="editProductPhoto" class="tam-data mb-3">
            </div>
        </div>
            <div class="modal-footer"> 
                <div class="anchor d-flex justify-content-center">
                    <button class="btn btn-success" id="btnSaveNewProduct">Guardar producto</button>        
                </div>
            </div>
    </article>`;

    sectPrincipal.innerHTML = sectPrincipal.innerHTML + HTMLString;
    
    const btnSaveNewProduct = document.getElementById('btnSaveNewProduct');
    btnSaveNewProduct.addEventListener('click', saveNewProduct);

    async function saveNewProduct(){

        console.log("guardando...");

        let productName = document.getElementById('editProductName');
        let productType = document.getElementById('editProductType');
        let productCategory = document.getElementById('editProductCategory');
        let productCondition = document.getElementById('editProductCondition');
        let productState = document.getElementById('editProductState');
        let productDescription = document.getElementById('editProductDescription');
        
        function previewFile() {
            let preview = document.getElementById('editProductPhoto');
            let file    = document.querySelector('input[type=file]').files[0];
            let reader  = new FileReader();
          
            reader.onloadend = function () {
              preview.src = reader.result;
            }
          
            if (file) {
              reader.readAsDataURL(file);
            } else {
              preview.src = "";
            }

            return file;
        }

        let urlPhoto;
        urlPhoto = previewFile();

        const url = 'https://truequeprueba.herokuapp.com/events/new_producto';

        const dataDetails = {
            method: 'POST',
            body: JSON.stringify({
            "email": dataUserLogged.email,
            "nombre": productName.value,
            "tipo": productType.value,
            "categoria": productCategory.value,
            "condicion": productCondition.value,
            "estado": productState.value,
            "descripcion": productDescription.value,
            "file": []
            }),
            headers:{
                'Content-Type': 'application/json',
            }
            };     
        
        const response = await fetch(url, dataDetails);
        const data = await response.text();

        if(data == "ok")
            alert("Se ha agregado el nuevo producto");
        else
            alert("Error agregando el producto, intente nuevamente");
        
        console.log('guardado!!!');
    }

    cont = 0;
    HTMLString = [];
    cTot = 0;
    cPar = 0;
}