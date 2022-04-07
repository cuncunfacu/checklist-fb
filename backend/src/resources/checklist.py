from flask_restful import Resource, reqparse, marshal_with
import serializers
from controllers import (
    create_checklist,
    get_all_checklists,
    delete_checklist
)
from Errors import (DeleteChecklistNotFoundError, InternalServerError)

class Checklist_resource(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()

    @marshal_with(serializers.checklist)
    def post(self):
        self.parser.add_argument("name", type=str)
        self.parser.add_argument("tasks", type=list[dict[str,str]], location='json', required=True, nullable=False)
        args = self.parser.parse_args()

        return create_checklist(
            name=args.get("name"), 
            tasks=args.get("tasks")
            )
        
    @marshal_with(serializers.checklist)
    def get(self):
        return get_all_checklists()
    
    def delete(self):
        self.parser.add_argument("id", type=int)
        args = self.parser.parse_args()
        return delete_checklist(checklist_id=args.get("id"))

    def update(self):
        pass