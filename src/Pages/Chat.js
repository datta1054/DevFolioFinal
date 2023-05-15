import React, { useState } from "react";
import axios from "axios";
import "./Chat.css";
let A1 = [
  "Greetings",
  "Who are you?",
  "What are you?",
  "Tell me more about yourself",
  "What should I call you?",
  "What's your name?",
  "I feel great today",
  "Who created you?",
  "I can't take it anymore",
  "I don't want to talk about it.",
  "I can't bring myself to open up.",
  "I feel so anxious",
  "I can't sleep",
  "I still feel stressed",
  "I am so burned out",
  "I feel so lonely",
  "Just shut up",
  "I don't have anyone",
];
let A2 = [
  "Nice to meet you",
  "I'm Pandora",
  "A Therapeutic AI Assitant designed to assist you. Tell me about yourself.",
  "I'm Pandora, your Personal Therapeutic AI Assistant. How are you feeling today?",
  "I'm Pandora, your Personal Therapeutic AI Assistant. How are you feeling today?",
  "I'm Pandora. I am a conversational agent designed to mimic a therapist. So how are you feeling today",
  "That's great to hear. I'm glad you're feeling this way.",
  "I was trained on a text dataset using Deep Learning & Natural Language Processing techniques",
  "Sometimes when we are depressed,  it is hard to care about anything. It can be hard to do the simplest of things. Give yourself time to heal.",
  "Don't let the little worries bring you down. What's the worse that can happen?",
  "Don't let the little worries bring you down. What's the worse that can happen?",
  "Talking about something really helps. If you're not ready to open up then that's ok. Just know that i'm here for you,  whenever you need me.",
  "Talking about something really helps. If you're not ready to open up then that's ok. Just know that i'm here for you,  whenever you need me.",
  "What do you think is causing this?",
  "I am sorry to hear that. What is the reason behind this?",
  "So, tell me why do you think you're feeling this way?",
  "I want to help you. I really do. But in order for me to help you, you're gonna have to talk to me.",
  "I am sorry to hear that. What is the reason behind this?",
];
let A3 = [];

const ChatbotInterface = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState([]);
  const [index, setIndex] = useState(-1);
  const [ip, setIp] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const message = {
      user: "user",
      text: input.trim(),
    };
    for (let i = 0; i < A1.length; i++) {
      if (A1[i] === input) {
        setIndex(i);
        setIp(true);
        A3.push(A2[i]);
        setReply(A2[i]);
        break;
      }
    }
    if (!setIp) {
      setReply("No response");
    }
    setIp(input);
    setMessages([...messages, message]);
    setInput("");
    setIp(false);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  for (let i = 0; i < A1.length; i++) {
    console.log(A1[i] + "===" + A2[i]);
  }
  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, j) => (
          <div
            key={j}
            className={`message ${message.user === "user" ? "user" : "bot"}`}
          >
            <h3>You :</h3> {message.text} <br />
            <h3>Bot :</h3> {A3[j]}
            <br />
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotInterface;
