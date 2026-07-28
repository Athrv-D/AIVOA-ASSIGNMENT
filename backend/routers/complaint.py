from fastapi import APIRouter, Depends
import os
from fastapi import UploadFile, File
from sqlalchemy.orm import Session
from ai.pdf_reader import extract_text_from_pdf
from workflow.graph import graph
from ai.extractor import extract_complaint
from services.complaint_service import create_complaint
from database import get_db
from models.complaint import Complaint
from schemas.complaint import ComplaintCreate, ComplaintResponse



router = APIRouter(prefix="/complaints",tags=['Complaints'])


@router.post("/",response_model=ComplaintResponse)

def create_complaint_route(complaint:ComplaintCreate,db:Session=Depends(get_db)):
    new_complaint = Complaint(**complaint.model_dump())


    db.add(new_complaint)
    db.commit()
    db.refresh(new_complaint)


    return new_complaint




@router.post("/upload")
async def upload_complaint(file:UploadFile=File(...),db:Session=Depends(get_db)):

    os.makedirs("uploads",exist_ok=True)
    file_path = f"uploads/{file.filename}"

    with open(file_path,"wb") as f:
        f.write(await file.read())
    result = graph.invoke(
        {
            "db":db,
            "file_path":file_path,
            "extracted_text":"",
            "complaint_data":{},
            "risk_analysis":{},
            "saved_data":{}
        }
    )

    # text = extract_text_from_pdf(file_path)

    # complaint_data = extract_complaint(text)

    # saved = create_complaint(db,complaint_data)

    return result["saved_data"]
    # return saved




from ai.extractor import extract_complaint

@router.get("/test-ai")
def test_ai():
    sample = """
Customer John Smith received damaged medicine.
Email john@gmail.com 
Batch B2123
Product Crocin

Packaging broken."""
    return extract_complaint(sample)

 

from ai.pdf_reader import extract_text_from_pdf

@router.get("/test-pdf")
def test_pdf():
    text = extract_text_from_pdf("sample.pdf")
    return {"text":text}