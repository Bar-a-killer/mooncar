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
function 無黑線 () {
    蚊香 = 0
    while (mooncar.LineFollowerSensor() == 無感光) {
        蚊香 += 5
        mooncar.MoonCarLR(蚊香, 2 * 蚊香)
        basic.pause(1)
    }
}
let 蚊香 = 0
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
/**
 * for index in range(20):
 * 
 * if mooncar.ir_read() == 無感光:
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT3, 6)
 * 
 * basic.pause(1)
 * 
 * else:
 * 
 * break
 * 
 * for index2 in range(40):
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT4, 6)
 * 
 * basic.pause(1)
 * 
 * for index3 in range(20):
 * 
 * if mooncar.ir_read() == 無感光:
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT3, 6)
 * 
 * basic.pause(1)
 * 
 * else:
 * 
 * break
 * 
 * for index4 in range(100):
 * 
 * if mooncar.ir_read() == 無感光:
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT1, 12)
 * 
 * basic.pause(1)
 * 
 * else:
 * 
 * break
 * 
 * for index5 in range(100):
 * 
 * if mooncar.ir_read() == 無感光:
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT2, 50)
 * 
 * basic.pause(1)
 * 
 * else:
 * 
 * break
 * 
 * for index6 in range(1000):
 * 
 * if mooncar.ir_read() == 無感光:
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT3, 50)
 * 
 * basic.pause(1)
 * 
 * else:
 * 
 * break
 * 
 * for index7 in range(1000):
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT3, 50)
 * 
 * basic.pause(1)
 * 
 * for index8 in range(1000):
 * 
 * if mooncar.ir_read() == 無感光:
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT3, 50)
 * 
 * basic.pause(1)
 * 
 * else:
 * 
 * break
 */
basic.forever(function () {
    if (mooncar.UltrasonicSensor() <= 15) {
        supersound += 1
        超音波觸發()
        supersound += 1
    }
})
