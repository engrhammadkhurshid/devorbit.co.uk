"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, X, Send, Bot, User, ExternalLink } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  isTyping?: boolean
}

interface QuickReply {
  text: string
  action: string
}

export function InteractiveChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hi! I'm DevBot, your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickReplies: QuickReply[] = [
    { text: "Our Services", action: "services" },
    { text: "Pricing Info", action: "pricing" },
    { text: "Get Quote", action: "quote" },
    { text: "Contact Us", action: "contact" },
  ]

  const faqResponses: Record<string, string> = {
    services:
      "We offer comprehensive tech solutions including:\n\n🎨 UI/UX Design\n💻 Web Development\n📱 Mobile App Development\n🤖 AI Development\n📈 Digital Marketing\n⚙️ Custom Software\n\nWhich service interests you most?",
    pricing:
      "Our pricing is tailored to your specific needs:\n\n💡 **Starter Projects**: £2,000 - £10,000\n🚀 **Growth Solutions**: £10,000 - £50,000\n🏢 **Enterprise**: £50,000+\n\nWould you like a personalized quote for your project?",
    quote:
      "I'd love to help you get a personalized quote! To provide the most accurate estimate, I'll need to know:\n\n• What type of project are you planning?\n• What's your timeline?\n• What's your approximate budget range?\n\nYou can also book a free 30-minute strategy session with our team!",
    contact:
      "Here's how you can reach us:\n\n📧 **Email**: hello@devorbit.com\n📞 **Phone**: +44 20 1234 5678\n📍 **Address**: 123 Tech Street, London EC2A 4DP\n⏰ **Hours**: Mon-Fri 9AM-6PM GMT\n\nWould you like to schedule a call or continue chatting here?",
    hello:
      "Hello! Great to meet you! I'm here to help you learn about DevOrbit's services and how we can help transform your business. What would you like to know?",
    help: "I can help you with:\n\n• Information about our services\n• Pricing and quotes\n• Booking consultations\n• Technical questions\n• Project timelines\n\nWhat specific information are you looking for?",
    timeline:
      "Our typical project timelines:\n\n⚡ **Simple websites**: 2-4 weeks\n🚀 **Complex web apps**: 6-12 weeks\n📱 **Mobile apps**: 8-16 weeks\n🤖 **AI solutions**: 4-8 weeks\n\nTimelines vary based on complexity and requirements. Want to discuss your specific project?",
    team: "Our team consists of:\n\n• Senior developers with 5+ years experience\n• UI/UX designers from top agencies\n• AI specialists and data scientists\n• Digital marketing experts\n• Project managers ensuring smooth delivery\n\nWe're based in London but work with clients globally!",
    process:
      "Our proven process:\n\n1️⃣ **Discovery Call** - Understanding your needs\n2️⃣ **Strategy & Planning** - Detailed project roadmap\n3️⃣ **Design & Development** - Building your solution\n4️⃣ **Testing & Launch** - Ensuring everything works perfectly\n5️⃣ **Support & Growth** - Ongoing maintenance and optimization\n\nReady to get started?",
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addMessage = (content: string, type: "user" | "bot") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const simulateTyping = () => {
    setIsTyping(true)
    setTimeout(
      () => {
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Keyword matching
    if (message.includes("service") || message.includes("what do you do")) {
      return faqResponses.services
    }
    if (message.includes("price") || message.includes("cost") || message.includes("budget")) {
      return faqResponses.pricing
    }
    if (message.includes("quote") || message.includes("estimate")) {
      return faqResponses.quote
    }
    if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("phone") ||
      message.includes("email")
    ) {
      return faqResponses.contact
    }
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return faqResponses.hello
    }
    if (message.includes("help") || message.includes("support")) {
      return faqResponses.help
    }
    if (message.includes("time") || message.includes("how long") || message.includes("duration")) {
      return faqResponses.timeline
    }
    if (message.includes("team") || message.includes("who") || message.includes("experience")) {
      return faqResponses.team
    }
    if (message.includes("process") || message.includes("how do you work") || message.includes("methodology")) {
      return faqResponses.process
    }
    if (message.includes("ai") || message.includes("artificial intelligence") || message.includes("machine learning")) {
      return "We specialize in AI development including:\n\n🧠 **Machine Learning Models**\n🤖 **Chatbots & Virtual Assistants**\n📊 **Data Analytics & Insights**\n🔄 **Process Automation**\n💬 **Natural Language Processing**\n\nWhat kind of AI solution are you interested in?"
    }
    if (message.includes("mobile") || message.includes("app")) {
      return "We build amazing mobile apps:\n\n📱 **Native iOS & Android**\n⚡ **React Native & Flutter**\n🔄 **Cross-platform solutions**\n🎨 **Custom UI/UX design**\n🔗 **API integrations**\n\nWhat type of mobile app are you planning?"
    }
    if (message.includes("web") || message.includes("website")) {
      return "We create powerful websites:\n\n⚡ **Fast, responsive designs**\n🛒 **E-commerce platforms**\n📊 **Custom web applications**\n🔍 **SEO optimization**\n🔒 **Security & performance**\n\nWhat kind of website do you need?"
    }

    // Default responses for unmatched queries
    const defaultResponses = [
      "That's a great question! Let me connect you with our team for a detailed answer. Would you like to book a free consultation?",
      "I'd love to help you with that! For specific technical questions, our experts can provide detailed guidance. Shall we schedule a call?",
      "Interesting! While I can help with general information, our specialists can give you detailed insights. Would you like to speak with them?",
      "Thanks for asking! For the most accurate information about your specific needs, I recommend chatting with our team. Ready to connect?",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    addMessage(inputValue, "user")
    setInputValue("")

    simulateTyping()

    setTimeout(() => {
      const response = getBotResponse(inputValue)
      addMessage(response, "bot")
    }, 1500)
  }

  const handleQuickReply = (action: string) => {
    const response = faqResponses[action]
    if (response) {
      addMessage(quickReplies.find((q) => q.action === action)?.text || action, "user")

      simulateTyping()
      setTimeout(() => {
        addMessage(response, "bot")
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground relative"
          >
            <MessageCircle className="h-6 w-6" />

            {/* Notification dot */}
            <motion.div
              className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="h-2 w-2 bg-white rounded-full" />
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-80 sm:w-96"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/devbot-avatar.png" alt="DevBot" />
                    <AvatarFallback className="bg-primary-foreground text-primary">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-sm">DevBot Assistant</h3>
                    <div className="flex items-center space-x-1 text-xs opacity-90">
                      <div className="h-2 w-2 bg-green-400 rounded-full" />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-muted/20">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                    >
                      <Avatar className="h-6 w-6 flex-shrink-0">
                        {message.type === "bot" ? (
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            <Bot className="h-3 w-3" />
                          </AvatarFallback>
                        ) : (
                          <AvatarFallback className="bg-muted text-muted-foreground">
                            <User className="h-3 w-3" />
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div
                        className={`rounded-lg px-3 py-2 text-sm ${
                          message.type === "user" ? "bg-primary text-primary-foreground" : "bg-background border"
                        }`}
                      >
                        <div className="whitespace-pre-line">{message.content}</div>
                        <div
                          className={`text-xs mt-1 opacity-70 ${
                            message.type === "user" ? "text-primary-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-background border rounded-lg px-3 py-2">
                        <div className="flex space-x-1">
                          <motion.div
                            className="h-2 w-2 bg-muted-foreground rounded-full"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                          />
                          <motion.div
                            className="h-2 w-2 bg-muted-foreground rounded-full"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                          />
                          <motion.div
                            className="h-2 w-2 bg-muted-foreground rounded-full"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="p-3 border-t bg-background">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickReplies.map((reply) => (
                    <Button
                      key={reply.action}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply.action)}
                      className="text-xs h-7"
                    >
                      {reply.text}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t bg-background">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 text-sm"
                  />
                  <Button onClick={handleSendMessage} size="sm" disabled={!inputValue.trim()} className="px-3">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* WhatsApp Integration */}
                <div className="mt-3 pt-3 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs bg-green-50 hover:bg-green-100 border-green-200 text-green-700"
                    asChild
                  >
                    <a
                      href="https://wa.me/447000000000?text=Hi%20DevOrbit,%20I%20was%20chatting%20with%20your%20bot%20and%20would%20like%20to%20speak%20with%20a%20human"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z" />
                      </svg>
                      <span>Continue on WhatsApp</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
