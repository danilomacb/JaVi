TO INSERT USER:
curl -X POST -H 'Content-Type: application/json' -d '{"email": "a@a","password": "123"}' http://localhost:3001/user/register/

INFOS ON .env:
JWT_SECRET
SALT_ROUNDS
MONGO_URI
API_PORT
