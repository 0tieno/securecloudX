import React from "react";

export default function RefundPolicy() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-16 mb-16 bg-black text-white px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Refund Policy</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-200">
          This Refund Policy applies to all purchases made through the website
          Time.fyi. By making a purchase, you agree to the terms of this policy.
          If, for any reason, you are not completely satisfied with your
          purchase, you are entitled to request a refund within 15 days of the
          payment date.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Refund Eligibility</h2>
        <ul className="list-disc list-inside text-gray-200 ml-4">
          <li>
            The request for a refund must be made within 15 days of the payment
            date.
          </li>
          <li>
            For a recurring subscription, the refund request must be made within
            15 days of the initial payment date for the first month of the
            subscription.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How to Request a Refund</h2>
        <ol className="list-decimal list-inside text-gray-200 ml-4">
          <li>
            <span className="font-semibold">Email Us:</span> Send an email to{" "}
            <a
              href="mailto:kamranahmed.se@gmail.com"
              className="text-blue-400 underline"
            >
              kamranahmed.se@gmail.com
            </a>{" "}
            with the subject line "Refund Request".
          </li>
          <li>
            <span className="font-semibold">Provide Details:</span> In the
            email, include your name, date of purchase, and the reason for the
            refund request.
          </li>
          <li>
            <span className="font-semibold">Wait For Response:</span> Our team
            will review your request and respond within 3-5 business days.
          </li>
        </ol>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Refund Process</h2>
        <p className="text-gray-200">
          Once your refund request is approved, the refund will be processed,
          and a credit will automatically be applied to your original method of
          payment. The time it takes for the refund to reflect in your account
          may vary depending on your bank or credit card issuer.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-200">
          If you have any questions or concerns about our refund policy, please
          contact us at{" "}
          <a
            href="mailto:kamranahmed.se@gmail.com"
            className="text-blue-400 underline"
          >
            kamranahmed.se@gmail.com
          </a>
          .
        </p>
      </section>
      <hr className="border-gray-700 my-6" />
      <p className="text-xs text-gray-400 mt-2">
        <span className="font-semibold">Note:</span> This refund policy is
        subject to change without prior notice. Please review this policy
        periodically for any updates. By making a purchase, you acknowledge that
        you have read, understood, and agreed to this refund policy.
      </p>
    </div>
  );
}
