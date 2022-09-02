let lista = document.querySelectorAll('input')
let totalElementos = lista.length
let submitBtn = document.getElementById('submit_btn')
let formulario = document.getElementById('formulario')
let span = document.getElementById('span')

// Cambiar estado (clase) al elemento que recibe un "click" ejecutando función
lista.forEach((item, index) => {
    item.addEventListener('click', () => cambioEstado(index))
})

// Función que aplica clase al elemento (indice) que recibió evento "click"
function cambioEstado(index) {
    // Recorremos elementos del array y quitamos clase a cada uno de ellos
    lista.forEach((item) => item.classList.remove('puntaje_activo'))
    // Aplicamos clase al elemento que recibió el evento "click"
    lista[index].classList.add('puntaje_activo')
}

// Rescatar el puntaje seleccionado
formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    lista.forEach(elemento => {
        if (elemento.className.includes('puntaje_activo')) {
            window.location.href = `./thank_you.html?puntaje=${elemento.id} out of ${totalElementos}`
        }
    })
})


 