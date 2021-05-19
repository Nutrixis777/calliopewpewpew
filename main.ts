input.onButtonPressed(Button.A, function () {
    radio.setGroup(10)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(100)
    radio.sendString("nx7")
})
radio.onReceivedString(function (nx7) {
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
input.onButtonPressed(Button.B, function () {
    radio.setGroup(11)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(100)
    radio.sendValue("sheesh", 1)
})
radio.onReceivedValue(function (name, value) {
    basic.setLedColor(0x00ffff)
    basic.showIcon(IconNames.Yes)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("sheesh")
})
