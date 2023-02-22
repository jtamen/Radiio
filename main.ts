input.onButtonPressed(Button.A, function () {
    led.unplot(X, Y)
    Modifier_le_joueur()
})
function Del_J1_ou_J2 () {
    if (Joueur1) {
        led.plot(0, 4)
        led.unplot(4, 4)
    } else {
        led.plot(4, 4)
        led.unplot(0, 4)
    }
}
function Modifier_le_joueur () {
    if (Joueur1) {
        Joueur1 = 0
    } else {
        Joueur1 = 1
    }
}
let Y = 0
let X = 0
let Joueur1 = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
Joueur1 = 1
X = 0
Y = 0
basic.forever(function () {
    Del_J1_ou_J2()
})
