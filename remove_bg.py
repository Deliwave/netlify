#!/usr/bin/env python3
from PIL import Image
import numpy as np
from scipy import ndimage
from skimage import morphology, measure

# Load the original image
img = Image.open(r'C:\Srinath\git\netlify\netlify\public\images\Bella.png')

# Convert to RGBA
img = img.convert('RGBA')
data = np.array(img)

# Define white threshold
white = [255, 255, 255]
threshold = 40

# Create mask for white pixels
white_mask = np.all(np.abs(data[:,:,:3] - white) < threshold, axis=-1)

# Detect non-white pixels (the subject - black spots, etc.)
non_white_mask = ~white_mask

# Use morphological closing to connect nearby non-white regions
# This helps define the subject area
structure = morphology.disk(5)
subject_mask = ndimage.binary_dilation(non_white_mask, structure, iterations=3)

# Fill holes in the subject mask to include white areas between black spots
subject_mask = ndimage.binary_fill_holes(subject_mask)

# Remove small background regions that might be inside
subject_mask = morphology.remove_small_holes(subject_mask, area_threshold=1000)

# Set alpha: keep pixels in subject area, remove background
alpha = np.where(subject_mask, 255, 0).astype(np.uint8)
data[:, :, 3] = alpha

# Create result
result = Image.fromarray(data, 'RGBA')
result.save(r'C:\Srinath\git\netlify\netlify\public\images\Bella-no-bg.png')

print("Background removed successfully!")
print("Saved as: Bella-no-bg.png")
print("White areas between black spots preserved!")
