from database import db
from models import (
    Task,
    Checklist
)
from Errors import (
    CreateChecklistError,
    DeleteChecklistNotFoundError,
    GetChecklistError)

def create_checklist(name: str, tasks: list[dict[str,str]]) -> Checklist:
    try:
        new_checklist = Checklist(name= name)
        for task in tasks:
            task_content = task.get("content")
            new_checklist.tasks.append(Task(content= task_content))
        
        db.session.add(new_checklist)
        db.session.commit()
        return new_checklist

    except:
        raise CreateChecklistError

def delete_checklist(checklist_id: int) -> dict:
    checklist = Checklist.query.filter_by(id=checklist_id).first()
    if checklist:
        db.session.delete(checklist)
        db.session.commit()
        return {"message": f"Checklist with id {checklist.id} deleted"}
    else:
        raise DeleteChecklistNotFoundError

def get_all_checklists() -> list[Checklist]:
    try:
        return Checklist.query.all()
    except:
        raise GetChecklistError
