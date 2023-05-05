import React, { useState } from 'react';

function MessageInput({ onMessageSubmit, isLoading }) {
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onMessageSubmit(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type your message" value={message} onChange={handleChange} disabled={isLoading} />
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'}
            </button>
        </form>
    );
}

export default MessageInput;

