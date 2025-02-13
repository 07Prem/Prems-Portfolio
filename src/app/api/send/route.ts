import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

// Load API key safely
const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  console.error("❌ RESEND_API_KEY is missing. Set it in .env.local!");
  throw new Error("Missing API key: Set RESEND_API_KEY in .env.local");
}

const resend = new Resend(apiKey);

// Schema validation
const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

// Handle POST request
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    // Validate input using Zod
    const { success, data, error } = Email.safeParse(body);
    if (!success) {
      console.error("❌ Validation Error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }

    // Send email
    const { data: emailResponse, error: emailError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: data.fullName,
        email: data.email,
        message: data.message,
      }),
    });

    if (emailError) {
      console.error("❌ Email Error:", emailError);
      return new Response(JSON.stringify({ error: emailError.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
    });
  } catch (error) {
    console.error("❌ Server Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
