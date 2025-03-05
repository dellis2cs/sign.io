import SignLanguageDetection from "../camera/SignLanguageDetection";
import Header from "../header/Header";

export default function Sandbox() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Sandbox</h1>
        <p className="mb-6">
          Use the camera below for real-time sign language recognition.
        </p>
        <SignLanguageDetection />
      </main>
    </div>
  );
}
