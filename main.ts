function 擺頭 () {
    for (let index = 0; index < 20; index++) {
        if (mooncar.IRRead() == 無感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct3, 6)
            basic.pause(1)
        } else {
            return 2
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
            return 2
        }
    }
    return 0
}
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
        return
    } else {
        mooncar.MoonCarGo(mooncar.Direction.direct3, 15)
        basic.pause(500)
        mooncar.MoonCarLR(90, 20)
        basic.pause(4000)
        mooncar.MoonCarGo(mooncar.Direction.direct3, 15)
        basic.pause(500)
        return
    }
}
function Mosquito_coil () {
    蚊香 = -90
    while (mooncar.LineFollowerSensor() == 無感光) {
        mooncar.MoonCarLR(90, 蚊香)
        basic.pause(100)
        if (蚊香 == -89.95) {
            蚊香 = 0
        } else {
            蚊香 += 0.05
        }
    }
}
function 無黑線 () {
    if (擺頭() == 2) {
        return
    }
    for (let index = 0; index < 100; index++) {
        if (mooncar.IRRead() == 無感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct1, 12)
            basic.pause(1)
        } else {
            return
        }
    }
    if (擺頭() == 2) {
        return
    }
    for (let index = 0; index < 100; index++) {
        if (mooncar.IRRead() == 無感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct2, 50)
            basic.pause(1)
        } else {
            return
        }
    }
    for (let index = 0; index < 1000; index++) {
        if (mooncar.IRRead() == 無感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct3, 50)
            basic.pause(1)
        } else {
            return
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
            return
        }
    }
    Mosquito_coil()
}
let 全感光 = 0
let supersound = 0
let 左感光 = 0
let 右感光 = 0
let 無感光 = 0
let 蚊香 = 0
蚊香 = 0
mooncar.Filllight(mooncar.Switch.Open)
無感光 = 3
右感光 = 2
左感光 = 1
supersound = 1
全感光 = 0
basic.forever(function () {
    if (mooncar.UltrasonicSensor() <= 15) {
        supersound += 1
        超音波觸發()
        supersound += 1
    }
})
basic.forever(function () {
    while (supersound % 2 == 1 && mooncar.LineFollowerSensor() != 無感光) {
        循線()
    }
    if (supersound % 2 == 1) {
        無黑線()
    }
})
