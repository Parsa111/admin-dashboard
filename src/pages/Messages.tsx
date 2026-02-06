import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, Archive, Trash2, Mail, MailOpen, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { messagesData, type Message } from "@/lib/messages-data";

const MessagesPage = () => {
  const [messages, setMessages] = useState(messagesData);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Message | null>(null);

  const filtered = messages.filter(
    (m) =>
      m.sender.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase())
  );

  const unreadCount = messages.filter((m) => !m.read).length;

  const toggleStar = (id: string) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, starred: !m.starred } : m)));
  };

  const markRead = (id: string) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true } : m)));
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {selected && (
            <Button variant="ghost" size="icon" className="h-8 w-8 md:hidden" onClick={() => setSelected(null)}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          <h1 className="text-2xl font-bold text-foreground">Messages</h1>
          {unreadCount > 0 && (
            <Badge className="bg-primary text-primary-foreground">{unreadCount} new</Badge>
          )}
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-card overflow-hidden">
        <div className="flex h-[600px]">
          {/* Message List */}
          <div className={`w-full md:w-[380px] border-r border-border flex flex-col ${selected ? "hidden md:flex" : "flex"}`}>
            <div className="p-3 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search messages..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 bg-secondary border-0 h-9" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {filtered.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => { setSelected(msg); markRead(msg.id); }}
                  className={`w-full text-left px-4 py-3 border-b border-border transition-colors hover:bg-muted/50 ${selected?.id === msg.id ? "bg-muted/70" : ""} ${!msg.read ? "bg-primary/5" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">{msg.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${!msg.read ? "font-semibold text-foreground" : "text-foreground"}`}>{msg.sender}</span>
                        <span className="text-xs text-muted-foreground shrink-0 ml-2">{msg.time}</span>
                      </div>
                      <p className={`text-sm truncate ${!msg.read ? "font-medium text-foreground" : "text-muted-foreground"}`}>{msg.subject}</p>
                      <p className="text-xs text-muted-foreground truncate mt-0.5">{msg.preview}</p>
                    </div>
                    {!msg.read && <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Message Detail */}
          <div className={`flex-1 flex flex-col ${selected ? "flex" : "hidden md:flex"}`}>
            {selected ? (
              <AnimatePresence mode="wait">
                <motion.div key={selected.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">{selected.avatar}</div>
                      <div>
                        <p className="font-semibold text-foreground">{selected.sender}</p>
                        <p className="text-xs text-muted-foreground">{selected.time}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleStar(selected.id)}>
                        <Star className={`h-4 w-4 ${messages.find(m => m.id === selected.id)?.starred ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Archive className="h-4 w-4 text-muted-foreground" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="h-4 w-4 text-muted-foreground" /></Button>
                    </div>
                  </div>
                  <div className="flex-1 p-6 overflow-y-auto">
                    <h2 className="text-lg font-semibold text-foreground mb-4">{selected.subject}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selected.preview}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                      This is a preview of the message content. In a production application, the full message body would be displayed here with rich formatting, attachments, and reply threading.
                    </p>
                  </div>
                  <div className="p-4 border-t border-border">
                    <Input placeholder="Type a reply..." className="bg-secondary border-0" />
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <Mail className="h-12 w-12 text-muted-foreground/30 mb-3" />
                <p className="text-sm text-muted-foreground">Select a message to read</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MessagesPage;
