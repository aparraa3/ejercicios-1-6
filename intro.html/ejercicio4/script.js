function calcular() {

    let ventas = [
        Number(document.getElementById("venta1").value),
        Number(document.getElementById("venta2").value),
        Number(document.getElementById("venta3").value),
        Number(document.getElementById("venta4").value),
        Number(document.getElementById("venta5").value),
        Number(document.getElementById("venta6").value),
        Number(document.getElementById("venta7").value),
        Number(document.getElementById("venta8").value),
        Number(document.getElementById("venta9").value),
        Number(document.getElementById("venta10").value),
        Number(document.getElementById("venta11").value),
        Number(document.getElementById("venta12").value),
        Number(document.getElementById("venta13").value),
        Number(document.getElementById("venta14").value),
        Number(document.getElementById("venta15").value)
    ];

    let mayor = ventas[0];
    let menor = ventas[0];

    let diaMayor = 1;
    let diaMenor = 1;

    for (let i = 1; i < ventas.length; i++) {

        if (ventas[i] > mayor) {
            mayor = ventas[i];
            diaMayor = i + 1;
        }

        if (ventas[i] < menor) {
            menor = ventas[i];
            diaMenor = i + 1;
        }
    }

    document.getElementById("resultado").innerHTML =
        "Venta mayor: $" + mayor +
        "<br>Ocurrió en el día: " + diaMayor +
        "<br><br>Venta menor: $" + menor +
        "<br>Ocurrió en el día: " + diaMenor;
}
