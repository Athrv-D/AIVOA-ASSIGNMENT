from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from models.complaint import Complaint
from workflow.graph import graph
from routers.complaint import router as complaint_router
Base.metadata.create_all(bind=engine)

app = FastAPI(title="AIVOA Complaint System", version="1.0.0")
app.include_router(complaint_router)

app.add_middleware( CORSMiddleware,
                   allow_origins=["http://localhost:5173"],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"],

)

@app.get("/")
def home():
    return{
        "message":"AIVOA Complaint Management API Running"
    }


