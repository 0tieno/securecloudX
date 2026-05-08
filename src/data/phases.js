export const PHASES = [
    {
        id: 1,
        title: "Identity & Access Management",
        description:
            "Zero Trust IAM — Entra ID, RBAC, Conditional Access, PIM, and break-glass accounts.",
        path: "/module1",
        taskPath: "/module1/task",
    },
    {
        id: 2,
        title: "Network Security & Perimeter Defense",
        description:
            "Defense in Depth — VNets, NSG micro-segmentation, Private Endpoints, Bastion, Network Watcher.",
        path: "/module2",
        taskPath: "/module2/task",
    },
    {
        id: 3,
        title: "Data Security & Encryption",
        description:
            "Data classification, AES-256 encryption at rest, TLS in transit, SAS tokens, soft delete & versioning.",
        path: "/module3",
        taskPath: "/module3/task",
    },
    {
        id: 4,
        title: "Application Security in Azure",
        description:
            "OWASP Top 10 cloud mapping, Key Vault + Managed Identity golden pattern, App Service hardening, EasyAuth.",
        path: "/module4",
        taskPath: "/module4/task",
    },
    {
        id: 5,
        title: "Cloud Security Posture Management",
        description:
            "Defender for Cloud, Secure Score, Azure Policy, KQL logging, CIS/NIST/ISO compliance frameworks.",
        path: "/module5",
        taskPath: "/module5/task",
    },
    {
        id: 6,
        title: "Detection Engineering & Incident Response",
        description:
            "Microsoft Sentinel, NIST IR lifecycle, analytics rules, KQL detection queries, MITRE ATT&CK mapping.",
        path: "/module6",
        taskPath: "/module6/task",
    },
    {
        id: 7,
        title: "Capstone — Security Architecture Review",
        description:
            "Deploy SecureMed, STRIDE threat model, CIS benchmark review, Secure Score remediation, assessment report.",
        path: "/module7",
        taskPath: "/module7/task",
    },
];

export const ADVANCED = [
    {
        id: 8,
        title: "DevSecOps Fundamentals",
        description:
            "Shift-left security — CI/CD pipeline hardening, SAST/SCA scanning, secret detection, container security, and IaC guardrails.",
        path: "/module8",
        taskPath: "/module8/task",
    },
    {
        id: 9,
        title: "Kubernetes & AKS Security",
        description:
            "AKS hardening — K8s RBAC, network policies, OPA/Gatekeeper admission control, Falco runtime security, Workload Identity.",
        path: "/module9",
        taskPath: "/module9/task",
    },
];
