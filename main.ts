input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
    music.playMelody("B G D F - E F C ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
})
basic.showLeds(`
    # . # . #
    . # # # .
    # # . # #
    . # # # .
    # . # . #
    `)
