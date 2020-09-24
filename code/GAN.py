import tensorflow.compat.v1 as tf
# import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
# import tensorflow.examples.tutorials.mnist.input_data
# import tensorflow_datasets as tfds

import flask
import operator
import json
import time

tf.disable_v2_behavior()
# mnist = tfds.load(name="mnist", split=tfds.Split.TRAIN)

from tensorflow.examples.tutorials.mnist import input_data
mnist = input_data.read_data_sets("MNIST_data", one_hot=True)

learning_rate = 0.001
total_epoch = 10
batch_size = 64
n_hidden = 128
n_input = 28*28
n_noise = 100

X = tf.placeholder(tf.float32, [None, n_input])
Z = tf.placeholder(tf.float32, [None, n_noise])
 
G_W1 = tf.Variable(tf.random_normal([n_noise, n_hidden], stddev=0.01))
G_b1 = tf.Variable(tf.zeros([n_hidden]))
G_W2 = tf.Variable(tf.random_normal([n_hidden, n_input], stddev=0.01))
G_b2 = tf.Variable(tf.zeros([n_input]))
 
D_W1 = tf.Variable(tf.random_normal([n_input, n_hidden], stddev=0.01))
D_b1 = tf.Variable(tf.zeros([n_hidden]))
D_W2 = tf.Variable(tf.random_normal([n_hidden, 1], stddev=0.01))
D_b2 = tf.Variable(tf.zeros([1]))

def generator(noise_z):
    hidden = tf.nn.relu(tf.matmul(noise_z, G_W1) + G_b1)
    output = tf.nn.sigmoid(tf.matmul(hidden, G_W2) + G_b2)
    return output
 

def discriminator(inputs):
    hidden = tf.nn.relu(tf.matmul(inputs, D_W1) + D_b1)
    output = tf.nn.sigmoid(tf.matmul(hidden, D_W2) + D_b2)
    return output
 

def get_noise(batch_size, n_noise):
    return np.random.normal(size=(batch_size, n_noise))

G = generator(Z)
D_gene = discriminator(G)
D_real = discriminator(X)
 
loss_D = tf.reduce_mean(tf.log(D_real) + tf.log(1 - D_gene))
loss_G = tf.reduce_mean(tf.log(D_gene))
 
D_var_list = [D_W1, D_b1, D_W2, D_b2]
G_var_list = [G_W1, G_b1, G_W2, G_b2]
 
train_D = tf.train.AdamOptimizer(learning_rate).minimize(-loss_D, var_list=D_var_list)
train_G = tf.train.AdamOptimizer(learning_rate).minimize(-loss_G, var_list=G_var_list)

with tf.Session() as sess:
    sess.run(tf.global_variables_initializer())
 
    total_batch = int(mnist.train.num_examples / batch_size)
 
    for epoch in range(total_epoch):
        loss_val_D, loss_val_G = 0, 0
 
        for i in range(total_batch):
            batch_xs, batch_ys = mnist.train.next_batch(batch_size)
            noise = get_noise(batch_size, n_noise)
 
            _, loss_val_D = sess.run([train_D, loss_D],
                feed_dict={X: batch_xs, Z: noise})
            _, loss_val_G = sess.run([train_G, loss_G],
                feed_dict={Z: noise})
 
        print('Epoch:', '%04d' % epoch,
            'D loss: {:.4}'.format(loss_val_D),
            'G loss: {:.4}'.format(loss_val_G))
 
#         if epoch == 0 or (epoch + 1) % 10 == 0:
        sample_size = 10
        noise = get_noise(sample_size, n_noise)
        samples = sess.run(G, feed_dict={Z: noise})

        fig, ax = plt.subplots(1, sample_size, figsize=(sample_size, 1))

        for i in range(sample_size):
            ax[i].set_axis_off()
            ax[i].imshow(np.reshape(samples[i], (28, 28)))

        plt.savefig('{}.png'.format(str(epoch).zfill(3)),
            bbox_inches='tight')

        plt.close(fig)
		
app = flask.Flask(__name__)


@app.route("/make", methods=["GET"])
def make():
    # GET
    k = int(flask.request.args.get('k'))
    x = json.loads(flask.request.args.get('x'))
    s = time.time()
    getResult(k, x)
    print("{} s".format(time.time()-s))
    # return flask.send_file("2.png", mimetype="image/png")
    return "success"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)