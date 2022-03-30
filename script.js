const privateKey = 'f6fe53d1d4a74e6db0a22f55ec62fb11';
const publicKey = '061a2cf29598446884cc1ed3a2644363';

var montoTotal = 0;
const productos = [
    {
        "id": "774411",
        "title": "Celular Samsung Galaxy M32 128GB",
        "price": 835000,
        "sku": "10101042",
        "quantity": 1,
    },
    {
        "id": "774412",
        "title": "Licuadora Oster Reversible de color Negro BRLY07-Z00",
        "price": 220000,
        "sku": "10101523",
        "quantity": 1,
    },
    {
        "id": "774413",
        "title": "Chaleco Mai Blanco Para Mujer Croydon",
        "price": 130000,
        "sku": "10101785",
        "quantity": 1,
    },
    {
        "id": "774414",
        "title": "Leggins para mujer",
        "price": 105000,
        "sku": "10101740",
        "quantity": 2,
    },
  ];


  function renderProducts() {
      var element = document.getElementById('productos');

      var html = ``;

      

      productos.forEach(producto => {
            montoTotal += producto.price*producto.quantity;
            html += `<div class="product">
                        <img class="product-image" src="./images/${producto.id}.jpg" />
                        <div class="product-description">
                            <h3 class="product-title">${producto.title}</h3>
                            <span><strong>Sku:</strong> ${producto.sku}</span>
                            <span><strong>Cantidad:</strong> ${producto.quantity}</span>
                            <span><strong>Precio: </strong>COP ${producto.price.toLocaleString()}</span>
                        </div>
                    </div>`
      });
      element.innerHTML= html;
      document.getElementById('monto').value = montoTotal.toLocaleString()
  }


 /************** Validaciones ****************/ 
function validateDocument()   
{  
    var element = document.getElementById("document");

    const pattern = new RegExp('^[0-9]+$', 'i'); //Valida solo numeros
    if (pattern.test(element.value)){
        element.classList.remove("in-error") // Si es ok quita la clase de error
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'El campo solo acepta numeros',
            icon: 'error',
            confirmButtonText: 'Entendido'
          }) 
        element.classList.add("in-error")
    }
} 


function validateEmail()   
{  
    var element = document.getElementById("email");

    const pattern = new RegExp(/^[\w-]+\@[\w-]+\.[a-z]{2,3}(\.[a-z]{2})?$/i); //Valida solo emails
    if (pattern.test(element.value)){
        element.classList.remove("in-error") // Si es ok quita la clase de error
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'El campo no coincide con un correo',
            icon: 'error',
            confirmButtonText: 'Entendido'
          }) 
        element.classList.add("in-error")
    }
} 
function validateName(idElement)   
{  
    var element = document.getElementById(idElement);

    const pattern = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i'); //Valida letras, tíldes y espacios
    if (pattern.test(element.value)){
        element.classList.remove("in-error") // Si es ok quita la clase de error
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'El campo solo acepta letras y espacios',
            icon: 'error',
            confirmButtonText: 'Entendido'
          }) // Si es no es letra muestra una alerta y agrega la clase de error al campo
        element.classList.add("in-error")
    }
} 

function validatePhone()   
{  
    var element = document.getElementById("phone");

    const pattern = new RegExp('^[+][0-9]{11,12}$', 'i');//Valida Números y que tenga entre 1 y 10 caracteres
    if (pattern.test(element.value)){ 
       
        element.classList.remove("in-error")
        
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'El campo solo acepta numeros entre 11 y 12 caracteres',
            icon: 'error',
            confirmButtonText: 'Entendido'
          })
        element.classList.add("in-error")
    }
}

function validateExpiryDate(idElement)   
{  
    var element = document.getElementById(idElement);

    const pattern = new RegExp('^[0-9]{2,2}$', 'i');//Valida Números y que tenga 2 caracteres
    if (pattern.test(element.value)){ 
        

        var month = document.getElementById("month")
        var year = document.getElementById("year")

        

        if( month !== "" && year !== "" ){
            if( month.value > 12){
                Swal.fire({
                    title: 'Error!',
                    text: 'Mes invalido',
                    icon: 'error',
                    confirmButtonText: 'Entendido'
                  })
                  month.classList.add("in-error")
            } else {
                const today = new Date();
                const expiryDate = new Date (`20${year.value}-${month.value}-01T00:00:00`)
    
                console.log(expiryDate);
                console.log(today);
    
                if(expiryDate<today){
                    Swal.fire({
                        title: 'Error!',
                        text: 'La fecha debe ser mayor a la fecha actual',
                        icon: 'error',
                        confirmButtonText: 'Entendido'
                      })
                      month.classList.add("in-error")
                      year.classList.add("in-error")
                } else {
                    month.classList.remove("in-error")
                    year.classList.remove("in-error")
                }
            }
        }
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'El campo solo acepta numeros y que sean 2 caracteres',
            icon: 'error',
            confirmButtonText: 'Entendido'
          })
        element.classList.add("in-error")
    }
}

function validateZipCode()   
{  
    var element = document.getElementById("zipcode");

    const pattern = new RegExp('^[0-9]{7,7}$', 'i');//Valida Números y que tenga 7 caracteres
    if (pattern.test(element.value)){ 
       
        element.classList.remove("in-error")
        
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'El campo solo acepta numeros y debe tener 7 caracteres',
            icon: 'error',
            confirmButtonText: 'Entendido'
          })
        element.classList.add("in-error")
    }
}

