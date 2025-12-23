(define (remove-background filename output-filename)
  (let* ((image (car (gimp-file-load RUN-NONINTERACTIVE filename filename)))
         (drawable (car (gimp-image-get-active-layer image))))
    
    ; Add alpha channel
    (gimp-layer-add-alpha drawable)
    
    ; Select by color (white background)
    (gimp-image-select-color image CHANNEL-OP-REPLACE drawable '(255 255 255))
    
    ; Set threshold for selection
    (gimp-context-set-sample-threshold 15.0)
    
    ; Delete selection
    (gimp-edit-clear drawable)
    
    ; Select none
    (gimp-selection-none image)
    
    ; Export as PNG
    (file-png-save RUN-NONINTERACTIVE image drawable output-filename output-filename 0 9 0 0 0 0 0)
    
    ; Clean up
    (gimp-image-delete image)))

(remove-background "C:/Srinath/git/netlify/netlify/public/images/Bella.png" "C:/Srinath/git/netlify/netlify/public/images/Bella-no-bg.png")
(gimp-quit 0)
