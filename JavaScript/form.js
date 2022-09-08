let url = 'https://jsonplaceholder.typicode.com/users/';
let boton = document.getElementById("btnMain")

boton.onclick = () => {alert("Gracias por ponerse en contacto con nosotros")}
 
btn.addEventListener('click', () => {
 
    Swal.fire({
        title: 'Genial!',
        text: 'Haz clickeado el botón!',
        icon: 'success',
        confirmButtonText: 'Cool'
    })
})


let email   =  sessionStorage.getItem('email');

console.log(typeof email);  


fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {      
       body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}