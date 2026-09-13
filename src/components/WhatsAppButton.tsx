"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+27836701391";
  const message = "Hello Raznet Solutions, I'm interested in your services!";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\\s+/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all hover:bg-[#128C7E]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </motion.a>
  );
}
