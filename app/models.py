from db import db

game_players = db.Table(
    'game_players',
    db.Column('user_id', db.Integer, db.ForeignKey('user_game.id')),
    db.Column('game_id', db.Integer, db.ForeignKey('game.id'))
)


class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('user_game.id'))

    def __init__(self, author_id):
        self.author_id = author_id


class Statistics(db.Model):
    def __init__(self, player_id, game_id, selected_points, number_of_moves):
        self.player_id = player_id
        self.game_id = game_id
        self.selected_points = selected_points
        self.number_of_moves = number_of_moves

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    player_id = db.Column(db.Integer, db.ForeignKey('user_game.id'))
    game_id = db.Column(db.Integer, db.ForeignKey('game.id'))
    selected_points = db.Column(db.Integer, nullable=False)
    number_of_moves = db.Column(db.Integer, nullable=True)


class GameUser(db.Model):
    def __init__(self, name, password, email, role):
        self.name = name
        self.password = password
        self.email = email
        self.role = role

    __tablename__ = 'user_game'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String, nullable=False)
    password = db.Column(db.String)
    role = db.Column(db.String)
