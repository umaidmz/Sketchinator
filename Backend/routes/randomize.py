from flask import  Blueprint
import random
from array import *

randomBP = Blueprint('randomGenerator', __name__)
from . import learner

sketchList = [];

@randomBP.route('/randomizer', methods=['GET'])
def randomGenerator():
	sketch = random.choice(learner.data.classes);
	sketchList.clear() 
	sketchList.append(sketch);
	print(sketchList);
	return {
		"Sketch" : sketch
	}
