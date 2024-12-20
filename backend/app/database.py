from app.auth import get_password_hash
from config import SAMPLE_USERNAME, SAMPLE_PASSWORD

fake_users_db = {}

class FakeDB:
    def get_user(self, username):
        return fake_users_db.get(username)


def init_sample_user():
    global fake_users_db
    fake_users_db[SAMPLE_USERNAME] = {
            "username": SAMPLE_USERNAME,
            "full_name": "Mohit Gupta",
            "email": "test@server.com",
            "hashed_password": get_password_hash(SAMPLE_PASSWORD),
            "is_active": True,
        }

init_sample_user()
