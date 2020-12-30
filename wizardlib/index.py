from builtins import *
from random import randint

def kill_ghost(ghost):
    global score, win_score
    vanish(ghost)
    score += 1
    update_text(score_text_element, score)
    if score > win_score:
        win_text = "You win!!!"
        win_text_size = 100
        win_text_color = "white"
        win_text_element = add_text(win_text, win_text_size)
        set_text_color(win_text_element, win_text_color)


add_background("background.png")

score = 0
win_score = 5
score_text_size = 64
score_text_element = add_text(score, score_text_size)

score_text_x = 1200
score_text_y = 0
position_element(score_text_element, score_text_x, score_text_y)

score_text_color = "white"
set_text_color(score_text_element, score_text_color)

num_ghosts = 5

for _ in range(num_ghosts):
    ghost_image_size = 100
    ghost_image_filename = "ghost.png"
    ghost_image_element = add_image(ghost_image_filename, ghost_image_size)
    
    ghost_x = randint(0, 1600)
    ghost_y = 1000
    position_element(ghost_image_element, ghost_x, ghost_y)
    
    y_pos_above_page = ghost_y + 500
    move_time = randint(10, 20)
    
    move_up(ghost_image_element, y_pos_above_page, move_time)
    
    click(ghost_image_element, kill_ghost)






