var acumuladorCliks = document.getElementById("acumClicks");
var acumClicksBoton = document.getElementById("botonCliks");
acumuladorCliks.textContent = 0;
acumClicksBoton.textContent = 0;
var acumClicks = 0;
var acumClicksboton = 0;

document.getElementById('boton').onclick = function () 
{
    console.log("Capturamos el evento click");
    //alert("Capture el evento click");
    document.getElementById("demo").innerHTML = "Ahora el mensaje cambio por el click";
}

document.addEventListener("click", function () 
{
    acumClicks++;
    acumuladorCliks.textContent = acumClicks;
    console.log("Este mensaje se activo con un click en cualquiern parte por el EventListener");
})

document.getElementById("boton").addEventListener("click", function () 
{
    acumClicksboton++;
    acumClicksBoton.textContent = acumClicksboton;
})

document.getElementById("hide").addEventListener('click', function ()
{
    document.getElementById("demo").style.display = 'none';
    document.getElementById("hide").innerHTML = "Mostrar";
})

/*document.getElementsByName("hide").addEventListener('click', function ()
{
    document.getElementById("demo").style.display = "hola";
})*/

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "green";
}
