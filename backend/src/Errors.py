class DeleteChecklistNotFoundError(Exception):
    pass
class InternalServerError(Exception):
    pass
class CreateChecklistError(Exception):
    pass
class GetChecklistError(Exception):
    pass

errors = {
    "InternalServerError": {
        "message": "Something went wrong",
        "status": 500
    },
    "DeleteChecklistNotFoundError" : {
        'message': "Delete error. Checklist not found",
        'status': 404
    },
    "CreateChecklistError" : {
        'message':"The checklist could not be created",
        'status': 500 },
    
    "GetChecklistError" : {
        'message':"An error occurred while getting the checklists",
        'status': 500 }
}