def 擺頭():
    global times
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
    """)
    basic.pause(1)
    while mooncar.line_follower_sensor() == 無感光 and times < 250:
        mooncar.moon_car_go(mooncar.Direction.DIRECT3, 10)
        basic.pause(1)
        times += 1
    if times != 250:
        times = 0
        return 2
    else:
        times = 0
    mooncar.moon_car_go(mooncar.Direction.DIRECT4, 20)
    basic.pause(1000)
    while mooncar.line_follower_sensor() == 無感光 and times < 200:
        mooncar.moon_car_go(mooncar.Direction.DIRECT3, 10)
        basic.pause(1)
        times += 1
    if times != 250:
        times = 0
        return 2
    else:
        times = 0
        return 0
def 循線():
    basic.show_leds("""
        . # . # .
                . . . . .
                # # . # #
                . . # . .
                . . . . .
    """)
    basic.pause(1)
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
    basic.show_leds("""
        . # # # .
                . . # . .
                # . . . #
                # # . # #
                # # # # #
    """)
    basic.pause(1)
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
    basic.show_leds("""
        . . # . .
                . # . # .
                # # # # #
                . # # # .
                . . # . .
    """)
    basic.pause(1)
    蚊香 = -90
    while mooncar.line_follower_sensor() == 無感光:
        mooncar.moon_car_lr(90, 蚊香)
        basic.pause(100)
        if 蚊香 == -89.95:
            蚊香 = 0
        else:
            蚊香 += 0.05
def 無黑線():
    global times
    basic.show_leds("""
        # . . . #
                . . . . .
                # . . . #
                # . . . #
                . # # # .
    """)
    basic.pause(1)
    if 擺頭() == 2:
        return
    while mooncar.line_follower_sensor() == 無感光 and times < 500:
        mooncar.moon_car_go(mooncar.Direction.DIRECT1, 20)
        basic.pause(1)
        times += 1
    if times != 500:
        times = 0
        return
    else:
        times = 0
    if 擺頭() == 2:
        return
    mooncar.moon_car_go(mooncar.Direction.DIRECT2, 20)
    basic.pause(2000)
    while mooncar.line_follower_sensor() == 無感光 and times < 200:
        mooncar.moon_car_go(mooncar.Direction.DIRECT3, 30)
        basic.pause(1)
        times += 1
    if times != 200:
        times = 0
        return
    else:
        times = 0
    basic.show_leds("""
        . . # . .
                . # # # .
                . . # . .
                . . # . .
                . . # . .
    """)
    basic.pause(1)
    mooncar.moon_car_go(mooncar.Direction.DIRECT3, 30)
    basic.pause(100)
    while mooncar.line_follower_sensor() == 無感光 and times < 200:
        mooncar.moon_car_go(mooncar.Direction.DIRECT3, 30)
        basic.pause(1)
        times += 1
    if times != 200:
        times = 0
        return
    else:
        times = 0
    Mosquito_coil()
times = 0
蚊香 = 0
supersound = 0
全感光 = 0
左感光 = 0
右感光 = 0
無感光 = 0
mooncar.filllight(mooncar.Switch.OPEN)
無感光 = 3
右感光 = 2
左感光 = 1
全感光 = 0
supersound = 1
蚊香 = 0

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
            mooncar.moon_car_go(mooncar.Direction.DIRECT5, 100)
            basic.pause(100)
basic.forever(on_forever2)

