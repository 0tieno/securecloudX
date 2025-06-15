import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content";

// const Home = () => {
//   // const [email, setEmail] = useState("");

//   // const handleSubscribe = (e) => {
//   //   e.preventDefault();
//   //   console.log("Subscribed email:", email);
//   //   // TODO: Integrate with backend/email service
//   //   setEmail("");
//   //   alert("Thanks for subscribing! You'll receive reminders.");
//   // };

  
const CHALLENGE_START_DATE = new Date("2025-04-10T00:00:00Z");

const Home = () => {
  const [currentUnlockedDay, setCurrentUnlockedDay] = useState(0);

  useEffect(() => {
    const today = new Date();
    const timeDiff = today - CHALLENGE_START_DATE;
    const daysSinceStart = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setCurrentUnlockedDay(Math.min(daysSinceStart + 1, 7));
  }, []);

  return (
    <Content className="bg-gray-900 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-start">Welcome</h1>

      <p className="mb-2 text-gray-400 text-sm">
    Creator:{" "}
    <a
      href="https://ronneyotieno.me"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      ron
    </a>
  </p>
      
       <p className="text-gray-300 text-base md:text-lg text-start leading-relaxed">
    In a world full of endless courses, <strong className="text-gray font-semibold">securecloudX</strong> says: {" "} <span className="underline decoration-gray-400 decoration-2 underline-offset-2">
  “Give us 7 days, and we’ll give you momentum with structured and digestible challenge-based practical guide to help you learn and master cloud security and DevSecOps.”
</span> Perfect for absolute beginners and intermediates.
    <br className="hidden md:block" />
    <span className="block mt-2">
      Complete the capstone project to earn a <strong>Microsoft-recognized certificate</strong>.
    </span>
  </p>


{/* Youtube welcome video */}


{/* <section className="max-w-4xl  px-4 py-10">
      <div className="w-full h-[140px] sm:h-[260px] md:h-[450px] lg:h-[300px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <iframe
          src="https://www.youtube.com/embed/myZ2TjbEZmQ"
          title="product pre-launch"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section> */}


      {/* Is Cloud Security for You? */}
<div className="mt-6 p-4 bg-gray-800 border-l-4 border-yellow-500 rounded-lg shadow-md">
  <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">🔒 Is Cloud Security for You?</h3>
  <p className="text-gray-300 text-sm sm:text-base mt-2">
    Cloud security is one of the most in-demand skills in tech. With businesses shifting to the cloud, securing digital assets is no longer optional—it's a necessity. This could be one of the best decisions in your career this year.
  </p>

  {/* What It Takes to Become a Cloud Security Expert */}
  <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-md border-l-4 border-green-500">
    <h4 className="text-md sm:text-lg font-semibold text-green-400">What It Takes to Become a Cloud Security Expert</h4>
    <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2 space-y-2">
      <li><strong>Master the Fundamentals:</strong> Learn networking, Linux, security basics.</li>
      <li><strong>Learn the Cloud Basics:</strong> Choose and master 1 cloud provider (Azure, AWS, GCP)</li>
      <li><strong>Focus on Cloud Security Concepts:</strong> Learn by building secure cloud environments</li>
      <li><strong>Get Hands-On with Security Tools:</strong> build! Experiment, break things, and rebuild</li>
      <li><strong>Projects:</strong> Build & publish security-focused projects</li>
      <li><strong>Earn Certifications:</strong> Industry-recognized certs like AZ-500, CISSP, CCSP, and Security+ boost credibility.</li>
      <li><strong>Build Your Network:</strong> Engage with professionals, attend cybersecurity events, and join online communities.</li>
          </ul>
          <p className="mt-3">
      <a 
        href="https://www.nojones.net/posts/breaking-into-cloudsec" 
        className="text-blue-400 hover:underline"
        target="_blank" 
        rel="noopener noreferrer"
      >
        🔗 Breaking into Cloud Security (Blog)
      </a>
    </p>
  </div>

  {/* Next Steps */}
  <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-md border-l-4 border-yellow-400">
    <h4 className="text-md sm:text-lg font-semibold text-yellow-400">📢 What’s Next?</h4>
    <p className="text-gray-300 text-sm sm:text-base mt-2">
      Ready to explore cloud security? Take this secureCloudX challenge and start your journey.
          </p>
          
          <p className="mt-3">
      <a 
        href="https://blog.christophetd.fr/cloud-security-breaches-and-vulnerabilities-2021-in-review/" 
        className="text-blue-400 hover:underline"
        target="_blank" 
        rel="noopener noreferrer"
      >
        🔗 Cloud Security Breaches and Vulnerabilities (Blog)
      </a>
    </p>
  </div>
</div>


      {/* Why Take This Challenge */}
      <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">Why Take This Challenge?</h2>
<ul className="mt-4 text-gray-300 space-y-3 text-sm md:text-base">
   <li>It's free of course!</li>
  <li><span className="text-white font-semibold">Focused on practice with purpose:</span> balanced hands-on learning with carefully integrated theory.</li>
  <li><span className="text-white font-semibold">Designed to guide, not handhold:</span> I provide essential details while leaving intentional gaps to foster critical thinking, problem-solving.</li>
  <li><span className="text-white font-semibold">Capstone Project:</span> Apply your knowledge in a final project.</li>
  <li><span className="text-white font-semibold">AI-Powered Learning:</span> Use specially designed prompts to enhance your learning with AI.</li>
  <li><span className="text-white font-semibold">Constantly evolving:</span> Expect updates that keep it relevant and aligned with industry standards.</li>
  <li><span className="text-white font-semibold">Join the Community:</span> Connect with fellow learners in our <a href="https://x.com/securecloudX" target="_blank" className="text-blue-400 hover:underline">X Community</a> to share progress, ask questions, and collaborate.</li>
</ul>

      {/* Prerequisites Section */}
<div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
  <h2 className="text-lg sm:text-xl font-semibold text-yellow-400">⚙️ Prerequisites</h2>
  <p className="text-gray-300 text-sm sm:text-base mt-2">
    Before starting, have:
  </p>
  
  <ul className="mt-4 text-gray-300 space-y-3 text-sm sm:text-base">
    <li>1. Basic knowledge of Cloud Computing (Azure preferred)</li>
    <li>2. An Azure Free Tier Account (recommended)</li>
    <li>3. Willingness to experiment and learn!</li>
  </ul>
</div>



      {/* Challenge Structure */}
      {/* <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">Challenge Structure</h2>
      <p>Each day has an: Overview with key notes, Labs and specific resources</p>
      <ul className="mt-4 text-gray-300 space-y-2 text-sm md:text-base">
        {[
          "IAM",
          "Network Security",
          "Data Security",
          "Application Security",
          "Security Monitoring",
          "Incident Response",
          "Capstone Project",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-400 font-semibold mr-2">Day {index + 1}:</span> {item}
          </li>
        ))}
      </ul> */}


      {/* Document Your Learning */}
      {/* <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h4 className="text-lg sm:text-xl font-semibold text-green-400">Document Your Learning For Each Day</h4>
        <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
        <li>Share your daily progress on X, follow the channel for daily updates, and use the hashtag <strong>#securecloudX</strong>.</li>
          <li>Use blogs to document what you've learned.</li>
          <li>Be an expert and let the world know.</li>
        </ul>
      </div> */}


 {/* Email Subscription Form */}
<div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-md border-b-4 border-blue-500">
  <h3 className="text-lg sm:text-xl font-semibold text-blue-400">📩 Stay Updated</h3>
  <p className="text-gray-300 text-sm sm:text-base mt-2">
    Be sure to enter your email to receive updates and tips about the labs.
  </p>
  <a 
    href="https://forms.office.com/r/5yqb8Xw5GK" 
    target="_blank" 
    rel="noopener noreferrer"
    className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 
                 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-semibold 
                 transition duration-300 ease-in-out"
  >
    Subscribe via Microsoft Forms
  </a>
</div>



      {/* Get Started */}
     {/* 🚀 Get Started */}
     <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">🚀 Get Started</h2>
      <p className="text-gray-300 text-base md:text-lg text-start">
        Ready to begin? Start with{" "}
        {currentUnlockedDay >= 1 ? (
          <Link to="/Day1" className="text-blue-400 font-semibold hover:underline">
            Day 1: Identity & Access Management
          </Link>
        ) : (
          <span className="text-gray-500 font-semibold cursor-not-allowed" title="Day 1 is locked">
            Day 1: Identity & Access Management 🔒
          </span>
        )}
        .
      </p>
    </Content>
  );
};

export default Home;
