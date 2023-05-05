import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import MessageInput from './components/MessageInput';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message) => {
    console.log(process.env.REACT_APP_OPENAI_API_KEY);
    setMessages([...messages, { text: message, isUser: true }]);
    setIsLoading(true);
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: message,
          max_tokens: 5,
        }),
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      const aiResponse = data.choices[0].text.trim();
      setMessages([...messages, { text: aiResponse, isUser: false }]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      // Handle error case
      setIsLoading(false);
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>OpenAI Chat</h1>
        </header>
        <div className="chat-container">
          <ChatLog messages={messages} />
          <MessageInput onMessageSubmit={handleSendMessage} isLoading={isLoading} />
        </div>
      </div>
  );
}

export default App;

