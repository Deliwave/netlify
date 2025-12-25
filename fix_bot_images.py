#!/usr/bin/env python3
from PIL import Image

# Convert Pudu2_no_BG.png to webp
try:
    img = Image.open(r'C:\Srinath\git\netlify\netlify\public\images\Pudu2_no_BG.png')
    
    # Create square version
    img.save(r'C:\Srinath\git\netlify\netlify\public\images\Pudu2_square.webp', 'WEBP', quality=85)
    
    # Create hero version
    img.save(r'C:\Srinath\git\netlify\netlify\public\images\Pudu2_hero.webp', 'WEBP', quality=85)
    
    print("✓ Pudu2 images created successfully")
except Exception as e:
    print(f"✗ Error with Pudu2: {e}")

# Convert Ketty_no_BG.png to webp
try:
    img = Image.open(r'C:\Srinath\git\netlify\netlify\public\images\Ketty_no_BG.png')
    
    # Create square version
    img.save(r'C:\Srinath\git\netlify\netlify\public\images\KettyBot_square.webp', 'WEBP', quality=85)
    
    # Create hero version
    img.save(r'C:\Srinath\git\netlify\netlify\public\images\KettyBot_hero.webp', 'WEBP', quality=85)
    
    print("✓ KettyBot images created successfully")
except Exception as e:
    print(f"✗ Error with KettyBot: {e}")

print("\nAll images regenerated!")
