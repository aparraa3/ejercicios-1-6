function calcular() {

    let temperaturas = [
        Number(document.getElementById("dia1").value),
        Number(document.getElementById("dia2").value),
        Number(document.getElementById("dia3").value),
        Number(document.getElementById("dia4").value),
        Number(document.getElementById("dia5").value),
        Number(document.getElementById("dia6").value),
        Number(document.getElementById("dia7").value)
    ];

    let dias = [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ];

    let suma = 0;

    for (let i = 0; i < temperaturas.length; i++) {
        suma = suma + temperaturas[i];
    }

    let promedio = suma / temperaturas.length;

    let diasSuperaron = "";

    for (let i = 0; i < temperaturas.length; i++) {

        if (temperaturas[i] > promedio) {
            diasSuperaron = diasSuperaron + dias[i] + ": " + temperaturas[i] + " °C<br>";
        }
    }

    document.getElementById("resultado").innerHTML =
        "Temperatura promedio: " + promedio.toFixed(2) + " °C" +
        "<br><br>Días que superaron el promedio:<br>" +
        diasSuperaron;
}