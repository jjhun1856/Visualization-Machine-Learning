import random
import numpy
import copy
import cv2
import flask
import operator
import json
import time

red = (0, 102, 255)
green = (0, 140, 0)
blue = (204, 0, 0)
white = (255, 255, 255)
yellow = (0, 204, 255)
cyan = (255, 255, 0)
magenta = (153, 0, 153)
black = (0, 0, 0)

# initialization : 600x400 
height = 450
width = 750
box = 50
img = numpy.zeros((width,height,3), numpy.int8)+255
font = cv2.FONT_HERSHEY_COMPLEX

chromo = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
new_chromo = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]

# 각 염색체의 적합도 평가
evalution = [0,0,0,0,0,0,0,0,0,0]
# 우성 유전자
dominant = [1,1,1,1,1,1,1]
# 돌연변이가 나타날 확률
mutation = 0.05
# 선택된 우성 염색체
select = [0,0] 
# 세대
gene = 0

def drawChromo(chromo, cnt) :
    img = numpy.zeros((width,height,3), numpy.int8)+255
    y1 = 20
    y2 = 70
    for i in range(10) :
        x1 = 20
        x2 = 70
        for j in range(7) :
            cv2.rectangle(img, (x1, y1), (x2, y2), black, 4)
            cv2.putText(img, str(chromo[i][j]),(x1+16,y1+35), font, 1,black,2,cv2.LINE_AA)
            x1 = x2
            x2 += box
        # Initialization
        cv2.imwrite('step5/generation_{}_{}.png'.format(cnt, str(i).zfill(3)), img)
        
        x1 = 20
        x2 = 70
        y1 = y1 + box + 20
        y2 = y2 + box + 20
		
def drawChromoOne(chromo, cnt) :
    img = numpy.zeros((width,height,3), numpy.int8)+255
    y1 = 20
    y2 = 70
    for i in range(10) :
        x1 = 20
        x2 = 70
        for j in range(7) :
            cv2.rectangle(img, (x1, y1), (x2, y2), blue, 4)
            cv2.putText(img, str(chromo[i][j]),(x1+16,y1+35), font, 1,blue,2,cv2.LINE_AA)
            x1 = x2
            x2 += box
        # Initialization
        if(i==9) :
            cv2.imwrite('step5/generation_{}_{}.png'.format(cnt, str(i).zfill(3)), img)
        
        x1 = 20
        x2 = 70
        y1 = y1 + box + 20
        y2 = y2 + box + 20
		
def drawChromoFit(chromo, fit, cnt) :
    img = numpy.zeros((width,height,3), numpy.int8)+255
    y1 = 20
    y2 = 70
    for i in range(10) :
        x1 = 20
        x2 = 70
        for j in range(7) :
            cv2.rectangle(img, (x1, y1), (x2, y2), black, 4)
            cv2.putText(img, str(chromo[i][j]),(x1+16,y1+35), font, 1,black,2,cv2.LINE_AA)
            x1 = x2
            x2 += box
        
        # Fitness evalutation
        cv2.putText(img, str(fit[i]),(x1+20,y1+35), font, 1,green, 2, cv2.LINE_AA)
        cv2.imwrite('step2/fitness_{}_{}.png'.format(cnt, str(i).zfill(3)), img)
        x1 = 20
        x2 = 70
        y1 = y1 + box + 20
        y2 = y2 + box + 20
		
def selectChromo(chromo, sel, fit, cnt) :
    img = numpy.zeros((width,height,3), numpy.int8)+255
    y1 = 20
    y2 = 70
    col = black
    for i in range(10) :
        x1 = 20
        x2 = 70
        if(sel[0]==i or sel[1]==i) :
            col = red
        else :
            col = black
            
        for j in range(7) :
            cv2.rectangle(img, (x1, y1), (x2, y2), col, 4)
            cv2.putText(img, str(chromo[i][j]),(x1+16,y1+35), font, 1,col, 2,cv2.LINE_AA)
            x1 = x2
            x2 += box
            
        cv2.putText(img, str(fit[i]),(x1+16,y1+35), font, 1,col, 2, cv2.LINE_AA)
        if(i==9) :
            cv2.imwrite('step3/selection_{}.png'.format(cnt), img)
        
        x1 = 20
        x2 = 70
        y1 = y1 + box + 20
        y2 = y2 + box + 20

def initialization() :
    # 최초 새대 생성
    for i in range(10) :
        for j in range(7) :
            chromo[i][j] = random.randint(0,9)

    print(gene,"Gen : ",chromo)
    tmp = []
    drawChromo(chromo, gene)
    gene += 1

def displayChromo() :
    # 완전체가 나올때까지 반복
    while(1) :
        # 적합도 평가
        for i in range(10) :
            m_sum = 0
            for j in range(7) :
                if chromo[i][j] > dominant[j] :
                    m_sum += chromo[i][j] - dominant[j]
                else :
                    m_sum += dominant[j] - chromo[i][j]
            evalution[i] = m_sum

        drawChromoFit(chromo, evalution, gene)

        # 목표 적합도가 있으면 종료
        done = False
        for i in range(10) :
            if evalution[i] == 0 :
                done = True
                break
        if done == True :
            break

        # 우성 염색체 2쌍 선택
        for i in range(2) :
            select[i] = numpy.argsort(evalution)[i]

        # 우성 염색체 출력  
        selectChromo(chromo, select, evalution, gene)

        # 염색체 교차 및 돌연변이
        y1 = 20
        y2 = 70
        img = numpy.zeros((width,height,3), numpy.int8)+255

        for i in range(10) :
            x1 = 20
            x2 = 70
            for j in range(7) :
                # 돌연변이 발생
                if random.random() < mutation :
                    new_chromo[i][j] = random.randint(0,9)
                    cv2.rectangle(img, (x1, y1), (x2, y2), magenta, 4)
                    cv2.putText(img, str(new_chromo[i][j]),(x1+16,y1+35), font, 1,magenta,2,cv2.LINE_AA)
                else :
                    new_chromo[i][j] = chromo[select[random.randint(0,1)]][j]
                    cv2.rectangle(img, (x1, y1), (x2, y2), black, 4)
                    cv2.putText(img, str(new_chromo[i][j]),(x1+16,y1+35), font, 1,black,2,cv2.LINE_AA)
                x1 = x2
                x2 += box
            if(i==9) :
                cv2.imwrite('step4/mutation_{}.png'.format(gene), img)
            x1 = 20
            x2 = 70
            y1 = y1 + box + 20
            y2 = y2 + box + 20

        # 리스트 깊은 복사
        chromo = copy.deepcopy(new_chromo)
        drawChromoOne(chromo, gene)    
        
        gene += 1

        if gene > 60 :
            break
			
app = flask.Flask(__name__)


@app.route("/make", methods=["GET"])
def make():
    # GET
    dominant = json.loads(flask.request.args.get('dominant'))
    mutation = int(flask.request.args.get('mutation'))
   
    s = time.time()
    
    initialization()
    displayChromo()
    
    print("{} s".format(time.time()-s))
    
    return "success"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)


