from numpy import *
import numpy as np
import matplotlib.pyplot as plt
import operator
 
 
def createDataSet():
    group = np.array([[1,2], [2,3], [2,4], [3,2], [4,1], [6,3], [4,5], [5,3], [7,2], [7,3], [6,6], [5,6]])
    labels = np.array([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]) # 0 = red, 1 = blue, 2 = yellow
    return group, labels
 
def classify(inX, dataSet, labels, k):
    dataSetSize = dataSet.shape[0]
    diffMat = tile(inX, (dataSetSize,1)) - dataSet
    sqDiffMat = diffMat**2
    sqDistances = sqDiffMat.sum(axis=1)
    distances = sqDistances**0.5
    sortedDistIndicies = distances.argsort()     
    classCount={}
          
    for i in range(k):
        voteIlabel = labels[sortedDistIndicies[i]]
        classCount[voteIlabel] = classCount.get(voteIlabel,0) + 1
 
    sortedClassCount = sorted(classCount.items(), key=operator.itemgetter(1), reverse=True)
 
    return sortedDistIndicies, sortedClassCount[0][0]

group, labels = createDataSet()
k = 1
x = [3,6]
sortedDistIndicies, result = classify(x, group, labels, k)

print("1. 데이터 셋(X ,Y), K값 설정")
size = (int)(group.size / group.ndim)
print("K = ", k)
plt.grid()
plt.xlim([0, 8])
plt.ylim([0, 8])
colormap = np.array(['r', 'b', 'y'])
plt.scatter(group[:,0], group[:,1], s = 150, c=colormap[labels])
plt.show()

print("\n2. 분류할 데이터 x :", x , "입력")
group = np.append(group, np.array([x]), axis=0)
labels = np.append(labels, 2)
plt.grid()
plt.xlim([0, 8])
plt.ylim([0, 8])
plt.scatter(group[:,0], group[:,1], s = 150, c=colormap[labels])
plt.show()

print("\n3. 모든 데이터 값과 x사이의 거리 계산"  )
for i in range(size):
  plt.xlim([0, 8])
  plt.ylim([0, 8])
  plt.scatter(group[:,0], group[:,1], s = 150, c=colormap[labels])
  line = plt.plot([group[size,0], group[i,0]], [group[size,1], group[i,1]])
  plt.setp(line, color='y', linewidth=2.0)
  plt.grid()
  plt.show()

G=1
print("중첩"  )
for i in range(size):
    for i in range(0, G):
      plt.xlim([0, 8])
      plt.ylim([0, 8])
      plt.scatter(group[:,0], group[:,1], s = 150, c=colormap[labels])
      line = plt.plot([group[size,0], group[sortedDistIndicies[i],0]], [group[size,1], group[sortedDistIndicies[i],1]])
      plt.setp(line, color='y', linewidth=2.0)
    plt.grid()
    plt.show()
    G = G + 1
    if G > size:
      break;



print("\n4. 거리가 짧은 순서로 K =", k, "개 만큼 선택")
plt.grid()
plt.xlim([0, 8])
plt.ylim([0, 8])
plt.scatter(group[:,0], group[:,1], s = 150, c=colormap[labels])
for i in range(k):
  line = plt.plot([group[size,0], group[sortedDistIndicies[i],0]], [group[size,1], group[sortedDistIndicies[i],1]])
  plt.setp(line, color='black', linewidth=2.0)
plt.show()

print("\n5. 선택된 Y값(색깔)중 다수 값으로 분류")
labels[size] = result
plt.grid()
plt.xlim([0, 8])
plt.ylim([0, 8])
plt.scatter(group[:,0], group[:,1], s = 150, c=colormap[labels])
plt.show()