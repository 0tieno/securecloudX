import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BeginnerIntro = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-gray-200">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">New to Cloud? Start Here 🚀</h1>

      <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300">
        If you're completely new to cloud and cloud concepts, we highly recommend starting with these short beginner-friendly resources:
      </p>

      <ul className="list-disc pl-6 space-y-4 mb-6">
        <li>
          <a
            href="https://learn.microsoft.com/training/modules/describe-cloud-compute/?wt.mc_id=studentamb_387261"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Describe cloud computing
          </a>
        </li>
        <li>
          <a
            href="https://learn.microsoft.com/training/modules/describe-benefits-use-cloud-services/?wt.mc_id=studentamb_387261"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Describe the benefits of using cloud services
          </a>
        </li>
        <li>
          <a
            href="https://learn.microsoft.com/training/modules/describe-cloud-service-types/?wt.mc_id=studentamb_387261"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Describe cloud service types
          </a>
        </li>
      </ul>

      <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg mb-6">
        <p className="text-base md:text-lg leading-relaxed">
          And most importantly, learn{" "}
          <a
            href="https://learn.microsoft.com/training/modules/describe-core-architectural-components-of-azure/?wt.mc_id=studentamb_387261"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 underline hover:text-yellow-300"
          >
            What is Microsoft Azure
          </a>{" "}
          — because Azure is the cloud we will use to apply security throughout this challenge.
        </p>
        <p className="mt-3">
          Create an Azure account:{" "}
          <a
            href="https://azure.microsoft.com/pricing/purchase-options/azure-account/?wt.mc_id=studentamb_387261"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Free Azure Account
          </a>{" "}
          |{" "}
          <a
            href="https://azure.microsoft.com/free/students/?wt.mc_id=studentamb_387261"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Student Free Account
          </a>
        </p>
      </div>

      <p className="text-gray-400 italic mb-8">
        Don’t worry about mastering everything on Day 1. This challenge breaks down the concepts into simple, digestible bits with extra resources and definitions to help you learn as you go.
      </p>

      <div className="text-center">
        <Link
          to="/day1"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
        >
          Start Day 1 Challenge <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default BeginnerIntro;
