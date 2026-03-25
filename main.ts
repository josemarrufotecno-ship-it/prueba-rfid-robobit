input.onButtonPressed(Button.A, function () {
    MFRC522.write("1111111")
    basic.showIcon(IconNames.Heart)
})
let tarjeta_leida = 0
// 1. Al iniciar: Encendemos el lector y mostramos un "Check"
MFRC522.Init()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    // 2. El lector espera hasta que pases una tarjeta
    tarjeta_leida = MFRC522.getID()
    // 3. Muestra el número de la tarjeta en la pantalla (¡Anótalo en un papel!)
    basic.showNumber(tarjeta_leida)
    // 4. Identificación: Comparamos el número leído con nuestras tarjetas conocidas
    // ⚠️ IMPORTANTE: Cambia los números "1111111" y "2222222" por los números reales que anotaste
    if (tarjeta_leida == 1111111) {
        // Si es la Tarjeta 1
        basic.showString("A")
        basic.showIcon(IconNames.Heart)
    } else if (tarjeta_leida == 2222222) {
        // Si es la Tarjeta 2
        basic.showString("B")
        basic.showIcon(IconNames.Happy)
    } else {
        // Si es una tarjeta desconocida que no está registrada
        basic.showIcon(IconNames.No)
    }
    // Pausa de 2 segundos para darte tiempo de ver la pantalla antes de leer de nuevo
    basic.pause(2000)
    basic.clearScreen()
})
