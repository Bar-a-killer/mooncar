function 循線 () {
    while (mooncar.IRRead() != 無感光 && supersound % 2 == 1) {
        if (mooncar.IRRead() == 全感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct1, 20)
        } else if (mooncar.IRRead() == 左感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct4, 20)
        } else if (mooncar.IRRead() == 右感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct3, 20)
        }
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
let supersound = 0
let 全感光 = 0
let 左感光 = 0
let 右感光 = 0
let 無感光 = 0
無感光 = 3
右感光 = 2
左感光 = 1
全感光 = 0
supersound = 1
basic.forever(function () {
    if (mooncar.UltrasonicSensor() <= 10) {
        supersound += 1
        超音波觸發()
    }
})
basic.forever(function () {
    循線()
})
