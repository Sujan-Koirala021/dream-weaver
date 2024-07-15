# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mindsdb_sdk
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Load MindsDB connection and model
con = mindsdb_sdk.connect()
target_model_name = "dream_weaver_model_pro_max"  # Replace with your model's actual name
model = con.models.get(target_model_name)

class DreamRequest(BaseModel):
    dream_description: str

# CORS settings
origins = [
    "http://localhost",
    "http://localhost:3000",  # Replace with your React frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

@app.post("/api/predict")
async def predict_dream(request: DreamRequest):
    try:
        dream_description = request.dream_description

        prediction = model.predict({'dream_description': dream_description})
        dream_interpretation = prediction['dream_interpretation'].iloc[0]

        return {"dream_interpretation": dream_interpretation}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
