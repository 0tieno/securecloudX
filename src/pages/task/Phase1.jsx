import React from "react";
import { Card, Typography, List, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const Phase1 = () => (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
        <Title level={2}>Lab: Configure Highly Available and Secure Azure Storage</Title>
        <Paragraph>
            The company needs storage for private documents, with high availability and secure access. This storage will also back up the public website.
        </Paragraph>

        <Divider orientation="left">Architecture Diagram</Divider>
        <img
            src="https://learn.microsoft.com/en-us/azure/storage/blobs/media/storage-blobs-introduction/blob-storage-architecture.png"
            alt="Storage account with two blob containers"
            style={{ width: "100%", maxWidth: 600, marginBottom: 24 }}
        />

        <Divider orientation="left">Skilling Tasks</Divider>
        <List
            bordered
            dataSource={[
                "Create a storage account for private documents.",
                "Configure redundancy for high availability.",
                "Configure a Shared Access Signature (SAS) for restricted partner access.",
                "Back up the public website storage.",
                "Implement lifecycle management to move content to the cool tier."
            ]}
            renderItem={item => <List.Item>{item}</List.Item>}
            style={{ marginBottom: 24 }}
        />

        <Divider orientation="left">Exercise Instructions</Divider>
        <Card title="1. Create a Storage Account with High Availability" style={{ marginBottom: 16 }}>
            <List
                size="small"
                dataSource={[
                    "In Azure Portal, search for 'Storage accounts' and select '+ Create'.",
                    "Choose the resource group from Lab 02a.",
                    "Set the Storage account name to 'private' + unique identifier.",
                    "Review and create the storage account.",
                    "After deployment, go to the resource.",
                    "In 'Redundancy', select 'Geo-redundant storage (GRS)'. Save changes."
                ]}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </Card>

        <Card title="2. Create a Private Storage Container and Upload a File" style={{ marginBottom: 16 }}>
            <List
                size="small"
                dataSource={[
                    "In the storage account, go to 'Containers' and click '+ Container'.",
                    "Name the container 'private' and set Public access level to 'Private'.",
                    "Create the container.",
                    "Upload a test file (image or text).",
                    "Copy the file URL and verify it is not publicly accessible."
                ]}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </Card>

        <Card title="3. Configure a Shared Access Signature (SAS)" style={{ marginBottom: 16 }}>
            <List
                size="small"
                dataSource={[
                    "Select the uploaded blob file and go to the 'Generate SAS' tab.",
                    "Set permissions to 'Read'.",
                    "Set expiry to 24 hours from now.",
                    "Generate SAS token and URL.",
                    "Test the SAS URL in a browser to verify access."
                ]}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </Card>

        <Card title="4. Implement Lifecycle Management" style={{ marginBottom: 16 }}>
            <List
                size="small"
                dataSource={[
                    "In the storage account, go to 'Lifecycle management'.",
                    "Add a rule named 'movetocool'.",
                    "Apply rule to all blobs.",
                    "Set 'Last modified' > 30 days, then 'Move to cool storage'.",
                    "Add the rule."
                ]}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </Card>

        <Card title="5. Back Up Public Website Storage" style={{ marginBottom: 16 }}>
            <List
                size="small"
                dataSource={[
                    "Create a new container named 'backup' in the private storage account.",
                    "In the public website storage account, go to 'Object replication'.",
                    "Create a replication rule: Source = public container, Destination = backup container in private account.",
                    "Optionally, upload a file to the public container and verify it appears in the backup container."
                ]}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </Card>

        <Divider orientation="left">Key Takeaways</Divider>
        <List
            size="small"
            dataSource={[
                "Azure Storage offers encryption, access control, network security, monitoring, and alerts.",
                "A Shared Access Signature (SAS) provides secure, delegated access to storage resources.",
                "Lifecycle management automates data tiering and retention.",
                "Object replication enables asynchronous backup between storage accounts."
            ]}
            renderItem={item => <List.Item>{item}</List.Item>}
        />

        <Divider orientation="left">Extend Your Learning</Divider>
        <Paragraph>
            <ul>
                <li>
                    <Text strong>What security features are available to protect Azure storage?</Text>
                </li>
                <li>
                    <Text strong>What is an Azure SAS and how is it used?</Text>
                </li>
                <li>
                    <a href="https://learn.microsoft.com/en-us/training/modules/configure-azure-storage-security/" target="_blank" rel="noopener noreferrer">
                        Configure Azure Storage security (Microsoft Learn)
                    </a>
                </li>
                <li>
                    <a href="https://learn.microsoft.com/en-us/training/modules/manage-blob-storage-lifecycle/" target="_blank" rel="noopener noreferrer">
                        Manage the Azure Blob storage lifecycle (Microsoft Learn)
                    </a>
                </li>
            </ul>
        </Paragraph>
    </div>
);

export default Phase1;