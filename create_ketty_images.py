#!/usr/bin/env python3
from PIL import Image
import os

# Load the Ketty no background image
ketty_img = Image.open(r'C:\Users\smart\Downloads\Ketty_no_BG.png')
ketty_img = ketty_img.convert('RGBA')

print(f"Original Ketty image size: {ketty_img.size}")

# Zoom in by 1.8x to make Ketty appear larger
zoom_factor = 1.8
zoomed_width = int(ketty_img.width * zoom_factor)
zoomed_height = int(ketty_img.height * zoom_factor)
ketty_img = ketty_img.resize((zoomed_width, zoomed_height), Image.Resampling.LANCZOS)

print(f"Zoomed Ketty image size: {ketty_img.size}")

# Create hero version (larger, for detail view)
# Keep aspect ratio, max width 800px
max_hero_width = 800
if ketty_img.width > max_hero_width:
    ratio = max_hero_width / ketty_img.width
    new_height = int(ketty_img.height * ratio)
    hero_img = ketty_img.resize((max_hero_width, new_height), Image.Resampling.LANCZOS)
else:
    hero_img = ketty_img.copy()

# Save as webp for hero
hero_path = r'C:\Srinath\git\netlify\netlify\public\images\KettyBot_hero.webp'
hero_img.save(hero_path, 'WEBP', quality=90)
print(f"Hero image saved: {hero_path} ({hero_img.size})")

# Create square version (for thumbnail grid)
# Make it square by padding or cropping to center
square_size = 400

# Calculate dimensions to maintain aspect ratio within square
aspect = ketty_img.width / ketty_img.height

if aspect > 1:
    # Wider than tall
    new_width = square_size
    new_height = int(square_size / aspect)
else:
    # Taller than wide
    new_height = square_size
    new_width = int(square_size * aspect)

# Resize maintaining aspect ratio
square_resized = ketty_img.resize((new_width, new_height), Image.Resampling.LANCZOS)

# Create square canvas with transparent background
square_img = Image.new('RGBA', (square_size, square_size), (0, 0, 0, 0))

# Paste resized image centered on canvas
x_offset = (square_size - new_width) // 2
y_offset = (square_size - new_height) // 2
square_img.paste(square_resized, (x_offset, y_offset), square_resized)

# Save as webp for square
square_path = r'C:\Srinath\git\netlify\netlify\public\images\KettyBot_square.webp'
square_img.save(square_path, 'WEBP', quality=85)
print(f"Square image saved: {square_path} ({square_img.size})")

print("KettyBot images created successfully with 1.8x zoom!")
