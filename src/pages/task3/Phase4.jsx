import React from "react";
import { Card, Typography, List, Divider, Button } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Phase4 = () => (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
        <div style={{ marginBottom: 16 }}>
            <Link to="/task3">
                <Button>← Back to Lab Overview</Button>
            </Link>
        </div>

        <Title level={2}>Phase 4: Backup & Replication</Title>
        <Paragraph>
            Configure object replication and implement comprehensive backup strategies for data protection.
        </Paragraph>

        <Divider orientation="left">Learning Objectives</Divider>
        <List
            bordered
            dataSource={[
                "Set up object replication between storage accounts",
                "Configure cross-region replication",
                "Implement backup verification procedures",
                "Test disaster recovery scenarios"
            ]}
            renderItem={item => <List.Item>{item}</List.Item>}
            style={{ marginBottom: 24 }}
        />

        <Card title="1. Configure Object Replication" style={{ marginBottom: 16 }}>
            <List
                size="small"
                dataSource={[
                    "Create a destination storage account for replication",
                    "Enable versioning on both source and destination accounts",
                    "Configure replication rules in the source account",
                    "Test replication by uploading files",
                    "Verify files appear in the destination account"
                ]}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </Card>

        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/task3/phase3">
                <Button>← Previous: Phase 3</Button>
            </Link>
            <Link to="/task3">
                <Button type="primary">Complete Lab →</Button>
            </Link>
        </div>
    </div>
);

export default Phase4;