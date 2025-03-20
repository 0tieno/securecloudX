import Content from "../components/Content";

const Day1 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-white">Day 1: Identity & Access Management (IAM)</h2>
      <p className="mt-2">Learn how to manage identities and access using Azure Active Directory.</p>
      <ul className="mt-4 list-disc pl-5">
        <li>Set up Azure AD.</li>
        <li>Create users and groups.</li>
        <li>Implement RBAC.</li>
        <li>Enable Multi-Factor Authentication.</li>
      </ul>
    </Content>
  );
};

export default Day1;
