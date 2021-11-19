def 擺頭():
    for index in range(10):
        if mooncar.ir_read() == 無感光:
            mooncar.moon_car_go(mooncar.Direction.DIRECT3, 10)
            basic.pause(1)
        else:
            return 2
    mooncar.moon_car_go(mooncar.Direction.DIRECT4, 10)
    basic.pause(10)
    for index2 in range(10):
        if mooncar.ir_read() == 無感光:
            mooncar.moon_car_go(mooncar.Direction.DIRECT3, 10)
            basic.pause(1)
        else:
            return 2
    return 0
def 循線():
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
        return
    else:
        mooncar.moon_car_go(mooncar.Direction.DIRECT3, 15)
        basic.pause(500)
        mooncar.moon_car_lr(90, 20)
        basic.pause(4000)
        mooncar.moon_car_go(mooncar.Direction.DIRECT3, 15)
        basic.pause(500)
        return
def Mosquito_coil():
    global 蚊香
    蚊香 = -90
    while mooncar.line_follower_sensor() == 無感光:
        mooncar.moon_car_lr(90, 蚊香)
        basic.pause(100)
        if 蚊香 == -89.95:
            蚊香 = 0
        else:
            蚊香 += 0.05
def 無黑線():
    擺頭()
    if 擺頭() == 2:
        return
    for index3 in range(100):
        if mooncar.ir_read() == 無感光:
            mooncar.moon_car_go(mooncar.Direction.DIRECT1, 20)
            basic.pause(1)
        else:
            return
    if 擺頭() == 2:
        return
    mooncar.moon_car_go(mooncar.Direction.DIRECT2, 20)
    basic.pause(100)
    for index4 in range(10):
        if mooncar.ir_read() == 無感光:
            mooncar.moon_car_go(mooncar.Direction.DIRECT3, 20)
            basic.pause(1)
        else:
            return
    mooncar.moon_car_go(mooncar.Direction.DIRECT3, 20)
    basic.pause(50)
    for index5 in range(10):
        if mooncar.ir_read() == 無感光:
            mooncar.moon_car_go(mooncar.Direction.DIRECT3, 20)
            basic.pause(1)
        else:
            return
    Mosquito_coil()
全感光 = 0
supersound = 0
左感光 = 0
右感光 = 0
無感光 = 0
蚊香 = 0
蚊香 = 0
mooncar.filllight(mooncar.Switch.OPEN)
無感光 = 3
右感光 = 2
左感光 = 1
supersound = 1
全感光 = 0

def on_forever():
    global supersound
    if mooncar.ultrasonic_sensor() <= 15:
        supersound += 1
        超音波觸發()
        supersound += 1
basic.forever(on_forever)

def on_forever2():
    while supersound % 2 == 1:
        if mooncar.line_follower_sensor() != 無感光:
            循線()
        else:
            無黑線()
basic.forever(on_forever2)
