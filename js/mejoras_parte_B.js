/* @author Alejandro Serrano Loredo */

var verboElegido = 0;
var tiempoAAdivinar = 0;

$(document).ready(function () {

    eligeVerbo();

    $("#botonResultado").click(
        function comprueba() {

            switch (marcador) {
                case numVerbos:
                    jugando = false;
                    alert("¡Enhorabuena, has ganado!")
                    break;
                default:
                    if (jugando == true) {
                        jugando = false; //indicar que estoy chequeando y no sigue jugando
                        //leemos el contenido de la caja que es lo que ha escrito el usuario
                        var verboLeido = $("#caja").val();
                        var verboAAdivinar = verbos[verboElegido][tiempoAAdivinar];

                        $("#botonResultado").removeClass("btn-dark");
                        if (!verboAAdivinar.includes("/")) {
                            if (verboAAdivinar == verboLeido) {
                                marcador++;
                                $("#marcador").append(icono);
                                $("#botonResultado").addClass("btn-success");
                                $("#botonResultado").text("CORRECT");
                            } else {
                                marcador = 0;
                                $("#marcador").text("");
                                $("#botonResultado").addClass("btn-danger");
                                $("#botonResultado").text(verbos[verboElegido][tiempoAAdivinar]);
                            }
                        } else {
                            //El verbo tiene dos formas
                            var posSeparador = verboAAdivinar.indexOf("/");
                            if(verboAAdivinar.substring(0, posSeparador)==verboLeido || verboAAdivinar.substring(posSeparador+1)==verboLeido){
                                marcador++;
                                $("#marcador").append(icono);
                                $("#botonResultado").addClass("btn-success");
                                $("#botonResultado").text("CORRECT");
                            } else {
                                marcador = 0;
                                $("#marcador").text("");
                                $("#botonResultado").addClass("btn-danger");
                                $("#botonResultado").text(verbos[verboElegido][tiempoAAdivinar]);
                            }
                        }
                    } else {
                        $("#botonResultado").removeClass("btn-success");
                        $("#botonResultado").removeClass("btn-danger");
                        $("#botonResultado").addClass("btn-dark");
                        jugando = true;
                        eligeVerbo();
                    }
                    break;
            }
        }
    );
});

function randomIntFromInterval(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eligeVerbo() {
    switch (numVerbos) {
        case 140: verboElegido = randomIntFromInterval(0, verbos.length); break;
        default: verboElegido = randomIntFromInterval(0, numVerbos); break;
    }
    tiempoAAdivinar = randomIntFromInterval(0, 2);
    //verboElegido = 3;
    console.log(verbos[verboElegido][tiempoAAdivinar]);
    document.getElementById("castellano").innerHTML = verbos[verboElegido][3];

    switch (tiempoAAdivinar) {
        case 0:
            document.getElementById("boton1").innerHTML = "<input  id='caja' class='form-control text-center' /> ";
            document.getElementById("boton2").innerHTML = "<button class='btn bg-warning text-white btn-block disabled'>" + verbos[verboElegido][1] + "</button>";
            document.getElementById("boton3").innerHTML = "<button class='btn bg-warning text-white btn-block disabled'>" + verbos[verboElegido][2] + "</button>";
            break;
        case 1:
            document.getElementById("boton1").innerHTML = "<button class='btn bg-warning text-white btn-block disabled'>" + verbos[verboElegido][0] + "</button>";
            document.getElementById("boton2").innerHTML = "<input  id='caja' class='form-control text-center' /> ";
            document.getElementById("boton3").innerHTML = "<button class='btn bg-warning text-white btn-block disabled'>" + verbos[verboElegido][2] + "</button>";
            break;
        default:
            document.getElementById("boton1").innerHTML = "<button class='btn bg-warning text-white btn-block disabled'>" + verbos[verboElegido][0] + "</button>";
            document.getElementById("boton2").innerHTML = "<button class='btn bg-warning text-white btn-block disabled'>" + verbos[verboElegido][1] + "</button>";
            document.getElementById("boton3").innerHTML = "<input  id='caja' class='form-control text-center' /> ";
            break;
    }
    document.getElementById("botonResultado").innerText = "COMPROBAR";
}