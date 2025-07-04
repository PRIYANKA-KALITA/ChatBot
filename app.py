from flask import Flask, request, jsonify
from utils.gpt_integration import get_gpt_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    print(f"User: {user_message}")  # Debug log
    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    response = get_gpt_response(user_message)
    print(f"Bot: {response}")  # Debug log
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
