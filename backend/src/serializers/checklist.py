from flask_restful import fields

task = {
    "id": fields.Integer,
    "content": fields.String,
}

checklist = {
    "id": fields.Integer,
    "name": fields.String,
    "tasks": fields.List(fields.Nested(task))
}