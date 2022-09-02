const span = document.getElementById('span')
const btnRegresar = document.getElementById('btn_regresar')

// Rescatamos el puntaje enviado por parámetros
const getPuntaje = new URLSearchParams(window.location.search)
puntaje = getPuntaje.get('puntaje')

// Insertamos puntaje en elemento span
span.innerHTML = `You selected ${puntaje}`

// Regresar al index
btnRegresar.addEventListener('click', () => {window.location.href = 'index.html'})



 