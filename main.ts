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
function 循線 () {
    while (mooncar.LineFollowerSensor() != 無感光) {
        if (mooncar.LineFollowerSensor() == 全感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct1, 20)
        } else if (mooncar.LineFollowerSensor() == 左感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct4, 20)
        } else if (mooncar.LineFollowerSensor() == 右感光) {
            mooncar.MoonCarGo(mooncar.Direction.direct3, 20)
        }
    }
}
let 全感光 = 0
let 左感光 = 0
let 右感光 = 0
let 無感光 = 0
mooncar.Filllight(mooncar.Switch.Open)
無感光 = 3
右感光 = 2
左感光 = 1
全感光 = 0
let supersound = 1
basic.forever(function () {
    if (supersound % 2 == 1) {
        循線()
    } else {
        basic.pause(6000)
    }
})
