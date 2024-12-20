import os
from dotenv import load_dotenv
load_dotenv()

def get_var(val, default=None):
    try:
        val = os.getenv(val)
        if val: return val
    except: pass
    return default

LOGGER_LEVEL = get_var('LOGGER_LEVEL', "debug")
SECRET_KEY = get_var('SECRET_KEY', "hello")
SAMPLE_USERNAME = get_var('SAMPLE_USERNAME', "mohit")
SAMPLE_PASSWORD = get_var('SAMPLE_PASSWORD', "Gupta@123")
