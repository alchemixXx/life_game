from flask import Flask

from game.routes import game

app = Flask(__name__)


def run_app():
    app.register_blueprint(game)

    return app


if __name__ == '__main__':
    run_app().run(debug=True)
