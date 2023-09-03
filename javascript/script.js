function calcular() {
    let montante = document.getElementById('conta')
    let adicional = document.getElementById('porcentagem')
    let resto = document.querySelector('div#res')
    let calc = Number(montante.value) + Number(adicional.value)
    
    if (montante.value.length == 0 || adicional.value.length == 0) {
        window.alert('Inserir valores')
    } else {
        resto.innerHTML = `Total: ${calc}`
    }
    
    
}