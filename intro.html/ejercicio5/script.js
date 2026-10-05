function consultar() {

    let saldos = [
        Number(document.getElementById("saldo1").value),
        Number(document.getElementById("saldo2").value),
        Number(document.getElementById("saldo3").value),
        Number(document.getElementById("saldo4").value),
        Number(document.getElementById("saldo5").value),
        Number(document.getElementById("saldo6").value),
        Number(document.getElementById("saldo7").value),
        Number(document.getElementById("saldo8").value),
        Number(document.getElementById("saldo9").value),
        Number(document.getElementById("saldo10").value)
    ];

    let cuenta = Number(prompt("Ingrese el número de cuenta del 1 al 10:"));

    if (cuenta >= 1 && cuenta <= 10) {

        let saldo = saldos[cuenta - 1];

        document.getElementById("resultado").innerHTML =
            "Cuenta: " + cuenta +
            "<br>Saldo disponible: $" + saldo.toFixed(2);

    } else {

        document.getElementById("resultado").innerHTML =
            "Error: la cuenta no está registrada.";

    }
}