# Inserir usuário com cURL

curl -X POST -H 'Content-Type: application/json' -d '{"email": "a@a", "password": "123"}' http://localhost:3001/user/register/

# Inserir javi com cURL

curl -X POST -H 'Content-Type: application/json' -d '{"name": "One Piece", "type": "anime", "genre": "shounen", "episodes": 800, "userEmail": "a@a"}' http://localhost:3001/javi/new/
