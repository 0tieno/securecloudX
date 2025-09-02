import { Link } from "react-router-dom";
import Content from "../../components/Content";

const Phase1 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-gray">Lab 1: Basic Azure Storage Implementation</h2>
  
      <div className="mt-4 space-y-8 text-gray-300 leading-relaxed">
        <section>
          <p>
            The IT department needs to prototype different storage scenarios and to train new personnel. The content isn’t important enough to back up and doesn’t need to be restored if the data is overwritten or removed. A simple configuration that can be easily changed is desired.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray mb-2">Your tasks</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-300">
            <li>Create a storage account.</li>
            <li>Configure basic settings for security and networking.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray mb-2">Step by Step Guide</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray mb-2">1️⃣ Create a resource group and a storage account</h3>
              <div className="bg-gray-800 p-4 rounded-lg space-y-2">
                <p>Create and deploy a resource group to hold all your project resources.</p>
                <ul className="list-decimal pl-6 space-y-1">
                  <li>In the Azure portal, search for and select Resource groups.</li>
                  <li>Select + Create.</li>
                  <li>Give your resource group a name. For example, <code>storagerg</code>.</li>
                  <li>Select a region. Use this region throughout the project.</li>
                  <li>Select Review and create to validate the resource group.</li>
                  <li>Select Create to deploy the resource group.</li>
                </ul>

                <p>Create and deploy a storage account to support testing and training.</p>
                <ul className="list-decimal pl-6 space-y-1">
                  <li>In the Azure portal, search for and select Storage accounts.</li>
                  <li>Select + Create.</li>
                  <li>On the Basics tab, select your Resource group.</li>
                  <li>Provide a Storage account name. The storage account name must be unique in Azure.</li>
                  <li>Set the Performance to Standard.</li>
                  <li>Select Review, and then Create.</li>
                  <li>Wait for the storage account to deploy and then Go to resource.</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray mb-2">2️⃣ Configure simple settings in the storage account</h3>
              <div className="bg-gray-800 p-4 rounded-lg space-y-2">
                <p>The data in this storage account doesn’t require high availability or durability. A lowest cost storage solution is desired.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>In your storage account, in the Data management section, select the Redundancy blade.</li>
                  <li>Select Locally-redundant storage (LRS) in the Redundancy drop-down.</li>
                  <li>Be sure to Save your changes.</li>
                  <li>Refresh the page and notice the content only exists in the primary location.</li>
                </ul>

                <p>The storage account should only accept requests from secure connections.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>In the Settings section, select the Configuration blade.</li>
                  <li>Ensure Secure transfer required is Enabled.</li>
                </ul>

                <p>Developers would like the storage account to use at least TLS version 1.2</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>In the Settings section, select the Configuration blade.</li>
                  <li>Ensure the Minimal TLS version is set to Version 1.2.</li>
                </ul>

                <p>Until the storage is needed again, disable requests to the storage account.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>In the Settings section, select the Configuration blade.</li>
                  <li>Ensure Allow storage account key access is Disabled.</li>
                  <li>Be sure to Save your changes.</li>
                </ul>

                <p>Ensure the storage account allows public access from all networks.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>In the Security + networking section, select the Networking blade.</li>
                  <li>Ensure Public network access is set to Enabled from all networks.</li>
                  <li>Be sure to Save your changes.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray mb-2">Use AI</h2>
          <p>Learn more with AI assisstant using these prompts</p>
          <ul className="list-disc pl-6 mt-2">
            <li>What is an Azure storage account? What types of Azure storage accounts are available?</li>
            <li>Create a table comparing the Azure storage performance tiers. Highlight their key features and use cases.</li>
            <li>What Azure storage redundancy options are available? When should I use each option?</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray mt-6 mb-2">🎯 Key takeaways</h2>
          <ul className="list-disc pl-6">
            <li>Congratulations on completing the lab. Here are the main takeaways for this lab.</li>
            <li>An Azure storage account is a container that holds all your Azure Storage data objects, including blobs, files, queues, and tables.</li>
            <li>Azure Storage offers several types of storage accounts, Standard and Premium. Each type supports different features and has its own pricing model.</li>
            <li>Azure Storage always stores multiple copies of your data to protect it from planned and unplanned events.</li>
            <li>Redundancy models can replicate data in the primary and secondary regions.</li>
          </ul>
        </section>
      </div>

      <div className="mt-10 flex justify-between text-sm sm:text-base">
        <Link
          to="/day3/task"
          className="text-blue-400 hover:underline hover:text-blue-300"
        >
          ← Back to Labs overview
        </Link>
        <Link
          to="/day3/task/phase2"
          className="text-blue-400 hover:underline hover:text-blue-300"
        >
          Go to Lab: 02 →
        </Link>
      </div>
    </Content>
  );
};

export default Phase1;
