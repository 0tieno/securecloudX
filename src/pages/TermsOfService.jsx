import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Terminal,
  BookOpen,
  Users,
  AlertTriangle,
} from "lucide-react";
import Content from "../components/Content";
import QABlock from "../components/QABlock";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <Content>
        <div className="max-w-4xl mx-auto py-8 px-4">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/get-started"
              className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              cd ../
            </Link>

            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-red-400 mr-3" />
              <h1 className="text-4xl font-bold text-gray-300">
                terms_of_use.md
              </h1>
            </div>

            <div className="text-green-400 text-sm mb-4">
              $ cat legal/terms_of_use.md
            </div>

            <p className="text-gray-500 max-w-3xl leading-relaxed">
              // Terms of use for securecloudX open source project
              <br />
              // Last updated: April 19, 2026
            </p>
          </div>

          {/* Terms Content in Q&A Format */}
          <div className="space-y-8">
            <QABlock
              icon={<Terminal className="w-5 h-5" />}
              question="What is securecloudX?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> securecloudX is an{" "}
                <span className="text-yellow-400">open source educational platform</span>{" "}
                focused on cloud security engineering. We provide a structured 8-module
                program covering IAM, network security, data protection, threat detection,
                monitoring, incident response, capstone projects, and DevSecOps — with
                hands-on labs, progress tracking, and curated resources for mastering
                Azure cloud security.
              </p>
              <Link
                to="/changelog"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-mono mt-2"
              >
                See the full story →
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
              <div className="text-xs text-gray-400 mt-3">
                # Project Type: Educational • Open Source • Community-Driven
              </div>
            </QABlock>

            <QABlock
              icon={<Users className="w-5 h-5" />}
              question="Who is behind securecloudX?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> securecloudX is created and
                maintained by <span className="text-yellow-400">s!rr0nn3y</span>, a
                passionate developer and junior penetration tester specializing in cloud
                and web security.
              </p>
              <p className="mb-3 text-gray-400">
                He uses this platform to log his learning while building a community.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-mono mt-2"
              >
                Learn more about the author →
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
              <div className="text-xs text-gray-400 mt-3">
                # Background: DevSecOps • Developer • All things Cloud • Educator • Open
                Source Advocate
              </div>
            </QABlock>

            <QABlock
              icon={<BookOpen className="w-5 h-5" />}
              question="By using securecloudX, what am I agreeing to?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> By accessing and using
                securecloudX.guide, you agree to be bound by these Terms of Use. You
                acknowledge that you are at least 13 years old and have the legal
                capacity to enter into this agreement. If you disagree with any part of
                these terms, you must discontinue use of our platform.
              </p>
              <div className="bg-gray-900 border border-yellow-600 p-3 rounded mt-3">
                <div className="text-yellow-400 text-sm">
                  [IMPORTANT] These terms apply to all users, contributors, and visitors
                  of securecloudX
                </div>
              </div>
            </QABlock>

            <QABlock
              icon={<Shield className="w-5 h-5" />}
              question="What are the licensing terms for securecloudX content?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> securecloudX is released under
                an <span className="text-yellow-400">open source license</span>. All
                educational content, labs, and documentation are freely available for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                <li>Personal learning and skill development</li>
                <li>Educational use in academic institutions</li>
                <li>Non-commercial sharing and distribution</li>
                <li>Contributing improvements back to the community</li>
              </ul>
              <div className="text-xs text-gray-400">
                # License: Open Source • Attribution Required • Non-Commercial Use
              </div>
            </QABlock>

            <QABlock
              icon={<Users className="w-5 h-5" />}
              question="Can I use securecloudX content for commercial purposes?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> Limited commercial use is
                permitted with proper attribution. You may reference our content in
                professional presentations, training materials, or educational courses,
                provided you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                <li>Credit securecloudX as the original source</li>
                <li>Include a link to securecloudx.guide</li>
                <li>Do not claim ownership of our content</li>
                <li>Do not sell our content directly as a standalone product</li>
              </ul>
              <div className="bg-gray-900 border border-blue-600 p-3 rounded mt-3">
                <div className="text-blue-400 text-sm">
                  [NOTE] For extensive commercial use, please contact us at
                  securecloudx.learn@gmail.com
                </div>
              </div>
            </QABlock>

            <QABlock
              icon={<AlertTriangle className="w-5 h-5" />}
              question="What should I know about the security testing content?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> Our penetration testing and
                security assessment content is for{" "}
                <span className="text-yellow-400">educational purposes only</span>. You
                must:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                <li>Only test systems you own or have explicit permission to test</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use knowledge responsibly and ethically</li>
                <li>Respect others' privacy and security</li>
              </ul>
              <div className="bg-gray-900 border border-red-600 p-3 rounded mt-3">
                <div className="text-red-400 text-sm">
                  [WARNING] Unauthorized testing of systems is illegal and may result in
                  criminal charges
                </div>
              </div>
            </QABlock>

            <QABlock
              icon={<Users className="w-5 h-5" />}
              question="What behavior is expected in the securecloudX community?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> We maintain a professional,
                inclusive learning environment. Users must:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                <li>Treat all community members with respect</li>
                <li>Share knowledge constructively and helpfully</li>
                <li>Report security vulnerabilities responsibly</li>
                <li>Avoid sharing malicious code or exploits</li>
                <li>Respect intellectual property rights</li>
              </ul>
              <div className="text-xs text-gray-400">
                # Community Values: Respect • Learning • Ethical Security • Open
                Collaboration
              </div>
            </QABlock>

            <QABlock
              icon={<Shield className="w-5 h-5" />}
              question="What warranties does securecloudX provide?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> securecloudX is provided{" "}
                <span className="text-yellow-400">"AS IS" without warranties</span> of
                any kind. While we strive for accuracy and quality, we cannot guarantee:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                <li>Error-free content or continuous availability</li>
                <li>Fitness for any particular purpose</li>
                <li>Compatibility with all systems or environments</li>
                <li>Achievement of specific learning outcomes</li>
              </ul>
              <div className="text-xs text-gray-400">
                # Use at your own risk • Community-driven content • Educational purpose
              </div>
            </QABlock>

            <QABlock
              icon={<AlertTriangle className="w-5 h-5" />}
              question="Is securecloudX liable for damages from using the platform?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> securecloudX and its
                contributors are{" "}
                <span className="text-yellow-400">not liable for any damages</span>{" "}
                arising from use of our platform, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                <li>System damage from security testing</li>
                <li>Data loss or security breaches</li>
                <li>Legal consequences of improper use</li>
                <li>Business or career impacts</li>
              </ul>
              <div className="bg-gray-900 border border-yellow-600 p-3 rounded mt-3">
                <div className="text-yellow-400 text-sm">
                  [RESPONSIBILITY] Users are solely responsible for how they apply
                  knowledge gained from securecloudX
                </div>
              </div>
            </QABlock>

            <QABlock
              icon={<Shield className="w-5 h-5" />}
              question="How does securecloudX handle user data?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> We collect minimal data
                necessary for platform functionality:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                <li>GitHub profile data (username, email, avatar) via GitHub OAuth sign-in</li>
                <li>Module and step completion progress stored in our database</li>
                <li>Certificate records when you complete the program</li>
                <li>Basic analytics for improving user experience</li>
              </ul>
              <div className="bg-gray-900 border border-blue-600 p-3 rounded mt-3">
                <div className="text-blue-400 text-sm">
                  [NOTE] We do not sell or share your data with third parties. Your progress data is visible only to you and platform administrators.
                </div>
              </div>
              <div className="text-xs text-gray-400 mt-3">
                # Privacy-First • Minimal Data Collection • Transparent Practices
              </div>
            </QABlock>

            <QABlock
              icon={<BookOpen className="w-5 h-5" />}
              question="Can these terms be modified?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> We may update these terms to
                reflect platform changes or legal requirements. Updates will be posted on
                this page with the revision date. Continued use after modifications
                constitutes acceptance of the updated terms.
              </p>
              <div className="bg-gray-900 border border-green-600 p-3 rounded mt-3">
                <div className="text-green-400 text-sm">
                  [UPDATES] Check this page periodically for the latest terms
                </div>
              </div>
            </QABlock>

            <QABlock
              icon={<Terminal className="w-5 h-5" />}
              question="How can I contact securecloudX about these terms?"
            >
              <p className="mb-3">
                <span className="text-green-400">A:</span> For questions about these
                Terms of Service, contact us:
              </p>
              <div className="space-y-2 text-gray-400">
                <div>
                  Email:{" "}
                  <span className="text-red-400">securecloudx.learn@gmail.com</span>
                </div>
                <div>
                  GitHub:{" "}
                  <a href="https://github.com/0tieno/securecloudX" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">github.com/0tieno/securecloudX</a>
                </div>
                <div>
                  Twitter: <span className="text-red-400">@securecloudX</span>
                </div>
                <div>
                  WhatsApp: <span className="text-red-400">Community Group</span>
                </div>
              </div>
              <div className="text-xs text-gray-400 mt-3">
                # Response Time: 24-48 hours • Community Support Available
              </div>
            </QABlock>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-green-400 text-sm mb-2">
                $ echo "Thank you for being part of the securecloudX community"
              </div>
              <div className="text-gray-500 text-xs">
                Last updated: April 19, 2026 • Version: 1.2
              </div>
              <div className="text-gray-500 text-xs mt-2">
                © 2025–2026 securecloudX • Open Source Educational Platform
              </div>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}
