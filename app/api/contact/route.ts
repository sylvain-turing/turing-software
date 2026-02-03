import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactNotificationEmail from "@/emails/contact-notification";

const resend = new Resend('re_cMTsdk1c_7JmSreZQkrKGiDUqciGipUCg');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const recipientEmail = "contact@turing-software.com";
    
    if (!recipientEmail) {
      console.error("RECIPIENT_EMAIL not configured");
      return NextResponse.json(
        { error: "Configuration email manquante" },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <no-reply@turing-software.com>",
      to: [recipientEmail],
      subject: `Nouveau contact de ${name}`,
      react: ContactNotificationEmail({
        name,
        email,
        phone,
        message,
      })
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email envoyé avec succès", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}

