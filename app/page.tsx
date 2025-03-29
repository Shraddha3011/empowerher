"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import empowermentAnimation from "@/public/animations/empowerment.json";
import womenEntrepreneurs from "@/public/images/women.png";

export default function HomePage() {
  return (
    <div className="bg-[#F0F9FF]">
      {/* Hero Section - Dark Blue Gradient */}
      <section className="relative bg-gradient-to-r from-[#0A192F] to-[#1D4E89] text-white py-24 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <Lottie animationData={empowermentAnimation} className="absolute w-full h-full top-0 left-0 opacity-20" loop={true} />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4 text-[#B0E0FF]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            EmpowerHer 👩‍💼
          </motion.h1>

          <motion.h2
            className="text-lg md:text-2xl font-semibold mb-6 text-[#E0F7FF]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Dream of starting your own business? You're at the right place.  
            Turn Your Passion into a Thriving Business! 
          </motion.h2>

          <motion.p
            className="text-md md:text-lg font-light mb-8 max-w-2xl mx-auto text-[#B0D4FF]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            You have the <strong className="text-[#00B4D8]">talent, the skills, and the vision</strong>.  
            It's time to <strong className="text-[#00B4D8]">take charge and create your success!</strong> 
          </motion.p>

          <Link href="/onboarding">
            <motion.span
              className="bg-[#00B4D8] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#0096C7] transition-all cursor-pointer shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Start Your Journey 🚀
            </motion.span>
          </Link>
        </div>
      </section>

      {/* Steps to Start - Light Blue Section */}
      <section className="py-20 bg-[#E0F7FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-12 text-[#1D4E89]">
            🌟 How It Works – Simple Steps to Begin 🌟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-stretch">
            {[
              {
                title: "📌 Step 1: Learn",
                desc: "Short and easy courses—no difficult words, just practical lessons to help you grow.",
                link: "/learning",
              },
              {
                title: "📈 Step 2: Build Your Business",
                desc: "Get simple tools to manage your shop, money, and customers with ease.",
                link: "/business-tools",
              },
              {
                title: "🛍️ Step 3: Start Selling",
                desc: "List your products, connect with buyers, and grow step by step.",
                link: "/selling",
              },
            ].map((step, index) => (
              <Link href={step.link || "#"} key={index} className="block">
                <motion.div
                  className="bg-white border-2 border-[#B0E0FF] rounded-xl p-6 text-center hover:border-[#00B4D8] transition-all duration-300 transform cursor-pointer flex flex-col h-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-[#1D4E89]">{step.title}</h3>
                  <p className="text-[#1D4E89] flex-grow">{step.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Light Blue Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-12 text-[#1D4E89]">
            💡 What You Get  
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "📚 Easy Learning",
                desc: "No long courses. Just small, simple lessons to help you start your business.",
                link: "/learning",
              },
              {
                title: "📊 Simple Business Tools",
                desc: "Track sales, profits, and expenses—without any complicated software.",
                link: "/business-tools",
              },
              {
                title: "🤝 Strong Support",
                desc: "Connect with other women, share ideas, and get mentorship.",
                link: "/community",
              },
              {
                title: "🛍️ Sell with Confidence",
                desc: "List products, reach more buyers, and manage orders without stress.",
                link: "/market-linkage",
              },
              {
                title: "💰 Money & Loans",
                desc: "Find government schemes and easy ways to manage money.",
                link: "/payments",
              },
              {
                title: "📡 Offline Support",
                desc: "No internet? No problem! Use the app anytime, anywhere.",
                link: "/help",
              },
            ].map((feature, index) => (
              <Link href={feature.link} key={index} className="block">
                <motion.div
                  className="bg-[#F0F9FF] border-l-4 border-[#00B4D8] rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-[#1D4E89]">{feature.title}</h3>
                  <p className="text-[#1D4E89]">{feature.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-[#E0F7FF] text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#1D4E89]">✨ Real Women, Real Success Stories</h2>
        <p className="text-lg text-[#1D4E89] max-w-2xl mx-auto mb-12">
          Meet the inspiring women who turned their dreams into reality.  
          Your journey to success starts here!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {[
            {
              name: "Aarti - The Saree Queen",
              story: "Started with just 5 sarees, now exports worldwide! 📦",
              img: "/images/success1.jpg",
            },
            {
              name: "Fatima - Home Bakery Star",
              story: "Turned her passion into a ₹50,000/month business! 🍰",
              img: "/images/success2.jpg",
            },
            {
              name: "Nisha - The Eco-Friendly Warrior",
              story: "Built a 100% sustainable brand from scratch. 🌿",
              img: "/images/success3.jpg",
            },
          ].map((woman, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transform transition-all cursor-pointer border-2 border-[#B0E0FF]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={woman.img} alt={woman.name} className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-2 border-[#00B4D8]" />
              <h3 className="text-2xl font-semibold text-[#1D4E89]">{woman.name}</h3>
              <p className="text-[#1D4E89] mt-2">{woman.story}</p>
            </motion.div>
          ))}
        </div>

        <Link href="/stories">
          <motion.span
            className="mt-10 inline-block bg-[#00B4D8] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#0096C7] transition-all cursor-pointer shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Read More Success Stories ✨
          </motion.span>
        </Link>
      </section>

      {/* Join Our Community */}
      <section className="py-24 bg-[#1D4E89] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">🤝 Join Our Thriving Community</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Connect with other women entrepreneurs, share ideas, and get support.  
          Together, we build success!
        </p>
        <Link href="/community">
          <motion.span
            className="bg-white text-[#1D4E89] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#E0F7FF] transition-all cursor-pointer border-2 border-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Join the Network 💡
          </motion.span>
        </Link>
      </section>
    </div>
  );
}