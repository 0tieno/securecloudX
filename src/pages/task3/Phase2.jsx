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
          <li>Create a storage account with high availability to support the public website.</li>
          <li>Ensure the storage account allows anonymous public access.</li>
          <li>Create a blob storage container for website content with anonymous read access.</li>
          <li>Enable soft delete for blobs and practice restoring deleted files.</li>
          <li>Enable blob versioning and experiment with restoring previous versions.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Step-by-Step Guide</h3>

        {/* Step 1 */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Create a Storage Account with High Availability</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>In the portal, search for and select <strong>Storage accounts</strong>.</li>
            <li>Select <strong>+ Create</strong>.</li>
            <li>For resource group, select <strong>new</strong>. Give your resource group a name and select OK.</li>
            <li>Set the Storage account name to <code>publicwebsite</code> and add a unique identifier.</li>
            <li>Take the defaults for other settings.</li>
            <li>Select <strong>Review</strong> and then <strong>Create</strong>.</li>
            <li>Wait for the storage account to deploy, then select <strong>Go to resource</strong>.</li>
            <li>
              In the storage account, in the <strong>Data management</strong> section, select the <strong>Redundancy</strong> blade.
            </li>
            <li>
              Ensure <strong>Read-access Geo-redundant storage</strong> is selected.
            </li>
            <li>
              Review the primary and secondary location information.
            </li>
          </ul>
        </div>

        {/* Step 2 */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Allow Anonymous Public Access</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>
              In the storage account, in the <strong>Settings</strong> section, select the <strong>Configuration</strong> blade.
            </li>
            <li>
              Ensure the <strong>Allow blob anonymous access</strong> setting is <strong>Enabled</strong>.
            </li>
            <li>
              Be sure to <strong>Save</strong> your changes.
            </li>
          </ul>
        </div>

        {/* Step 3 */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 3: Create a Blob Storage Container with Anonymous Read Access</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>
              In your storage account, in the <strong>Data storage</strong> section, select the <strong>Containers</strong> blade.
            </li>
            <li>
              Select <strong>+ Container</strong>.
            </li>
            <li>
              Ensure the <strong>Name</strong> of the container is <code>public</code>.
            </li>
            <li>
              Select <strong>Create</strong>.
            </li>
            <li>
              Select your <code>public</code> container.
            </li>
            <li>
              On the <strong>Overview</strong> blade, select <strong>Change access level</strong>.
            </li>
            <li>
              Ensure the <strong>Public access level</strong> is <strong>Blob (anonymous read access for blobs only)</strong>.
            </li>
            <li>
              Select <strong>OK</strong>.
            </li>
          </ul>
        </div>

        {/* Step 4 */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg sm:text-xl font-semibold text-green-400">Step 4: Upload Files and Test Access</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>Ensure you are viewing your <code>public</code> container.</li>
            <li>Select <strong>Upload</strong>.</li>
            <li>Browse to and select a file (any small image or text file).</li>
            <li>Select <strong>Upload</strong>.</li>
            <li>Close the upload window, refresh the page, and ensure your file was uploaded.</li>
            <li>Select your uploaded file.</li>
            <li>On the <strong>Overview</strong> tab, copy the URL.</li>
            <li>Paste the URL into a new browser tab to test access.</li>
            <li>If you uploaded an image, it will display in the browser. Other file types should be downloaded.</li>
          </ul>
        </div>

        {/* Step 5 */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">Step 5: Configure Soft Delete</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>Go to the <strong>Overview</strong> blade of the storage account.</li>
            <li>On the <strong>Properties</strong> page, locate the <strong>Blob service</strong> section.</li>
            <li>Select the <strong>Blob soft delete</strong> setting.</li>
            <li>Ensure <strong>Enable soft delete for blobs</strong> is checked.</li>
            <li>Set <strong>Keep deleted blobs for (in days)</strong> to <strong>21</strong>.</li>
            <li>Optionally, enable soft delete for containers.</li>
            <li>Save your changes.</li>
            <li>
              To practice restoring files:
              <ul className="list-disc pl-5 mt-1">
                <li>Navigate to your container where you uploaded a file.</li>
                <li>Select the file and then select <strong>Delete</strong>.</li>
                <li>Confirm deleting the file.</li>
                <li>On the container <strong>Overview</strong> page, toggle <strong>Show deleted blobs</strong> (to the right of the search box).</li>
                <li>Select your deleted file, use the ellipses on the far right, and select <strong>Undelete</strong>.</li>
                <li>Refresh the container and confirm the file has been restored.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Step 6 */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">Step 6: Configure Blob Versioning</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
            <li>Go to the <strong>Overview</strong> blade of the storage account.</li>
            <li>In the <strong>Properties</strong> section, locate the <strong>Blob service</strong> section.</li>
            <li>Select the <strong>Versioning</strong> setting.</li>
            <li>Ensure <strong>Enable versioning for blobs</strong> is checked.</li>
            <li>Notice your options to keep all versions or delete versions after a period.</li>
            <li>Save your changes.</li>
            <li>
              To experiment with restoring previous blob versions:
              <ul className="list-disc pl-5 mt-1">
                <li>Upload another version of your container file (this overwrites your existing file).</li>
                <li>Your previous file version is listed on the <strong>Show deleted blobs</strong> page.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 mt-4 rounded-lg p-4 border-l-4 border-yellow-500">
          <h4 className="text-lg font-semibold text-yellow-400">Extend Your Learning with Copilot</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
            <li>What is Azure blob storage and when should it be used?</li>
            <li>Compare the different Azure storage redundancy models, highlighting their key features and use cases.</li>
            <li>What are the Azure storage tiers and how can those tiers save money?</li>
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
