def 循線():
    while mooncar.line_follower_sensor() != 無感光:
        basic.show_leds("""
            . # . # .
                        . . . . .
                        # # . # #
                        . . # . .
                        . . . . .
        """)
        if mooncar.line_follower_sensor() == 全感光:
            mooncar.moon_car_go(mooncar.Direction.DIRECT1, 15)
            basic.pause(1)
        elif mooncar.line_follower_sensor() == 左感光:
            mooncar.moon_car_go(mooncar.Direction.DIRECT3, 6)
            basic.pause(1)
        elif mooncar.line_follower_sensor() == 右感光:
            mooncar.moon_car_go(mooncar.Direction.DIRECT4, 6)
            basic.pause(1)
def 超音波觸發():
    if supersound / 2 % 2 == 1:
        mooncar.moon_car_go(mooncar.Direction.DIRECT4, 15)
        basic.pause(500)
        mooncar.moon_car_lr(20, 90)
        basic.pause(4000)
        mooncar.moon_car_go(mooncar.Direction.DIRECT4, 15)
        basic.pause(500)
    else:
        mooncar.moon_car_go(mooncar.Direction.DIRECT3, 15)
        basic.pause(500)
        mooncar.moon_car_lr(90, 20)
        basic.pause(4000)
        mooncar.moon_car_go(mooncar.Direction.DIRECT3, 15)
        basic.pause(500)
全感光 = 0
supersound = 0
左感光 = 0
右感光 = 0
無感光 = 0
mooncar.filllight(mooncar.Switch.OPEN)
無感光 = 3
右感光 = 2
左感光 = 1
supersound = 1
全感光 = 0

def on_forever():
    global 右感光
    if supersound % 2 == 0:
        右感光 += 1
        超音波觸發()
basic.forever(on_forever)

def on_forever2():
    if supersound % 2 == 1:
        循線()
    if supersound % 2 == 1:
        循線()
basic.forever(on_forever2)
def 無黑線():
    while mooncar.ir_read() != 無感光:
        for index in range(1000):
            if mooncar.ir_read() == 無感光:
                mooncar.moon_car_go(mooncar.Direction.DIRECT3, 50)
            else:
                break
        for index2 in range(100):
            if mooncar.ir_read() == 無感光:
                mooncar.moon_car_go(mooncar.Direction.DIRECT1, 50)
            else:
                break
        for index3 in range(20):
            if mooncar.ir_read() == 無感光:
                mooncar.moon_car_go(mooncar.Direction.DIRECT3, 50)
            else:
                break
        for index4 in range(40):
            if mooncar.ir_read() == 無感光:
                mooncar.moon_car_go(mooncar.Direction.DIRECT4, 50)
            else:
                break
        for index5 in range(100):
            if mooncar.ir_read() == 無感光:
                mooncar.moon_car_go(mooncar.Direction.DIRECT2, 50)
            else:
                break
        while 1 > 0:
            if mooncar.ir_read() == 無感光:
                mooncar.moon_car_go(mooncar.Direction.DIRECT3, 50)
            else:
                break