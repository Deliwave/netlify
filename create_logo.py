#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import numpy as np

# Load the original logo
original_logo = Image.open(r'C:\Users\smart\Downloads\sriman-technologies-logo.png')
original_logo = original_logo.convert('RGBA')

width, height = original_logo.size
print(f"Original logo size: {width}x{height}")

# Create a copy to work with
new_logo = original_logo.copy()
data = np.array(new_logo)

# Detect text area by finding non-white pixels in the bottom half
# Assuming "SRIMAN TECHNOLOGIES" is in the bottom portion
bottom_half_start = height // 2

# Find the bounding box of text by detecting dark pixels
gray = np.mean(data[bottom_half_start:, :, :3], axis=2)
text_pixels = gray < 200  # Dark pixels (text)

# Find vertical bounds of text
rows_with_text = np.any(text_pixels, axis=1)
if np.any(rows_with_text):
    text_rows = np.where(rows_with_text)[0]
    text_top = text_rows[0] + bottom_half_start
    text_bottom = text_rows[-1] + bottom_half_start
    
    # Add some margin
    margin = 20
    text_top = max(0, text_top - margin)
    text_bottom = min(height, text_bottom + margin)
else:
    # Fallback if detection fails
    text_top = int(height * 0.75)
    text_bottom = height

print(f"Detected text area: y={text_top} to y={text_bottom}")

# Cover the old text with white rectangle
draw = ImageDraw.Draw(new_logo)
draw.rectangle([(0, text_top), (width, text_bottom)], fill=(255, 255, 255, 255))

# Add new text "DeliWave Robotics"
# Try to match the original font size and style
text_height_estimate = text_bottom - text_top
font_size = int(text_height_estimate * 0.6)  # Adjust multiplier as needed

try:
    # Try different fonts - bold fonts work well for logos
    font = None
    for font_name in ["arialbd.ttf", "Arial Bold.ttf", "arial.ttf"]:
        try:
            font = ImageFont.truetype(f"C:\\Windows\\Fonts\\{font_name}", font_size)
            print(f"Using font: {font_name} at size {font_size}")
            break
        except:
            continue
    
    if font is None:
        font = ImageFont.truetype("arial.ttf", font_size)
except:
    print("Using default font")
    font = ImageFont.load_default()

# Draw the new text
text = "DeliWave Robotics"
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_pixel_height = bbox[3] - bbox[1]

# Center the text
x = (width - text_width) // 2
y = text_top + ((text_bottom - text_top) - text_pixel_height) // 2

# Draw text in dark blue/black color to match professional logos
draw.text((x, y), text, fill=(0, 51, 102, 255), font=font)

# Save the new logo
output_path = r'C:\Srinath\git\netlify\netlify\public\images\deliwave-logo.png'
new_logo.save(output_path)
print(f"New logo created successfully!")
print(f"Saved to: {output_path}")

# Create web-optimized version
max_width = 400
if width > max_width:
    ratio = max_width / width
    new_size = (max_width, int(height * ratio))
    web_logo = new_logo.resize(new_size, Image.Resampling.LANCZOS)
    web_path = r'C:\Srinath\git\netlify\netlify\public\images\deliwave-logo-small.png'
    web_logo.save(web_path)
    print(f"Web-optimized version: {web_path}")
