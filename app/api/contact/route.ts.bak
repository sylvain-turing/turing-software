import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactNotificationEmail from "@/emails/contact-notification";
import { getPostHogClient } from "@/lib/posthog-server";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

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
    const { data, error } = await getResend().emails.send({
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
      const posthog = getPostHogClient();
      posthog.capture({
        distinctId: email,
        event: "quote_request_failed",
        properties: {
          error_type: "resend_error",
          error_name: error.name,
        },
      });
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    const posthog = getPostHogClient();
    posthog.capture({
      distinctId: email,
      event: "quote_request_received",
      properties: {
        contact_name: name,
        contact_email: email,
        has_phone: !!phone,
        message_length: message.length,
        source: "contact_form",
      },
    });

    return NextResponse.json(
      { message: "Email envoyé avec succès", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur:", error);
    const posthog = getPostHogClient();
    posthog.capture({
      distinctId: "anonymous",
      event: "quote_request_failed",
      properties: {
        error_type: "server_error",
        error_message: error instanceof Error ? error.message : "unknown_error",
      },
    });
    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}

