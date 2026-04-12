import { ArrowRight, BookOpen, ExternalLink, CheckCircle2, ChevronDown, ChevronRight, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const BeginnerIntro = () => {
  const [isObjectivesOpen, setIsObjectivesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 pb-32 font-mono">
      <div className="w-full max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <BookOpen className="w-7 h-7 text-green-400 mr-3" />
            <h1 className="text-4xl font-bold text-gray-300">
              new_to_cloud?
            </h1>
          </div>
          <p className="text-gray-400 max-w-3xl text-base">
            // Start with beginner-friendly resources to build your foundation
          </p>
          
        </div>

        {/* Learning Objectives */}
        <div className="mb-8 bg-gray-800 border border-gray-700">
          <button
            onClick={() => setIsObjectivesOpen(!isObjectivesOpen)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="text-cyan-400 text-base">
                $ cat learning_objectives.txt
              </div>
            </div>
            {isObjectivesOpen ? (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {isObjectivesOpen && (
            <div className="px-6 pb-6 border-t border-gray-700 pt-4">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                By the end of this section, you should be able to:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-base">
                    Explain the fundamental concepts of cloud computing and how it differs from traditional infrastructure
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-base">
                    Identify the key benefits and security considerations when using cloud services
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-base">
                    Understand different cloud service models (IaaS, PaaS, SaaS) and their security implications
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-base">
                    Navigate Microsoft Azure's core architectural components and services
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-base">
                    Recognize common cloud security breaches and vulnerabilities from real-world incidents
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-base">
                    Set up your Azure account and prepare your environment for hands-on security challenges
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cloud Fundamentals */}
        <div className="mb-8">
          <div className="text-gray-400 text-base mb-3">
            $ cat what_is_cloud_security.sh
          </div>
          <div className="space-y-2">
            <a
              href="https://cloud.google.com/learn/what-is-cloud-security"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-base flex items-center gap-2"
            >
              <ExternalLink size={16} />
              → Read: cloud_security_according_to_google.md
            </a>
            <a
              href="https://www.microsoft.com/en-us/security/business/security-101/what-is-cloud-security"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-base flex items-center gap-2"
            >
              <ExternalLink size={16} />
              → Read: cloud_security_according_to_microsoft.md
            </a>
            <a
              href="https://youtu.be/jI8IKpjiCSM?si=oP0DHGhIMw6qk7bl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-base flex items-center gap-2"
            >
              <ExternalLink size={16} />
              → Watch video: cloud_security_explained_in_10_minutes.md
            </a>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-8">
          <div className="text-gray-400 text-base mb-3">
            $ ls -la ./resources
          </div>
          <div className="space-y-2">
            <a
              href="https://www.nojones.net/posts/breaking-into-cloudsec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-base flex items-center gap-2"
            >
              <ExternalLink size={16} />
              → breaking_into_cloudsec.md
            </a>
            <a
              href="https://blog.christophetd.fr/cloud-security-breaches-and-vulnerabilities-2021-in-review/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-base flex items-center gap-2"
            >
              <ExternalLink size={16} />
              → cloud_security_breaches_2021.analysis
            </a>
          </div>
        </div>

        {/* Cloud Fundamentals */}
        <div className="mb-8">
          <div className="text-gray-400 text-base mb-3">
            $ cat cloud_fundamentals.sh
          </div>
          <div className="space-y-2">
            <a
              href="https://learn.microsoft.com/training/modules/describe-cloud-compute/?wt.mc_id=studentamb_387261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-base flex items-center gap-2"
            >
              <ExternalLink size={16} />
              → describe_cloud_computing.md
            </a>
            <a
              href="https://learn.microsoft.com/training/modules/describe-benefits-use-cloud-services/?wt.mc_id=studentamb_387261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-base flex items-center gap-2"
            >
              <ExternalLink size={16} />
              → cloud_service_benefits.md
            </a>
            <a
              href="https://learn.microsoft.com/training/modules/describe-cloud-service-types/?wt.mc_id=studentamb_387261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-base flex items-center gap-2"
            >
              <ExternalLink size={16} />
              → cloud_service_types.md
            </a>
          </div>
        </div>

        {/* Azure Setup */}
        <div className="mb-8">
          <div className="text-yellow-400 text-base mb-3">
            $ cat Finally.txt
          </div>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            Ensure you have an azure account set up and ready to go. If you don't have one, you can create a <a
              href="https://azure.microsoft.com/pricing/purchase-options/azure-account/?wt.mc_id=studentamb_387261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
            >
              Free Account <ExternalLink size={14} />
            </a>{" "} or a <a
              href="https://azure.microsoft.com/free/students/?wt.mc_id=studentamb_387261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
            >
              Student Account <ExternalLink size={14} />
            </a>. This will be essential for completing the hands-on labs and challenges in the upcoming sections.
          </p>
          <div className="text-gray-400 text-base">
            Currently we use <a
              href="https://learn.microsoft.com/training/modules/describe-core-architectural-components-of-azure/?wt.mc_id=studentamb_387261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline inline-flex items-center gap-1"
            >
              Microsoft Azure <ExternalLink size={14} />
            </a> as the cloud platform to apply security throughout this challenge.
          </div>
        </div>

        {/* Start Challenge */}
        <div className="bg-gray-800 border border-gray-700 p-6">
          <div className="text-green-400 text-base mb-2">
            $ ./start_challenge.sh
          </div>
          <h2 className="text-2xl font-bold text-gray-300 mb-4">
            Ready to Begin?
          </h2>
          <Link
            to="/module1"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white transition-colors border border-blue-500 text-base"
          >
            Start Day 1 Challenge <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeginnerIntro;
