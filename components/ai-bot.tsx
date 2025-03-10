"use client";

import { useState } from "react";
import { X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type AssistantProps = {
  section?: string;
  suggestions?: string[];
};

export function AIAssistant({ section, suggestions }: AssistantProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");

  const getSectionTitle = () => {
    if (!section) return " AI Cancer Assistant";
    return `Cancer AI Assistant\n${section} Support`;
  };

  const getMessage = () => {
    switch (section) {
          default:
        return "How can I help you today?";
    }
  };


  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 rounded-full h-12 w-12 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 shadow-xl border rounded-lg overflow-hidden">
      <CardHeader className="bg-blue-50 py-3 px-4 flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 mr-2 bg-blue-500">
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium whitespace-pre-line">
            {getSectionTitle()}
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-4 max-h-80 overflow-y-auto space-y-4">
        <div className="bg-blue-100 rounded-lg p-3 text-sm">{getMessage()}</div>

        
      
      </CardContent>
      <CardFooter className="p-2 border-t">
        <div className="flex w-full items-center space-x-2">
          <Input
            placeholder="Ask me anything..."
            className="text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button size="icon" className="shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
