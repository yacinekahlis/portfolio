"use client"

import type React from "react"

import {useEffect, useState } from "react"
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { motion } from "framer-motion"

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    const loadRecaptcha = () => {
      if (typeof window !== "undefined" && window.grecaptcha) {
        setRecaptchaLoaded(true);
      }
    };

    if (typeof window !== "undefined") {
      window.grecaptcha?.ready(loadRecaptcha);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Génération du token reCAPTCHA
      const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action: "submit" });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, token }),
      });

      if (response.ok) {
        toast.success("Message envoyé !");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col"
          >
            <h3 className="mb-4 text-2xl font-bold text-slate-900">Restons en contact</h3>
            <p className="mb-6 text-slate-700">
              N&#39;hésitez pas à me contacter pour discuter de projets, d&#39;opportunités professionnelles ou simplement pour
              échanger sur le développement web.
            </p>

            <div className="space-y-4 flex-grow">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Email</h4>
                    <a href="mailto:yacinekahlis@outlook.com" className="text-blue-600 hover:underline">
                      yacinekahlis@outlook.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="rounded-full bg-green-100 p-3 text-green-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Téléphone</h4>
                    <a href="tel:418-255-2156" className="text-blue-600 hover:underline">
                      418-255-2156
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">LinkedIn</h4>
                    <a
                        href="https://linkedin.com/in/yacine-kahlis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                      linkedin.com/in/yacine-kahlis
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="rounded-full bg-slate-100 p-3 text-slate-600">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">GitHub</h4>
                    <a
                        href="https://github.com/yacinekahlis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                      github.com/yacinekahlis
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col"
          >
            <Card className="h-full">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Envoyez-moi un message</h3>
                <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                      Nom
                    </label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                      Sujet
                    </label>
                    <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sujet de votre message"
                        required
                    />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <div className="flex-grow flex flex-col">
                      <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Votre message..."
                          className="flex-grow min-h-[120px] max-h-[200px] overflow-auto"
                          required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full mt-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                      Envoi en cours...
                    </span>
                    ) : (
                        <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Envoyer
                    </span>
                    )}
                  </Button>
                </form>
                <script
                    src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                    async
                    defer
                ></script>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
  )
}

