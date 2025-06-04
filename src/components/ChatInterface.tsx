"use client";

import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Loader2,
  MessageCircle,
  X,
  Minimize2,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export default function ChatInterface() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });
  const [inputMessage, setInputMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  const sendMessage = async (e: any, isRetry = false) => {
    e.preventDefault();

    if (!inputMessage.trim() || chatState.isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage.trim(),
      timestamp: new Date(),
    };

    // Only add user message if it's not a retry
    if (!isRetry) {
      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
        isLoading: true,
        error: null,
      }));
      setInputMessage("");
      setRetryCount(0);
    } else {
      setChatState((prev) => ({
        ...prev,
        isLoading: true,
        error: null,
      }));
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: isRetry
            ? chatState.messages[chatState.messages.length - 1]?.content
            : userMessage.content,
          history: chatState.messages.slice(0, -1), // Exclude the last message if retrying
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Server error: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          data.message ||
          data.response ||
          data.text ||
          "Maaf, tidak ada respons dari server.",
        timestamp: new Date(),
      };

      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }));
      setRetryCount(0);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Koneksi gagal";

      setChatState((prev) => ({
        ...prev,
        isLoading: false,
        error:
          retryCount < 2
            ? `${errorMessage} (Mencoba lagi...)`
            : `${errorMessage}. Periksa koneksi API Anda.`,
      }));

      // Auto retry up to 2 times
      if (retryCount < 2) {
        setRetryCount((prev) => prev + 1);
        setTimeout(() => {
          sendMessage(e, true);
        }, 2000);
      }
    }
  };

  const clearChat = () => {
    setChatState({
      messages: [],
      isLoading: false,
      error: null,
    });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="relative">
      {/* Background overlay when chat is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ease-in-out ${
            isMinimized
              ? "bottom-24 right-6 w-80 h-16"
              : "bottom-24 right-6 w-96 h-[32rem] md:w-96 md:h-[32rem] max-md:bottom-0 max-md:right-0 max-md:w-full max-md:h-full max-md:rounded-none"
          } bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden`}
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Gemini AI</h3>
                <p className="text-sm text-blue-100">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={minimizeChat}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 h-80 bg-gray-50">
                {chatState.messages.length === 0 && (
                  <div className="text-center text-gray-500 mt-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Bot className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-lg font-medium">Hai! Saya Gemini AI</p>
                    <p className="text-sm">
                      Bagaimana saya bisa membantu Anda hari ini?
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  {chatState.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-xs ${
                          message.role === "user"
                            ? "flex-row-reverse space-x-reverse"
                            : ""
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === "user"
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                              : "bg-white border-2 border-gray-200 text-gray-600"
                          }`}
                        >
                          {message.role === "user" ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                        </div>
                        <div
                          className={`rounded-2xl px-4 py-2 ${
                            message.role === "user"
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                              : "bg-white text-gray-800 border border-gray-200 shadow-sm"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">
                            {message.content}
                          </p>
                          <span className="text-xs opacity-70 mt-1 block">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {chatState.isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 text-gray-600 flex items-center justify-center">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2 shadow-sm">
                          <div className="flex items-center space-x-2">
                            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                            <span className="text-gray-500 text-sm">
                              Mengetik...
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {chatState.error && (
                    <div className="flex justify-center mb-4">
                      <div className="bg-red-50 border border-red-200 rounded-2xl px-4 py-3 text-red-700 text-sm max-w-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="flex-1">
                            <p className="font-medium">Koneksi Error</p>
                            <p className="text-xs mt-1">{chatState.error}</p>
                            <div className="flex space-x-2 mt-2">
                              {retryCount >= 2 && (
                                <button
                                  onClick={(e) => {
                                    setRetryCount(0);
                                    sendMessage(e, true);
                                  }}
                                  className="text-xs bg-red-100 hover:bg-red-200 px-2 py-1 rounded transition-colors"
                                >
                                  Coba Lagi
                                </button>
                              )}
                              <button
                                onClick={() =>
                                  setChatState((prev) => ({
                                    ...prev,
                                    error: null,
                                  }))
                                }
                                className="text-xs text-red-600 hover:text-red-800 underline"
                              >
                                Tutup
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex items-center space-x-2 mb-2">
                  <button
                    onClick={clearChat}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Clear Chat
                  </button>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ketik pesan..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    disabled={chatState.isLoading}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage(e);
                      }
                    }}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || chatState.isLoading}
                    className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}

          {isMinimized && (
            <div className="flex items-center justify-between p-4 h-full">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="font-medium">Gemini AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform hover:scale-110 ${
          isOpen
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        } text-white rounded-full shadow-2xl flex items-center justify-center`}
        style={{ width: "60px", height: "60px" }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}

        {/* Notification badge */}
        {!isOpen && chatState.messages.length > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {chatState.messages.filter((m) => m.role === "assistant").length}
          </div>
        )}
      </button>

      {/* Floating animation rings */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
          <div
            className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-30"
            style={{ width: "60px", height: "60px" }}
          ></div>
          <div
            className="absolute inset-0 rounded-full border-2 border-purple-400 animate-pulse opacity-20"
            style={{
              width: "80px",
              height: "80px",
              top: "-10px",
              left: "-10px",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
