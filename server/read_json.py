import json

def read_json(file):
    with open(file, "r") as target_file:
        data = json.load(target_file)
        return data



read_json('names.json')