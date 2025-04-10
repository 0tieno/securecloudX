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

  
const CHALLENGE_START_DATE = new Date("2025-03-10T00:00:00Z");

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
      
      <p className="text-gray-300 text-base md:text-lg text-start">
      <strong>secureCloudX</strong> is a free, hands-on platform built by  
  <a href="https://ronneyotieno.me" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> $!rronn3y</a> to help you get started and master Cloud Security. Through structured challenges, you'll learn key security concepts, best practices, and real-world skills to secure cloud environments. Complete the capstone project to earn a Microsoft-recognized certificate.
      </p>

      {/* Cloud Security Matters Section */}
      {/* <div className="mt-6 p-4 bg-gray-800 border-l-4 border-yellow-500 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">🔒 Cloud Security Matters</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Security remains one of the biggest challenges in cloud computing. As cloud adoption grows,  
          security incidents and vulnerabilities continue to rise.
        </p>
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
      </div> */}



{/* Youtube welcome video */}


<section className="max-w-4xl  px-4 py-10">
      {/* <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
        Pre-launch meeting - recording
      </h2> */}

      <div className="w-full h-[140px] sm:h-[260px] md:h-[450px] lg:h-[300px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <iframe
          src="https://www.youtube.com/embed/myZ2TjbEZmQ"
          title="product pre-launch"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>


      {/* Is Cloud Security for You? */}
<div className="mt-6 p-4 bg-gray-800 border-l-4 border-yellow-500 rounded-lg shadow-md">
  <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">🔒 Is Cloud Security for You?</h3>
  <p className="text-gray-300 text-sm sm:text-base mt-2">
    Cloud security is one of the most in-demand skills in tech. With businesses shifting to the cloud, securing digital assets is no longer optional—it's a necessity.
  </p>

  {/* Why Cloud Security is the Future */}
  {/* <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-md border-l-4 border-green-500">
    <h4 className="text-md sm:text-lg font-semibold text-green-400">Why Cloud Security is a Future-Proof Career</h4>
    <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2 space-y-2">
      <li><strong>Explosive Demand:</strong> The global cybersecurity job market is expected to grow by 35%+ by 2030 (U.S. Bureau of Labor Statistics).</li>
      <li><strong>High-Paying Jobs:</strong> Cloud security roles offer salaries exceeding $100K+, with demand outpacing supply.</li>
      <li><strong>Critical for Every Industry:</strong> From finance to healthcare, every sector needs cloud security experts.</li>
      <li><strong>Defense Against Cyber Threats:</strong> As cyberattacks increase, cloud security professionals are modern-day digital guardians.</li>
      <li><strong>Work From Anywhere:</strong> Many cloud security jobs are remote-friendly with global opportunities.</li>
    </ul>
  </div> */}

  {/* What It Takes to Become a Cloud Security Expert */}
  <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-md border-l-4 border-green-500">
    <h4 className="text-md sm:text-lg font-semibold text-green-400">What It Takes to Become a Cloud Security Expert</h4>
    <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2 space-y-2">
      <li><strong>Learn the Basics:</strong> Understand cloud models (IaaS, PaaS, SaaS) & platforms (AWS, Azure, GCP).</li>
      <li><strong>Master Security Fundamentals:</strong> "for how long can a tree stand without the roots?".</li>
      <li><strong>Get Hands-on Experience:</strong> build! Experiment, break things, and rebuild</li>
      <li><strong>Stay Updated:</strong> cloud security is constantly evolving—follow trends and stay updated.</li>
      <li><strong>Earn Certifications:</strong> Industry-recognized certs like AZ-500, CISSP, CCSP, and Security+ boost credibility.</li>
      <li><strong>🤝 Build Your Network:</strong> Engage with professionals, attend cybersecurity events, and join online communities.</li>
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
      Ready to explore cloud security? Take this secureCloudX challenge and start your journey. Follow the latest trends and real-world insights:
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
  <li><span className="text-white font-semibold">Hands-on Learning:</span> Work on real-world security scenarios.</li>
  <li><span className="text-white font-semibold">Practical Skills:</span> Learn how to secure cloud workloads using Azure tools.</li>
  <li><span className="text-white font-semibold">Capstone Project:</span> Apply your knowledge in a final project.</li>
  <li><span className="text-white font-semibold">AI-Powered Learning:</span> Use specially designed prompts to enhance your learning with AI.</li>
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
      <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">Challenge Structure</h2>
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
      </ul>


      {/* Document Your Learning */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h4 className="text-lg sm:text-xl font-semibold text-green-400">Document Your Learning For Each Day</h4>
        <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
        <li>Share your daily progress on X, follow the channel for daily updates, and use the hashtag <strong>#securecloudX</strong>.</li>
          <li>Use blogs to document what you've learned.</li>
          <li>Be an expert and let the world know.</li>
        </ul>
      </div>

       {/* Email Subscription Form */}
       {/* <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-400">📩 Stay Updated</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Enter your email to receive daily reminders about the challenge.
        </p>
        <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition duration-200"
          >
            Subscribe
          </button>
        </form>
      </div> */}


{/* <div className="mt-6 p-4 bg-gray-800 border-l-4 border-yellow-500 rounded-lg shadow-md">
  <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">Challenge Pre-Launch</h3>
  <p className="text-gray-300 text-sm sm:text-base mt-2">
    The pre-launch event is happening on  
    <span className="font-semibold text-white"> 8th April</span> on microsoft teams, where we will  
    <span className="font-semibold text-white"> announce the official launch date</span> of the challenge.  
    Stay tuned! Meanwhile follow our  <a href="https://x.com/securecloudX" target="_blank" className="text-blue-400 hover:underline">X Community</a> to get updates and <span className="font-semibold text-green-400"> most importantly ensure to register your email below to receive meeting link and way forward after that.</span> 
  </p>
</div> */}


 {/* Email Subscription Form */}
<div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
  <h3 className="text-lg sm:text-xl font-semibold text-blue-400">📩 Stay Updated</h3>
  <p className="text-gray-300 text-sm sm:text-base mt-2">
    Enter your email to receive daily updates and tips about the challenge.
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
