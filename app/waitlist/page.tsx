"use client"
import { joinWaitlist } from "@/api/join/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Analytics } from "@vercel/analytics/next"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
export default function Waitlist() {

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setMessage("");
    try {
      await joinWaitlist({ email });
      setMessage("Success! You've been added to the waitlist.");
      setEmail("");
    } catch (err: any) {
      setMessage(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="bg-black min-h-screen w-screen flex flex-col items-center justify-center font-sans text-white relative overflow-hidden">
      <Analytics></Analytics>

      {/* Background Image - Full Screen with smooth scale-in animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/hero4.png"
          alt="TalkCode Connect"
          fill
          className="object-cover opacity-80 translate-x-2"
          priority
          unoptimized
        />
        {/* Subtle gradient overlay to ensure the button and text stand out */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 mix-blend-overlay" />
      </motion.div>

      <motion.div
        className="absolute top-[15%] z-20 text-center px-4 w-full"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="text-2xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 mb-4 drop-shadow-2xl">
          Slate
        </h1>
      </motion.div>

      {/* Image and Button */}
      <motion.div
        className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 150 }}
      >
        <div className="group relative ">
          <div className="absolute -inset-4 rounded-full  opacity-40 blur-2xl transition duration-700 group-hover:opacity-80 group-hover:blur-3xl " />
          <form onSubmit={handleSubmit}>
            <div className="relative z-10 p-2 bg-white/10 backdrop-blur-md    flex items-center text-black">
              <Input
                type='email'
                value={email}
                placeholder='Email address'
                className='-me-px rounded-r-none border   border-black shadow-none focus-visible:z-1 bg-white/10'
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <Button className='rounded-l-none' type="submit" style={{ borderColor: "black", borderWidth: "2px", borderLeftWidth: "0" }} disabled={loading}>
                {loading ? "Joining..." : "Join"}
              </Button>
            </div>

          </form>
          {message && (
            <p className={`mt-4  text-wrap text-sm font-medium ${message.includes("Success") ? "text-neutral-600" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </div>

      </motion.div>


      {/* Catchy Header Content - Positioned above the hands */}
      <motion.div
        className="absolute bottom-[10%] z-20 text-center px-8 py-6 w-fit rounded-3xl  "
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-lg md:text-2xl text-neutral-600 font-semibold tracking-wide  font-heading max-w-2xl mx-auto  " style={{ fontFamily: "inter" }}>
          Stop solving in silence.
          <br className="hidden:md-block" />
          <span className="font-light">Practice with purpose.</span>
        </p>
      </motion.div>
    </div >
  )
}