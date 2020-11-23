/* @author Alejandro Serrano Loredo */

var jugando = false;
var marcador = 0;

var numVerbos = 0;
var icono = "";

function eligeNumVerbos(_numVerbos) {
    numVerbos = _numVerbos;

    jugando = true;

    if (_numVerbos < 50) {
        icono = '<i class="fas fa-star text-warning"></i>';
    } else if (_numVerbos < 100) {
        icono = '<i class="fas fa-dollar-sign text-success"></i>';
    } else {
        icono = '<i class="fas fa-gem text-info"></i>';
    }

    $("#btnsEligeNumVerbos").addClass("d-none");
    $("#labelNumVerbos").addClass("d-none");

    $("#marcador").removeClass("d-none");
    $("#castellano").removeClass("d-none");
    $("#verbos").removeClass("d-none");
    $("#botonResultado").removeClass("d-none");
}

function cambiaNivel() {
    if (jugando == true) {
        jugando = false;
        marcador = 0

        $("#marcador").text("");

        $("#btnsEligeNumVerbos").removeClass("d-none");
        $("#labelNumVerbos").removeClass("d-none");

        $("#marcador").addClass("d-none");
        $("#castellano").addClass("d-none");
        $("#verbos").addClass("d-none");
        $("#botonResultado").addClass("d-none");
    }
}



