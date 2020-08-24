window.addEventListener('load', getItemsRandom);

const cantItems = 15;
let cont = 0;
let HTMLString = [];
let cTot = 0;
let cPar = 0;

async function getItemsRandom(){
    document.getElementById('titlePrincipal').innerHTML = "RECENTLY VIEWED"
    const cantItems = 15;
    let cont2 = 0;
    let HTMLString = [];
    let cTot2 = 0;
    let cPar2 = 0;

    const texto = document.getElementById('txtSearcher');
    const country = document.getElementById('countrySearcher');
    const city = document.getElementById('citySearcher');
    const sectPrincipal = document.getElementById('sectionPrincipal');
    sectPrincipal.innerHTML = "";

    let colorState = '';
    let statusProduct = '';

    const urlBase = 'https://truequeprueba.herokuapp.com/';
    const url = urlBase + 'events/all';
    
    const dataDetails = {
        method: 'POST',
        body: JSON.stringify({
        "pais": '',
        "ciudad": '',
        "nombreProducto": ''
        }),
        headers:{
            'Content-Type': 'application/json'
          }
    }

    const response = await fetch(url, dataDetails);
    const data = await response.json();

    data.forEach((item) => {
        HTMLString[cTot2] = itemTemplate(item);
        if(cTot2<cantItems){
            sectPrincipal.innerHTML = sectPrincipal.innerHTML + HTMLString[cTot2];
            cPar2 = cTot2;
        }
        
        cTot2++;
    })

    function itemTemplate(it){
        const urlFotos = 'https://truequeprueba.herokuapp.com/Public/uploads/';
        cont2++;

        if(it.estado == 'disponible'){
            colorState = 'text-success';
            statusProduct = '';
        }
        else{
            if(it.estado == 'truequeado'){
                colorState = 'text-danger';
                statusProduct = "disabled = 'true'";
            }
        }

        return (`<article class="card">
        <div class="card-body">
            <h5 class="card-title">${it.nombreProducto}</h5>
            <p class="card-text" style="height: 80px;">${it.descripcion}</p>
            <p class="card-text ${colorState} state-text">${it.estado}</p>
            <div class="d-flex flex-row justify-content-center mb-3">
                <button href="#modalProduct${cont}" ${statusProduct} class="btn btn-primary btn-bkg" data-toggle="modal">Contact to truequer</button>
                <!--START modalProduct-->
                <div class="modal fade" tabindex="-1" role="dialog" id="modalProduct${cont2}">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">${it.nombreProducto}</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body d-flex flex-column align-items-center">
                            <img src="${urlFotos}${it.fotos[0]}" alt="" class="mb-3" width=300 height=300>
                            <p>${it.descripcion}</p>
                        </div>
                        <div class="modal-footer">
                            <!-- <div><h3 class="text-primary">Contactar</h3></div> -->
                            <div class="anchor d-flex flex-row justify-content-center">
                                <a href="mailto:${it.email}" class="btn btn-info mr-1 btn-contact">Email</a>
                                <a href="https://wa.me/51${it.celular}?text=Me%20gustar%C3%ADa%20obtener%20tu%20servicio" target="_blank" class="btn btn-success ml-1 btn-contact">Whatsapp</a>        
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                <!--modalProduct-->
            </div>
        </div>
    </article>`)
    }

    document.getElementById('btnWatchMore').style.display = 'none';
    document.getElementById('btnWatchMoreOnly').style.display = 'flex';

    const btnMoreOnly = document.getElementById('btnWatchMoreOnly');
    btnMoreOnly.addEventListener('click', loadMoreProductsOnly);

    function loadMoreProductsOnly(){
        const sectPrincipal = document.getElementById('sectionPrincipal');
        let i=0;

        if(cTot2 - 1 == cPar2)
            cTot2--;

        if(cPar2 == cTot2){
            alert("No more items!!!");
            cont2 = 0;
            HTMLString = [];
            cTot2 = 0;
            cPar2 = 0;
        }   
        else{
            while(cPar2<cTot2){
                if(i<cantItems){
                    sectPrincipal.innerHTML = sectPrincipal.innerHTML + HTMLString[cPar2+i];
                    i++;
                    cPar2++;
                }
            }
        }
    }
}

