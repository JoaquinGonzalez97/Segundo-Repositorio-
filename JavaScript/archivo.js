function clickLeerMas(){
    alert("Siempre estamos para ayudarlo");
}

const boton = document.getElementById("botonn");

boton.addEventListener ("click", clickLeerMas);



const form = document.querySelector("#formulario");

form.addEventListener('submit', enviarFormulario);

const enviarFormulario = (evento) => {
    alert(evento);
}


