# 🚀 Prompt Tester

A full-stack AI Prompt Tester application built with **React.js**, **Node.js**, **Express.js**, and an LLM API. It provides a clean interface to submit prompts, adjust temperature, and receive AI-generated responses.

---

## 📌 Features

* 📝 Custom prompt input
* 🌡️ Adjustable temperature slider
* 🤖 AI-generated responses
* ⚡ Fast backend API
* 🔒 Secure API key management using `.env`
* 🎨 Responsive and modern UI
* ❌ Error handling for invalid requests

---

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js
* CORS
* Dotenv

### AI

* Groq API (Llama 3.3 70B Versatile)

---

## 📂 Project Structure

```
prompt-tester/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Haresh-kumar28/prompt-tester.git
```

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```
GROQ_API_KEY=your_api_key_here
PORT=5000
```

> Do **not** commit your `.env` file.

---

## 🚀 Future Improvements

* Chat history
* Multiple AI model support
* Markdown rendering
* Export responses
* Dark/Light mode
* User authentication

---

## 👨‍💻 Author

**Haresh Kumar**

* GitHub: https://github.com/Haresh-kumar28
* LinkedIn: *(Add your LinkedIn profile URL here)*

---

## ⭐ If you found this project useful

Please consider giving it a **star** on GitHub!
