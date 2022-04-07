import os
from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from database import db
from resources import Checklist_resource
from Errors import errors
app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

CORS(app)

db.init_app(app)

api = Api(app, errors=errors)

api.add_resource(Checklist_resource, '/checklist')

if __name__ == '__main__':
    if 'database.db' not in os.listdir():
        with app.app_context():
            db.create_all()
    app.run(debug=os.environ.get("FLASKDEBUG"))