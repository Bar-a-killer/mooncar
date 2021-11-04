def 循線():
    while mooncar.ir_read() != 無感光:
        if supersound == 1:
            break
        elif mooncar.ir_read() == 全感光:
            while mooncar.ir_read() == 全感光:
                mooncar.moon_car_go(mooncar.Direction.DIRECT1, 20)
        elif mooncar.ir_read() == 左感光:
            while mooncar.ir_read() != 全感光:
                mooncar.moon_car_go(mooncar.Direction.DIRECT4, 20)
        elif mooncar.ir_read() == 右感光:
            while mooncar.ir_read() != 全感光:
                mooncar.moon_car_go(mooncar.Direction.DIRECT3, 20)
def 超音波觸發():
    mooncar.moon_car_go(mooncar.Direction.DIRECT4, 15)
    basic.pause(500)
    mooncar.moon_car_lr(20, 90)
    basic.pause(4000)
    mooncar.moon_car_go(mooncar.Direction.DIRECT4, 15)
    basic.pause(500)
_1 = 0
supersound = 0
全感光 = 0
左感光 = 0
右感光 = 0
無感光 = 0
無感光 = 3
右感光 = 2
左感光 = 1
全感光 = 0
 
def on_forever():
    global _1
    while supersound == 1:
        basic.show_number(_1)
        basic.pause(1000)
        _1 += 1
basic.forever(on_forever)
 
def on_forever2():
    global supersound
    if mooncar.ultrasonic_sensor() <= 10:
        supersound = 1
        超音波觸發()
        supersound = 0
    else:
        循線()
basic.forever(on_forever2)
 

