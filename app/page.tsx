"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Globe, Users, Lightbulb, BarChart3, ArrowRight } from "lucide-react"

export default function Home() {
  const containerRef = useRef(null)

  // References for each section
  const openingRef = useRef(null)
  const leadershipRef = useRef(null)
  const changeRef = useRef(null)
  const visionRef = useRef(null)
  const pillar1Ref = useRef(null)
  const pillar2Ref = useRef(null)
  const pillar3Ref = useRef(null)
  const pillar4Ref = useRef(null)
  const implementationRef = useRef(null)
  const whyWorkRef = useRef(null)
  const whyMeRef = useRef(null)
  const closingRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Rotaract colors
  const rotaractBlue = "#0050a2"
  const rotaractGold = "#f7a81b"

  return (
    <div ref={containerRef} className="relative">
      {/* Opening Section - Slide 1 */}
      <section
        ref={openingRef}
        className="relative h-screen  flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${rotaractBlue} 0%, #003366 100%)`,
          color: "white",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Innovate, Elevate, Unite
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl text-yellow-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A New Era for Rotaract Mediterranean
          </motion.h2>
          {/* <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto text-white font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            &quot;<span className="font-bold">Rotaract Mediterranean</span> has
            achieved so much. But what if we dared to do{" "}
            <span className="font-bold text-yellow-300">more</span>? What if we
            reshaped the way we{" "}
            <span className="font-bold text-yellow-300">connect</span>,{" "}
            <span className="font-bold text-yellow-300">impact</span>, and{" "}
            <span className="font-bold text-yellow-300">lead</span>?
          </motion.p> */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-white"
          >
            <p>
              I am{" "}
              <span className="font-bold text-yellow-300">Safial Elaadmi</span>,
              and I am running for President because I believe in a{" "}
              <span className="font-bold">new era</span> for Rotaract
              Mediterranean—one where we{" "}
              <span className="font-bold text-yellow-300">innovate</span>,{" "}
              <span className="font-bold text-yellow-300">elevate</span>, and{" "}
              <span className="font-bold text-yellow-300">unite</span> like
              never before.
            </p>
          </motion.div> */}
        </motion.div>

        <motion.div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0, 0.1], [0, 100]),
          }}
        />

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          onClick={() => scrollToSection(leadershipRef)}
        >
          <ChevronDown className="h-10 w-10 text-white" />
        </motion.div>
      </section>

      {/* Leadership Section - Slide 2 */}
      <section
        ref={leadershipRef}
        className="relative min-h-screen flex items-center py-20"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/placeholder.svg?height=1080&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0.1, 0.2], [-50, 50]),
          }}
        />

        <div className="container mx-auto z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-10 text-center"
              style={{ color: rotaractBlue }}
            >
              Why I Am the Right Leader for This New Era
            </h2>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div
                  className="aspect-square relative rounded-full overflow-hidden border-4 max-w-[300px] mx-auto"
                  style={{ borderColor: rotaractGold }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/safia.jpg"
                      alt="Safia Elaadmi"
                      width={700}
                      height={700}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: rotaractBlue }}
                >
                  My Experience in Rotaract Mediterranean
                </h3>
                <ul className="space-y-4 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1" style={{ color: rotaractGold }}>
                      •
                    </div>
                    <p>
                      Last year, as{" "}
                      <span className="font-bold text-blue-600">
                        Marketing Coordinator
                      </span>
                      , I worked across{" "}
                      <span className="font-bold text-blue-600">
                        all committees
                      </span>
                      .
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1" style={{ color: rotaractGold }}>
                      •
                    </div>
                    <p>
                      I was the{" "}
                      <span className="font-bold text-blue-600">
                        bridge between teams
                      </span>
                      , handling all{" "}
                      <span className="font-bold text-blue-600">
                        official presentations, social media, and communication
                        strategies
                      </span>
                      .
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1" style={{ color: rotaractGold }}>
                      •
                    </div>
                    <p>
                      I{" "}
                      <span className="font-bold text-blue-600">
                        collaborated with every coordinator
                      </span>{" "}
                      and had to{" "}
                      <span className="font-bold text-blue-600">
                        ensure alignment between projects
                      </span>
                      .
                    </p>
                  </li>
                </ul> */}

                <div
                  className="p-4 rounded-lg bg-blue-50 border-l-4"
                  style={{ borderColor: rotaractBlue }}
                >
                  <p className="italic text-slate-800 text-2xl">
                    &quot;A good President must know every aspect of Rotaract
                    Mediterranean. Leadership is not just about vision it&apos;s
                    about knowing how things work and ensuring every member
                    feels valued.&quot;
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Need for Change - Slide 3 */}
      <section
        ref={changeRef}
        className="relative min-h-screen flex items-center py-20"
        style={{
          background: `linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)`,
        }}
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0.2, 0.3], [-50, 50]),
          }}
        />

        <div className="container mx-auto z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-10 text-center"
              style={{ color: rotaractBlue }}
            >
              The Need for Change
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: rotaractBlue }}
                >
                  The Challenges We Face
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-red-500">•</div>
                    <p>
                      <span className="font-bold text-red-600">
                        Engagement Gaps
                      </span>{" "}
                      Many clubs and Country Representatives (CRs) feel
                      disconnected.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-red-500">•</div>
                    <p>
                      <span className="font-bold text-red-600">
                        Project Continuity
                      </span>{" "}
                      Many initiatives start but don&apos;t last beyond one
                      term.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-red-500">•</div>
                    <p>
                      <span className="font-bold text-red-600">
                        Lack of Innovation
                      </span>{" "}
                      We need{" "}
                      <span className="font-bold text-red-600">new ideas</span>{" "}
                      to keep Rotaract Mediterranean growing.
                    </p>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: rotaractBlue }}
                >
                  The Opportunity
                </h3>
                <div className="flex items-center justify-center mb-6">
                  <div
                    className="p-4 rounded-full bg-yellow-100"
                    style={{ color: rotaractGold }}
                  >
                    <Globe className="h-16 w-16" />
                  </div>
                </div>
                <p className="text-lg text-center italic text-slate-800">
                  Together, we can redefine collaboration, making Rotaract
                  Mediterranean not just an organization but a global hub of
                  innovation and impact.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section - Slide 4 */}
      <section
        ref={visionRef}
        className="relative min-h-screen flex items-center py-20"
        style={{
          background: `linear-gradient(135deg, ${rotaractBlue} 0%, #003366 100%)`,
          color: "white",
        }}
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0.3, 0.4], [-50, 50]),
          }}
        />

        <div className="container mx-auto z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-white">
              My Vision – Innovate, Elevate, Unite
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  number: "1",
                  title: "ENGAGEMENT",
                  description:
                    "Making CRs and clubs more involved in decision-making.",
                  icon: <Users className="h-12 w-12" />,
                },
                {
                  number: "2",
                  title: "INNOVATION",
                  description:
                    "Bringing fresh ideas for sustainable, high-impact projects.",
                  icon: <Lightbulb className="h-12 w-12" />,
                },
                {
                  number: "3",
                  title: "SUSTAINABILITY",
                  description:
                    "Ensuring our work outlasts one presidential year.",
                  icon: <BarChart3 className="h-12 w-12" />,
                },
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-yellow-400/20 text-yellow-300">
                      {goal.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-block rounded-full w-8 h-8 bg-yellow-400 text-blue-900 font-bold flex items-center justify-center mb-2">
                      {goal.number}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-300">
                      {goal.title}
                    </h3>
                    <p>{goal.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillar 1 - Slide 5 */}
      <section
        ref={pillar1Ref}
        className="relative min-h-screen flex items-center py-20"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/placeholder.svg?height=1080&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0.4, 0.5], [-50, 50]),
          }}
        />

        <div className="container mx-auto z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-white text-sm font-bold mb-4"
              style={{ backgroundColor: rotaractBlue }}
            >
              PILLAR 1
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ color: rotaractBlue }}
            >
              Engaging and Empowering Country Representatives (CRs)
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-red-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-red-600">
                  The Problem
                </h3>
                <p className="text-slate-800">
                  CRs often lack clear direction and impact.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-green-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-green-600">
                  The Solution
                </h3>
                <p className=" text-slate-800">The CR Leadership Program</p>
              </motion.div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Clear Missions & Challenges – Monthly tasks tied to MedLove, MedNature, and MedCulture.",
                "CR Leadership Training – Helping them develop project management and negotiation skills.",
                "CR Med Impact Report – Tracking the success and contributions of each CR.",
                "Regional CR Collaboration – Connecting CRs for stronger joint projects.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start"
                >
                  <div className="mr-2 mt-1 text-green-500">✓</div>
                  <p className="text-gray-700">
                    <span className="font-bold" style={{ color: rotaractBlue }}>
                      {item.split("–")[0]}
                    </span>
                    – {item.split("–")[1]}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-4 rounded-lg"
              style={{
                backgroundColor: `${rotaractGold}20`,
                color: rotaractGold,
              }}
            >
              <div className="flex items-center">
                <div className="mr-3">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: `${rotaractGold}30` }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
                <p className="font-bold">
                  Outcome: CRs will not just be representatives they will be
                  active leaders shaping Rotaract Mediterranean&apos;s future.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pillar 2 - Slide 6 */}
      <section
        ref={pillar2Ref}
        className="relative min-h-screen flex items-center py-20 bg-gray-50"
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0.5, 0.6], [-50, 50]),
          }}
        />

        <div className="container mx-auto z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-white text-sm font-bold mb-4"
              style={{ backgroundColor: rotaractBlue }}
            >
              PILLAR 2
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ color: rotaractBlue }}
            >
              Strengthening Clubs & International Collaboration
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-red-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-red-600">
                  The Problem
                </h3>
                <p className="text-slate-800">
                  Many clubs feel disconnected from Rotaract Mediterranean.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-green-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-green-600">
                  The Solution
                </h3>
                <p className="text-slate-800">
                  Making Clubs the Heart of Our Impact
                </p>
              </motion.div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "MedBridge Program – Connecting clubs across borders for mentorship and project exchange.",
                "Rotaract Mediterranean Club Challenges – Engaging clubs in regional and international projects.",
                "Annual Mediterranean Impact Awards – Recognizing the most impactful club projects.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start"
                >
                  <div className="mr-2 mt-1 text-green-500">✓</div>
                  <p className="text-gray-700">
                    <span className="font-bold" style={{ color: rotaractBlue }}>
                      {item.split("–")[0]}
                    </span>
                    – {item.split("–")[1]}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-4 rounded-lg"
              style={{
                backgroundColor: `${rotaractGold}20`,
                color: rotaractGold,
              }}
            >
              <div className="flex items-center">
                <div className="mr-3">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: `${rotaractGold}30` }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
                <p className="font-bold">
                  Outcome: Clubs will feel more connected, recognized, and
                  motivated to engage internationally.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pillar 3 - Slide 7 */}
      <section
        ref={pillar3Ref}
        className="relative min-h-screen flex items-center py-20"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/placeholder.svg?height=1080&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0.6, 0.7], [-50, 50]),
          }}
        />

        <div className="container mx-auto z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-white text-sm font-bold mb-4"
              style={{ backgroundColor: rotaractBlue }}
            >
              PILLAR 3
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ color: rotaractBlue }}
            >
              Sustainable Impact with Med-Legacy Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-red-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-red-600">
                  The Problem
                </h3>
                <p className="text-slate-800">
                  Many projects start but don&apos;t continue beyond one year.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-green-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-green-600">
                  The Solution
                </h3>
                <p className="text-slate-800">Med-Legacy Projects</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-6"
            >
              <div className="flex items-start">
                <div className="mr-2 mt-1 text-green-500">✓</div>
                <p className="text-slate-800">
                  Long-Term Initiatives: Projects designed to outlast one
                  presidential term.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Med-Eco Leaders",
                  description:
                    "A sustainability initiative connecting clubs to environmental NGOs.",
                },
                {
                  title: "Med-Future Fund",
                  description:
                    "A funding incubator helping Rotaract clubs finance impactful projects.",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.2 * index }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4"
                  style={{ borderColor: rotaractBlue }}
                >
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: rotaractBlue }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-800">{project.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-4 rounded-lg"
              style={{
                backgroundColor: `${rotaractGold}20`,
                color: rotaractGold,
              }}
            >
              <div className="flex items-center">
                <div className="mr-3">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: `${rotaractGold}30` }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-slate-800">
                  Outcome: We don&apos;t just launch projects we ensure they
                  continue and grow.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pillar 4 - Slide 8 */}
      <section
        ref={pillar4Ref}
        className="relative min-h-screen flex items-center py-20 bg-gray-50"
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0.7, 0.8], [-50, 50]),
          }}
        />

        <div className="container mx-auto z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-white text-sm font-bold mb-4"
              style={{ backgroundColor: rotaractBlue }}
            >
              PILLAR 4
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-slate-800"
              style={{ color: rotaractBlue }}
            >
              Innovation: Smarter Systems for a Stronger Rotaract Mediterranean
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-red-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-red-600">
                  The Problem
                </h3>
                <p className="text-slate-800">
                  We need better tools to track and scale our impact.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-green-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-green-600">
                  The Solution
                </h3>
                <p className="text-slate-800">
                  Smart Systems for Smart Leadership
                </p>
              </motion.div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Rotaract Mediterranean Project Bank: A database of successful projects that clubs can adopt and expand.",
                "Clear & Transparent Reporting System: Monthly updates on activities, impact, and club engagement.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start"
                >
                  <div className="mr-2 mt-1 text-green-500">✓</div>
                  <p className="text-slate-800">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-4 rounded-lg"
              style={{
                backgroundColor: `${rotaractGold}20`,
                color: rotaractGold,
              }}
            >
              <div className="flex items-center">
                <div className="mr-3">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: `${rotaractGold}30` }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-slate-800">
                  Outcome: A more structured, effective, and transparent
                  Rotaract Mediterranean.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Implementation - Slide 9 */}
      <section
        ref={implementationRef}
        className="relative min-h-screen flex items-center py-20"
        style={{
          background: `linear-gradient(135deg, ${rotaractBlue} 0%, #003366 100%)`,
          color: "white",
        }}
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0.8, 0.9], [-50, 50]),
          }}
        />

        <div className="container mx-auto z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-white">
              How I Will Implement This Plan
            </h2>

            <div className="space-y-12">
              {[
                {
                  title:
                    " Before the Year Starts (Training & Preparation)",
                  items: [
                    "Leadership Bootcamp for the Board – Training on strategy and teamwork.",
                    "CR Orientation & Goal Setting – Ensuring CRs start the year with a clear roadmap.",
                    "Creating a Strong Communication Plan – Defining how we will engage clubs & stakeholders.",
                  ],
                },
                {
                  title:
                    " The First  3 months – Setting the Tone for Change",
                  items: [
                    "Launch The CR Leadership Framework.",
                    "Hold The First Rotaract Mediterranean Town Hall (open Q&A for Rotaractors).",
                    "Announce The Med-Legacy Initiative (long-term sustainable projects).",
                  ],
                },
                {
                  title: "Sustaining Impact Throughout the Year",
                  items: [
                    "Mid-year strategy review with the Board & CRs.",
                    "Strengthen club engagement through leadership & skill-building opportunities.",
                    "Expand Rotaract Mediterranean's network & partnerships for greater visibility.",
                  ],
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                    {step.title}
                  </h3>
                  <div className="space-y-3 pl-4 border-l-2 border-yellow-300">
                    {step.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <div className="mr-2 mt-1 text-yellow-300">✓</div>
                        <p className="text-white">
                          <span className="font-bold text-yellow-300">
                            {item.split("–")[0]}
                          </span>
                          <span className="text-gray-200">
                           {item.split("–")[1]}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Plan Will Work - Slide 10 */}
      <section
        ref={whyWorkRef}
        className="relative min-h-screen flex items-center py-20"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/placeholder.svg?height=1080&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0.9, 1.0], [-50, 50]),
          }}
        />

        <div className="container mx-auto z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-10 text-center"
              style={{ color: rotaractBlue }}
            >
              Why This Plan Will Work
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Builds on Existing Strengths",
                  description:
                    "It builds on what already exists  MedLove, MedNature, MedCulture stay strong, but with more structure.",
                  icon: (
                    <div
                      className="text-5xl font-bold"
                      style={{ color: rotaractGold }}
                    >
                      1
                    </div>
                  ),
                },
                {
                  title: "Measurable Change",
                  description:
                    "It brings real, measurable change Clear goals, accountability, and CR/Board engagement.",
                  icon: (
                    <div
                      className="text-5xl font-bold"
                      style={{ color: rotaractGold }}
                    >
                      2
                    </div>
                  ),
                },
                {
                  title: "Inclusive Approach",
                  description:
                    "It makes every Rotaractor feel involved More leadership & recognition opportunities.",
                  icon: (
                    <div
                      className="text-5xl font-bold"
                      style={{ color: rotaractGold }}
                    >
                      3
                    </div>
                  ),
                },
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-lg border-t-4"
                  style={{ borderColor: rotaractBlue }}
                >
                  <div className="flex justify-center mb-4">{reason.icon}</div>
                  <h3
                    className="text-xl font-bold mb-2 text-center"
                    style={{ color: rotaractBlue }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-center text-slate-800">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Me - Slide 11 */}
      <section
        ref={whyMeRef}
        className="relative min-h-screen flex items-center py-20 bg-gray-50"
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0.9, 1.0], [-50, 50]),
          }}
        />

        <div className="container mx-auto z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-10 text-center"
              style={{ color: rotaractBlue }}
            >
              Why Me? – The Right Leader for the Right Time
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  title: "My Experience",
                  description:
                    "I understand every committee, every challenge, and every opportunity.",
                  icon: (
                    <Users
                      className="h-10 w-10"
                      style={{ color: rotaractBlue }}
                    />
                  ),
                },
                {
                  title: "My Approach",
                  description: "I don't just want to lead—I want to empower.",
                  icon: (
                    <Lightbulb
                      className="h-10 w-10"
                      style={{ color: rotaractBlue }}
                    />
                  ),
                },
                {
                  title: "My Commitment",
                  description:
                    "I will make this a year of action not just ideas, but real, measurable results.",
                  icon: (
                    <BarChart3
                      className="h-10 w-10"
                      style={{ color: rotaractBlue }}
                    />
                  ),
                },
              ].map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: `${rotaractGold}20` }}
                    >
                      {quality.icon}
                    </div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-2 text-center"
                    style={{ color: rotaractBlue }}
                  >
                    {quality.title}
                  </h3>
                  {/* <p className="text-slate-800 text-center">{quality.description}</p> */}
                </motion.div>
              ))}
            </div>

            {/* <div className="space-y-4">
              {[
                "I will lead with transparency – regular updates & clear communication.",
                "I will listen & collaborate – CRs & clubs will have real decision-making power.",
                "I will make this a year of action – not just ideas, but real, measurable results.",
              ].map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start"
                >
                  <div className="mr-2 mt-1" style={{ color: rotaractGold }}>
                    👉
                  </div>
                  <p className="text-slate-800">{commitment}</p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Closing - Slide 12 */}
      <section
        ref={closingRef}
        className="relative min-h-screen flex items-center py-20"
        style={{
          background: `linear-gradient(135deg, ${rotaractBlue} 0%, #003366 100%)`,
          color: "white",
        }}
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0.9, 1.0], [-50, 50]),
          }}
        />

        <div className="container mx-auto z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white">
              The Future is Now
            </h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl mb-10"
            >
              &quot;Rotaract Mediterranean has always been about people,
              passion, and progress. This is our moment to take it to the next
              level.&quot;
            </motion.p>

            {/* <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl mb-12 text-yellow-300"
            >
              A vote for me is a vote for engagement, innovation, and real
              impact. Let&quot;s build this future together.
            </motion.p> */}

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              {/* <div className="bg-white p-4 rounded-lg">
                <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">QR Code</p>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Scan for video message
                </p>
              </div> */}

              {/* <div className="bg-white p-4 rounded-lg text-gray-800 max-w-xs">
                <h3 className="font-bold mb-2" style={{ color: rotaractBlue }}>
                  Your Role in This Vision
                </h3>
                <p className="text-sm">
                  Together, we can transform Rotaract Mediterranean. Join me in
                  creating a more engaged, innovative, and impactful
                  organization.
                </p>
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Rotaract Mediterranean Presidential
            Campaign
          </p>
        </div>
      </footer>
    </div>
  );
}

