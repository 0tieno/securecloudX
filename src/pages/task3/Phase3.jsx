import Content from "../../components/Content";
import { Link } from "react-router-dom";

const Phase3 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-gray">Lab 3: Private Storage with High Availability</h2>
     

      <p className="mt-2 text-gray-300">
        The company needs storage for their offices and departments. This content is private to the company and shouldn’t be shared without consent. This storage requires high availability if there’s a regional outage. The company wants to use this storage to back up the public website.
        </p>

       <p className="mt-2 text-gray-300">
        Note: These instructions require you to have completed Lab 02.
      </p>

      {/* Skilling Tasks */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Your Tasks</h3>
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
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Step-by-Step Guide</h3>
        {/* Create a storage account and configure high availability */}
        <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
          <h4 className="text-lg font-semibold text-blue-400">Create a storage account and configure high availability</h4>
          <ul className="list-decimal pl-5 text-gray-300 mt-2 space-y-2">
            <li>In the portal, search for and select <strong>Storage accounts</strong>.</li>
            <li>Select <strong>+ Create</strong>.</li>
            <li>Select the Resource group created in the previous lab.</li>
            <li>Set the Storage account name to <code>private</code> and add an identifier to ensure the name is unique.</li>
            <li>Select <strong>Review</strong>, then <strong>Create</strong> the storage account.</li>
            <li>Wait for the storage account to deploy, then select <strong>Go to resource</strong>.</li>
            <li>
              This storage requires high availability if there’s a regional outage. Read access in the secondary region is not required. Configure the appropriate level of redundancy.
            </li>
            <li>In the storage account, in the <strong>Data management</strong> section, select the <strong>Redundancy</strong> blade.</li>
            <li>Ensure <strong>Geo-redundant storage (GRS)</strong> is selected.</li>
            <li>Refresh the page.</li>
            <li>Review the primary and secondary location information.</li>
            <li>Save your changes.</li>
          </ul>
        </div>

        {/* Create a storage container, upload a file, and restrict access */}
        <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
          <h4 className="text-lg font-semibold text-blue-400">Create a storage container, upload a file, and restrict access to the file</h4>
          <ul className="list-decimal pl-5 text-gray-300 mt-2 space-y-2">
            <li>In the storage account, in the <strong>Data storage</strong> section, select the <strong>Containers</strong> blade.</li>
            <li>Select <strong>+ Container</strong>.</li>
            <li>Ensure the Name of the container is <code>private</code>.</li>
            <li>Ensure the Public access level is <strong>Private (no anonymous access)</strong>.</li>
            <li>Review the Advanced settings as needed, but take the defaults.</li>
            <li>Select <strong>Create</strong>.</li>
            <li>For testing, upload a file to the private container (any small image or text file).</li>
            <li>
              <ul className="list-disc pl-5">
                <li>Select the container.</li>
                <li>Select <strong>Upload</strong>.</li>
                <li>Browse to files and select a file.</li>
                <li>Upload the file.</li>
                <li>Select the uploaded file.</li>
                <li>On the Overview tab, copy the URL.</li>
                <li>Paste the URL into a new browser tab.</li>
                <li>Verify the file doesn’t display and you receive an error.</li>
              </ul>
            </li>
            <li>
              An external partner requires read and write access to the file for at least the next 24 hours. Configure and test a shared access signature (SAS):
              <ul className="list-disc pl-5">
                <li>Select your uploaded blob file and move to the <strong>Generate SAS</strong> tab.</li>
                <li>In the Permissions drop-down, ensure the partner has only <strong>Read</strong> permissions.</li>
                <li>Verify the Start and expiry date/time is for the next 24 hours.</li>
                <li>Select <strong>Generate SAS token and URL</strong>.</li>
                <li>Copy the Blob SAS URL to a new browser tab.</li>
                <li>Verify you can access the file.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Configure storage access tiers and content replication */}
        <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
          <h4 className="text-lg font-semibold text-blue-400">Configure storage access tiers and content replication</h4>
          <ul className="list-decimal pl-5 text-gray-300 mt-2 space-y-2">
            <li>
              To save on costs, after 30 days, move blobs from the hot tier to the cool tier:
              <ul className="list-disc pl-5">
                <li>Return to the storage account.</li>
                <li>In the Overview section, notice the Default access tier is set to <strong>Hot</strong>.</li>
                <li>In the <strong>Data management</strong> section, select the <strong>Lifecycle management</strong> blade.</li>
                <li>Select <strong>Add rule</strong>.</li>
                <li>Set the Rule name to <code>movetocool</code>.</li>
                <li>Set the Rule scope to <strong>Apply rule to all blobs in the storage account</strong>.</li>
                <li>Select <strong>Next</strong>.</li>
                <li>Ensure <strong>Last modified</strong> is selected.</li>
                <li>Set <strong>More than (days ago)</strong> to 30.</li>
                <li>In the Then drop-down select <strong>Move to cool storage</strong>.</li>
                <li>Add the rule.</li>
              </ul>
            </li>
            <li>
              The public website files need to be backed up to another storage account:
              <ul className="list-disc pl-5">
                <li>In your storage account, create a new container called <code>backup</code>. Use the default values.</li>
                <li>Navigate to your <code>publicwebsite</code> storage account (created in the previous exercise).</li>
                <li>In the <strong>Data management</strong> section, select the <strong>Object replication</strong> blade.</li>
                <li>Select <strong>Create replication rules</strong>.</li>
                <li>Set the Destination storage account to the private storage account.</li>
                <li>Set the Source container to <code>public</code> and the Destination container to <code>backup</code>.</li>
                <li>Create the replication rule.</li>
                <li>
                  Optionally, upload a file to the public container. Return to the private storage account and refresh the backup container. Within a few minutes your public website file will appear in the backup folder.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 mt-4 rounded-lg p-4 border-l-4 border-yellow-500">
          <h4 className="text-lg font-semibold text-yellow-400">Extend Your Learning with Copilot</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
            <li>What security features are available to protect Azure storage?</li>
            <li>What is an Azure SAS and how is it used?
</li>
          </ul>
        </div>

        <div className="bg-gray-800 mt-4 rounded-lg p-4 border-l-4 border-green-500">
          <h4 className="text-lg font-semibold text-green-400">Key Takeaways</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
            <li>Azure storage has many data protection features including: encryption, access control, network security, monitoring, and alerts.</li>
            <li>A shared access signature (SAS) provides secure delegated access to resources in your storage account. With a SAS, you have granular control over how a client can access your data.</li>
            <li>Lifecycle rules help optimize cost by automating data tiering.</li>
            <li>Azure Blob Storage lifecycle management offers a rule-based policy that you can use to transition blob data to the appropriate access tiers or to expire data at the end of the data lifecycle.</li>
            <li>Object replication asynchronously copies block blobs between a source storage account and a destination account.</li>
          </ul>
        </div>

      </div>

      <div className="mt-10 flex justify-between text-sm sm:text-base">
        <Link
          to="/day3/task/phase2"
          className="text-blue-400 hover:underline hover:text-blue-300"
        >
          ← Back to Lab 02
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
