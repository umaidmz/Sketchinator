from flask import Flask, request, Blueprint
from fastai.vision import (open_image, defaults, load_learner)
from io import BytesIO
import torch
from routes.randomize import sketchList


uploadBP = Blueprint('upload', __name__)
from . import learner



@uploadBP.route('/upload', methods=['POST'])
def upload():
	bytes = request.files['file'].read()
	img = open_image(BytesIO(bytes))
	_,_,losses = learner.predict(img)
	predictions = sorted(
            zip(learner.data.classes, map(float, losses)),
            key=lambda p: p[1],
            reverse=True
        )
	sketch = sketchList.pop(0);
	originalAccuracy = 0.0;

	for i in predictions:
		print(i)
		if(i[0] == sketch):
			originalAccuracy = i[1];

	return {
		"Original" :  sketch,
		"OriginalAccuracy" :  (originalAccuracy*100),
		"prediction" : predictions[0][0],
		"accuracy" : (predictions[0][1] * 100)
	}