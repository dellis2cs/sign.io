"use client";

import Header from "@/components/header/Header";
import { Button } from "../shadcn/ui/button";
import {
  BrainCircuitIcon,
  DatabaseIcon,
  HandIcon,
  LightbulbIcon,
  LineChartIcon,
  MicroscopeIcon,
  ArrowRightIcon,
  GitBranchIcon,
  BarChart4Icon,
  CameraIcon,
  CodeIcon,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-100 text-slate-800 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              The Technology
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              How Our ASL Recognition
              <span className="relative whitespace-nowrap">
                <span className="relative z-10"> Works </span>
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
              Discover the advanced technology behind our ASL recognition
              system, combining machine learning with computer vision to break
              communication barriers.
            </p>
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
                  alt="ASL Recognition Technology Visualization"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-slate-200 max-w-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <p className="text-sm font-medium">
                      AI-Powered Recognition
                    </p>
                  </div>
                  <p className="text-sm text-slate-700">
                    Our system uses a random forest classifier trained on
                    thousands of ASL hand gestures to provide accurate,
                    real-time translation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-200 text-slate-800 mb-4">
              <span>Technology Overview</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Cutting-edge technology made simple
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Our ASL recognition system combines several advanced technologies
              to deliver accurate and responsive sign language translation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <TechCard
              icon={<CameraIcon className="h-10 w-10" />}
              title="Computer Vision"
              description="We use MediaPipe to detect and track hand landmarks in real-time video, capturing the precise positioning of fingers and hand shapes."
            />
            <TechCard
              icon={<BrainCircuitIcon className="h-10 w-10" />}
              title="Machine Learning"
              description="A random forest classifier from scikit-learn processes the hand landmark data to identify and classify ASL letters with high accuracy."
            />
            <TechCard
              icon={<CodeIcon className="h-10 w-10" />}
              title="Real-time Processing"
              description="Our optimized algorithms ensure minimal latency, providing instant feedback and translation as you sign."
            />
          </div>
        </div>
      </section>

      {/* How It Works - Technical */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-200 text-slate-800 mb-4">
            <span>Technical Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            From hand gesture to text
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our system follows a sophisticated pipeline to transform hand
            gestures into meaningful text.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              1. Hand Detection & Landmark Extraction
            </h3>
            <p className="text-slate-600 mb-6">
              Using MediaPipe's hand tracking technology, we detect hands in the
              video feed and extract 21 precise landmark points that represent
              the positions of joints and fingertips.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                  <span className="text-xs">1</span>
                </div>
                <span>Camera captures video input of hand gestures</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                  <span className="text-xs">2</span>
                </div>
                <span>MediaPipe detects hand presence in the frame</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                  <span className="text-xs">3</span>
                </div>
                <span>
                  21 landmark points are extracted from each detected hand
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl">
            <div className="aspect-video relative rounded-lg overflow-hidden border border-slate-200 bg-white">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Hand landmark detection visualization"
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              Visualization of the 21 hand landmarks detected by MediaPipe
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 bg-slate-100 p-6 rounded-xl">
            <div className="aspect-video relative rounded-lg overflow-hidden border border-slate-200 bg-white">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Feature extraction and preprocessing visualization"
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              Preprocessing transforms raw landmarks into machine learning
              features
            </p>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">
              2. Feature Extraction & Preprocessing
            </h3>
            <p className="text-slate-600 mb-6">
              Raw landmark data is transformed into a feature vector that
              captures the spatial relationships between hand points, making it
              suitable for machine learning classification.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                  <span className="text-xs">1</span>
                </div>
                <span>
                  Normalize coordinates to make them scale and position
                  invariant
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                  <span className="text-xs">2</span>
                </div>
                <span>
                  Calculate distances and angles between landmark points
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                  <span className="text-xs">3</span>
                </div>
                <span>
                  Generate a feature vector that represents the hand gesture
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              3. Random Forest Classification
            </h3>
            <p className="text-slate-600 mb-6">
              Our random forest classifier, trained on thousands of ASL hand
              gestures, analyzes the feature vector and predicts the
              corresponding ASL letter with high confidence.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                  <span className="text-xs">1</span>
                </div>
                <span>
                  Feature vector is passed to the random forest classifier
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                  <span className="text-xs">2</span>
                </div>
                <span>
                  Multiple decision trees vote on the most likely ASL letter
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                  <span className="text-xs">3</span>
                </div>
                <span>
                  Confidence score is calculated based on the voting results
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                  <span className="text-xs">4</span>
                </div>
                <span>
                  Predicted letter is displayed with its confidence score
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl">
            <div className="aspect-video relative rounded-lg overflow-hidden border border-slate-200 bg-white">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Random forest classification visualization"
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              Random forest classifier making predictions based on hand features
            </p>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="bg-slate-50 py-20 md:py-32 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-200 text-slate-800 mb-4">
              <span>Training Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How we trained our model
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Building a robust ASL recognition system required extensive data
              collection and training.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <TrainingStepCard
              number="01"
              title="Data Collection"
              description="We collected thousands of ASL hand gesture images across different lighting conditions, hand sizes, and angles."
              icon={<DatabaseIcon className="h-6 w-6" />}
            />
            <TrainingStepCard
              number="02"
              title="Preprocessing"
              description="Each image was processed to extract hand landmarks using MediaPipe, creating a consistent feature set."
              icon={<HandIcon className="h-6 w-6" />}
            />
            <TrainingStepCard
              number="03"
              title="Model Training"
              description="We trained a random forest classifier on the processed data, optimizing for accuracy and speed."
              icon={<BrainCircuitIcon className="h-6 w-6" />}
            />
            <TrainingStepCard
              number="04"
              title="Validation"
              description="The model was validated on a separate test set to ensure high accuracy across different users."
              icon={<LineChartIcon className="h-6 w-6" />}
            />
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Model Performance</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <PerformanceCard
                metric="97%"
                title="Accuracy"
                description="Our model achieves 97% accuracy on ASL letter recognition across different users and conditions."
              />
              <PerformanceCard
                metric="<100ms"
                title="Latency"
                description="Real-time processing with less than 100ms latency for immediate feedback during signing."
              />
              <PerformanceCard
                metric="26"
                title="ASL Letters"
                description="Support for all 26 ASL alphabet letters, including challenging dynamic gestures."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-200 text-slate-800 mb-4">
            <span>Technical Details</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Under the hood
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            For the technically curious, here's a deeper look at the
            technologies and algorithms powering our system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="bg-slate-100 p-3 rounded-lg mr-4 text-slate-800">
                <MicroscopeIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">MediaPipe Hand Tracking</h3>
            </div>
            <p className="text-slate-600 mb-4">
              MediaPipe provides a machine learning pipeline that detects hands
              and extracts 21 3D landmarks per hand. These landmarks represent
              key points like knuckles, fingertips, and the wrist.
            </p>
            <p className="text-slate-600">
              The model uses a two-stage approach: first detecting the hand
              region, then precisely locating landmarks within that region. This
              ensures accurate tracking even with partial occlusion or
              challenging lighting.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="bg-slate-100 p-3 rounded-lg mr-4 text-slate-800">
                <GitBranchIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Random Forest Classifier</h3>
            </div>
            <p className="text-slate-600 mb-4">
              Our random forest model consists of 100 decision trees, each
              trained on a different subset of the training data. This ensemble
              approach reduces overfitting and improves generalization.
            </p>
            <p className="text-slate-600">
              The model was trained using scikit-learn with hyperparameters
              optimized through cross-validation. Key parameters include tree
              depth, minimum samples per leaf, and the number of features
              considered at each split.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-slate-100 p-3 rounded-lg mr-4 text-slate-800">
              <BarChart4Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Feature Engineering</h3>
          </div>
          <p className="text-slate-600 mb-6">
            The raw landmark coordinates are transformed into a rich feature set
            that captures the essential characteristics of each hand gesture.
            Our feature engineering process includes:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-semibold mb-3">Normalization</h4>
              <p className="text-slate-600 text-sm">
                All coordinates are normalized relative to the wrist position
                and hand size, making the features invariant to hand position,
                scale, and rotation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-semibold mb-3">Distance Metrics</h4>
              <p className="text-slate-600 text-sm">
                We calculate pairwise distances between landmarks, capturing the
                spatial relationships between fingers and joints that define
                each ASL letter.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-semibold mb-3">Angular Features</h4>
              <p className="text-slate-600 text-sm">
                Angles between finger joints help distinguish subtle differences
                between similar hand shapes, improving classification accuracy.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
          <div className="flex items-center mb-6">
            <div className="bg-slate-100 p-3 rounded-lg mr-4 text-slate-800">
              <LightbulbIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Challenges & Solutions</h3>
          </div>
          <div className="space-y-6">
            <div className="flex">
              <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800">
                <span className="text-sm font-medium">1</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Similar Hand Shapes</h4>
                <p className="text-slate-600">
                  Some ASL letters have very similar hand shapes (like 'A' and
                  'S'). We addressed this by engineering features that
                  specifically highlight the subtle differences between these
                  letters.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800">
                <span className="text-sm font-medium">2</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lighting Variations</h4>
                <p className="text-slate-600">
                  Hand detection can be affected by lighting conditions. Our
                  preprocessing pipeline includes normalization techniques that
                  make the system robust to different lighting environments.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800">
                <span className="text-sm font-medium">3</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dynamic Gestures</h4>
                <p className="text-slate-600">
                  Some ASL letters require motion (like 'J' and 'Z'). We
                  implemented a temporal feature extraction approach that
                  captures the movement patterns characteristic of these dynamic
                  signs.
                </p>
              </div>
            </div>
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
                Try It Yourself
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Experience our ASL recognition technology
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                See the power of our machine learning model in action. Try our
                interactive demo and experience real-time ASL recognition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white hover:scale-110 duration-200 hover:bg-white ease-in-out transition-all text-black"
                >
                  Try Demo <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-200 hover:bg-slate-800"
                >
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component for technology cards
function TechCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="bg-slate-100 p-3 rounded-lg w-fit mb-5 text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

// Component for training step cards
function TrainingStepCard({ number, title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center mb-4">
        <div className="bg-slate-100 h-10 w-10 rounded-full flex items-center justify-center text-slate-800 mr-3">
          {icon}
        </div>
        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-800">
          Step {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

// Component for performance metric cards
function PerformanceCard({ metric, title, description }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">{metric}</div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
