import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const botReply = {
      from: "bot",
      text: "Thanks for your message. Our support team will contact you shortly.",
    };

    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  return (
    <>
      
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 rounded-full shadow-xl hover:scale-105 transition"
      >
        💬
      </button>

    
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-[#0b1220] border border-white/10 rounded-xl shadow-2xl flex flex-col">
          <div className="p-4 border-b border-white/10 text-white font-semibold">
            Galaxy Support
          </div>

          <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[75%] px-3 py-2 rounded-lg ${
                  msg.from === "user"
                    ? "ml-auto bg-teal-500 text-white"
                    : "bg-white/10 text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white outline-none"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-teal-500 px-4 rounded-md text-white hover:bg-teal-400 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
