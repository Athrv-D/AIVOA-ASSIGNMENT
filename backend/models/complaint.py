from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from database import Base

class Complaint(Base):
    __tablename__="complaints"

    id = Column(Integer, primary_key=True, index=True)

    customer_name= Column(String(100),nullable=True)

    product_name= Column(String(150), nullable=True)

    customer_email = Column(String(120),nullable=True)

    product_name = Column(String(120), nullable=True)

    batch_number = Column(String(80), nullable=True)

    complaint_type = Column(String(120), nullable=True)

    description = Column(Text,nullable=True)

    severity = Column(String(30), nullable=True)

    ai_summary = Column(Text, nullable=True)

    ai_risk = Column(String(50), nullable=True)

    status = Column(String(30), default="Open")

    created_at = Column(DateTime(timezone=True),server_default=func.now())
    