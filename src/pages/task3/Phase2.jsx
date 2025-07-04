import React from "react";
import { Link } from "react-router-dom";
import Content from "../../components/Content";

const Phase2 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-gray">Lab 2: Public Website Storage</h2>
      <p className="mt-2 text-gray-300">
        The company website supplies product images, videos, marketing literature, and customer success stories. Customers are located worldwide and demand is rapidly expanding. The content is mission-critical and requires low latency load times. It’s important to keep track of the document versions and to quickly restore documents if they’re deleted.
      </p>

      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">What You’ll Do</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
          <li>Create a storage account with high availability.</li>
          <li>Ensure the storage account has anonymous public access.</li>
          <li>Create a blob storage container for the website documents.</li>
          <li>Enable soft delete so files can be easily restored.</li>
          <li>Enable blob versioning.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Step-by-Step Guide</h3>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Create a Storage Account with High Availability</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>In the portal, search for and select Storage accounts.</li>
            <li>Select + Create.</li>
            <li>For resource group, select new. Name it and click OK.</li>
            <li>Set the Storage account name to <code>publicwebsite</code> with a unique identifier.</li>
            <li>Take the defaults for other settings.</li>
            <li>Review and Create, then go to the resource once deployed.</li>
            <li>In the Redundancy blade, ensure Read-access Geo-redundant storage is selected.</li>
            <li>Review the primary and secondary location information.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Allow Anonymous Public Access</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>In the Configuration blade of the storage account, enable <strong>Allow blob anonymous access</strong>.</li>
            <li>Save your changes.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 3: Create a Blob Storage Container</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>Go to the Containers blade and click + Container.</li>
            <li>Set the name to <code>public</code> and click Create.</li>
            <li>In the Overview blade, select Change access level.</li>
            <li>Set it to <strong>Blob (anonymous read access for blobs only)</strong> and click OK.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg sm:text-xl font-semibold text-green-400">Step 4: Upload Files and Test Access</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>Select Upload in the public container.</li>
            <li>Choose any small file (image or text) and upload it.</li>
            <li>Copy the URL from the Overview tab and test in a new browser tab.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">Step 5: Configure Soft Delete</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>In the storage account, go to Blob service → Blob soft delete.</li>
            <li>Enable it and set the retention to 21 days.</li>
            <li>Save changes and test by deleting and restoring a blob.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">Step 6: Enable Blob Versioning</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>In the Blob service settings, select Versioning.</li>
            <li>Enable versioning and save your changes.</li>
            <li>Upload another version of a file and explore previous versions via Show deleted blobs.</li>
          </ul>
        </div>

        {/* <p className="text-green-300 text-sm sm:text-base mt-3">
          <strong>Great job!</strong> You’ve completed Phase 2 of the lab. Document your setup, issues, and findings as they’ll be useful in later phases.
        </p> */}

              <div className="bg-gray-800 mt-4 rounded-lg p-4 border-l-4 border-yellow-500">
          <h4 className="text-lg font-semibold text-yellow-400">Extend Your Learning with Copilot</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
            <li>What is Azure blob storage and when should it be used?
</li>
            <li>Compare the different Azure storage redundancy models, highlighting their key features and use cases.
</li>
            <li>What are the Azure storage tiers and how can those tiers save money?
</li>
          </ul>
        </div>

        <div className="bg-gray-800 mt-4 rounded-lg p-4 border-l-4 border-green-500">
          <h4 className="text-lg font-semibold text-green-400">Key Takeaways</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
            <li>Azure Blob Storage is optimized for storing massive amounts of unstructured data. Unstructured data is data that doesn’t adhere to a particular data model or definition, such as text or binary data.</li>
            <li>Blob soft delete protects an individual blob, snapshot, or version from accidental deletes or overwrites by maintaining the deleted data in the system for a specified period of time.</li>
            <li>Lifecycle rules help optimize cost by automating data tiering.</li>
            <li>Blob versioning maintains previous versions of a blob. When blob versioning is enabled, you can restore an earlier version of a blob to recover your data if it’s modified or deleted.</li>
            <li>When a container is configured for anonymous access, any client can read data in that container.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-between text-sm sm:text-base">
        <Link
          to="/task3"
          className="text-blue-400 hover:underline hover:text-blue-300"
        >
          ← Back to Labs
        </Link>
        <Link
          to="/task3/phase3"
          className="text-blue-400 hover:underline hover:text-blue-300"
        >
          Go to Phase 3 →
        </Link>
      </div>
    </Content>
  );
};

export default Phase2;
