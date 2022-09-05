
let boton = document.getElementById("btnMain")
boton.onclick = () => {alert("Gracias por ponerse en contacto con nosotros")}

let email   =  sessionStorage.getItem('email');

console.log(typeof email);  