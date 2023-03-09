function sumar(a,b)
{
    return a+b;
}

document.getElementById('boton_sumar').addEventListener('click', function()
{
    let numeroA = document.getElementById('numero1').value;
    let numeroB = document.getElementById('numero2').value;
    numeroA = parseInt(numeroA);
    numeroB = parseInt(numeroB);

    let resultado = sumar(numeroA, numeroB);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';
})
