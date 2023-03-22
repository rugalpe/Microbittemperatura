basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 25) {
        basic.showNumber(input.temperature())
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    basic.showNumber(input.temperature())
    while (input.temperature() > 25) {
        basic.showNumber(input.temperature())
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
