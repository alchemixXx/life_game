from flask import Blueprint, render_template

game = Blueprint('game', __name__)


@game.route("/")
def index():
    test = 'Hello from game'
    return render_template('layout.html', test=test)

