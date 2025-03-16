"use client"
import Header from "../header/Header"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "../shadcn/ui/button"
import { HandIcon, LanguagesIcon, SmartphoneIcon, ArrowRightIcon, ChevronRightIcon } from "lucide-react"

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"
    window.scrollTo(0, 0)
  }, [])

  const { scrollY } = useScroll()
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const howItWorksRef = useRef(null)
  const testimonialsRef = useRef(null)
  const ctaRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 })
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, amount: 0.3 })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  // Parallax effect for hero section
  const heroY = useTransform(scrollY, [0, 500], [0, 150])

  // Floating animation for the hero image
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerCardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white text-neutral-900 p-10">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="container relative mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32"
          style={{ y: heroY }}
        >
          {/* Background Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated circles */}
            <motion.div
              className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-blue-100/30 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 15, 0],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-40 left-[5%] w-72 h-72 rounded-full bg-blue-50/40 blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, -10, 0],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            />

            {/* Geometric shapes */}
            <motion.div
              className="absolute top-[30%] left-[15%] w-16 h-16 rotate-45 border-2 border-blue-200/30"
              animate={{
                rotate: [45, 90, 45],
                y: [0, 20, 0],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-[20%] right-[25%] w-12 h-12 rounded-full border-2 border-blue-200/30"
              animate={{
                scale: [1, 1.2, 1],
                y: [0, -15, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
            />
            <motion.div
              className="absolute bottom-[35%] right-[10%] w-20 h-20 rotate-12 border-2 border-blue-200/30"
              animate={{
                rotate: [12, -12, 12],
                x: [0, 15, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            />

            {/* Dotted pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 h-full">
                {Array.from({ length: 120 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-blue-300/50 m-8"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      delay: Math.random() * 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Wavy lines */}
            <svg
              className="absolute bottom-0 left-0 w-full opacity-10"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 0.3,
                  d: [
                    "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  ],
                }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                fill="#3b82f6"
                strokeWidth="2"
                stroke="#3b82f6"
              />
            </svg>
          </div>
          <motion.div
            className="flex flex-col items-center text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <div className="space-y-6 max-w-3xl">
              <motion.div
                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-neutral-100 text-neutral-800 mb-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Now in public beta
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl text-black leading-tight font-semibold tracking-tight"
                variants={itemVariants}
              >
                Breaking Language barriers through
                <motion.div
                  className="relative inline-block whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="relative z-10 text-blue-600 ml-2"
                    animate={{
                      color: ["#2563eb", "#3b82f6", "#60a5fa", "#3b82f6", "#2563eb"],
                      textShadow: [
                        "0 0 0px rgba(37, 99, 235, 0)",
                        "0 0 15px rgba(37, 99, 235, 0.5)",
                        "0 0 0px rgba(37, 99, 235, 0)",
                      ],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    AI
                  </motion.span>
                  <motion.svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-3/4 h-[0.6em] w-full fill-blue-100"
                    preserveAspectRatio="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </motion.svg>
                </motion.div>
              </motion.h1>
              <motion.p className="text-[#0006] text-lg md:text-xl mx-auto max-w-2xl" variants={itemVariants}>
                Effectively learn ASL spelling through active learning with our advanced AI technology. Break
                communication barriers and connect with everyone.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center" variants={itemVariants}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 transition-all duration-150 text-white">
                    Get Started Free
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5 }}>
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </motion.span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="sandbox">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-neutral-200 text-neutral-900 hover:bg-neutral-100 transition-all duration-150"
                    >
                      Try Sandbox
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            {/* Hero Image */}
            <motion.div
              className="mt-12 w-full max-w-4xl"
              variants={fadeInUpVariants}
              style={{
                x: mousePosition.x * 20,
                y: mousePosition.y * 20,
                rotateX: mousePosition.y * 10,
                rotateY: mousePosition.x * -10,
              }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-200 shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-100 flex items-center px-4">
                  <div className="flex space-x-2">
                    <motion.div className="w-3 h-3 rounded-full bg-red-400" whileHover={{ scale: 1.2 }}></motion.div>
                    <motion.div className="w-3 h-3 rounded-full bg-yellow-400" whileHover={{ scale: 1.2 }}></motion.div>
                    <motion.div className="w-3 h-3 rounded-full bg-green-400" whileHover={{ scale: 1.2 }}></motion.div>
                  </div>
                </div>
                <div className="pt-8">
                  <div className="relative w-full h-full">
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0.8, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        repeatDelay: 5,
                      }}
                    >
                      <div className="absolute w-40 h-40 rounded-full bg-blue-500/10 animate-ping" />
                      <div className="absolute w-60 h-60 rounded-full bg-blue-500/5 animate-pulse" />
                    </motion.div>
                    <motion.div
                      className="grid grid-cols-3 gap-2 w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter, index) => (
                        <motion.div
                          key={letter}
                          className="relative aspect-square bg-neutral-50 rounded-lg overflow-hidden border border-neutral-200 flex items-center justify-center"
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 * index, duration: 0.5 }}
                          whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                        >
                          <motion.img
                            src={`/placeholder.svg?height=100&width=100&text=${letter}`}
                            alt={`ASL Letter ${letter}`}
                            className="object-cover w-3/4 h-3/4"
                            initial={{ filter: "blur(5px)" }}
                            animate={{ filter: "blur(0px)" }}
                            transition={{ duration: 0.5 }}
                          />
                          <motion.div
                            className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 * index, type: "spring" }}
                          >
                            {letter}
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 flex items-end p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md border border-neutral-200 max-w-md"
                    whileHover={{ scale: 1.05 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-green-500"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      ></motion.div>
                      <p className="text-sm font-medium text-blue-600">Live Translation Active</p>
                    </div>
                    <p className="text-sm text-neutral-700">
                      <span className="font-medium">AI is detecting:</span> American Sign Language alphabet in real-time
                      with 98% accuracy. Try it yourself in our sandbox.
                    </p>
                    <motion.div
                      className="mt-2 flex items-center text-xs text-blue-500 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <span>Open interactive demo</span>
                      <ChevronRightIcon className="ml-1 h-3 w-3" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            {/* Logos */}
            <motion.div className="mt-16 border-t border-neutral-200 pt-8 w-full" variants={fadeInUpVariants}>
              <motion.p className="text-sm text-neutral-500 mb-6 text-center" variants={itemVariants}>
                Trusted by innovative organizations worldwide
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70"
                variants={staggerCardVariants}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
              >
                {["University of Oregon", "University of Seattle", "Harvard", "WHO", "UNESCO"].map((name) => (
                  <motion.div
                    key={name}
                    className="flex items-center"
                    variants={cardVariants}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                  >
                    <span className="text-neutral-400 font-semibold">{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section id="features" ref={featuresRef} className="bg-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-left mb-16"
              variants={containerVariants}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
            >
              <div className="flex-col">
                <motion.h2 className="text-6xl md:text-6xl font-bold tracking-tight" variants={itemVariants}>
                  Communicate <br></br>effectively
                </motion.h2>
                <motion.p className="mt-4 text-lg text-neutral-600 max-w-2xl" variants={itemVariants}>
                  Our AI-powered platform makes sign language translation accessible to everyone, anywhere.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-3 gap-8 md:gap-12"
              variants={staggerCardVariants}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
            >
              <FeatureCard
                icon={<HandIcon className="h-10 w-10" />}
                title="Real-time Translation"
                description="Translate sign language to text and vice versa instantly with our advanced AI model."
                variants={cardVariants}
              />
              <FeatureCard
                icon={<LanguagesIcon className="h-10 w-10" />}
                title="Multiple Sign Languages"
                description="Support for ASL, BSL, and other major sign languages from around the world."
                variants={cardVariants}
              />
              <FeatureCard
                icon={<SmartphoneIcon className="h-10 w-10" />}
                title="Mobile Accessibility"
                description="Use Signa on any device with a camera for on-the-go communication."
                variants={cardVariants}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section id="how-it-works" ref={howItWorksRef} className="container mx-auto px-4 md:px-6 py-20 md:py-32">
          <motion.div
            className="text-left mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isHowItWorksInView ? "visible" : "hidden"}
          >
            <div className="flex-col">
              <motion.h2 className="text-6xl md:text-6xl font-bold tracking-tight" variants={itemVariants}>
                Simple<br></br>but Powerful
              </motion.h2>
              <motion.p className="mt-4 text-lg text-neutral-600 max-w-xl" variants={itemVariants}>
                Our three-step process makes communication seamless and accessible.
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={staggerCardVariants}
            initial="hidden"
            animate={isHowItWorksInView ? "visible" : "hidden"}
          >
            <StepCard
              number="01"
              title="Capture"
              description="Point your camera at any of the letters in the sign language alphabet."
              variants={cardVariants}
            />
            <StepCard
              number="02"
              title="Process"
              description="Our AI model analyzes the input and processes it through our machine learning model."
              variants={cardVariants}
            />
            <StepCard
              number="03"
              title="Translate"
              description="Receive accurate translations in real-time, reinforcing the learning experience."
              variants={cardVariants}
            />
          </motion.div>
        </motion.section>

        {/* Testimonials */}
        <motion.section ref={testimonialsRef} className="bg-white py-20 md:py-32 border-neutral-200">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-left mb-16"
              variants={containerVariants}
              initial="hidden"
              animate={isTestimonialsInView ? "visible" : "hidden"}
            >
              <div className="flex-col">
                <motion.h2 className="text-6xl md:text-6xl text-left font-bold tracking-tight" variants={itemVariants}>
                  Loved by <br></br>users worldwide
                </motion.h2>
                <motion.p className="mt-4 text-lg text-neutral-600 max-w-2xl" variants={itemVariants}>
                  See what our community has to say about how Signa has transformed their communication.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerCardVariants}
              initial="hidden"
              animate={isTestimonialsInView ? "visible" : "hidden"}
            >
              <TestimonialCard
                quote="Signa has completely changed how I communicate with my deaf colleagues. It's intuitive and accurate."
                author="Sarah Johnson"
                role="Project Manager"
                variants={cardVariants}
              />
              <TestimonialCard
                quote="As someone learning ASL, this tool has been invaluable for practice and real-world application."
                author="Michael Chen"
                role="Student"
                variants={cardVariants}
              />
              <TestimonialCard
                quote="The real-time translation has made our workplace more inclusive and accessible for everyone."
                author="Emily Rodriguez"
                role="DEI Coordinator"
                variants={cardVariants}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section ref={ctaRef} className="bg-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="max-w-4xl mx-auto bg-black rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-8 md:p-12 lg:p-16 text-center">
                <motion.div
                  className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-neutral-800 text-neutral-200 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isCtaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <motion.span
                    className="flex h-2 w-2 rounded-full bg-green-500 mr-2"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2 }}
                  ></motion.span>
                  Get Started Today
                </motion.div>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Ready to break communication barriers?
                </motion.h2>
                <motion.p
                  className="text-neutral-300 text-lg max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Join thousands of users who are already using Signa to communicate effectively across sign language
                  barriers.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-white hover:scale-110 duration-200 hover:bg-white ease-in-out transition-all text-black"
                    >
                      Get Started Free <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.p
                  className="text-neutral-400 mt-6 flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <motion.span
                    className="flex h-2 w-2 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2 }}
                  ></motion.span>
                  No credit card required • Free to use
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-white py-12 md:py-20 border-t border-neutral-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2 lg:col-span-1">
                <motion.div
                  className="flex items-center gap-2 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <HandIcon className="h-6 w-6" />
                  <span className="text-xl font-bold">Signa</span>
                </motion.div>
                <motion.p
                  className="text-neutral-600 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Breaking communication barriers through AI-powered sign language translation.
                </motion.p>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.a
                    href="#"
                    className="text-neutral-400 hover:text-neutral-900"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-neutral-400 hover:text-neutral-900"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-neutral-400 hover:text-neutral-900"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-4">Product</h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      Features
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      Pricing
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link to="/sandbox" className="text-neutral-600 hover:text-neutral-900">
                      Sandbox
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      Roadmap
                    </a>
                  </motion.li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-4">Resources</h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link to="howitworks" className="text-neutral-600 hover:text-neutral-900">
                      Documentation
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      Tutorials
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      Blog
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      Support
                    </a>
                  </motion.li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-4">Company</h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      About
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      Contact
                    </a>
                  </motion.li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-4">Legal</h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      Privacy Policy
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      Terms of Service
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      Cookie Policy
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="text-neutral-600 hover:text-neutral-900">
                      GDPR
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
            <motion.div
              className="pt-8 border-t border-neutral-200 text-center text-neutral-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p>© {new Date().getFullYear()} Signa. Eugene, OR.</p>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Component for feature cards
function FeatureCard({ icon, title, description, variants }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200 group"
      variants={variants}
    >
      <motion.div
        className="bg-neutral-100 p-3 rounded-lg w-fit mb-5 text-neutral-800 transition-colors duration-200"
        whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff", color: "#087fe7" }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
      <motion.div
        className="mt-4 flex items-center text-sm font-medium text-blue-600"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span>Learn more</span>
        <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5 }}>
          <ChevronRightIcon className="ml-1 h-4 w-4" />
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

// Component for step cards
function StepCard({ number, title, description, variants }) {
  return (
    <motion.div
      className="relative bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200"
      variants={variants}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <motion.div
        className="text-7xl font-bold text-neutral-100 absolute -top-6 -left-2"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3 }}
      >
        {number}
      </motion.div>
      <div className="relative z-10 pt-4">
        <motion.div
          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-neutral-100 text-neutral-800 mb-4"
          whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff", color: "#087fe7" }}
        >
          Step {number}
        </motion.div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.div>
  )
}

// Component for testimonial cards
function TestimonialCard({ quote, author, role, variants }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200"
      variants={variants}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <motion.div
        className="mb-4 text-yellow-500 flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            className="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </motion.div>
      <motion.p
        className="text-neutral-700 mb-6 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        "{quote}"
      </motion.p>
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <motion.div
          className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-medium"
          whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff", color: "#087fe7" }}
        >
          {author.charAt(0)}
        </motion.div>
        <div className="ml-3">
          <p className="font-medium text-neutral-900">{author}</p>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

