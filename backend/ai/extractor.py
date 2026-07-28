import json
from groq import Groq
from config import settings

client = Groq(api_key=settings.GROQ_API_KEY)


def extract_complaint(text:str):
    prompt = f"""
Extract the complaint information.

Return ONLY valid JSON.PermissionError

Fields:

customer_name
customer_email
product_name
batch_number
complaint_type
description
severity

Rules:
- If a field is explicitly mentioned, extract it exactly.
- If a complaint_type or severity are not explicitly mentioned, infer them from complaint description.
- Never return null.
- If a value truly cannot be determined, return an empty string "".
- Return only JSON, with no markdown or explanations.

Complaint:

{text}
"""
    
    response  = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=[
            {
                "role":"user",
                "content":prompt
            }

        ],
        temperature=0
    )


    result = response.choices[0].message.content

    return json.loads(result)




