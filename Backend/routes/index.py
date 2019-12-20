from flask import Blueprint, render_template


indexBP = Blueprint('index', __name__)

@indexBP.route('/', methods=['GET'])
def index():
	return render_template('index.html')
	'''return (
	{
		"home": "umaid"
	}
	);'''