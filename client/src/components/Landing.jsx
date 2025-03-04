import { Button } from "./components/ui/button";
import {
  HandIcon,
  LanguagesIcon as TranslateIcon,
  SmartphoneIcon as MobileIcon,
  ArrowRightIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <HandIcon className="h-8 w-8" />
          <span className="text-2xl font-bold">sign.io</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <button className="hover:text-gray-300 transition-colors">
            Learn
          </button>
          <button className="hover:text-gray-300 transition-colors">
            Sandbox
          </button>
        </nav>
        <div className="flex gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button className="bg-purple-600 hover:scale-110 transition-all duration-200 hover:bg-purple-600">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Breaking barriers through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                AI sign language
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mx-auto max-w-2xl">
              Instantly translate between sign language and text with our
              advanced AI technology.
            </p>
            <div className="flex gap-4 pt-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
              >
                Try Demo
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 w-full max-w-3xl">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="AI Sign Language Demo"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-sm text-gray-300">
                  AI-powered sign language recognition in action
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-950 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<HandIcon className="h-10 w-10" />}
              title="Real-time Translation"
              description="Translate sign language to text and vice versa instantly with our advanced AI model."
            />
            <FeatureCard
              icon={<TranslateIcon className="h-10 w-10" />}
              title="Multiple Sign Languages"
              description="Support for ASL, BSL, and other major sign languages from around the world."
            />
            <FeatureCard
              icon={<MobileIcon className="h-10 w-10" />}
              title="Mobile Accessibility"
              description="Use sign.io on any device with a camera for on-the-go communication."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How It Works
        </h2>
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to break communication barriers?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of users who are already using sign.io to communicate
            effectively across sign language barriers.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
          >
            Get Started Free <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-gray-500 mt-4">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <HandIcon className="h-6 w-6" />
              <span className="text-xl font-bold">sign.io</span>
            </div>
            <div className="flex gap-8 text-gray-400 text-sm">
              <button href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button href="#" className="hover:text-white transition-colors">
                Terms of Service
              </button>
              <button href="#" className="hover:text-white transition-colors">
                Contact
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} sign.io. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for feature cards
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors">
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-full w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

// Component for step cards
function StepCard({ number, title, description }) {
  return (
    <div className="relative">
      <div className="text-6xl font-bold text-gray-800 absolute -top-8 -left-4 opacity-50">
        {number}
      </div>
      <div className="pt-8 pl-4">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
