input.onButtonPressed(Button.A, function () {
    led.unplot(0, 0)
    Modifier_le_joueur()
})
function Modifier_le_joueur () {
    if (Joueur1) {
        Joueur1 = 0
    } else {
        Joueur1 = 1
    }
}
let Joueur1 = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
Joueur1 = 1
