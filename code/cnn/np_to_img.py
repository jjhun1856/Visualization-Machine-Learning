import numpy as np
from PIL import Image

#data = np.zeros( (512,512))
#data[256,256] = 255

data = np.loadtxt("horizon.txt", delimiter=' ')

img = Image.fromarray(data.astype('uint8'), 'L') #greyscale image

#np.savetxt("save2.txt", img, fmt='%d', delimiter=' ')

img.save('horizon.png')
img.show()