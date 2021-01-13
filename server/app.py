from flask import Flask
from flask_cors import CORS

app = Flask(__name__, static_folder='./build', static_url_path='/')
CORS(app)

import read_json

@app.route('/hello')
def say_hello_world():
    print(read_json.read_json('names.json'))
    print("hurraa!")
    return {'result': "yhteys on muodostettu bro"}