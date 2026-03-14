'use client';
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const hearts = Array.from({ length: 12 }, (_, i) => ({
   id: i,
   x: Math.random() * 100,
   delay: Math.random() * 5,
   duration: 4 + Math.random() * 4,
   size: 12 + Math.random() * 16,
   opacity: 0.15 + Math.random() * 0.25,
}));

const FloatingHearts = () => (
   <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((h) => (
         <motion.div
            key={h.id}
            className="absolute text-primary"
            style={{ left: `${h.x}%`, bottom: -30 }}
            animate={{ y: [0, -window.innerHeight - 100], opacity: [0, h.opacity, 0] }}
            transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: "easeOut" }}
         >
            <Heart size={h.size} fill="currentColor" />
         </motion.div>
      ))}
   </div>
);

export default FloatingHearts;
