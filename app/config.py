DB_NAME = 'data.db'


class Config:
    # DB settings
    SECRET_KEY = 'd6a7dd5539ce23fc722be0e5190a1526'
    SQLALCHEMY_DATABASE_URI = f'sqlite:///{DB_NAME}'  # setting location to db