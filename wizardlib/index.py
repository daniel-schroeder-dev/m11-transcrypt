from builtins import *


add_background("background.jpg")
ghost_image_element = add_image("ghost.png")

score = 0
score_text_element = add_text(score)

def kill_ghost(ghost):
    global score
    score += 1
    update_text(score_text_element, score)


click(ghost_image_element, kill_ghost)
