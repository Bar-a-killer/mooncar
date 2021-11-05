"""

while mooncar.line_follower_sensor() != 無感光:

"""
"""

def 循線():

"""
"""

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

"""
# pass
mooncar.filllight(mooncar.Switch.OPEN)
無感光 = 3
右感光 = 2
左感光 = 1
supersound = 1
print("github_test")
print("confict")
# def on_forever():
# if supersound % 2 == 1:
# 循線()
# else:
# basic.pause(6000)
# basic.forever(on_forever)

def on_forever():
    if mooncar.line_follower_sensor() != 無感光:
        全感光 = 0
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
    else:
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        . # . # .
                        . . # . .
        """)
        mooncar.moon_car_go(mooncar.Direction.DIRECT1, 0)
basic.forever(on_forever)


print('confict')