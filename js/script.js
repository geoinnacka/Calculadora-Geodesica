proj4.defs("EPSG:25831","+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs+type=crs");
proj4.defs("EPSG:32633","+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs +type=crs"); // Nuevo SRS
// #falta poner otras transformarCoordenadas dos corhete 
const btnTransformar = document.querySelector(".btn-tranformar");

btnTransformar.addEventListener("click", (evt) => {
    console.log("Transformar coordenadas");
    const srs_origen = document.getElementById("origen").value;
    const srsDestino = document.getElementById("destino").value;
    const lat = parseFloat(document.getElementById("lat").value);
    const lng = parseFloat(document.getElementById("lng").value);
    const coordTransformada = transformarCoordenadas (lat, lng, srs_origen, srsDestino);
    document.getElementById("respuesta").innerHTML = coordTransformada;
});

const transformarCoordenadas = (lat, lng, epsg_in, epsg_out) => {
    const coordTransformada = proj4(epsg_in, epsg_out, [lng, lat]);
    const mensajeError = document.getElementById("mensaje-error");
    if (srsOrigen === srsDestino) {
        mensajeError.innerText = "El SRS de origen y destino no pueden ser iguales.";
        mensajeError.style.display = "block";
    } else {
        mensajeError.style.display = "none";
    }
    return coordTransformada;
}

document.getElementById("origen").addEventListener("change", validarSRS);
document.getElementById("destino").addEventListener("change", validarSRS);

const btnGuardar = document.querySelector(".btn-enviar");
btnGuardar.addEventListener("click"), async (evt) => {
    console.log("Guardar coordenadas");
    const srs_origen = document.getElementById("origen").value;

}

/*
    const inputCoords = document.getElementById("coordenadas-multiples").value;
    const resultadoDiv = document.getElementById("resultado-transformacion");
    const inputCoords = document.getElementById("coordenadas-multiples").value;
    const resultadoDiv = document.getElementById("resultado-transformacion");
    */