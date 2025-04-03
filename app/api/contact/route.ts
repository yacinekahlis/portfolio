import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, subject, message, token } = await request.json();

    if (!name || !email || !subject || !message || !token) {
        return NextResponse.json({ message: 'Tous les champs sont requis.' }, { status: 400 });
    }

    // Validation du token reCAPTCHA
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY!;
    const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${recaptchaSecretKey}&response=${token}`
    });

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
        return NextResponse.json({ message: 'Échec de la vérification reCAPTCHA.' }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_EMAIL,
                pass: process.env.GMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_EMAIL,
            to: process.env.GMAIL_EMAIL,
            subject: `Formulaire de contact : ${subject}`,
            text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email envoyé avec succès !' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erreur lors de l\'envoi de l\'email.' }, { status: 500 });
    }
}
