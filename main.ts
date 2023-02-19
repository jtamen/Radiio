function Del_J1_ou_J2 () {
    let Joueur1 = 0
    if (Joueur1) {
        led.plot(0, 4)
        led.unplot(4, 4)
    } else {
        led.plot(4, 4)
        led.unplot(0, 4)
    }
}
basic.forever(function () {
    Del_J1_ou_J2()
})
