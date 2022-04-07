from database import db

class Checklist(db.Model):
    id = db.Column(db.Integer, primary_key=True) # cambiar a uuid
    name = db.Column(db.String)
    tasks = db.relationship('Task')

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True) # cambiar a uuid
    content = db.Column(db.String)
    checklist_id = db.Column(db.Integer, db.ForeignKey('checklist.id'))

