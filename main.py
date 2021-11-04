def 循線():
    while mooncar.ir_read() != 無感光 and True:
        if mooncar.ir_read() == 全感光:
            mooncar.moon_car_go(mooncar.Direction.DIRECT1, 20)
        elif mooncar.ir_read() == 左感光:
            mooncar.moon_car_go(mooncar.Direction.DIRECT4, 20)
        elif mooncar.ir_read() == 右感光:
            mooncar.moon_car_go(mooncar.Direction.DIRECT3, 20)
'''
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
'''
supersound = 0
全感光 = 0
左感光 = 0
右感光 = 0
無感光 = 0
無感光 = 3
右感光 = 2
左感光 = 1
全感光 = 0
supersound = 1

def on_forever():
    if supersound % 2 == 1:
        循線()
    else:
        basic.pause(6000)
basic.forever(on_forever)

def on_forever2():
    mooncar.filllight(mooncar.Switch.OPEN)
basic.forever(on_forever2)

# def on_forever3():
#     global supersound
#     if mooncar.ultrasonic_sensor() <= 10:
#         supersound += 1
#         超音波觸發()
#         supersound += 1
# basic.forever(on_forever3)
