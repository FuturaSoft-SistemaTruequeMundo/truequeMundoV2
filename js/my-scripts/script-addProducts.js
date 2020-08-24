const btnAddProduct = document.getElementById('btnAddProduct');

btnAddProduct.addEventListener('click', addNewProduct);

async function addNewProduct(){
    document.getElementById('btnWatchMore').style.display = 'none';
    document.getElementById('btnAddProduct').style.display = 'none';
    document.getElementById('titlePrincipal').innerHTML = "ADD NEW PRODUCT"

    const sectPrincipal = document.getElementById('sectionPrincipal');
    sectPrincipal.innerHTML = "";

    HTMLString = `<article class="card text-center">
        <div class="card-header">New product</div>
        <div class="card-body">
            <div class="d-flex">
                <label for="editProductCode" class="label-style">Code:</label>
                <input type="text" class="tam-data mb-3" disabled id="editProductCode" value="">
            </div>
            <div class="d-flex">
                <label for="editProductName" class="label-style">Name:</label>
                <input type="text" class="tam-data mb-3" required id="editProductName" value="">
            </div>
            <div class="d-flex">
                <label for="editProductType" class="label-style">Type:</label>
                <input type="text" class="tam-data mb-3" required id="editProductType" value="">
            </div>
            <div class="d-flex">
                <label for="editProductCategory" class="label-style">Category:</label>
                <input type="text" class="tam-data mb-3" required id="editProductCategory" value="">
            </div>
            <div class="d-flex">
                <label for="editProductCondition" class="label-style">Condition:</label>
                <input type="text" class="tam-data mb-3" required id="editProductCondition" value="">
            </div>
            <div class="d-flex">
                <label for="editProductState" class="label-style">State:</label>
                <input type="text" class="tam-data mb-3" required id="editProductState" value="">
            </div>
            <div class="d-flex">
                <label for="editProductDescription" class="label-style">Description:</label>
                <textarea required rows="4" class="tam-data mb-3" id="editProductDescription"></textarea>
            </div>
            <div class="d-flex">
                <label for="editProductPhoto" class="label-style">Photo:</label>
                <input type="file" required id="editProductPhoto" class="tam-data mb-3">
            </div>
        </div>
            <div class="modal-footer"> 
                <div class="anchor d-flex justify-content-center">
                    <button class="btn btn-success" id="btnSaveNewProduct">Save product</button>        
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

        console.log(dataDetails);
        
        const response = await fetch(url, dataDetails);
        console.log(response);
        const data = await response.text();

        console.log(data);

        if(data == "ok")
            alert("Added new product");
        else
            alert("Error adding new product");
        
        console.log('guardado!!!')
    }

    cont = 0;
    HTMLString = [];
    cTot = 0;
    cPar = 0;
}