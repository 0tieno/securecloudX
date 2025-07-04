import Content from "../../components/Content";
import { Link } from "react-router-dom";

const Phase3 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-gray">Lab 3: Private Storage with High Availability</h2>
      <p className="mt-2 text-gray-300">
        The company needs storage for their offices and departments. This content is private to the company and shouldn’t be shared without consent. This storage requires high availability if there’s a regional outage. The company wants to use this storage to back up the public website.
      </p>

      {/* Skilling Tasks */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Skilling Tasks</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
          <li>Create a storage account for the company private documents.</li>
          <li>Configure redundancy for the storage account.</li>
          <li>Configure a shared access signature so partners have restricted access to a file.</li>
          <li>Back up the public website storage.</li>
          <li>Implement lifecycle management to move content to the cool tier.</li>
        </ul>
      </div>

      {/* Step-by-step guide */}
      <div className="mt-8 space-y-6">
        <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
          <h4 className="text-lg font-semibold text-blue-400">Create a storage account and configure high availability</h4>
          <p className="text-gray-300 mt-2">Create a storage account for the internal private company documents:</p>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
            <li>In the portal, search for and select <strong>Storage accounts</strong>.</li>
            <li>Select <strong>+ Create</strong>.</li>
            <li>Select the Resource group created in the previous lab.</li>
            <li>Set the Storage account name to <code>private</code> with a unique identifier.</li>
            <li>Select <strong>Review</strong>, then <strong>Create</strong> the storage account.</li>
            <li>Wait for the storage account to deploy, then select <strong>Go to resource</strong>.</li>
            <li>In the <strong>Redundancy</strong> blade, select <strong>Geo-redundant storage (GRS)</strong>.</li>
            <li>Refresh the page and review the primary and secondary location info. Save your changes.</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
          <h4 className="text-lg font-semibold text-blue-400">Create a storage container, upload a file, and restrict access to the file</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
            <li>Go to the <strong>Containers</strong> blade and select <strong>+ Container</strong>.</li>
            <li>Name the container <code>private</code>, and set Public access level to <strong>Private</strong>.</li>
            <li>Upload any small file to test, and try accessing its URL in a browser (it should be blocked).</li>
            <li>Generate a <strong>SAS</strong> token with read permissions valid for 24 hours.</li>
            <li>Verify that the file can be accessed using the SAS URL in a browser.</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
          <h4 className="text-lg font-semibold text-blue-400">Configure lifecycle rules and object replication</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
            <li>In the <strong>Lifecycle management</strong> blade, add a rule named <code>movetocool</code>.</li>
            <li>Set scope to all blobs, and move content to <strong>cool</strong> tier after 30 days.</li>
            <li>In the original storage account, create a new container named <code>backup</code>.</li>
            <li>In your <code>publicwebsite</code> storage account, configure <strong>Object replication</strong>.</li>
            <li>Set destination storage account to <code>private</code>, and replicate from <code>public</code> to <code>backup</code>.</li>
            <li>Test the replication by uploading a file to the <code>public</code> container, and verify it appears in the <code>backup</code> container.</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-yellow-500">
          <h4 className="text-lg font-semibold text-yellow-400">Extend Your Learning with Copilot</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
            <li>What security features are available to protect Azure storage?</li>
            <li>What is an Azure SAS and how is it used?</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-green-500">
          <h4 className="text-lg font-semibold text-green-400">Key Takeaways</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
            <li>Azure storage supports encryption, access control, network security, monitoring, and alerts.</li>
            <li>SAS provides secure delegated access with granular control.</li>
            <li>Lifecycle rules help optimize cost by automating data tiering.</li>
            <li>Object replication supports asynchronous backups across regions.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-between text-sm sm:text-base">
        <Link
          to="/day3/task"
          className="text-blue-400 hover:underline hover:text-blue-300"
        >
          ← Back to Task 3
        </Link>
        <Link
          to="/day/3/resources"
          className="text-blue-400 hover:underline hover:text-blue-300"
        >
          Day 3 Resources →
        </Link>
      </div>
    </Content>
  );
};

export default Phase3;
