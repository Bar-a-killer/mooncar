function 循線 () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # . # #
        . . # . .
        . . . . .
        `)
    if (mooncar.LineFollowerSensor() == 全感光) {
        mooncar.MoonCarGo(mooncar.Direction.direct1, 15)
        basic.pause(1)
    } else if (mooncar.LineFollowerSensor() == 左感光) {
        mooncar.MoonCarGo(mooncar.Direction.direct3, 6)
        basic.pause(1)
    } else if (mooncar.LineFollowerSensor() == 右感光) {
        mooncar.MoonCarGo(mooncar.Direction.direct4, 6)
        basic.pause(1)
    }
}
function 超音波觸發 () {
    if (supersound / 2 % 2 == 1) {
        mooncar.MoonCarGo(mooncar.Direction.direct4, 15)
        basic.pause(500)
        mooncar.MoonCarLR(20, 90)
        basic.pause(4000)
        mooncar.MoonCarGo(mooncar.Direction.direct4, 15)
        basic.pause(500)
    } else {
        mooncar.MoonCarGo(mooncar.Direction.direct3, 15)
        basic.pause(500)
        mooncar.MoonCarLR(90, 20)
        basic.pause(4000)
        mooncar.MoonCarGo(mooncar.Direction.direct3, 15)
        basic.pause(500)
    }
}
function 無黑線 () {
    for (let index = 0; index < 20; index++) {
        if (mooncar.IRRead() == 無感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct3, 6)
            basic.pause(1)
        } else {
            break;
        }
    }
    for (let index = 0; index < 40; index++) {
        mooncar.MoonCarGo(mooncar.Direction.direct4, 6)
        basic.pause(1)
    }
    for (let index = 0; index < 20; index++) {
        if (mooncar.IRRead() == 無感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct3, 6)
            basic.pause(1)
        } else {
            break;
        }
    }
    for (let index = 0; index < 100; index++) {
        if (mooncar.IRRead() == 無感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct1, 12)
            basic.pause(1)
        } else {
            break;
        }
    }
    for (let index = 0; index < 100; index++) {
        if (mooncar.IRRead() == 無感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct2, 50)
            basic.pause(1)
        } else {
            break;
        }
    }
    for (let index = 0; index < 1000; index++) {
        if (mooncar.IRRead() == 無感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct3, 50)
            basic.pause(1)
        } else {
            break;
        }
    }
    for (let index = 0; index < 1000; index++) {
        mooncar.MoonCarGo(mooncar.Direction.direct3, 50)
        basic.pause(1)
    }
    for (let index = 0; index < 1000; index++) {
        if (mooncar.IRRead() == 無感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct3, 50)
            basic.pause(1)
        } else {
            break;
        }
    }
}
let 全感光 = 0
let supersound = 0
let 左感光 = 0
let 右感光 = 0
let 無感光 = 0
mooncar.Filllight(mooncar.Switch.Open)
無感光 = 3
右感光 = 2
左感光 = 1
supersound = 1
全感光 = 0
basic.forever(function () {
    while (supersound % 2 == 1 && mooncar.LineFollowerSensor() != 無感光) {
        循線()
    }
    if (supersound % 2 == 1) {
        無黑線()
    }
})
basic.forever(function () {
    if (mooncar.UltrasonicSensor() <= 15) {
        右感光 += 1
        超音波觸發()
        右感光 += 1
    }
})
