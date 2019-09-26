from flask import Flask
from config import Config
from db import db


from game.routes import game

app = Flask(__name__)


def run_app():
    app.config.from_object(Config)
    app.register_blueprint(game)
    db.init_app(app)

    return app


if __name__ == '__main__':
    run_app().run(debug=True)
