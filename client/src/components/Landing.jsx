"use client";

import { useState } from "react";

import { Button } from "./components/ui/button";
import {
  HandIcon,
  LanguagesIcon,
  SmartphoneIcon,
  ArrowRightIcon,
  MenuIcon,
  XIcon,
  ChevronRightIcon,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto py-4 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HandIcon className="h-8 w-8 text-black" />
              <span className="text-2xl font-bold tracking-tight">sign.io</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                href="#features"
                className="text-slate-600 hover:text-black font-medium transition-colors"
              >
                Features
              </button>
              <button
                href="#how-it-works"
                className="text-slate-600 hover:text-black font-medium transition-colors"
              >
                How It Works
              </button>
              <button
                href="#"
                className="text-slate-600 hover:text-black font-medium transition-colors"
              >
                Learn
              </button>
              <Button
                variant="outline"
                className="ml-2 border-slate-200 text-slate-900 hover:bg-slate-100 hover:text-black"
              >
                Sign In
              </Button>
              <Button className="bg-black hover:bg-slate-800 text-white">
                Try Sandbox
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-slate-600 hover:text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-4 border-t border-slate-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-slate-600 hover:text-black font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-slate-600 hover:text-black font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#"
                className="text-slate-600 hover:text-black font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Learn
              </Link>
              <div className="pt-2 flex flex-col space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-center border-slate-200 text-slate-900 hover:bg-slate-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Button>
                <Button
                  className="w-full justify-center bg-black hover:bg-slate-800 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Try Sandbox
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-100 text-slate-800 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Now in public beta
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Breaking barriers through
              <span className="relative whitespace-nowrap">
                <span className="relative z-10"> AI sign language</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-3/4 h-[0.6em] w-full fill-slate-200"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
              </span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl mx-auto max-w-2xl">
              Instantly translate between sign language and text with our
              advanced AI technology. Break communication barriers and connect
              with everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-slate-800 text-white"
              >
                Get Started Free
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-200 text-slate-900 hover:bg-slate-100"
              >
                Try Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 w-full max-w-4xl">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-8 bg-slate-100 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="pt-8">
                <img
                  src="/placeholder.svg?height=500&width=800"
                  alt="AI Sign Language Demo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-slate-200 max-w-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <p className="text-sm font-medium">Live Translation</p>
                  </div>
                  <p className="text-sm text-slate-700">
                    AI-powered sign language recognition in action. Try it
                    yourself in our sandbox.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="mt-16 border-t border-slate-200 pt-8 w-full">
            <p className="text-sm text-slate-500 mb-6 text-center">
              Trusted by innovative organizations worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70">
              {["Microsoft", "Google", "Harvard", "WHO", "UNESCO"].map(
                (name) => (
                  <div key={name} className="flex items-center">
                    <span className="text-slate-400 font-semibold">{name}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-50 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-200 text-slate-800 mb-4">
              <span>Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Everything you need to communicate effectively
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Our AI-powered platform makes sign language translation accessible
              to everyone, anywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <FeatureCard
              icon={<HandIcon className="h-10 w-10" />}
              title="Real-time Translation"
              description="Translate sign language to text and vice versa instantly with our advanced AI model."
            />
            <FeatureCard
              icon={<LanguagesIcon className="h-10 w-10" />}
              title="Multiple Sign Languages"
              description="Support for ASL, BSL, and other major sign languages from around the world."
            />
            <FeatureCard
              icon={<SmartphoneIcon className="h-10 w-10" />}
              title="Mobile Accessibility"
              description="Use sign.io on any device with a camera for on-the-go communication."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="container mx-auto px-4 md:px-6 py-20 md:py-32"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-200 text-slate-800 mb-4">
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simple, powerful, and effective
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our three-step process makes communication seamless and accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <StepCard
            number="01"
            title="Capture"
            description="Point your camera at sign language gestures or input text for translation."
          />
          <StepCard
            number="02"
            title="Process"
            description="Our AI model analyzes the input and processes it through our neural network."
          />
          <StepCard
            number="03"
            title="Translate"
            description="Receive accurate translations in real-time, breaking communication barriers."
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 md:py-32 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-200 text-slate-800 mb-4">
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Loved by users worldwide
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              See what our community has to say about how sign.io has
              transformed their communication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="sign.io has completely changed how I communicate with my deaf colleagues. It's intuitive and accurate."
              author="Sarah Johnson"
              role="Project Manager"
            />
            <TestimonialCard
              quote="As someone learning ASL, this tool has been invaluable for practice and real-world application."
              author="Michael Chen"
              role="Student"
            />
            <TestimonialCard
              quote="The real-time translation has made our workplace more inclusive and accessible for everyone."
              author="Emily Rodriguez"
              role="DEI Coordinator"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-black rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 lg:p-16 text-center">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-800 text-slate-200 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Get Started Today
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to break communication barriers?
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                Join thousands of users who are already using sign.io to
                communicate effectively across sign language barriers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white hover:bg-slate-100 text-slate-900"
                >
                  Get Started Free <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-white hover:bg-slate-800"
                >
                  Schedule a Demo
                </Button>
              </div>
              <p className="text-slate-400 mt-6 flex items-center justify-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                No credit card required • Free 14-day trial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 md:py-20 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <HandIcon className="h-6 w-6" />
                <span className="text-xl font-bold">sign.io</span>
              </div>
              <p className="text-slate-600 mb-6">
                Breaking communication barriers through AI-powered sign language
                translation.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Sandbox
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} sign.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for feature cards
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="bg-slate-100 p-3 rounded-lg w-fit mb-5 text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
      <div className="mt-4 flex items-center text-sm font-medium text-slate-900">
        <span>Learn more</span>
        <ChevronRightIcon className="ml-1 h-4 w-4" />
      </div>
    </div>
  );
}

// Component for step cards
function StepCard({ number, title, description }) {
  return (
    <div className="relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="text-7xl font-bold text-slate-100 absolute -top-6 -left-2">
        {number}
      </div>
      <div className="relative z-10 pt-4">
        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-800 mb-4">
          Step {number}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}

// Component for testimonial cards
function TestimonialCard({ quote, author, role }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="mb-4 text-yellow-500 flex">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-slate-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium text-slate-900">{author}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
