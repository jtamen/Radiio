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
basic.forever(function () {
	
})
