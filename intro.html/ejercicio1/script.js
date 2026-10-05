function calcular() {

    let precios = [
        Number(document.getElementById("arroz").value),
        Number(document.getElementById("azucar").value),
        Number(document.getElementById("leche").value),
        Number(document.getElementById("pan").value),
        Number(document.getElementById("aceite").value),
        Number(document.getElementById("huevos").value)
    ];

    let total = 0;

    for (let i = 0; i < precios.length; i++) {
        total = total + precios[i];
    }

    document.getElementById("resultado").innerHTML =
        "Precios ingresados: " + precios.join(", ") +
        "<br>Valor total: $" + total.toFixed(2);
}
