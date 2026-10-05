function calcular() {

    let f1 = 1;
    let f2 = 1;
    let posicion = 2;

    while (true) {

        let fibonacci = f1 + f2;
        posicion++;

        let divisores = 0;

        for (let i = 1; i * i <= fibonacci; i++) {

            if (fibonacci % i == 0) {
                divisores++;

                if (i != fibonacci / i) {
                    divisores++;
                }
            }
        }

        if (divisores > 1000) {

            document.getElementById("resultado").innerHTML =
                "Número de Fibonacci encontrado: " + fibonacci +
                "<br>Posición: " + posicion +
                "<br>Cantidad de divisores: " + divisores;

            break;
        }

        f1 = f2;
        f2 = fibonacci;
    }
}