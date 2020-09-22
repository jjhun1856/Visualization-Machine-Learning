import cv2
import numpy as np

img_path = '1.png'
img = cv2.imread(img_path, 0) # read image as grayscale. Set second parameter to 1 if rgb is required 
new = cv2.resize(img, dsize=(32, 32), interpolation=cv2.INTER_AREA)

img_reverted= cv2.bitwise_not(new)
new_img = img_reverted
np.savetxt("01.txt", new_img, fmt='%03d', delimiter='')
#np.savetxt("vertical.txt", new_img, fmt='%d', delimiter=' ')