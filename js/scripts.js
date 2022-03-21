function multiplicar() {
    const tabuada = document.getElementById('tabuada').value
    const vezes = document.getElementById('vezes').value
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = vezes * tabuada
}