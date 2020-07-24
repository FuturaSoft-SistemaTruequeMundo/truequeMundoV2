let searcher = document.getElementById('btnSearcher');

btnSearcher.addEventListener('click', searcherGet);

async function searcherGet(){
    let texto = document.getElementById('txtSearcher');
    let sectPrincipal = document.getElementById('sectionPrincipal');
    sectPrincipal.innerHTML = "";

    let url = 'https://truequemundov1.herokuapp.com/events/all';

    const dataDetails = {
        method: 'POST',
        body: JSON.stringify({
        "nombreProducto": texto.value
        }),
        headers:{
            'Content-Type': 'application/json'
          }
    }

    console.log(dataDetails.body)

    const response = await fetch(url, dataDetails);
    console.log(response);
        
    const data = await response.json();
    console.log(data);

    function itemTemplate(item){
        return (`<article class="card">
        <img src="../images/img-test.jpg" alt="">
        <div class="card-body">
            <h5 class="card-title">${item.nombreProducto}</h5>
            <p class="card-text">${item.descripcion}</p>
            <div class="d-flex flex-row justify-content-center mb-3">
                <a href="#modalProduct" class="btn btn-primary btn-bkg" data-toggle="modal">Contact to seller</a>
                <!--modalProduct-->
                <div class="modal fade" tabindex="-1" role="dialog" id="modalProduct">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">${item.nombreProducto}</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body d-flex flex-column align-items-center">
                            <img src="../images/img-test.jpg" alt="" class="mb-3">
                            <p>${item.descripcion}</p>
                        </div>
                        <div class="modal-footer">
                            <!-- <div><h3 class="text-primary">Contactar</h3></div> -->
                            <div class="anchor d-flex flex-row justify-content-center">
                                <a href="mailto:contacto@dominio.com" class="btn btn-info mr-1 btn-contact">Email</a>
                                <a href="#" class="btn btn-success ml-1 btn-contact">Whatsapp</a>        
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

    data.forEach((item) => {
        const HTMLString = itemTemplate(item);
        sectPrincipal.innerHTML = sectPrincipal.innerHTML + HTMLString;
        console.log(HTMLString);
    })
}
