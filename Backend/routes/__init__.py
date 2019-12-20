from flask import Flask, render_template, url_for,request, Blueprint
from fastai.vision import load_learner
from pathlib import Path
import os

app = Flask(__name__)
path = Path('.')
learner = load_learner(path)
from pathlib import Path

from routes.index import indexBP
from routes.upload import uploadBP
from routes.randomize import randomBP

app.register_blueprint(indexBP)
app.register_blueprint(uploadBP)
app.register_blueprint(randomBP)
