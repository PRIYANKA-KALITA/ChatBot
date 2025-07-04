This is a simple AI-based chatbot using OpenAI's GPT model.

## Features
- Web UI for chatting
- Backend API with Flask
- Integration with OpenAI's ChatCompletion API

## Setup Instructions
1. Clone the repo
2. Install backend dependencies
```bash
cd backend
pip install -r requirements.txt
```
3. Create a `.env` file in `chatbot-project/` with the following:
```env
OPENAI_API_KEY=your_openai_key_here
```
4. Run the backend
```bash
python app.py
```
5. Open `frontend/index.html` in browser
