element_id = 0

def get_next_id():
    global element_id
    element_id += 1
    return element_id


def add_text(text):
    element = document.createElement("p")
    element.textContent = text
    element.id = get_next_id()
    document.body.appendChild(element)
    return element.id


def set_text_color(element_id, color):
    element = document.getElementById(element_id)
    element.style.color = color


def add_image(filename):
    element = document.createElement("img")
    element.src = filename
    element.id = get_next_id()
    document.body.appendChild(element)
    return element.id


def add_background(filename):
    document.querySelector("html").style.backgroundImage = f"url({filename})"


def translate_y(element, distance):
    element.style.transform = f"translateY({distance}px)"


def position_element(element_id, x, y):
    element = document.getElementById(element_id)
    element.style.position = "absolute"
    element.style.top = y + "px"
    element.style.left = x + "px"


def move_down(element_id, distance):
    element = document.getElementById(element_id)
    element.style.transition = "2s"
    setTimeout(translate_y.bind(null, element, distance), 400)
    

def move_up(element_id, distance):
    element = document.getElementById(element_id)
    element.style.transition = "2s"
    setTimeout(translate_y.bind(null, element, -distance), 400)
    

def update_text(element_id, new_text):
    element = document.getElementById(element_id)
    element.textContent = new_text
