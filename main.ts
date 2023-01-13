input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
    music.playMelody("C G D F - E F A ", 200)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
    for (let index = 0; index < 50; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1960, 5000, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
music.playMelody("E D G C E F G C ", 120)
basic.showLeds(`
    # . # . #
    . # # # .
    # # . # #
    . # # # .
    # . # . #
    `)
