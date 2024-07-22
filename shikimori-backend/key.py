import os
from dotenv import load_dotenv

load_dotenv()  

KEY = os.getenv("KEY")
MONGO_URL = os.getenv("MONGO_URL")
EMAIL_PASS = os.getenv("EMAIL_PASS")
EMAIL_LOGIN = os.getenv("EMAIL_LOGIN")
EMAIL_SERVER = os.getenv("EMAIL_SERVER")
EMAIL_USER = os.getenv("EMAIL_USER")
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))