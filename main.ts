input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.setGroup(10)
    basic.pause(100)
    for (let index = 0; index < 1; index++) {
        radio.sendString("nx7")
    }
})
radio.onReceivedString(function (nx7) {
    radio.setGroup(10)
    basic.setLedColor(0x00ffff)
    basic.showIcon(IconNames.Yes)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("nx7")
})
basic.forever(function () {
    radio.setGroup(10)
})
