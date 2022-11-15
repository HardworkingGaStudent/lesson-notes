# You Do: Just a Day in the Jungle
piranhas_hungry = True

def swing_vine_over_river():
    print("Ahhh! Piranhas got me!")
    global piranhas_hungry
    piranhas_hungry = False

def jump_in_river():
    if piranhas_hungry:
        print ("I'm not going in there! There are hungry piranhas!")
    else:
        print("Piranhas are full! Swimming happily through the Amazon!")

jump_in_river()
swing_vine_over_river()
jump_in_river()