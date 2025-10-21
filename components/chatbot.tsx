"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hello! I'm the DevOrbit assistant. How can I help you today? I can tell you about our services, projects, pricing, or connect you with our team.",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const botResponses: Record<string, string> = {
    services: "We offer Web Development, Mobile App Development, UI/UX Design, and AI Development services. Each is tailored to help startups and SMBs scale faster. Would you like to know more about a specific service?",
    projects: "We've successfully completed projects for various startups and SMBs. Our case studies show how we've helped businesses transform with cutting-edge technology. Visit our Case Studies page for more details!",
    pricing: "Our pricing is flexible and depends on your project requirements. For a custom quote tailored to your needs, I can connect you with our team. Would you like to schedule a free strategy session?",
    success: "We pride ourselves on delivering measurable ROI. Our clients have seen significant improvements in efficiency, user engagement, and revenue. Want to hear specific case studies?",
    contact: "You can reach us at hello@devorbit.co.uk or WhatsApp +44 7453 217283. We're located at 18 Fonthill Rd, Finsbury Park, London. Would you like to chat with a team member now?",
    team: "Our team consists of experienced developers, designers, and AI specialists. We're passionate about helping businesses succeed with technology. Would you like to connect with someone on our team?",
    default: "That's a great question! Could you be more specific? You can ask me about our services, projects, pricing, success rate, or contact information. Or would you prefer to chat with a team member?",
  }

  const getKeyword = (text: string): string => {
    const lowerText = text.toLowerCase()
    if (lowerText.includes("service")) return "services"
    if (lowerText.includes("project") || lowerText.includes("case stud")) return "projects"
    if (lowerText.includes("price") || lowerText.includes("cost")) return "pricing"
    if (lowerText.includes("success") || lowerText.includes("result")) return "success"
    if (lowerText.includes("contact") || lowerText.includes("reach")) return "contact"
    if (lowerText.includes("team") || lowerText.includes("people")) return "team"
    return "default"
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate bot thinking
    setTimeout(() => {
      const keyword = getKeyword(input)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[keyword],
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 800)
  }

  const handleLiveChat = () => {
    const message: Message = {
      id: Date.now().toString(),
      text: "Connecting you with our team...",
      sender: "bot",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, message])

    // Open WhatsApp
    window.open("https://wa.me/447453217283", "_blank")
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { scale: 0.9 } : { scale: 1 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing Badge */}
        {!isOpen && (
          <motion.div
            className="absolute top-0 right-0 w-3 h-3 bg-accent rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col"
            style={{ maxHeight: "600px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">DevOrbit Assistant</h3>
                  <p className="text-xs text-white/80">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                      message.sender === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-muted text-foreground rounded-bl-none border border-border"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex space-x-2"
                >
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-4 space-y-2">
              {/* Live Chat Button */}
              <Button
                onClick={handleLiveChat}
                variant="outline"
                className="w-full text-sm flex items-center justify-center space-x-2 hover:bg-primary/10"
              >
                <Phone className="h-4 w-4" />
                <span>Chat with Team (WhatsApp)</span>
              </Button>

              {/* Message Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="p-2 rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
