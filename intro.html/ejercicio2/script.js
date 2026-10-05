function calcular() {

    let notas = [
        Number(document.getElementById("nota1").value),
        Number(document.getElementById("nota2").value),
        Number(document.getElementById("nota3").value),
        Number(document.getElementById("nota4").value),
        Number(document.getElementById("nota5").value),
        Number(document.getElementById("nota6").value),
        Number(document.getElementById("nota7").value),
        Number(document.getElementById("nota8").value),
        Number(document.getElementById("nota9").value),
        Number(document.getElementById("nota10").value),
        Number(document.getElementById("nota11").value),
        Number(document.getElementById("nota12").value)
    ];

    let suma = 0;
    let aprobados = 0;
    let reprobados = 0;

    for (let i = 0; i < notas.length; i++) {

        suma = suma + notas[i];

        if (notas[i] >= 7) {
            aprobados++;
        } else {
            reprobados++;
        }
    }

    let promedio = suma / notas.length;

    document.getElementById("resultado").innerHTML =
        "Promedio general: " + promedio.toFixed(2) +
        "<br>Aprobados: " + aprobados +
        "<br>Reprobados: " + reprobados;
}

