#!/usr/bin/env python3
from PIL import Image
import os

# Load the Pudu2 no background image
pudu_img = Image.open(r'C:\Srinath\git\netlify\netlify\public\images\Pudu2_no_BG.png')
pudu_img = pudu_img.convert('RGBA')

print(f"Original Pudu2 image size: {pudu_img.size}")

# Create hero version (larger, for detail view)
# Keep aspect ratio, max width 800px
max_hero_width = 800
if pudu_img.width > max_hero_width:
    ratio = max_hero_width / pudu_img.width
    new_height = int(pudu_img.height * ratio)
    hero_img = pudu_img.resize((max_hero_width, new_height), Image.Resampling.LANCZOS)
else:
    hero_img = pudu_img.copy()

# Save as webp for hero
hero_path = r'C:\Srinath\git\netlify\netlify\public\images\Pudu2_hero.webp'
hero_img.save(hero_path, 'WEBP', quality=90)
print(f"Hero image saved: {hero_path} ({hero_img.size})")

# Create square version (for thumbnail grid)
# Make it square by padding or cropping to center
square_size = 400

# Calculate dimensions to maintain aspect ratio within square
aspect = pudu_img.width / pudu_img.height

if aspect > 1:
    # Wider than tall
    new_width = square_size
    new_height = int(square_size / aspect)
else:
    # Taller than wide
    new_height = square_size
    new_width = int(square_size * aspect)

# Resize maintaining aspect ratio
square_resized = pudu_img.resize((new_width, new_height), Image.Resampling.LANCZOS)

# Create square canvas with transparent background
square_img = Image.new('RGBA', (square_size, square_size), (0, 0, 0, 0))

# Paste resized image centered on canvas
x_offset = (square_size - new_width) // 2
y_offset = (square_size - new_height) // 2
square_img.paste(square_resized, (x_offset, y_offset), square_resized)

# Save as webp for square
square_path = r'C:\Srinath\git\netlify\netlify\public\images\Pudu2_square.webp'
square_img.save(square_path, 'WEBP', quality=85)
print(f"Square image saved: {square_path} ({square_img.size})")

print("Pudu2 images created successfully!")
