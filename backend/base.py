import json
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager


api = Flask(__name__)
api.config["MONGO_URI"] = "mongodb://localhost:27017/test"
api.config["JWT_SECRET_KEY"] = "softwareEngineering"
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(api)
mongo = PyMongo(api)
    
@api.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    print(email + ' '+ password)
    if email != "test" or password != "test":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    response = {"access_token":access_token}
    return response

@api.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@api.route('/events', methods=['GET'])
def get_events():
    events_collection = mongo.db.events
    events = list(events_collection.find({}))
    for event in events:
        event["_id"] = str(event["_id"]) # Convert ObjectId to string
    return jsonify(events)

@api.route('/is-enrolled', methods=['GET'])
def is_enrolled():
    data = request.json
    userEmail = data['email']
    eventTitle = data['eventTitle']

    enrollment = mongo.db.user.find_one({"email": userEmail, "eventTitle": eventTitle})

    if enrollment:
        return jsonify({"isEnrolled": True})
    else:
        return jsonify({"isEnrolled": False})


@api.route('/enroll', methods=['POST'])
def enroll_event():
    data = request.get_json()  # get data from POST request
    try:
        # Insert data into MongoDB
        mongo.db.user.insert_one({
            "email": data['email'],
            "eventTitle": data['eventTitle']
        })
        response = {"status": "Data saved successfully"}
    except Exception as e:
        response = {"status": "Error", "message": str(e)}
    
    return jsonify(response)

@api.route('/profile')
@jwt_required()
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body