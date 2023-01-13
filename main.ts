input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
    music.playMelody("C G D F - E F A ", 200)
})
input.onButtonPressed(Button.B, function () {
    if (false) {
        for (let index = 0; index < 3; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
        }
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Ghost)
    }
})
basic.showLeds(`
    # . # . #
    . # # # .
    # # . # #
    . # # # .
    # . # . #
    `)
