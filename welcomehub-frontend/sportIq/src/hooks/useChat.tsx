import { useState } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: new Date().toISOString(),
        role: 'user',
        content: input
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return { messages, input, handleInputChange, handleSubmit };
};
