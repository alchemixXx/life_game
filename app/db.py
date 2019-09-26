from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

from config import Config

db = SQLAlchemy()
engine = create_engine(Config.SQLALCHEMY_DATABASE_URI)
