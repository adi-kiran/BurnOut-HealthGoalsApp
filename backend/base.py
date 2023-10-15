import json
import bcrypt
from flask_pymongo import PyMongo
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager


api = Flask(__name__)
api.secret_key = 'secret'
api.config['MONGO_URI'] = 'mongodb://127.0.0.1:27017/test'
api.config['MONGO_CONNECT'] = False
mongo = PyMongo(api)
api.config["JWT_SECRET_KEY"] = "softwareEngineering"
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(api)
mongo = PyMongo(api)
    
@api.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = mongo.db.user.find_one({"email": email})
    if (user is not None and (user["password"] == password)):
        access_token = create_access_token(identity=email)
        return jsonify({"message": "Login successful", "access_token":access_token})
    else:
        print("Invalid email or password")
        return jsonify({"message": "Invalid email or password"}, 401)

@api.route("/register", methods=['POST'])
def register():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    first_name = request.json.get('firstName', None)
    last_name = request.json.get('lastName', None)
    new_document = {
    "email": email,
    "password": password,
    "first_name": first_name,
    "last_name": last_name,
    }
    query = {
        "email": email,
    }
    print(last_name)
    try:
        inserted = mongo.db.user.update_one(query, {"$set": new_document}, upsert=True)
        if (inserted.upserted_id):
            response = jsonify({"msg": "register successful"})
        else:   
            print("User already exists")
            response = jsonify({"msg": "User already exists"})
    except Exception as e:
        response = jsonify({"msg": "register failed"})

    return response
    # """
    # register() function displays the Registration portal (register.html) template
    # route "/register" will redirect to register() function.
    # RegistrationForm() called and if the form is submitted then various values are fetched and updated into database
    # Input: Username, Email, Password, Confirm Password
    # Output: Value update in database and redirected to home login page
    # """
    # if not session.get('email'):
    #     form = RegistrationForm()
    #     if form.validate_on_submit():
    #         if request.method == 'POST':
    #             username = request.form.get('username')
    #             email = request.form.get('email')
    #             password = request.form.get('password')
    #             mongo.db.user.insert({'name': username, 'email': email, 'pwd': bcrypt.hashpw(
    #                 password.encode("utf-8"), bcrypt.gensalt())})
    #         flash(f'Account created for {form.username.data}!', 'success')
    #         return redirect(url_for('home'))
    # else:
    #     return redirect(url_for('home'))
    # return render_template('register.html', title='Register', form=form)

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

@api.route('/is-enrolled', methods=['POST'])
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