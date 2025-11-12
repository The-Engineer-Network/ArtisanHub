import React, { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: "customer", text: "Hi, are you available to sew a gown?" },
    { sender: "artisan", text: "Yes, I am! Please share your design." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "artisan", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-[500px]">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Messages</h2>
      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "artisan" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.sender === "artisan"
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
