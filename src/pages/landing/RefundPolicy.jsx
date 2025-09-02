import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Terminal,
  Clock,
  Mail,
  AlertTriangle,
  DollarSign,
} from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
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
            <DollarSign className="w-8 h-8 text-red-400 mr-3" />
            <h1 className="text-4xl font-bold text-gray-300">
              refund_policy.md
            </h1>
          </div>

          <div className="text-green-400 text-sm mb-4">
            $ cat legal/refund_policy.md
          </div>

          <p className="text-gray-500 max-w-3xl leading-relaxed">
            // Refund policy for securecloudX consultation services
            <br />
            // Last updated: September 2, 2025
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8">
          {/* Overview */}
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <div className="flex items-start mb-3">
              <Terminal className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
              <h2 className="text-xl font-semibold text-cyan-400">
                Policy Overview
              </h2>
            </div>
            <div className="text-gray-300 leading-relaxed ml-8">
              <p className="mb-3">
                This Refund Policy applies to all{" "}
                <span className="text-yellow-400">consultation services</span>{" "}
                purchased through securecloudX.guide. By making a purchase, you
                agree to the terms of this policy.
              </p>
              <p className="mb-3">
                If, for any reason, you are not completely satisfied with your
                consultation session, you are entitled to request a refund
                within <span className="text-green-400">15 days</span> of the
                payment date.
              </p>
              <div className="bg-gray-900 border border-blue-600 p-3 rounded mt-3">
                <div className="text-blue-400 text-sm">
                  [SCOPE] This policy covers: Cloud security consultations
                </div>
              </div>
            </div>
          </div>

          {/* Refund Eligibility */}
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <div className="flex items-start mb-3">
              <Shield className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
              <h2 className="text-xl font-semibold text-cyan-400">
                Refund Eligibility Requirements
              </h2>
            </div>
            <div className="text-gray-300 leading-relaxed ml-8">
              <p className="mb-3">
                <span className="text-green-400">[REQUIREMENTS]</span> To be
                eligible for a refund, the following criteria must be met:
              </p>
              <div className="space-y-2 text-gray-400 mb-3">
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 flex-shrink-0">✓</span>
                  <span>
                    Refund request must be submitted within{" "}
                    <span className="text-yellow-400">15 days</span> of payment
                    date
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 flex-shrink-0">✓</span>
                  <span>Valid reason for dissatisfaction must be provided</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 flex-shrink-0">✓</span>
                  <span>Payment confirmation details must be available</span>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                # Eligibility window: 15 days from payment • No questions asked
                policy
              </div>
            </div>
          </div>

          {/* Refund Process */}
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <div className="flex items-start mb-3">
              <Mail className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
              <h2 className="text-xl font-semibold text-cyan-400">
                How to Request a Refund
              </h2>
            </div>
            <div className="text-gray-300 leading-relaxed ml-8">
              <p className="mb-3">
                <span className="text-green-400">[PROCESS]</span> Follow these
                steps to initiate a refund request:
              </p>

              <div className="space-y-4 mb-4">
                <div className="bg-gray-900 border border-gray-700 p-4 rounded">
                  <div className="text-yellow-400 text-sm font-semibold mb-2">
                    STEP 1: Email Contact
                  </div>
                  <div className="text-gray-400 text-sm">
                    Send an email to{" "}
                    <span className="text-red-400">
                      securecloudx.learn@gmail.com
                    </span>{" "}
                    with subject line:{" "}
                    <span className="text-green-400">"Refund Request"</span>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-700 p-4 rounded">
                  <div className="text-yellow-400 text-sm font-semibold mb-2">
                    STEP 2: Provide Required Information
                  </div>
                  <div className="text-gray-400 text-sm space-y-1">
                    <div>• Full name and contact details</div>
                    <div>• Phone number used for payment</div>
                    <div>• Date of consultation purchase</div>
                    <div>• Reason for refund request</div>
                    <div>• Payment confirmation details</div>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-700 p-4 rounded">
                  <div className="text-yellow-400 text-sm font-semibold mb-2">
                    STEP 3: Review & Response
                  </div>
                  <div className="text-gray-400 text-sm">
                    Our team will review your request and respond within{" "}
                    <span className="text-green-400">3-5 business days</span>{" "}
                    with the decision and next steps.
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-400">
                # Response time: 3-5 business days • Email confirmation provided
              </div>
            </div>
          </div>

          {/* Processing Timeline */}
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <div className="flex items-start mb-3">
              <Clock className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
              <h2 className="text-xl font-semibold text-cyan-400">
                Refund Processing Timeline
              </h2>
            </div>
            <div className="text-gray-300 leading-relaxed ml-8">
              <p className="mb-3">
                <span className="text-green-400">[TIMELINE]</span> Once your
                refund request is approved:
              </p>
              <div className="space-y-2 text-gray-400 mb-3">
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">→</span>
                  <span>
                    Refund will be processed{" "}
                    <span className="text-yellow-400">immediately</span> upon
                    approval
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">→</span>
                  <span>Funds return to original payment method</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">→</span>
                  <span>
                    Bank processing time: 3-7 business days (varies by provider)
                  </span>
                </div>
              </div>
              <div className="bg-gray-900 border border-green-600 p-3 rounded mt-3">
                <div className="text-green-400 text-sm">
                  [GUARANTEE] Full refund of consultation fees • No processing
                  charges deducted
                </div>
              </div>
            </div>
          </div>

          {/* Non-Refundable Items */}
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <div className="flex items-start mb-3">
              <AlertTriangle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
              <h2 className="text-xl font-semibold text-cyan-400">
                Important Considerations
              </h2>
            </div>
            <div className="text-gray-300 leading-relaxed ml-8">
              <p className="mb-3">
                <span className="text-yellow-400">[NOTE]</span> The following
                are covered under this refund policy:
              </p>
              <div className="space-y-2 text-gray-400 mb-3">
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 flex-shrink-0">✓</span>
                  <span>All consultation service fees</span>
                </div>
              </div>
              <div className="bg-gray-900 border border-blue-600 p-3 rounded mt-3">
                <div className="text-blue-400 text-sm">
                  [COVERAGE] This policy applies only to paid consultation
                  services • Free educational content remains available
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <div className="flex items-start mb-3">
              <Terminal className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
              <h2 className="text-xl font-semibold text-cyan-400">
                Contact Information
              </h2>
            </div>
            <div className="text-gray-300 leading-relaxed ml-8">
              <p className="mb-3">
                <span className="text-green-400">[SUPPORT]</span> For questions
                about this refund policy or to request a refund:
              </p>
              <div className="space-y-2 text-gray-400">
                <div>
                  📧 Email:{" "}
                  <span className="text-red-400">
                    securecloudx.learn@gmail.com
                  </span>
                </div>
                <div>
                  📋 Subject:{" "}
                  <span className="text-green-400">
                    "Refund Request" or "Policy Question"
                  </span>
                </div>
                <div>
                  ⏰ Response Time:{" "}
                  <span className="text-yellow-400">3-5 business days</span>
                </div>
                <div>
                  🌐 Website:{" "}
                  <span className="text-red-400">securecloudx.guide</span>
                </div>
              </div>
              <div className="text-xs text-gray-400 mt-3">
                # Professional support • Secure communication • Confidential
                handling
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gray-800 border border-yellow-600 p-4 rounded mb-6">
            <div className="text-yellow-400 text-sm font-semibold mb-2">
              [DISCLAIMER]
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              This refund policy is subject to change without prior notice.
              Please review this policy periodically for updates. By making a
              purchase, you acknowledge that you have read, understood, and
              agreed to this refund policy.
            </div>
          </div>

          <div className="text-center">
            <div className="text-green-400 text-sm mb-2">
              $ echo "Your satisfaction is our priority"
            </div>
            <div className="text-gray-500 text-xs">
              Last updated: September 2, 2025 • Version: 1.0
            </div>
            <div className="text-gray-500 text-xs mt-2">
              © 2025 securecloudX • Professional Cloud Security Consultations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