function validateCard()   
{  
    var element = document.getElementById("cardNumber");

    const pattern = new RegExp('^[0-9]{15,16}$', 'i');//Valida Números y que tenga entre 1 y 16 caracteres
    if (pattern.test(element.value)){ 
       
        element.classList.remove("in-error")
        
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'El campo solo acepta numeros y no puede tener mas de 16 caracteres',
            icon: 'error',
            confirmButtonText: 'Entendido'
          })
        element.classList.add("in-error")
    }
} 

function validateCV()   
{  
    var element = document.getElementById("cv");

    const pattern = new RegExp('^[0-9]{3,4}$', 'i');
    if (pattern.test(element.value)){ //Valida Números y que tenga entre 1 y 4 caracteres
        element.classList.remove("in-error")
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'El campo solo acepta entre 3 y 4 numeros',
            icon: 'error',
            confirmButtonText: 'Entendido'
          })
        element.classList.add("in-error")
    }
} 


/********** Enviar formulario *************/

function onSubmit(e) {
    e.preventDefault();

    var elementosError = document.getElementsByClassName('in-error');

    if(elementosError.length > 0){
        Swal.fire({
            title: "No se puede enviar",
            text: "Revise el formulario, hay campos en error.",
            icon: 'error',
            confirmButtonText: 'Entendido'
          })
    }else {
        document.getElementById('enviar').disabled = true
    
        const tipoDocumento = document.getElementById('documenttype').value;
        const documento = document.getElementById('document').value;
        const correo = document.getElementById('email').value;    
        const nombreContacto = document.getElementById('nameContact').value;
        const apellido = document.getElementById('lastname').value;
        const celular = document.getElementById('phone').value;
        const pais = document.getElementById('country').value;
        const region = document.getElementById('region').value;    
        const ciudad = document.getElementById('city').value;
        const direccion = document.getElementById('address').value;
        const postal = document.getElementById('zipcode').value;
    
        const nombreTarjeta = document.getElementById('nameCard').value;
        const numeroTarjeta = document.getElementById('cardNumber').value;
        const cv = document.getElementById('cv').value;    
        const mes = document.getElementById('month').value;    
        const ano = document.getElementById('year').value;
    
        const tokenPayload = {
            amount: montoTotal,
            currency: "COP",
            card: {
                name: nombreTarjeta,
                number: numeroTarjeta,
                cvc: cv,
                expiryMonth: mes,
                expiryYear: ano
            },
        }
        
        
    
        var kushki = new Kushki({
            merchantId: publicKey, 
            inTestEnvironment: true,
            regional:false
        });
    
        Swal.showLoading();
        kushki.requestToken(tokenPayload, (response) => {
            
            if(!response.code){
                console.log(response);
                const makeChargePayload = {
                    token: response.token,
                    amount: {
                      subtotalIva: 0,
                      subtotalIva0: montoTotal,
                      ice: 0,
                      iva: 0,
                      currency: "COP"
                    },
                    contactDetails: {
                      documentType: tipoDocumento,
                      documentNumber: documento,
                      email: correo,
                      firstName: nombreContacto,
                      lastName: apellido,
                      phoneNumber: celular
                    },
                    orderDetails: {
                      siteDomain: "github.com",
                      shippingDetails: {
                        name: `${nombreContacto} ${apellido}`,
                        phone: celular,
                        address: direccion,
                        city: ciudad,
                        region: region,
                        country: pais,
                        zipCode: postal
                      },
                      billingDetails: {
                        name: `${nombreContacto} ${apellido}`,
                        phone: celular,
                        address: direccion,
                        city: ciudad,
                        region: region,
                        country: pais,
                        zipCode: postal
                      }
                    },
                    productDetails: {
                      product: productos
                    },
                    fullResponse: true
                  }
                  const url = "https://api-uat.kushkipagos.com/card/v1/charges"
                  fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(makeChargePayload),
                    headers:{
                        'Content-Type': 'application/json',
                        'Private-Merchant-Id' : privateKey
                    }
                  }).then((res) =>{
                      res.json()
                      .then((dataResponse) => {
                            Swal.hideLoading();
                            Swal.close();
                            if(!dataResponse.code){
                                Swal.fire({
                                    title: dataResponse.details.responseText,
                                    icon: 'success',
                                    confirmButtonText: 'Entendido'
                                  })
                            } else {
                                Swal.fire({
                                    title: dataResponse.details.responseText,
                                    icon: 'error',
                                    confirmButtonText: 'Entendido'
                                  })
                            }
                            console.log(dataResponse);
                        })
                        .catch((e) => console.error(e))
                    })
                  .catch((error) => {
                    Swal.hideLoading();  
                    Swal.close();
                    console.log('Error');
                    console.error('Error:', error)})
            } else {
                Swal.hideLoading();
                Swal.fire({
                    title: response.error,
                    text: response.message,
                    icon: 'error',
                    confirmButtonText: 'Entendido'
                  })
                console.error('Error: ',response.error, 'Code: ', response.code, 'Message: ',response.message);
            }
        });
        
    }


}
