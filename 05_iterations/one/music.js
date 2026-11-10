import pygame
import sys

# 1. Initialize pygame and its audio mixer
pygame.init()
pygame.mixer.init()

# 2. Set up the display window
# You can adjust the width and height to match your screen or photo
window_width = 800
window_height = 600
screen = pygame.display.set_mode((window_width, window_height))
pygame.display.set_caption("Photo and Music Viewer")

# 3. Load the image and audio files
# Ensure these files are in the same folder as this script
image_path = "your-photo.jpg"
audio_path = "your-music.mp3"

try:
    # Load and scale the image to fit the window
    photo = pygame.image.load(image_path)
    photo = pygame.transform.scale(photo, (window_width, window_height))
    
    # Load the music
    pygame.mixer.music.load(audio_path)
except FileNotFoundError as e:
    print(f"Error loading file: {e}")
    print("Please check that 'your-photo.jpg' and 'your-music.mp3' exist in the same folder.")
    pygame.quit()
    sys.exit()

# 4. Play the music on a loop (-1 means loop indefinitely)
pygame.mixer.music.play(-1)

# 5. Main application loop
running = True
while running:
    # Check for events (like clicking the close button)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Draw the photo onto the screen
    screen.blit(photo, (0, 0))
    
    # Update the display
    pygame.display.flip()

# Clean up and exit when the loop breaks
pygame.quit()
sys.exit()