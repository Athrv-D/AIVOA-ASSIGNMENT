from typing import TypedDict
from sqlalchemy.orm import Session


class ComplaintState(TypedDict):
    db:Session
    file_path:str
    extracted_text:str
    complaint_data:dict
    risk_analysis:dict
    saved_data:dict

