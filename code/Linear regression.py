from sklearn.linear_model import LinearRegression
import numpy as np
import matplotlib.pyplot as plt
import operator
import json
import time
import flask

def displayInputData(X, Y) :
    for n in range(X.size) :
        plt.plot(X[n], Y[n], 'o')
        plt.savefig('data/input_{}.png'.format(str(n).zfill(3)), bbox_inches='tight')    
		
def displayMean(X, Y) :
    mean_X = np.mean(X)
    mean_Y = np.mean(Y)
    
    for n in range(X.size) :
        plt.plot(X[n], Y[n], 'o')
    plt.plot(mean_X, mean_Y, 'D',  markersize=12, color='black')
    plt.savefig('data/mean.png', bbox_inches='tight')
    plt.show()
	
def displayLSM(X, Y) :
    f = open("data/equation.txt", "a")

    tmpX = []
    tmpY = []
    tmpX = np.array(tmpX)
    tmpY = np.array(tmpX)

    for i in range(X.size) :
        tmpX = np.append(tmpX, np.array(X[i]))
        tmpY = np.append(tmpY, np.array(Y[i]))
        line_fitter = LinearRegression()
        line_fitter.fit(tmpX.reshape(-1,1), tmpY)
        if(line_fitter.intercept_ < 0) :
            data = "y = %fx %f\n"%(line_fitter.coef_, -line_fitter.intercept_)
        else :
            data = "y = %fx + %f\n"%(line_fitter.coef_, line_fitter.intercept_)
        f.write(data)
        for n in range(X.size) :
            plt.plot(X[n], Y[n], 'o')
        plt.plot(tmpX, line_fitter.predict(tmpX.reshape(-1,1)))
        plt.savefig('data/distance_{}.png'.format(str(i).zfill(3)), bbox_inches='tight')
        plt.show()

    f.close()
	
def displayLinearFunction(X, Y) :
    line_fitter = LinearRegression()
    line_fitter.fit(X.values.reshape(-1,1), Y)
    
    for n in range(X.size) :
        plt.plot(X[n], Y[n], 'o')
    plt.plot(X,line_fitter.predict(X.values.reshape(-1,1)), color='dimgray')
    plt.savefig('data/output.png', bbox_inches='tight')
	
def displayPredictionResult(X, Y, x) :
    line_fitter = LinearRegression()
    line_fitter.fit(X.values.reshape(-1,1), Y)
    result = line_fitter.predict([[x]])
    
    for n in range(X.size) :
        plt.plot(X[n], Y[n], 'o')
    plt.plot(x, result, '*', markersize=24, color='crimson')
    plt.savefig('data/predict.png', bbox_inches='tight')
	
app = flask.Flask(__name__)

@app.route("/make", methods=["GET"])
def make() :
    # GET
    X = json.loads(flask.request.args.get('X'))
    Y = json.loads(flask.request.args.get('X'))
    x = int(flask.request.args.get('x'))
    s = time.time()
    
    displayInputData(X, Y)
    displayMean(X, Y)
    displayLSM(X, Y)
    displayLinearFunction(X, Y)
    displayPredictionResult(X, Y, x)
    
    print("{} s".format(time.time()-s))
    
    return "success"

if __name__ == "__main__" :
    app.run(host="0.0.0.0", port=5000)