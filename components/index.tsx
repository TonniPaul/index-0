'use client'

import { motion } from "framer-motion";
import { Heart, MessageCircle, Phone, Smile, Sparkles } from "lucide-react";
import Image from "next/image";

const HomePage = () => {
   return (
      <>
         <main className="">
            <section className="app-padding app-padding-y relative w-full flex items-center justify-center overflow-hidden">

               <Image src='/assets/hero-bg.jpg' alt="" fill sizes="100%" className="w-full h-full object-cover opacity-50" />
               <div className="absolute inset-0 bg-gradient-romantic opacity-60" />
               <motion.div
                  className="relative z-10 text-center px-6 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
               >
                  <motion.div
                     className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-5 py-2 mb-8 shadow-romantic"
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{ delay: 0.5, type: "spring" }}
                  >
                     <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-slow" />
                     <span className="text-sm font-body text-muted-foreground tracking-wide uppercase">
                        One Month Together
                     </span>
                     <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-slow" />
                  </motion.div>

                  <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                     <span className="text-gradient-love">Happy One Month</span>
                     <br />
                     <span className="text-foreground">My Love</span>
                  </h1>

                  <motion.p
                     className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-xl mx-auto"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.8, duration: 1 }}
                  >
                     30 days of laughter, butterflies, and a love story that&apos;s only just beginning.
                     Here&apos;s to us — and everything beautiful ahead.
                  </motion.p>

                  <motion.div
                     className="mt-10"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1.2 }}
                  >
                     <Heart className="w-8 h-8 text-primary fill-primary mx-auto animate-float" />
                  </motion.div>
               </motion.div>
            </section>

            <section className="py-24 px-6 bg-card">
               <div className="max-w-4xl mx-auto">
                  <motion.h2
                     className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                  >
                     <span className="text-gradient-love">Us, In Numbers</span>
                  </motion.h2>

                  <div className="flex flex-wrap justify-center gap-6 *:min-w-50">
                     {stats.map((s, i) => (
                        <motion.div
                           key={i}
                           className="text-center p-6 rounded-2xl bg-background shadow-romantic border border-border"
                           initial={{ opacity: 0, scale: 0.8 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1, type: "spring" }}
                           whileHover={{ y: -5 }}
                        >
                           <s.icon className="w-8 h-8 text-primary fill-primary mx-auto mb-3" />
                           <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
                              {s.value}<span className="text-gold-warm">{s.suffix}</span>
                           </div>
                           <div className="text-sm text-muted-foreground font-body mt-1">{s.label}</div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </section>

            <section className="py-24 px-6 bg-gradient-romantic relative overflow-hidden">
               <Sparkles className="absolute top-10 left-10 w-6 h-6 text-gold-warm opacity-30 animate-float" />
               <Sparkles className="absolute bottom-10 right-10 w-6 h-6 text-primary opacity-30 animate-float" style={{ animationDelay: "2s" }} />

               <motion.div
                  className="max-w-2xl mx-auto text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-6 animate-pulse-slow" />

                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                     <span className="text-gradient-love">A Note For You</span>
                  </h2>

                  <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-romantic border border-border relative">
                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black  text-white text-xs px-4 py-1 rounded-full font-body tracking-wider uppercase">
                        With All My Heart
                     </div>

                     <p className="text-lg md:text-xl font-body text-foreground leading-relaxed italic mb-6">
                        &quot;Somehow in just one month, you managed to make life feel different —
                        softer, louder with laughter, slightly more chaotic, and a lot more
                        beautiful.&quot;
                     </p>

                     <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
                        One month of me apologizing for things I probably didn&apos;t even know I did
                        wrong… and still apologizing again just to be safe. One month of you getting
                        mad at me every five seconds and me standing there wondering how I managed
                        to cause trouble again.
                     </p>

                     <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
                        One month of you wanting to be in my skin every chance you get, like
                        personal space suddenly became optional. One month of watching your funny
                        little dances that somehow make zero sense but still manage to make my
                        entire day better.
                     </p>

                     <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
                        One month of you scrolling all the way down to my ancient throwback pictures
                        just to troll me, add ridiculous sounds, and laugh like you discovered the
                        funniest thing on earth.
                     </p>

                     <p className="text-base font-body text-muted-foreground leading-relaxed mb-8">
                        But in the middle of all that — the teasing, the tiny fights, the laughter,
                        the random moments — you somehow became my favorite part of every day.
                        The person I look forward to talking to, annoying, laughing with, and
                        probably apologizing to again tomorrow.
                     </p>

                     <p className="text-base font-body text-muted-foreground leading-relaxed mb-8">
                        If this is what just one month feels like, then I&apos;m honestly excited for
                        all the messy, funny, beautiful months that are still ahead of us.
                     </p>

                     <div className="font-display text-2xl text-gradient-love font-semibold">
                        Always Yours ♡
                     </div>
                  </div>
               </motion.div>

               <footer className="py-12 px-6 bg-card text-center border-t border-white/4 mt-10">
                  <span className="flex gap-[1ch] w-fit mx-autop">
                     <span>Made with</span>
                     <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-slow" />
                  </span>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm ">
                     <span className="block">just for you (Aluko Esther Morolake)</span>
                  </div>
                  <p className="text-xs text-muted-foreground/60 mt-2 font-body">
                     One month down, forever to go 💕
                  </p>
               </footer>
            </section>


         </main>
      </>
   );
}

export default HomePage


const stats = [
   { icon: Heart, value: "30", label: "Days Together", suffix: "+" },
   { icon: MessageCircle, value: "∞", label: "Sweet Texts", suffix: "" },
   { icon: Phone, value: "720", label: "Hours Thinking of You", suffix: "+" },
   { icon: Smile, value: "10,000", label: "Times Seeing Your Smile", suffix: "+" },
   { icon: Smile, value: "10B", label: "Smiles You Caused", suffix: "+" },
];
