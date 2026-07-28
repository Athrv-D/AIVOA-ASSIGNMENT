from langgraph.graph import StateGraph,END

from workflow.state import ComplaintState
from ai.pdf_reader import extract_text_from_pdf
from ai.extractor import extract_complaint
from services.complaint_service import create_complaint
from ai.risk_analyzer import analyze_risk


def risk_node(state:ComplaintState):
    risk = analyze_risk(state["complaint_data"])
    state["risk_analysis"] = risk
    return state

def extract_node(state:ComplaintState):
    print("Received text:", repr(state["extracted_text"]))
    complaint = extract_complaint(state["extracted_text"])

    state["complaint_data"] = complaint
    print(complaint)

    return state
 

def read_pdf_node(state:ComplaintState):

    text = extract_text_from_pdf(state["file_path"])

    state["extracted_text"] = text

    return state


def save_node(state:ComplaintState):
    print(state["complaint_data"],'DATAA')
    data = state["complaint_data"].copy()
    data['ai_summary'] = state['risk_analysis']['summary']
    data['ai_risk'] = state["risk_analysis"]["risk_level"]

    complaint = create_complaint(state["db"],data)
    state["saved_data"] = complaint
    return state
workflow = StateGraph(ComplaintState)

workflow.add_node("read_pdf",read_pdf_node)
print("Read PDF Completed!")
workflow.add_node("extract",extract_node)
print("Complaint Extracted!")
workflow.add_node("risk",risk_node)
print("Risk Analysis Completed!")
workflow.add_node("save",save_node)
print("Database Saved!")

workflow.set_entry_point("read_pdf")

workflow.add_edge("read_pdf","extract")
workflow.add_edge("extract","risk")
workflow.add_edge("risk","save")
workflow.add_edge("save",END)

graph= workflow.compile()