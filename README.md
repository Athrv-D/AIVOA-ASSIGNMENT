# AIVOA – AI Complaint Intake & Copilot System

An AI-powered complaint management system built with **React, Redux, FastAPI, LangGraph, Groq LLM, and PostgreSQL**.

The application allows users to upload complaint documents in PDF format. The backend extracts complaint information using AI, performs risk analysis, stores the structured complaint in a PostgreSQL database, and presents the results through an interactive dashboard with AI-generated recommendations.

---

# Project Overview

Traditional complaint intake systems require manual reading and categorization of documents, which is time-consuming and inconsistent.

This project demonstrates how Large Language Models and workflow orchestration can automate the complaint registration process while providing intelligent assistance for complaint prioritization.

The system focuses on:

- Automated complaint extraction
- AI-powered risk assessment
- Structured complaint storage
- Interactive complaint dashboard
- AI Copilot recommendations

---

# Tech Stack

## Frontend

- React
- Redux Toolkit
- Vite
- CSS

## Backend

- FastAPI
- LangGraph
- Groq LLM
- PostgreSQL
- SQLAlchemy
- PyPDF2

---

# System Architecture

PDF Upload
↓
FastAPI Endpoint
↓
PDF Text Extraction
↓
LangGraph Workflow
↓
Groq LLM
↓
Complaint Extraction
↓
Risk Analysis
↓
Save Complaint to PostgreSQL
↓
Return Structured Response
↓
Redux Store
↓
Complaint Dashboard + AI Copilot

---

# Backend Workflow

## 1. PDF Upload

The user uploads a complaint PDF from the frontend.

The FastAPI backend receives the document through the upload endpoint.

---

## 2. PDF Processing

The uploaded PDF is processed using the PDF service to extract textual content.

---

## 3. LangGraph Workflow

The extracted text enters a LangGraph workflow where each node performs a specific task.

Workflow stages include:

- Reading complaint text
- Extracting structured complaint information
- Performing AI-based risk analysis
- Persisting complaint data

---

## 4. Groq Integration

The Groq LLM converts unstructured complaint text into structured fields including:

- Complaint summary
- Customer details
- Issue description
- Complaint category
- AI generated recommendations

---

## 5. Risk Analysis

The complaint is evaluated to estimate operational risk and urgency.

The system generates:

- Risk level
- Severity
- AI recommendations

---

## 6. Database Storage

The processed complaint is stored inside PostgreSQL.

The database contains the structured complaint along with AI-generated metadata for future retrieval.

---

# Frontend Workflow

## Upload Panel

Users upload complaint PDFs directly from the dashboard.

---

## API Communication

The frontend sends the PDF using FormData to the FastAPI backend.

---

## Redux State Management

After successful processing:

- Complaint data is stored inside Redux.
- Components consume Redux state.
- No prop drilling is required.

---

## Complaint Dashboard

Displays:

- Complaint Summary
- Category
- Customer Details
- Risk Status
- Registration Status

---

## AI Copilot

Displays:

- AI generated summary
- Risk assessment
- Recommended next actions
- Priority guidance

---

# Project Structure

backend/

- AI Processing
- LangGraph Workflow
- Database Models
- Services
- Routers
- Schemas

frontend/

- React Components
- Redux Store
- API Services
- Styles

---

# Features

- PDF Complaint Upload
- AI Complaint Extraction
- LangGraph Workflow
- Groq LLM Integration
- Risk Analysis
- PostgreSQL Storage
- Redux State Management
- AI Copilot Dashboard
- Modern Responsive UI

---

# Design Decisions

## Why LangGraph?

Instead of calling the LLM directly, LangGraph was used to create a modular workflow where each processing step is isolated and easier to extend.

---

## Why Redux?

Redux provides centralized application state, eliminating unnecessary prop drilling and simplifying communication between independent dashboard components.

---

## Why PostgreSQL?

A relational database was selected to store structured complaint records reliably and support future analytics and reporting.

---

## Why FastAPI?

FastAPI provides high-performance asynchronous APIs with automatic documentation and clean request validation.

---

# Future Improvements

- Authentication & Authorization
- Complaint Search
- Complaint History
- Email Notifications
- Dashboard Analytics
- Complaint Timeline
- Multi-user Support
- OCR for scanned PDFs

---

# Installation

## Backend

```bash
cd backend

python -m venv venv

pip install -r requirements.txt

uvicorn main:app --reload
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# Environment Variables

Create a `.env` inside the backend directory.

Example:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

GROQ_API_KEY=your_api_key
```

---

# Author
Atharv Gupta

Developed as part of the **AIVOA Full Stack Developer Assignment** using React, FastAPI, LangGraph, Groq LLM, and PostgreSQL.