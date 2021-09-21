/*llistaPDFs = [
    {titol: "Introducció a Javascript", url: "./pdf/Tema1.pdf", tipus: "tema"},
    {titol: "Sintaxi bàsica i variables", url: "./pdf/Tema2.pdf", tipus: "tema"},
    {titol: "Operadors", url: "./pdf/Tema3bis.pdf", tipus: "tema"},
    {titol: "Estructures de control", url: "./pdf/Tema4.pdf", tipus: "tema"},
    {titol: "Pràctica Javascript bàsic", url: "./pdf/practicaJSbasic.pdf", tipus: "pràctica"},
];*/

function importarPDFsAJAX(arxiu){
    var domini = "https://xusinho79.github.io/";
    var url = domini + arxiu;
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        var objecteJSON = data;
        carregaPDFs(objecteJSON)})
    .catch( err => console.error(err));
}

function generaTaulaPDFs(vector){
    var cadena="<table><tr><th>Visualitza en PDF</th></tr>";
    for (var i=0; i<vector.length; i++){
        cadena += "<tr><td>" + "<a " + "href='" + vector[i].url + "'>" + vector[i].titol + "</a>" + "</td></tr>";
    }
    cadena+="</table>";
    //console.log(cadena);
    return(cadena);
}

function carregaPDFs(llistaPDFs){
    var cadena=generaTaulaPDFs(llistaPDFs);
    var element= "contingut_pdf";

        document.getElementById(element).innerHTML=cadena;
}

window.onload = ()=> {
    //carregaPDFs();
    importarPDFsAJAX('./json/arxiusPDF.json');
    //console.log(arxius);
}