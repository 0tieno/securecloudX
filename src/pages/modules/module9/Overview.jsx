import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";
import ArchitectNote from "../../../components/ArchitectNote";
import QuizCard from "../../../components/QuizCard";

const TOTAL = 8;

const Module9 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4,5,6,7,8,9]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span>
          <span className="text-gray-400">module-9-kubernetes-aks-security</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_9_aks_security.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 9: Kubernetes & AKS Security</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Cloud-native workloads run on Kubernetes. AKS is the managed Kubernetes service on Azure — and it has two distinct security planes, multiple attack surfaces, and controls that go far beyond what any previous module covers. This module closes the gap between "understanding cloud security" and "securing a real production cluster."
          </p>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-500">{checked.size}/{TOTAL} complete</span>
            <span className="text-gray-700"># check each step when reviewed</span>
          </div>
          <div className="w-full bg-gray-800 border border-gray-700 h-1.5">
            <div className="bg-red-500 h-full transition-all duration-500" style={{ width: `${(checked.size / TOTAL) * 100}%` }} />
          </div>
        </div>
        <AutoMarkOverview phaseId={9} />
        <div className="flex items-center justify-end gap-4 text-xs text-gray-600 mb-3">
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6,7,8,9]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>

        <div className="space-y-2 mb-10">

          {/* Step 0: Kubernetes Primer */}
          <PhaseStepItem number={1} type="PREP" title="Kubernetes Primer — What You Need to Know Before the Security Starts"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p>Kubernetes (K8s) is the industry-standard container orchestration platform. AKS is Azure's managed version. Before learning how to <em>secure</em> a Kubernetes cluster, you need to understand what you're securing. This step is the minimum viable K8s knowledge to make sense of everything that follows.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-3">Core Kubernetes Concepts</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono font-bold w-28 flex-shrink-0">Pod</span>
                  <span>The smallest deployable unit in K8s. One or more containers sharing a network namespace and storage. Think of it as a single running instance of your app.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono font-bold w-28 flex-shrink-0">Node</span>
                  <span>A VM (or physical machine) that runs pods. In AKS, nodes are Azure VMs in a node pool. The <span className="text-gray-300">kubelet</span> agent runs on each node and talks to the control plane.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono font-bold w-28 flex-shrink-0">Namespace</span>
                  <span>A logical partition inside a cluster. Used to isolate workloads (e.g., <span className="font-mono text-xs bg-gray-900 px-1">production</span>, <span className="font-mono text-xs bg-gray-900 px-1">staging</span>, <span className="font-mono text-xs bg-gray-900 px-1">kube-system</span>). RBAC, Network Policies, and resource quotas are all scoped to namespaces.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono font-bold w-28 flex-shrink-0">Deployment</span>
                  <span>Declares the desired state for a set of pods (e.g., "run 3 replicas of this container image"). The control plane continuously reconciles actual state to match desired state.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono font-bold w-28 flex-shrink-0">Service</span>
                  <span>A stable network endpoint that routes traffic to a set of pods. Pods are ephemeral — their IPs change. Services give them a fixed DNS name inside the cluster.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono font-bold w-28 flex-shrink-0">ServiceAccount</span>
                  <span>The Kubernetes identity assigned to a pod. Used for RBAC — what API calls can this pod make to the K8s API server? This is where workload identity attacks begin.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono font-bold w-28 flex-shrink-0">API Server</span>
                  <span>The brain of Kubernetes. Every action — creating a pod, reading a secret, scaling a deployment — goes through the API server. Securing access to it is the most critical K8s security control.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono font-bold w-28 flex-shrink-0">etcd</span>
                  <span>The distributed key-value store where all cluster state is persisted — including Kubernetes Secrets (base64-encoded, not encrypted by default). An attacker with access to etcd owns the cluster.</span>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-900 text-xs font-mono text-gray-400">
              <p className="text-gray-500 mb-2"># essential kubectl commands — run these to verify your cluster access in the lab</p>
              <p>kubectl get nodes                    <span className="text-gray-600"># list cluster nodes</span></p>
              <p>kubectl get pods -A                  <span className="text-gray-600"># all pods across all namespaces</span></p>
              <p>kubectl get namespaces               <span className="text-gray-600"># list all namespaces</span></p>
              <p>kubectl describe pod &lt;name&gt; -n &lt;ns&gt;  <span className="text-gray-600"># inspect a specific pod</span></p>
              <p>kubectl get secrets -n &lt;ns&gt;          <span className="text-gray-600"># list secrets (dangerous if unrestricted)</span></p>
              <p>kubectl auth can-i --list             <span className="text-gray-600"># what can the current identity do?</span></p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://kubernetes.io/docs/concepts/overview/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Kubernetes Docs: Overview of Kubernetes</a>
              <a href="https://learn.microsoft.com/azure/aks/concepts-clusters-workloads?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: AKS core concepts for apps and workloads</a>
              <a href="https://www.youtube.com/watch?v=s_o8dwzRlu4" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Watch: Kubernetes Explained in 6 Minutes (Fireship)</a>
            </div>
          </PhaseStepItem>

          {/* Step 2: Two Security Planes */}
          <PhaseStepItem number={2} type="READ" title="The Two Security Planes of AKS"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>AKS gives you two completely separate security planes. Confusing them is the most common AKS security mistake.</p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 border border-blue-800/40 bg-blue-900/10">
                <p className="text-blue-400 text-sm font-semibold mb-2">Azure RBAC Plane</p>
                <p className="text-gray-400 text-xs">Controls who can manage the AKS cluster resource itself — create/delete clusters, view credentials, scale node pools. Uses Azure roles (Owner, Contributor) assigned in Azure Portal/CLI.</p>
                <p className="text-gray-500 text-xs mt-2 italic">Scope: the Azure resource (ARM)</p>
              </div>
              <div className="p-3 border border-green-800/40 bg-green-900/10">
                <p className="text-green-400 text-sm font-semibold mb-2">Kubernetes RBAC Plane</p>
                <p className="text-gray-400 text-xs">Controls what workloads and users can do inside the cluster — create pods, read secrets, access namespaces. Uses K8s Roles and ClusterRoles bound to service accounts or user identities.</p>
                <p className="text-gray-500 text-xs mt-2 italic">Scope: inside the cluster (K8s API)</p>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">AKS-managed vs. Self-managed Responsibilities</p>
              <div className="text-sm text-gray-400 space-y-1">
                <p><span className="text-green-400">✓ Microsoft manages:</span> Control plane (API server, etcd, scheduler), node OS patching, cluster upgrades</p>
                <p><span className="text-yellow-400">⚠ You manage:</span> Workload security, network policies, RBAC inside cluster, image scanning, runtime security</p>
                <p><span className="text-red-400">✗ Never assume:</span> "It's managed" means "it's secure." AKS secure by default requires configuration.</p>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/aks/concepts-identity?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: AKS Identity and Access Control</a>
            </div>
          </PhaseStepItem>

          {/* Step 3: K8s RBAC */}
          <PhaseStepItem number={3} type="READ" title="Kubernetes RBAC — Least Privilege Inside the Cluster"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>Kubernetes RBAC controls what identities (service accounts, users) can do within the cluster via the API server. Without it, any pod can potentially read all secrets in the cluster.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Core RBAC Resources</p>
              <div className="space-y-2 text-sm text-gray-400 font-mono">
                <div><span className="text-yellow-400">Role</span> — namespaced permissions (e.g., read pods in <code>production</code> namespace)</div>
                <div><span className="text-yellow-400">ClusterRole</span> — cluster-wide permissions (e.g., read nodes across all namespaces)</div>
                <div><span className="text-yellow-400">RoleBinding</span> — binds a Role to a user/group/service account in a namespace</div>
                <div><span className="text-yellow-400">ClusterRoleBinding</span> — binds a ClusterRole cluster-wide (use sparingly)</div>
                <div><span className="text-yellow-400">ServiceAccount</span> — K8s identity for pods. Each pod runs as a service account. Default SA has no permissions with RBAC enabled.</div>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-900 text-xs font-mono text-gray-400">
              <p className="text-gray-500 mb-1"># minimal Role: read pods in a namespace only</p>
              <p className="text-green-300">apiVersion: rbac.authorization.k8s.io/v1</p>
              <p className="text-green-300">kind: Role</p>
              <p>metadata:</p>
              <p>{"  "}namespace: production</p>
              <p>{"  "}name: pod-reader</p>
              <p>rules:</p>
              <p>- apiGroups: [""]</p>
              <p>{"  "}resources: ["pods"]</p>
              <p>{"  "}verbs: ["get", "list", "watch"]</p>
            </div>
            <div className="mt-3 p-2 border border-red-800/50 bg-red-900/10">
              <p className="text-red-400 text-xs">Never use <code>cluster-admin</code> ClusterRoleBinding for application service accounts. If that pod is compromised, the attacker has full control of the entire cluster.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Kubernetes Docs: RBAC Authorization</a>
            </div>
          </PhaseStepItem>

          {/* Step 4: Network Policies */}
          <PhaseStepItem number={4} type="READ" title="Network Policies — Zero Trust for Pod Traffic"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p>By default, Kubernetes allows all pod-to-pod communication. A compromised frontend pod can reach your database pod directly. Network Policies are the Zero Trust firewall for inter-pod traffic.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Network Policy Concepts</p>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">▸</span><span>Network policies are additive — selecting a pod with any policy makes it deny-all, then policies add back allowed connections</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">▸</span><span>Policies use <code className="text-yellow-400">podSelector</code> (which pods this applies to), <code className="text-yellow-400">ingress</code> (allowed inbound), and <code className="text-yellow-400">egress</code> (allowed outbound)</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">▸</span><span>AKS supports Azure CNI or Calico for network policy enforcement. Enable during cluster creation — cannot be enabled after.</span></li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-900 text-xs font-mono text-gray-400">
              <p className="text-gray-500 mb-1"># deny all traffic in namespace, then allow only what's needed</p>
              <p className="text-green-300">apiVersion: networking.k8s.io/v1</p>
              <p className="text-green-300">kind: NetworkPolicy</p>
              <p>metadata:</p>
              <p>{"  "}name: default-deny-all</p>
              <p>{"  "}namespace: production</p>
              <p>spec:</p>
              <p>{"  "}podSelector: {"{}"}{"  "}# selects ALL pods in namespace</p>
              <p>{"  "}policyTypes: [Ingress, Egress]</p>
              <p>{"  "}# no ingress/egress rules = deny all</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/aks/use-network-policies?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Secure pod traffic with network policies in AKS</a>
            </div>
          </PhaseStepItem>

          {/* Step 5: Pod Security + Admission */}
          <PhaseStepItem number={5} type="READ" title="Pod Security Admission — No Root, No Privilege"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>Pod Security Admission (PSA) replaced Pod Security Policies (deprecated in K8s 1.21). It enforces security standards at the namespace level, preventing pods from running with dangerous configurations.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">PSA Security Standards</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold w-20 flex-shrink-0">Privileged</span>
                  <div>No restrictions. Only for trusted system namespaces (kube-system). Never for application workloads.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-20 flex-shrink-0">Baseline</span>
                  <div>Prevents the most dangerous escalations: no privileged containers, no hostPath mounts, no host network/port access.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">Restricted</span>
                  <div>Heavily restricted: requires non-root user, drops all capabilities, requires seccomp profile. Target for all application workloads.</div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-900 text-xs font-mono text-gray-400">
              <p className="text-gray-500 mb-1"># label a namespace to enforce restricted PSA</p>
              <p>kubectl label namespace production \</p>
              <p>{"  "}pod-security.kubernetes.io/enforce=restricted \</p>
              <p>{"  "}pod-security.kubernetes.io/warn=restricted \</p>
              <p>{"  "}pod-security.kubernetes.io/audit=restricted</p>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">OPA Gatekeeper — Policy as Code</p>
              <p className="text-sm text-gray-400">For more granular policy enforcement beyond PSA standards, use OPA Gatekeeper. Define ConstraintTemplates in Rego to enforce custom rules: require specific image registries, enforce resource limits, require security contexts. Gatekeeper runs as an admission webhook — it intercepts every API server request and accepts or rejects based on your policies.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://kubernetes.io/docs/concepts/security/pod-security-admission/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Kubernetes Docs: Pod Security Admission</a>
              <a href="https://learn.microsoft.com/azure/governance/policy/concepts/policy-for-kubernetes?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Azure Policy for Kubernetes (Gatekeeper)</a>
            </div>
          </PhaseStepItem>

          {/* Step 6: Runtime Security */}
          <PhaseStepItem number={6} type="READ" title="Runtime Security — Falco & Defender for Containers"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p>Admission controllers prevent bad configurations at deploy time. Runtime security detects malicious behaviour after the workload is running — when an attacker has already breached a container.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Falco — Open Source Runtime Detection</p>
              <p className="text-sm text-gray-400 mb-2">CNCF project that monitors kernel syscalls to detect anomalous behaviour in containers. Rules trigger on events like:</p>
              <ul className="space-y-1 text-xs text-gray-400">
                <li className="flex gap-2"><span className="text-red-400">⚠</span>Shell spawned inside a container (<code>bash</code> executed in a production pod)</li>
                <li className="flex gap-2"><span className="text-red-400">⚠</span>Sensitive file read (<code>/etc/shadow</code>, <code>/root/.ssh/authorized_keys</code>)</li>
                <li className="flex gap-2"><span className="text-red-400">⚠</span>Unexpected outbound network connection (C2 callback)</li>
                <li className="flex gap-2"><span className="text-red-400">⚠</span>Privilege escalation attempt (setuid binary executed)</li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Microsoft Defender for Containers</p>
              <p className="text-sm text-gray-400">Azure-native runtime security for AKS. Provides:</p>
              <ul className="space-y-1 text-xs text-gray-400 mt-1">
                <li>• Continuous image vulnerability scanning (registry + runtime)</li>
                <li>• Runtime threat detection (crypto mining, privilege escalation, suspicious API calls)</li>
                <li>• Security alerts surfaced in Defender for Cloud</li>
                <li>• MITRE ATT&CK Container technique mapping</li>
              </ul>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://falco.org/docs/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Falco Documentation</a>
              <a href="https://learn.microsoft.com/azure/defender-for-cloud/defender-for-containers-introduction?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Defender for Containers</a>
            </div>
          </PhaseStepItem>

          {/* Step 7: Supply Chain in K8s */}
          <PhaseStepItem number={7} type="READ" title="Image Security & Supply Chain in Kubernetes"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p>Container images are the unit of deployment. A compromised or misconfigured image is the most direct path to cluster compromise. Supply chain security for Kubernetes starts at image build and ends at runtime.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Image Security Controls</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-28 flex-shrink-0">Private registry</span>
                  <div>Use Azure Container Registry (ACR). Enable Admin user: disabled. Use managed identity for AKS to pull images. Never pull from public DockerHub in production.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-28 flex-shrink-0">Image signing</span>
                  <div>Sign images with Cosign + OIDC (no long-lived keys). Enforce signature verification at admission with Ratify + Gatekeeper. Unsigned images never reach production.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-28 flex-shrink-0">Digest pinning</span>
                  <div>Reference images by digest (<code className="text-cyan-400">mcr.microsoft.com/dotnet/aspnet@sha256:abc...</code>), not tag. Tags are mutable — a digest is immutable.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-28 flex-shrink-0">Vulnerability scan</span>
                  <div>ACR integrates with Defender for Containers to scan all images on push and report CVEs. Block deployment of images with Critical CVEs via Gatekeeper policy.</div>
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/container-registry/container-registry-intro?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Azure Container Registry</a>
              <a href="https://ratify.dev/docs/1.0/quickstarts/ratify-on-azure" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Ratify: Image verification on AKS</a>
            </div>
          </PhaseStepItem>

          {/* Step 8: Real-World Scenario */}
          <PhaseStepItem number={8} type="SCENARIO" title="Real-World Scenario: The Cryptominer That Shouldn't Have Existed"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>
            <p>A financial services company runs a multi-tenant AKS cluster. One of the tenant namespaces is a test environment with lax network policies and a misconfigured service account. A junior developer accidentally deploys a container image that has a cryptomining binary baked in (pulled from an unverified DockerHub source).</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">What the Attacker Finds</p>
              <ul className="space-y-1 text-xs text-gray-400">
                <li>• The service account has <code>cluster-admin</code> ClusterRoleBinding (leftover from debugging)</li>
                <li>• No network policy — the pod can reach all other pods in all namespaces</li>
                <li>• No PSA enforcement — privileged containers are allowed</li>
                <li>• No image signing — any image from any registry is accepted</li>
                <li>• No Falco or Defender for Containers — no runtime detection</li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">What Happens Next</p>
              <p className="text-xs text-gray-400">The container starts mining crypto, consuming 90% of the node's CPU. But more critically: the container uses the <code>cluster-admin</code> service account token to enumerate secrets across all namespaces. It finds a connection string for the production database in another tenant's namespace and exfiltrates it. The entire blast radius came from one misconfigured service account.</p>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Controls That Would Have Stopped It</p>
              <div className="space-y-1 text-xs text-gray-400">
                <p><span className="text-green-400">1.</span> Image signing + admission verification → unsigned image rejected at deploy time</p>
                <p><span className="text-green-400">2.</span> Namespace-scoped service account → lateral movement to other namespaces blocked</p>
                <p><span className="text-green-400">3.</span> Network policy default-deny → pod can't reach other namespaces</p>
                <p><span className="text-green-400">4.</span> Falco runtime rule → alert on cryptominer process within 30 seconds of start</p>
                <p><span className="text-green-400">5.</span> PSA Restricted → privileged mode rejected, service account token not automounted</p>
              </div>
            </div>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Takeaway: K8s security is additive and explicit. Every missing control is a gap an attacker will find. Defense in depth inside the cluster requires all five layers: RBAC, Network Policy, Pod Security, Image integrity, Runtime detection.</p>
            </div>
          </PhaseStepItem>

          {/* Step 9: Architect's Note */}
          <PhaseStepItem number={9} type="ARCHITECT" title="Cloud Architect's Perspective — AKS Security"
            isOpen={open.has(8)} onToggleOpen={() => toggleOpen(8)}
            isChecked={checked.has(8)} onToggleChecked={() => toggleChecked(8)}>

            <ArchitectNote title="Core Design Principles">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Treat the K8s API server as a high-value target.</span> Every ClusterRoleBinding with cluster-admin scope is a critical risk. Audit all CRBs regularly: <code className="text-yellow-400">kubectl get clusterrolebindings -o wide</code>. Any service account with cluster-admin that isn't a system component needs to be removed.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Disable service account token automounting by default.</span> Set <code className="text-yellow-400">automountServiceAccountToken: false</code> on pods that don't need API server access. The default SA token is mounted on every pod — if an attacker escapes the container, they can use it immediately.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Enable etcd encryption at rest.</span> Kubernetes Secrets are stored in etcd base64-encoded (not encrypted) by default. AKS supports encryption at rest for etcd using a customer-managed key. Without this, anyone who reads etcd reads your secrets in plaintext.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Use Workload Identity, not long-lived service principal credentials.</span> AKS Workload Identity federates pod identity with Azure AD using OIDC. Pods get short-lived tokens automatically — no client secrets, no credential rotation required.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Private cluster unless there's a specific need for public API server.</span> AKS private cluster removes the API server from the public internet entirely. Combined with private node pools, this eliminates the majority of the external attack surface.</span></li>
              </ul>
            </ArchitectNote>

            <ArchitectNote title="STRIDE Threat Model — Kubernetes Attack Surface">
              <div className="overflow-x-auto">
                <table className="w-full text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-indigo-800/50">
                      <th className="text-left text-indigo-300 py-1 pr-4 font-semibold">Threat</th>
                      <th className="text-left text-indigo-300 py-1 pr-4 font-semibold">Attack Vector</th>
                      <th className="text-left text-indigo-300 py-1 font-semibold">Mitigation</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-yellow-400 font-bold">Spoofing</td>
                      <td className="py-1.5 pr-4">Unsigned container image impersonating legitimate application</td>
                      <td className="py-1.5">Cosign image signing + Ratify admission webhook</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-orange-400 font-bold">Tampering</td>
                      <td className="py-1.5 pr-4">Container escape + write to host filesystem or etcd</td>
                      <td className="py-1.5">PSA Restricted (no privileged), read-only root filesystem, etcd encryption</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-blue-400 font-bold">Info Disclosure</td>
                      <td className="py-1.5 pr-4">Pod reads Secrets from other namespaces via over-privileged SA token</td>
                      <td className="py-1.5">Namespace-scoped RBAC, disable SA token automounting, Secrets encrypted at rest</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-purple-400 font-bold">Repudiation</td>
                      <td className="py-1.5 pr-4">Pod makes API calls with shared SA token — no attribution per workload</td>
                      <td className="py-1.5">Workload Identity (per-pod OIDC identity), K8s audit logs in Log Analytics</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-gray-400 font-bold">DoS</td>
                      <td className="py-1.5 pr-4">Pod exhausts node CPU/memory — noisy neighbour + resource starvation</td>
                      <td className="py-1.5">LimitRange + ResourceQuota per namespace, node autoscaling</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-4 text-red-400 font-bold">EoP</td>
                      <td className="py-1.5 pr-4">Container escape via kernel vulnerability → node root access</td>
                      <td className="py-1.5">Auto node OS patching (AKS), no privileged pods, seccomp profiles, Falco detection</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Compliance Mapping">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">CIS Kubernetes Benchmark v1.8</p>
                  <p className="text-gray-400">The definitive hardening guide for K8s clusters. Key controls: 1.2 (API server flags), 3.2 (worker node config), 5.1 (RBAC), 5.2 (Pod Security), 5.3 (Network Policies). AKS CIS benchmark is a built-in Defender for Cloud standard.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">NIST SP 800-190 (Container Security)</p>
                  <p className="text-gray-400">NIST guidance specific to containers: image vulnerabilities, configuration defects, network exposure, host OS hardening. Maps directly to AKS security controls across all layers.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">CSA CCM v4 — IVS Domain</p>
                  <p className="text-gray-400">Infrastructure & Virtualization Security (IVS-06 through IVS-13). Container orchestration security maps to IVS-06 (network hardening) and IVS-09 (vulnerability management).</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">AWS Equivalent</p>
                  <p className="text-gray-400">Amazon EKS (Elastic Kubernetes Service). K8s RBAC is identical. Network policies via VPC CNI + Calico. Pod Identity replaces Workload Identity. AWS Inspector v2 for image scanning. Amazon GuardDuty EKS Protection for runtime.</p>
                </div>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Real-World Incidents — What Happens When This Fails">
              <div className="space-y-3">
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Tesla Kubernetes Dashboard — No Auth, Cryptominer (2018) <a href="https://www.wired.com/story/cryptojacking-tesla-amazon-cloud/" target="_blank" rel="noopener noreferrer" className="ml-1 text-indigo-400 hover:text-indigo-300 font-normal">↗ source</a></p>
                  <p className="text-gray-400 text-xs">Tesla's Kubernetes dashboard was exposed on the public internet with no authentication. Attackers accessed the dashboard, deployed a cryptominer, and used AWS credentials found in environment variables to access S3 buckets. No network policy, no PSA, no image signing, no runtime detection. <span className="text-gray-300">Lesson: every K8s management interface needs authentication AND private network access. The Kubernetes Dashboard should never be publicly reachable.</span></p>
                </div>
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Shopify K8s RBAC Misconfiguration — Bug Bounty (2021) <a href="https://hackerone.com/reports/1093667" target="_blank" rel="noopener noreferrer" className="ml-1 text-indigo-400 hover:text-indigo-300 font-normal">↗ source</a></p>
                  <p className="text-gray-400 text-xs">A security researcher found a misconfigured RBAC binding in Shopify's Kubernetes infrastructure that allowed listing secrets across namespaces. Reported responsibly via bug bounty — but had this been discovered by a malicious actor, it would have exposed credentials for every tenant's database. <span className="text-gray-300">Lesson: regular RBAC audits using tools like kubectl-who-can and rakkess are mandatory. Least-privilege in K8s is not set-and-forget.</span></p>
                </div>
              </div>
            </ArchitectNote>

          </PhaseStepItem>

        </div>

        {/* Quiz */}
        <div className="mb-8 p-4 border border-pink-800/30 bg-pink-950/10">
          <div className="text-pink-400 text-xs mb-4">$ ./knowledge_check.sh --module 9</div>
          <div className="space-y-4">
            <QuizCard
              question="A pod needs to write to Azure Blob Storage. Which identity approach follows Zero Trust for AKS workloads?"
              options={[
                "Create a service principal, store its client secret in a K8s Secret, mount it in the pod",
                "Use AKS Workload Identity to federate pod identity with Azure AD via OIDC — no credentials stored anywhere",
                "Use the storage account access key, stored in a K8s Secret",
                "Create a system-assigned managed identity on the AKS node pool"
              ]}
              answer={1}
              explanation="Workload Identity gives each pod its own Azure AD identity with short-lived OIDC tokens. No long-lived credentials exist. A node pool managed identity is shared across all pods on that node — any compromised pod can use it."
            />
            <QuizCard
              question="Your Falco alert fires: 'Shell spawned inside container in namespace production.' What is your first response?"
              options={[
                "Delete the pod immediately — this clears the threat",
                "Increase the Falco rule threshold — this is likely a false positive",
                "Isolate the pod using a restrictive NetworkPolicy, preserve evidence, begin incident investigation",
                "Restart the deployment — the container will re-launch cleanly"
              ]}
              answer={2}
              explanation="Isolating (not deleting) preserves forensic evidence — process memory, open connections, filesystem state. Deleting destroys evidence. A NetworkPolicy applied to the pod's labels immediately cuts off lateral movement while investigation begins."
            />
            <QuizCard
              question="A developer requests cluster-admin ClusterRoleBinding for their CI/CD service account 'to make deployments easier.' What is the correct response?"
              options={[
                "Grant it temporarily and revoke after the deployment",
                "Deny — create a namespace-scoped Role with only the verbs needed (create/update deployments, pods) in the specific namespace",
                "Grant it — CI/CD pipelines legitimately need cluster-wide access",
                "Use a separate admin kubeconfig file for the CI/CD pipeline"
              ]}
              answer={1}
              explanation="CI/CD pipelines need to deploy to specific namespaces — they never need cluster-admin. A namespace Role with 'create, update, patch' on 'deployments, pods' in 'production' is sufficient. cluster-admin means a compromised pipeline = full cluster compromise."
            />
          </div>
        </div>

        {/* Lab CTA */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-gray-500 text-xs mb-2"># ready to build</div>
          <p className="text-gray-400 text-sm">Now that you understand AKS security layers, harden a real cluster:</p>
          <div className="mt-3">
            <Link to="/module9/task" className="text-red-400 hover:text-red-300 transition-colors text-sm">→ ./start_aks_lab.sh</Link>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module8" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 8
          </Link>
          <Link to="/module9/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 9 Lab <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Module9;
