# 1 - Import library
import pygame
import random
from pygame.locals import *
 
# 2 - Initialize the game
pygame.init()
width, height = 153,153
screen=pygame.display.set_mode((width, height))
 
# 3 - Load images
heads = pygame.image.load("head.png")
tails = pygame.image.load("tail.png")

foo = [heads,tails]

player = random.choice(foo) 


# print(random.choice(foo))

# 4 - keep looping through
while 1:
    # 5 - clear the screen before drawing it again
    screen.fill(0)
    # 6 - draw the screen elements
    screen.blit(player, (0,0))
    # 7 - update the screen
    pygame.display.flip()
    # 8 - loop through the events
    for event in pygame.event.get():
        # check if the event is the X button 
        if event.type==pygame.QUIT:
            # if it is quit the game
            pygame.quit() 
            exit(0)
        if event.type==pygame.KEYUP:
            	player = random.choice(foo) 
