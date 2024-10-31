import { useState } from 'react';

// Define a type for messages, including the 'role' property
interface Message {
  id: number;
  user: string;
  content: string;
  role: 'User' | 'Bot'; // Define specific roles for type safety
}

// Define the return type for the useChat hook
interface UseChatReturn {
  messages: Message[];
  // Ensure sendMessage takes three parameters
  sendMessage: (content: string, user: string, role: 'User' | 'Bot') => void;
}

// useChat hook implementation
const useChat = (): UseChatReturn => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (content: string, user: string, role: 'User' | 'Bot') => {
    const newMessage: Message = {
      id: messages.length + 1,
      user,
      content,
      role,  // Include role
    };
    setMessages([...messages, newMessage]);
  };

  return { messages, sendMessage };
};

export default useChat;
