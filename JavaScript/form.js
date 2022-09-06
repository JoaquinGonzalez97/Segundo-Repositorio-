
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