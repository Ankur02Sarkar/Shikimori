from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import user, chat

app = FastAPI()

app.include_router(user.router)
app.include_router(chat.router)

origins = [
    "http://localhost",                     
    "http://localhost:5173",                 
    "http://127.0.0.1",                      
    "http://127.0.0.1:5173",
    "https://shikimori-ai.vercel.app"             
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def index():
    return {"author": "Ankur", "webapp": "Shikimori"}
