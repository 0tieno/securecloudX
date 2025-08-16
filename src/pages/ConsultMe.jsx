import React, { useState } from "react";
import {
  Calendar,
  Clock,
  DollarSign,
  Video,
  MessageCircle,
  Shield,
  Zap,
  Check,
  User,
  Mail,
  Phone,
} from "lucide-react";
import Content from "../components/Content";

const ConsultMe = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const consultationPackages = [
    {
      id: "student",
      name: "Student Session",
      duration: "45 minutes",
      price: "KSh 200",
      description:
        "Perfect for students needing guidance with SecureCloudX challenges",
      features: [
        "Cloud security 1-1 training",
        "Challenge walkthrough assistance",
        "Cloud security concept explanation",
        "Career guidance and tips",
        "Portfolio development advice",
        "Learning path recommendations",
      ],
      icon: <User className="w-6 h-6" />,
    },
    {
      id: "business",
      name: "Business Consultation",
      duration: "60 minutes",
      price: "KSh 4,000",
      description: "Comprehensive consultation for small businesses",
      features: [
        "Security assessment guidance",
        "Cloud migration strategy",
        "Compliance framework discussion",
        "Risk analysis and mitigation",
        "Implementation roadmap",
        "Follow-up recommendations",
      ],
      icon: <Shield className="w-6 h-6" />,
      popular: true,
    },
  ];

  const availableSlots = [
    { day: "Monday", times: ["9:00 AM EAT", "2:00 PM EAT", "6:00 PM EAT"] },
    { day: "Tuesday", times: ["10:00 AM EAT", "3:00 PM EAT", "7:00 PM EAT"] },
    { day: "Wednesday", times: ["9:00 AM EAT", "1:00 PM EAT", "5:00 PM EAT"] },
    { day: "Thursday", times: ["11:00 AM EAT", "4:00 PM EAT", "8:00 PM EAT"] },
  ];

  return (
    <Content>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Cloud Security Consulting
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Professional cloud security guidance for students and small
            businesses.
          </p>
        </div>

        {/* Consultation Packages */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your Session
            </h2>
            <p className="text-gray-400">Simple pricing for focused guidance</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {consultationPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all hover:scale-105 ${
                  selectedPackage?.id === pkg.id
                    ? "border-blue-500 bg-blue-500/10 shadow-2xl shadow-blue-500/25"
                    : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                } ${pkg.popular ? "ring-2 ring-green-500/50" : ""}`}
                onClick={() => setSelectedPackage(pkg)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-blue-400 mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-gray-400">{pkg.duration}</div>
                </div>

                <p className="text-gray-300 mb-6 text-center">
                  {pkg.description}
                </p>

                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Available Time Slots */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Available Times
            </h2>
            <p className="text-gray-400">All times in East Africa Time (EAT)</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {availableSlots.map((slot) => (
              <div
                key={slot.day}
                className="bg-gray-800/70 rounded-xl p-6 border border-gray-700"
              >
                <h3 className="font-bold text-white mb-4 text-center text-lg">
                  {slot.day}
                </h3>
                <div className="space-y-3">
                  {slot.times.map((time) => (
                    <button
                      key={time}
                      className={`w-full p-3 rounded-lg text-sm font-medium transition-all ${
                        selectedTime === `${slot.day} ${time}`
                          ? "bg-blue-500 text-white shadow-lg"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      onClick={() => setSelectedTime(`${slot.day} ${time}`)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Booking Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Simple Payment Process
            </h2>
            <p className="text-gray-300">
              Quick M-Pesa payment and confirmation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Payment Info */}
            <div className="text-center">
              <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                <div className="text-green-400 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">M-Pesa</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  0717035561
                </div>
                <p className="text-gray-400">Ronney Otieno</p>
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-white">Choose & Pay</h4>
                  <p className="text-gray-400 text-sm">
                    Select your session and send M-Pesa payment
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-white">Confirm Payment</h4>
                  <p className="text-gray-400 text-sm">
                    Email confirmation with your preferred time
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-white">Meet & Learn</h4>
                  <p className="text-gray-400 text-sm">
                    Receive meeting link and calendar invite
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="mailto:securecloudx.learn@gmail.com?subject=Consultation%20Payment%20Confirmation&body=Hi%20Ronney,%0A%0AI%20have%20made%20a%20payment%20for%20consultation.%0A%0APackage:%20[Student%20Session%20or%20Business%20Consultation]%0APreferred%20Time:%20[Day%20and%20Time]%0AM-Pesa%20Code:%20[Your%20M-Pesa%20confirmation%20code]%0A%0AThank%20you!"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Confirm Payment via Email
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-8">
            What People Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 italic mb-4">
                "Clear explanations and practical examples. Really helped me
                understand cloud security concepts."
              </p>
              <p className="text-gray-400 text-sm">— SecureCloudX Student</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 italic mb-4">
                "Professional advice that actually works. Worth every shilling
                for my business security."
              </p>
              <p className="text-gray-400 text-sm">— Small Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default ConsultMe;
