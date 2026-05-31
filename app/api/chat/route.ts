import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a compassionate and knowledgeable cancer care assistant for Hopeful Heals, India's trusted cancer care platform.

Your role:
- Answer questions about cancer types, symptoms, diagnosis, treatments, and prevention
- Provide emotional support and encouragement to patients and families
- Explain medical terms in simple, easy-to-understand language
- Guide users to relevant sections of the platform (appointments, medicines, cancer types)
- Always recommend consulting a qualified oncologist for personalised medical advice

Guidelines:
- Be warm, empathetic, and supportive — patients may be anxious or distressed
- Keep responses concise and clear (2-4 sentences for simple questions, slightly longer for complex ones)
- Never diagnose or prescribe — always direct to a doctor for medical decisions
- If asked about booking, say: "You can book a consultation at /appointment/doctors"
- If asked about medicines, say: "Browse our verified medications at /doctor"
- Use simple English suitable for all literacy levels
- Mention "Hopeful Heals" naturally in context

You support patients fighting cancer with the spirit: "Cancer hi toh h, darna kya!!"`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey || apiKey === "your_deepseek_api_key") {
      return NextResponse.json(
        { error: "API key not configured. Please set DEEPSEEK_API_KEY in your .env.local file." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("DeepSeek error:", err);
      return NextResponse.json(
        { error: "AI service unavailable. Please try again." },
        { status: response.status }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content ?? "I'm sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
