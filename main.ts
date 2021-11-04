/**
 * def 超音波觸發():
 * 
 * if supersound / 2 % 2 == 1:
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT4, 15)
 * 
 * basic.pause(500)
 * 
 * mooncar.moon_car_lr(20, 90)
 * 
 * basic.pause(4000)
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT4, 15)
 * 
 * basic.pause(500)
 * 
 * else:
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT3, 15)
 * 
 * basic.pause(500)
 * 
 * mooncar.moon_car_lr(90, 20)
 * 
 * basic.pause(4000)
 * 
 * mooncar.moon_car_go(mooncar.Direction.DIRECT3, 15)
 * 
 * basic.pause(500)
 */
/**
 * def 循線():
 */
/**
 * while mooncar.line_follower_sensor() != 無感光:
 */
/**
 * pass
 */
mooncar.Filllight(mooncar.Switch.Open)
let 無感光 = 3
let 右感光 = 2
let 左感光 = 1
let supersound = 1
// def on_forever():
// if supersound % 2 == 1:
// 循線()
// else:
// basic.pause(6000)
// basic.forever(on_forever)
basic.forever(function () {
    if (mooncar.LineFollowerSensor() != 無感光) {
        let 全感光 = 0
        basic.showLeds(`
            . # . # .
            . . . . .
            # # . # #
            . . # . .
            . . . . .
            `)
        if (mooncar.LineFollowerSensor() == 全感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct1, 20)
        } else if (mooncar.LineFollowerSensor() == 左感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct3, 2)
        } else if (mooncar.LineFollowerSensor() == 右感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct4, 2)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . # . .
            `)
        mooncar.MoonCarGo(mooncar.Direction.direct1, 0)
    }
})
