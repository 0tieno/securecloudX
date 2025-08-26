// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import useChallengeUnlock from "../hooks/useChallengeUnlock";

// const weeklyTopic = "Network Security in the Cloud!";

// const topics = [
//   { day: 1, title: "Identity & Access Management" },
//   { day: 2, title: "Network Security In the Cloud" },
//   { day: 3, title: "Data Security" },
//   { day: 4, title: "Application Security" },
//   { day: 5, title: "Security Monitoring & Threat Intelligence" },
//   { day: 6, title: "Incident Response & Threat Detection" },
//   { day: 7, title: "Capstone Project" },
// ];

const Home = () => {
  const unlockedDays = useChallengeUnlock();

  const currentDay = unlockedDays[unlockedDays.length - 1] || 1;
  // const currentTopic =
  //   topics.find((t) => t.day === currentDay)?.title ||
  //   "Cloud Security Challenge";

  return (
    <>
      <Content className="bg-gray-900 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-2xl mx-auto">
        {/* <Link to={`/day${currentDay}`}>
          <div className="bg-yellow-400 text-gray-900 font-semibold text-center py-2 animate-pulse hover:bg-yellow-300 transition-colors duration-300">
            this week's ongoing challenge: {currentTopic} → Click to Join
          </div>
        </Link> */}

        {/* Forgotten Secret Lab Mini-Hack */}
        <div className="mb-6">
          <Link
            to="/forgotten-secret-lab"
            className="block w-full text-white font-bold py-4 px-6 text-center transition-all duration-300 hover:text-red-300"
            title="Git History Forensics Mini-Hack"
          >
            <div className="flex items-center justify-center gap-3">
              {/* Live indicator with circulating waves */}
              <div className="relative flex items-center justify-center">
                {/* Outer wave */}
                <div className="absolute w-8 h-8 border-2 border-red-500/30 rounded-full animate-ping"></div>
                {/* Middle wave */}
                <div className="absolute w-6 h-6 border-2 border-red-400/50 rounded-full animate-pulse"></div>
                {/* Inner circle */}
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-orange-400 drop-shadow-lg">
                Live: Mini-Hack
              </span>
            </div>
          </Link>
        </div>
        <div className="flex items-center mb-6 mt-4">
          <h1 className="text-2xl md:text-4xl font-bold text-start mr-4">
            Welcome
          </h1>
          <div className="flex items-center text-gray-400 text-sm border-l-2 border-blue-500 pl-3 py-1">
            {/* <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg> */}
            <span>Updated Aug 25, 2025</span>
          </div>
        </div>

        <p className="text-gray-300 text-base md:text-lg text-start leading-relaxed">
          securecloudX is built on the strong belief that with the right
          discipline, anyone can master cloud security and fundamentals of
          DevSecOps—through practical, hands-on learning.
          {/*           <br className="hidden md:block" />
          <span className="block mt-2">
            Complete the capstone project to earn a{" "}
            <strong>Microsoft-recognized certificate</strong>.
          </span> */}
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
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">
            🔒 Is Cloud Security for You?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Cloud security is one of the most in-demand skills in tech. With
            businesses shifting to the cloud, securing digital assets is no
            longer optional—it's a necessity. This could be one of the best
            decisions in your career this year.
          </p>

          {/* What It Takes to Become a Cloud Security Expert */}
          <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-md border-l-4 border-green-500">
            <h4 className="text-md sm:text-lg font-semibold text-green-400">
              What It Takes to Become a Cloud Security Expert
            </h4>
            <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2 space-y-2">
              <li>
                <strong>Master the Fundamentals:</strong> Learn networking,
                Linux, security basics.
              </li>
              <li>
                <strong>Learn the Cloud Basics:</strong> Choose and master 1
                cloud provider (Azure, AWS, GCP)
              </li>
              <li>
                <strong>Focus on Cloud Security Concepts:</strong> Learn by
                building secure cloud environments
              </li>
              <li>
                <strong>Get Hands-On with Security Tools:</strong> build!
                Experiment, break things, and rebuild
              </li>
              <li>
                <strong>Projects:</strong> Build & publish security-focused
                projects
              </li>
              <li>
                <strong>Earn Certifications:</strong> Industry-recognized certs
                like AZ-500, CISSP, CCSP, and Security+ boost credibility.
              </li>
              <li>
                <strong>Build Your Network:</strong> Engage with professionals,
                attend cybersecurity events, and join online communities.
              </li>
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

          {/* Next Steps */}
          <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-md border-l-4 border-yellow-400">
            <h4 className="text-md sm:text-lg font-semibold text-yellow-400">
              📢 What’s Next?
            </h4>
            <p className="text-gray-300 text-sm sm:text-base mt-2">
              Explore cloud security with SecureCloudX. <br />
              Join our ongoing weekly challenge in preparation for the upcoming
              hackathon—learn deeply, one lab at a time.
            </p>

            <p className="mt-3">
              <Link
                to={`/day${currentDay}`}
                className="text-blue-400 hover:underline"
              >
                🔗 Go to this week's challenge (Day {currentDay})
              </Link>
            </p>
          </div>
        </div>

        {/* Why Take This Challenge */}
        <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">
          Why Take This Challenge?
        </h2>
        <ul className="mt-4 text-gray-300 space-y-3 text-sm md:text-base">
          <li>It's free of course!</li>
          <li>
            <span className="text-white font-semibold">
              Focused on practice with purpose:
            </span>{" "}
            balanced hands-on learning with carefully integrated theory.
          </li>
          <li>
            <span className="text-white font-semibold">
              Designed to guide, not handhold:
            </span>{" "}
            I provide essential details while leaving intentional gaps to foster
            critical thinking, problem-solving.
          </li>
          <li>
            <span className="text-white font-semibold">Capstone Project:</span>{" "}
            Apply your knowledge in a final project.
          </li>
          <li>
            <span className="text-white font-semibold">
              AI-Powered Learning:
            </span>{" "}
            Use specially designed prompts to enhance your learning with AI.
          </li>
          <li>
            <span className="text-white font-semibold">
              Constantly evolving:
            </span>{" "}
            Expect updates that keep it relevant and aligned with industry
            standards.
          </li>
          <li>
            <span className="text-white font-semibold">
              Join the Community:
            </span>{" "}
            Connect with fellow learners in our{" "}
            <a
              href="https://x.com/securecloudX"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              X{" "}
            </a>{" "}
            and{" "}
            <a
              href="https://chat.whatsapp.com/Llp1Z8uw8xP5NIByASUV7V"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Whatsapp Community
            </a>{" "}
            to share progress, ask questions, and collaborate.
          </li>
        </ul>

        {/* Prerequisites Section */}
        <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-400">
            ⚙️ Prerequisites
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Before starting, have:
          </p>

          <ul className="mt-4 text-gray-300 space-y-3 text-sm sm:text-base">
            <li>1. Basic knowledge of Cloud Computing (Azure preferred)</li>
            <li>2. An Azure Free Tier Account (recommended)</li>
            <li>3. Willingness to experiment and learn!</li>
          </ul>
        </div>

        {/* Email Subscription Form */}
        <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-md border-b-4 border-blue-500">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
            📩 Stay Updated
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Be sure to enter your email to receive updates and tips about the
            labs.
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
        <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">
          🚀 Get Started
        </h2>
        <p className="text-gray-300 text-base md:text-lg text-start">
          Ready to begin? Start with{" "}
          {unlockedDays.includes(1) ? (
            <Link
              to="/start"
              className="text-blue-400 font-semibold hover:underline"
            >
              Day 0: Starting From Zero
            </Link>
          ) : (
            <span
              className="text-gray-500 font-semibold cursor-not-allowed"
              title="Day 1 is locked"
            >
              Day 1: Identity & Access Management 🔒
            </span>
          )}
          .
        </p>
      </Content>
    </>
  );
};

export default Home;
