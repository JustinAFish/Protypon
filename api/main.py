import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
from mongo_client import mongo_client
from bson import ObjectId, json_util

leads = mongo_client.leads
customers_collection = leads.customers

load_dotenv(dotenv_path="./.env.local")
DEBUG = bool(os.environ.get("DEBUG", True))

app = Flask(__name__)

# Configure CORS to allow all origins for development
CORS(app)

app.config["DEBUG"] = DEBUG


@app.route("/customers", methods=["POST"])
def customers():
    print("---test----")
    data = request.json  # Get the JSON data sent from the frontend
    print(data)
    enteredFirstName = data.get("enteredFirstName")
    enteredSurname = data.get("enteredSurname")
    enteredEmail = data.get("enteredEmail")
    enteredAware = data.get("enteredAware")
    customerRequestType = data.get("customerRequestType")

    # Here you can process the data as needed, for example, store it in the database
    new_customer = {
        "first_name": enteredFirstName,
        "surname": enteredSurname,
        "email": enteredEmail,
        "aware": enteredAware,
        "request_type": customerRequestType
    }

    inserted_customer = customers_collection.insert_one(new_customer)  # Insert into MongoDB
    new_customer["_id"] = inserted_customer.inserted_id  # Add the ObjectId to the document

    response = {
        "message": "Data received successfully",
        
    }

    return jsonify(response), 201  # Return a JSON response with a 201 status code
    
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)