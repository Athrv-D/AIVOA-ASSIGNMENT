from groq import Groq
from config import settings
import json

client = Groq(api_key=settings.GROQ_API_KEY)

def analyze_risk(complaint_data:dict):

    prompt = f"""
You are a pharmaceutical complaint analyst.

Analyze this complaint:
{complaint_data}
Return ONLY valid JSON in this format:
{{"summary":"...","risk_level:"...","recommeded_action":"...","reason":"..."}}
"""
    
    response  = client.chat.completions.create(model="openai/gpt-oss-120b", messages=[{
    "role":"user",
    "content":prompt
}])
    print(response.choices[0].message.content)
    return json.loads(response.choices[0].message.content)

 