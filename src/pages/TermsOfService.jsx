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

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <Content>
        <div className="max-w-4xl mx-auto py-8 px-4">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/"
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
              // Last updated: September 2, 2025
            </p>
          </div>

          {/* Terms Content in Q&A Format */}
          <div className="space-y-8">
            {/* What is securecloudX? */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <div className="flex items-start mb-3">
                <Terminal className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-cyan-400">
                  Q: What is securecloudX?
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed ml-8">
                <p className="mb-3">
                  <span className="text-green-400">A:</span> securecloudX is an{" "}
                  <span className="text-yellow-400">
                    open source educational platform
                  </span>{" "}
                  focused on cloud security engineering and penetration testing.
                  We provide free learning resources, hands-on labs, and
                  practical guidance for mastering cloud security across Azure,
                  AWS, and GCP platforms.
                </p>
                <div className="text-xs text-gray-400">
                  # Project Type: Educational • Open Source • Community-Driven
                </div>
              </div>
            </div>

            {/* Acceptance of Terms */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <div className="flex items-start mb-3">
                <BookOpen className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-cyan-400">
                  Q: By using securecloudX, what am I agreeing to?
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed ml-8">
                <p className="mb-3">
                  <span className="text-green-400">A:</span> By accessing and
                  using securecloudX.guide, you agree to be bound by these Terms
                  of Use. You acknowledge that you are at least 13 years old
                  and have the legal capacity to enter into this agreement. If
                  you disagree with any part of these terms, you must
                  discontinue use of our platform.
                </p>
                <div className="bg-gray-900 border border-yellow-600 p-3 rounded mt-3">
                  <div className="text-yellow-400 text-sm">
                    [IMPORTANT] These terms apply to all users, contributors,
                    and visitors of securecloudX
                  </div>
                </div>
              </div>
            </div>

            {/* Open Source License */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <div className="flex items-start mb-3">
                <Shield className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-cyan-400">
                  Q: What are the licensing terms for securecloudX content?
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed ml-8">
                <p className="mb-3">
                  <span className="text-green-400">A:</span> securecloudX is
                  released under an{" "}
                  <span className="text-yellow-400">open source license</span>.
                  All educational content, labs, and documentation are freely
                  available for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                  <li>Personal learning and skill development</li>
                  <li>Educational use in academic institutions</li>
                  <li>Non-commercial sharing and distribution</li>
                  <li>Contributing improvements back to the community</li>
                </ul>
                <div className="text-xs text-gray-400">
                  # License: Open Source • Attribution Required • Non-Commercial
                  Use
                </div>
              </div>
            </div>

            {/* Commercial Use */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <div className="flex items-start mb-3">
                <Users className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-cyan-400">
                  Q: Can I use securecloudX content for commercial purposes?
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed ml-8">
                <p className="mb-3">
                  <span className="text-green-400">A:</span> Limited commercial
                  use is permitted with proper attribution. You may reference
                  our content in professional presentations, training materials,
                  or educational courses, provided you:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                  <li>Credit securecloudX as the original source</li>
                  <li>Include a link to securecloudx.guide</li>
                  <li>Do not claim ownership of our content</li>
                  <li>
                    Do not sell our content directly as a standalone product
                  </li>
                </ul>
                <div className="bg-gray-900 border border-blue-600 p-3 rounded mt-3">
                  <div className="text-blue-400 text-sm">
                    [NOTE] For extensive commercial use, please contact us at
                    securecloudx.learn@gmail.com
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Use Disclaimer */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <div className="flex items-start mb-3">
                <AlertTriangle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-cyan-400">
                  Q: What should I know about the security testing content?
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed ml-8">
                <p className="mb-3">
                  <span className="text-green-400">A:</span> Our penetration
                  testing and security assessment content is for{" "}
                  <span className="text-yellow-400">
                    educational purposes only
                  </span>
                  . You must:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                  <li>
                    Only test systems you own or have explicit permission to
                    test
                  </li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Use knowledge responsibly and ethically</li>
                  <li>Respect others' privacy and security</li>
                </ul>
                <div className="bg-gray-900 border border-red-600 p-3 rounded mt-3">
                  <div className="text-red-400 text-sm">
                    [WARNING] Unauthorized testing of systems is illegal and may
                    result in criminal charges
                  </div>
                </div>
              </div>
            </div>

            {/* User Conduct */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <div className="flex items-start mb-3">
                <Users className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-cyan-400">
                  Q: What behavior is expected in the securecloudX community?
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed ml-8">
                <p className="mb-3">
                  <span className="text-green-400">A:</span> We maintain a
                  professional, inclusive learning environment. Users must:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                  <li>Treat all community members with respect</li>
                  <li>Share knowledge constructively and helpfully</li>
                  <li>Report security vulnerabilities responsibly</li>
                  <li>Avoid sharing malicious code or exploits</li>
                  <li>Respect intellectual property rights</li>
                </ul>
                <div className="text-xs text-gray-400">
                  # Community Values: Respect • Learning • Ethical Security •
                  Open Collaboration
                </div>
              </div>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <div className="flex items-start mb-3">
                <Shield className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-cyan-400">
                  Q: What warranties does securecloudX provide?
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed ml-8">
                <p className="mb-3">
                  <span className="text-green-400">A:</span> securecloudX is
                  provided{" "}
                  <span className="text-yellow-400">
                    "AS IS" without warranties
                  </span>{" "}
                  of any kind. While we strive for accuracy and quality, we
                  cannot guarantee:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                  <li>Error-free content or continuous availability</li>
                  <li>Fitness for any particular purpose</li>
                  <li>Compatibility with all systems or environments</li>
                  <li>Achievement of specific learning outcomes</li>
                </ul>
                <div className="text-xs text-gray-400">
                  # Use at your own risk • Community-driven content •
                  Educational purpose
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <div className="flex items-start mb-3">
                <AlertTriangle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-cyan-400">
                  Q: Is securecloudX liable for damages from using the platform?
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed ml-8">
                <p className="mb-3">
                  <span className="text-green-400">A:</span> securecloudX and
                  its contributors are{" "}
                  <span className="text-yellow-400">
                    not liable for any damages
                  </span>{" "}
                  arising from use of our platform, including but not limited
                  to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                  <li>System damage from security testing</li>
                  <li>Data loss or security breaches</li>
                  <li>Legal consequences of improper use</li>
                  <li>Business or career impacts</li>
                </ul>
                <div className="bg-gray-900 border border-yellow-600 p-3 rounded mt-3">
                  <div className="text-yellow-400 text-sm">
                    [RESPONSIBILITY] Users are solely responsible for how they
                    apply knowledge gained from securecloudX
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy and Data Collection */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <div className="flex items-start mb-3">
                <Shield className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-cyan-400">
                  Q: How does securecloudX handle user data?
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed ml-8">
                <p className="mb-3">
                  <span className="text-green-400">A:</span> We collect minimal
                  data necessary for platform functionality:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                  <li>
                    No personal information required for accessing content
                  </li>
                  <li>
                    Optional contact information for consultation services
                  </li>
                  <li>Basic analytics for improving user experience</li>
                  <li>GitHub data for open source contributions</li>
                </ul>
                <div className="text-xs text-gray-400">
                  # Privacy-First • Minimal Data Collection • Transparent
                  Practices
                </div>
              </div>
            </div>

            {/* Modifications to Terms */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <div className="flex items-start mb-3">
                <BookOpen className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-cyan-400">
                  Q: Can these terms be modified?
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed ml-8">
                <p className="mb-3">
                  <span className="text-green-400">A:</span> We may update these
                  terms to reflect platform changes or legal requirements.
                  Updates will be posted on this page with the revision date.
                  Continued use after modifications constitutes acceptance of
                  the updated terms.
                </p>
                <div className="bg-gray-900 border border-green-600 p-3 rounded mt-3">
                  <div className="text-green-400 text-sm">
                    [UPDATES] Check this page periodically for the latest terms
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <div className="flex items-start mb-3">
                <Terminal className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-cyan-400">
                  Q: How can I contact securecloudX about these terms?
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed ml-8">
                <p className="mb-3">
                  <span className="text-green-400">A:</span> For questions about
                  these Terms of Service, contact us:
                </p>
                <div className="space-y-2 text-gray-400">
                  <div>
                    📧 Email:{" "}
                    <span className="text-red-400">
                      securecloudx.learn@gmail.com
                    </span>
                  </div>
                  <div>
                    🐙 GitHub:{" "}
                    <span className="text-red-400">
                      github.com/securecloudx
                    </span>
                  </div>
                  <div>
                    🐦 Twitter:{" "}
                    <span className="text-red-400">@securecloudX</span>
                  </div>
                  <div>
                    💬 WhatsApp:{" "}
                    <span className="text-red-400">Community Group</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-3">
                  # Response Time: 24-48 hours • Community Support Available
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-green-400 text-sm mb-2">
                $ echo "Thank you for being part of the securecloudX community"
              </div>
              <div className="text-gray-500 text-xs">
                Last updated: September 2, 2025 • Version: 1.0
              </div>
              <div className="text-gray-500 text-xs mt-2">
                © 2025 securecloudX • Open Source Educational Platform
              </div>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}
