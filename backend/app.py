from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

students = {}

# Home
@app.route("/")
def home():
    return {"message": "Backend Running"}

# LOGIN
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    if data["username"] == "admin" and data["password"] == "admin123":
        return {"message": "Login Successful"}
    return {"message": "Invalid Credentials"}

# ADD STUDENT
@app.route("/students", methods=["POST"])
def add_student():
    data = request.json
    reg = data["register_no"]
    students[reg] = {
        "name": data["name"],
        "department": data["department"],
        "marks": {}
    }
    return {"message": "Student Added"}

# UPDATE MARKS
@app.route("/marks/<reg>", methods=["PUT"])
def update_marks(reg):
    data = request.json
    if reg in students:
        students[reg]["marks"] = data
        return {"message": "Marks Updated"}
    return {"message": "Student Not Found"}

# VIEW RESULT
@app.route("/results/<reg>", methods=["GET"])
def result(reg):
    if reg in students:
        marks = students[reg]["marks"]
        total = sum(marks.values())
        return {
            "name": students[reg]["name"],
            "register_no": reg,
            "marks": marks,
            "total": total
        }
    return {"message": "Student Not Found"}

if __name__ == "__main__":
    app.run(debug=True, port=5001)

