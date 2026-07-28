from pydantic import BaseModel, EmailStr
from datetime import datetime

class ComplaintCreate(BaseModel):
    customer_name:str
    customer_email:str
    product_name:str
    batch_number:str
    complaint_type:str
    description:str


class ComplaintResponse(BaseModel):
    id:int
    severity:str | None = None
    ai_summary:str | None = None
    ai_risk:str | None= None
    status:str
    created_at:datetime

    class Config:
        from_attributes= True



