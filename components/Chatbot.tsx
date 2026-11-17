'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Ruler, ArrowRight, Bot, User, ShieldCheck } from 'lucide-react';
import { ChatMessage, Product } from '@/types';

interface ChatbotProps {
  onOpenSizeGuide: () => void;
  onFilterUnder7000: () => void;
  onFilterStyle: (style: string) => void;
  onQuickViewProduct: (productSlug: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({
  onOpenSizeGuide,
  onFilterUnder7000,
  onFilterStyle,
  onQuickViewProduct,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'assistant',
      text: "Assalam-o-Alaikum! I am Aura, your personal stylist here to make your leather shopping effortless. 🌸\nHow can I help you discover your perfect maroon jacket or ideal fit today?",
      timestamp: 'Just now',
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickPrompts = [
    { label: '📏 Size Predictor (Bust size)', query: 'What size fits 36 inch bust in Pakistan?' },
    { label: '💰 Budget under Rs. 7,000', query: 'Show me your best maroon jackets under Rs. 7000' },
    { label: '🏍️ Best Biker Style', query: 'Which biker jacket is your bestseller?' },
    { label: '🚚 Open-Parcel & COD info', query: 'How does Cash on Delivery and parcel inspection work?' },
    { label: '👗 Styling with Kurtis & Jeans', query: 'How to style a maroon leather jacket with eastern kurti?' },
  ];

  const handleSendMessage = async (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, chatHistory: messages }),
      });

      const data = await res.json();
      
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || "I am here to help you choose the best maroon leather jacket!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: data.suggestedAction,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: "Our jackets range from **Rs. 5,490 to Rs. 8,950** with Cash on Delivery across Pakistan. Please feel free to open our interactive Pakistani size guide or ask about specific jackets!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action: ChatMessage['suggestedAction']) => {
    if (!action) return;
    if (action.type === 'open_size_guide') {
      onOpenSizeGuide();
    } else if (action.type === 'filter') {
      if (action.payload === 'under7000') {
        onFilterUnder7000();
      } else if (action.payload) {
        onFilterStyle(action.payload);
      }
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const renderFormattedText = (content: string, isUser: boolean) => {
    const lines = content.split('\n');
    return lines.map((line, lineIdx) => {
      const parts: React.ReactNode[] = [];
      const regex = /(\*\*.*?\*\*|\*.*?\*)/g;
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = regex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        const token = match[0];
        if (token.startsWith('**') && token.endsWith('**')) {
          parts.push(
            <strong
              key={`${lineIdx}-${match.index}`}
              className={isUser ? 'font-black text-white' : 'font-black text-brand-purple-950'}
            >
              {token.slice(2, -2)}
            </strong>
          );
        } else if (token.startsWith('*') && token.endsWith('*')) {
          parts.push(
            <em key={`${lineIdx}-${match.index}`} className="italic opacity-90">
              {token.slice(1, -1)}
            </em>
          );
        }
        lastIndex = regex.lastIndex;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      return (
        <span key={lineIdx} className={`block ${line === '' ? 'h-2' : 'leading-relaxed'}`}>
          {parts.length > 0 ? parts : line}
        </span>
      );
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="group relative flex items-center gap-2.5 bg-gradient-to-r from-brand-purple-600 via-brand-purple-700 to-brand-maroon-700 hover:from-brand-purple-700 hover:to-brand-maroon-800 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Open AI Shopping Chatbot"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-white rounded-full animate-ping" />
            )}
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-white rounded-full" />
            )}
          </div>
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            Aura Stylist AI
          </span>
          <span className="hidden md:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full text-amber-200">
            Ask Size & Budget
          </span>
        </button>
      )}

      {/* Expanded Chatbot Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-brand-beige-300 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-purple-900 via-brand-purple-800 to-brand-maroon-800 p-4 text-white flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-purple-500/40 border border-brand-purple-300 flex items-center justify-center text-amber-300 shadow-inner">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-sm font-bold text-white">Aura AI Stylist</h3>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-300 font-semibold bg-white/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-brand-beige-200">
                  Personal Leather Stylist • 24/7 Assistance
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 text-brand-beige-100 transition"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-brand-beige-50/60 text-xs">
            
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-brand-purple-100 text-brand-purple-800 flex items-center justify-center shrink-0 mt-0.5 border border-brand-purple-200">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] rounded-2xl p-3.5 space-y-2 shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-brand-purple-700 text-white rounded-tr-none'
                    : 'bg-white text-brand-purple-950 border border-brand-beige-200 rounded-tl-none'
                }`}>
                  <div className="space-y-0.5">
                    {renderFormattedText(msg.text, msg.sender === 'user')}
                  </div>

                  {/* Optional Interactive Action Pill */}
                  {msg.suggestedAction && (
                    <div className="pt-2">
                      <button
                        onClick={() => handleActionClick(msg.suggestedAction)}
                        className="w-full py-1.5 px-3 rounded-xl bg-brand-purple-50 hover:bg-brand-purple-100 border border-brand-purple-300 text-brand-purple-900 font-bold text-[11px] flex items-center justify-center gap-1.5 transition shadow-xs"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-brand-purple-600" />
                        <span>{msg.suggestedAction.label}</span>
                        <ArrowRight className="w-3 h-3 text-brand-purple-600" />
                      </button>
                    </div>
                  )}

                  <div className={`text-[9px] text-right ${msg.sender === 'user' ? 'text-brand-purple-200' : 'text-brand-beige-500'}`}>
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-brand-purple-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-brand-beige-600 text-xs italic">
                <div className="w-7 h-7 rounded-full bg-brand-purple-100 text-brand-purple-800 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white p-3 rounded-2xl border border-brand-beige-200 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-brand-purple-600 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-brand-purple-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-brand-purple-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick chips bar */}
          <div className="px-3 py-2 bg-brand-beige-100/80 border-t border-brand-beige-200 overflow-x-auto scrollbar-none flex gap-1.5 shrink-0">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p.query)}
                className="whitespace-nowrap bg-white hover:bg-brand-purple-50 border border-brand-beige-300 text-brand-purple-950 hover:text-brand-purple-700 text-[10px] font-semibold py-1 px-2.5 rounded-full transition shrink-0"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(input);
            }}
            className="p-3 bg-white border-t border-brand-beige-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder="Ask about size, budget in PKR, or delivery..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-brand-beige-50 border border-brand-beige-300 rounded-xl py-2 px-3 text-xs text-brand-purple-950 placeholder-brand-beige-600 focus:outline-none focus:ring-2 focus:ring-brand-purple-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-brand-purple-700 hover:bg-brand-purple-800 disabled:opacity-40 text-white transition cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};
