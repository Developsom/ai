import React from 'react';

function ChatLog({ messages }) {
    return (
        <ul className="chat-log">
            {messages.map((msg, index) => (
                <li key={index} className={msg.isUser ? 'user-message' : 'ai-message'}>
                    {msg.text}
                </li>
            ))}
        </ul>
    );
}

export default ChatLog;

