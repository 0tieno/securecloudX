import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 10;
const OBJECTIVES = [
  "Create an AKS cluster with RBAC enabled and disable local accounts",
  "Configure Kubernetes RBAC with namespace-scoped Roles and RoleBindings",
  "Apply NetworkPolicies to enforce pod-to-pod traffic segmentation",
  "Enable Defender for Containers and review the first security findings",
  "Deploy OPA Gatekeeper and enforce a policy blocking privileged containers",
  "Deploy Falco and trigger a runtime alert by running a shell inside a pod",
  "Configure AKS Workload Identity for a pod that accesses Azure Key Vault",
];

const Task9 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, toggleChecked] = useStepProgress("scx_steps_9_task", TOTAL);
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-9-aks</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>

        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_9_harden_aks_cluster.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 9 Lab: Harden an AKS Cluster</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Deploy an AKS cluster, apply Kubernetes RBAC, enforce network segmentation, enable runtime threat detection with Falco and Defender for Containers, and configure Workload Identity — building a production-grade security posture layer by layer.
          </p>
          <p className="text-xs text-gray-600 mt-2 font-mono">~50 min read &nbsp;·&nbsp; Lab: ~90–120 min &nbsp;·&nbsp; Est. cost: ~$3–8 (AKS nodes, delete when done)</p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-500">{checked.size}/{TOTAL} complete</span>
            <span className="text-gray-700"># check off steps as you go</span>
          </div>
          <div className="w-full bg-gray-800 border border-gray-700 h-1.5">
            <div className="bg-red-500 h-full transition-all duration-500" style={{ width: `${(checked.size / TOTAL) * 100}%` }} />
          </div>
        </div>

        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-blue-400 text-xs mb-3">$ cat learning_objectives.sh</div>
          <ul className="space-y-2">
            {OBJECTIVES.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&gt;</span><span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-end gap-4 text-xs text-gray-600 mb-3">
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6,7,8,9]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>

        <div className="space-y-2 mb-8">
          {/* Step 1 */}
          <PhaseStepItem number={1} type="PREP" title="Prerequisites & cost estimate"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-400">Estimated cost:</span> ~$3–8 USD for a 2-hour lab session (Standard_D2s_v3 node pool × 2 nodes). Delete the cluster when done.</p>
              <p><span className="text-gray-400">Estimated time:</span> 90–120 minutes end-to-end.</p>
              <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
                <p className="text-gray-300 text-xs font-semibold mb-1">You need:</p>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li>&gt; Azure subscription with Contributor access</li>
                  <li>&gt; Azure CLI installed and logged in (<code className="text-yellow-400">az login</code>)</li>
                  <li>&gt; kubectl installed (<code className="text-yellow-400">az aks install-cli</code>)</li>
                  <li>&gt; Helm 3 installed (<code className="text-yellow-400">brew install helm</code> or scoop/choco on Windows)</li>
                </ul>
              </div>
              <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
                <p className="text-yellow-400 text-xs">Register providers before deploying AKS if first time:</p>
                <p className="text-gray-400 text-xs font-mono mt-1">az provider register --namespace Microsoft.ContainerService<br />az provider register --namespace Microsoft.Insights</p>
              </div>
            </div>
          </PhaseStepItem>

          {/* Step 2 */}
          <PhaseStepItem number={2} type="LAB" title="Deploy AKS cluster with RBAC and OIDC issuer"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <div className="space-y-3 text-sm">
              <p>Create the resource group and AKS cluster with Kubernetes RBAC, OIDC issuer (for Workload Identity), and Workload Identity enabled. Disable local accounts to enforce AAD-only access.</p>
              <div className="p-3 border border-gray-700 bg-gray-800 text-xs font-mono">
                <p className="text-green-400 mb-2"># Create resource group</p>
                <p className="text-gray-300">az group create --name rg-aks-lab --location eastus</p>
                <p className="text-green-400 mt-3 mb-2"># Create AKS cluster</p>
                <p className="text-gray-300">az aks create \</p>
                <p className="text-gray-300 pl-4">--resource-group rg-aks-lab \</p>
                <p className="text-gray-300 pl-4">--name aks-security-lab \</p>
                <p className="text-gray-300 pl-4">--node-count 2 \</p>
                <p className="text-gray-300 pl-4">--node-vm-size Standard_D2s_v3 \</p>
                <p className="text-gray-300 pl-4">--enable-oidc-issuer \</p>
                <p className="text-gray-300 pl-4">--enable-workload-identity \</p>
                <p className="text-gray-300 pl-4">--enable-aad \</p>
                <p className="text-gray-300 pl-4">--enable-azure-rbac \</p>
                <p className="text-gray-300 pl-4">--disable-local-accounts \</p>
                <p className="text-gray-300 pl-4">--network-plugin azure \</p>
                <p className="text-gray-300 pl-4">--generate-ssh-keys</p>
                <p className="text-green-400 mt-3 mb-2"># Get kubeconfig</p>
                <p className="text-gray-300">az aks get-credentials --resource-group rg-aks-lab --name aks-security-lab</p>
                <p className="text-green-400 mt-3 mb-2"># Verify</p>
                <p className="text-gray-300">kubectl get nodes</p>
              </div>
              <div className="mt-2 p-2 border border-blue-800/40 bg-blue-900/10">
                <p className="text-blue-400 text-xs"><span className="font-bold">Why --disable-local-accounts?</span> Local accounts allow kubectl access without AAD authentication. Disabling them forces all cluster access through Azure AD — enabling Conditional Access, PIM, and a full audit trail of who ran kubectl commands and when.</p>
              </div>
            </div>
          </PhaseStepItem>

          {/* Step 3 */}
          <PhaseStepItem number={3} type="LAB" title="Configure Kubernetes RBAC — namespace-scoped roles"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <div className="space-y-3 text-sm">
              <p>Create two namespaces (<code className="text-yellow-400">production</code> and <code className="text-yellow-400">dev</code>), then create RBAC roles that restrict each namespace. A developer should only be able to read pods in <code className="text-yellow-400">dev</code> — not create, delete, or exec into them.</p>
              <div className="p-3 border border-gray-700 bg-gray-800 text-xs font-mono">
                <p className="text-green-400 mb-2"># Create namespaces</p>
                <p className="text-gray-300">kubectl create namespace production</p>
                <p className="text-gray-300">kubectl create namespace dev</p>
                <p className="text-green-400 mt-3 mb-2"># Create a read-only role for dev namespace</p>
                <p className="text-gray-300">kubectl create role dev-reader \</p>
                <p className="text-gray-300 pl-4">--verb=get,list,watch \</p>
                <p className="text-gray-300 pl-4">--resource=pods,services,deployments \</p>
                <p className="text-gray-300 pl-4">--namespace dev</p>
                <p className="text-green-400 mt-3 mb-2"># Bind the role to a user (use your own AAD UPN)</p>
                <p className="text-gray-300">kubectl create rolebinding dev-reader-binding \</p>
                <p className="text-gray-300 pl-4">--role=dev-reader \</p>
                <p className="text-gray-300 pl-4">--user=your-email@domain.com \</p>
                <p className="text-gray-300 pl-4">--namespace dev</p>
                <p className="text-green-400 mt-3 mb-2"># Verify: attempt to create a pod (should be denied)</p>
                <p className="text-gray-300">kubectl auth can-i create pods --namespace dev --as your-email@domain.com</p>
              </div>
              <p className="text-gray-500 text-xs">The auth can-i check should return <span className="text-red-400">no</span> — confirming least privilege is enforced at the Kubernetes RBAC layer.</p>
            </div>
          </PhaseStepItem>

          {/* Step 4 */}
          <PhaseStepItem number={4} type="LAB" title="Apply NetworkPolicies — block pod-to-pod traffic"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <div className="space-y-3 text-sm">
              <p>By default, all pods in a cluster can communicate freely. Apply a default-deny NetworkPolicy to the <code className="text-yellow-400">production</code> namespace, then explicitly allow only the traffic your workload needs.</p>
              <div className="p-3 border border-gray-700 bg-gray-800 text-xs font-mono">
                <p className="text-green-400 mb-2"># Save as default-deny.yaml</p>
                <p className="text-gray-300">{"apiVersion: networking.k8s.io/v1"}</p>
                <p className="text-gray-300">{"kind: NetworkPolicy"}</p>
                <p className="text-gray-300">{"metadata:"}</p>
                <p className="text-gray-300 pl-4">{"name: default-deny-all"}</p>
                <p className="text-gray-300 pl-4">{"namespace: production"}</p>
                <p className="text-gray-300">{"spec:"}</p>
                <p className="text-gray-300 pl-4">{"podSelector: {}"}</p>
                <p className="text-gray-300 pl-4">{"policyTypes:"}</p>
                <p className="text-gray-300 pl-8">{"- Ingress"}</p>
                <p className="text-gray-300 pl-8">{"- Egress"}</p>
                <p className="text-green-400 mt-3 mb-2"># Apply the policy</p>
                <p className="text-gray-300">kubectl apply -f default-deny.yaml</p>
                <p className="text-green-400 mt-3 mb-2"># Test: deploy a test pod and attempt to reach another</p>
                <p className="text-gray-300">kubectl run test --image=nginx --namespace production</p>
                <p className="text-gray-300">kubectl exec -it test -n production -- curl http://&lt;other-pod-ip&gt;</p>
                <p className="text-gray-500 mt-1"># Connection should timeout — NetworkPolicy is working</p>
              </div>
            </div>
          </PhaseStepItem>

          {/* Step 5 */}
          <PhaseStepItem number={5} type="LAB" title="Enable Defender for Containers"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <div className="space-y-3 text-sm">
              <p>Defender for Containers scans running images for CVEs, detects runtime threats, and audits Kubernetes API activity. Enable it and review the initial findings.</p>
              <div className="p-3 border border-gray-700 bg-gray-800 text-xs font-mono">
                <p className="text-green-400 mb-2"># Enable Defender for Containers on the subscription</p>
                <p className="text-gray-300">az security pricing create \</p>
                <p className="text-gray-300 pl-4">--name Containers \</p>
                <p className="text-gray-300 pl-4">--pricing-tier Standard</p>
                <p className="text-green-400 mt-3 mb-2"># Enable auto-provisioning of Defender agent on AKS</p>
                <p className="text-gray-300">az aks update \</p>
                <p className="text-gray-300 pl-4">--resource-group rg-aks-lab \</p>
                <p className="text-gray-300 pl-4">--name aks-security-lab \</p>
                <p className="text-gray-300 pl-4">--enable-defender</p>
              </div>
              <p className="text-gray-500 text-xs">After enabling, wait 5–10 minutes then check: <span className="text-gray-400">Defender for Cloud → Workload protections → Containers</span>. You should see your cluster and any image vulnerability findings.</p>
              <div className="mt-2 p-2 border border-blue-800/40 bg-blue-900/10">
                <p className="text-blue-400 text-xs"><span className="font-bold">What to look for:</span> Defender will surface container images with known CVEs, pods running as root, privileged containers, and suspicious process executions. Each finding maps to a CIS Kubernetes Benchmark control.</p>
              </div>
            </div>
          </PhaseStepItem>

          {/* Step 6 */}
          <PhaseStepItem number={6} type="LAB" title="Deploy OPA Gatekeeper — block privileged containers"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <div className="space-y-3 text-sm">
              <p>OPA Gatekeeper is an admission controller that validates Kubernetes resources against policy. Install it and enforce a policy that blocks any pod running as privileged.</p>
              <div className="p-3 border border-gray-700 bg-gray-800 text-xs font-mono">
                <p className="text-green-400 mb-2"># Install Gatekeeper via Helm</p>
                <p className="text-gray-300">helm repo add gatekeeper https://open-policy-agent.github.io/gatekeeper/charts</p>
                <p className="text-gray-300">helm install gatekeeper/gatekeeper \</p>
                <p className="text-gray-300 pl-4">--name-template=gatekeeper \</p>
                <p className="text-gray-300 pl-4">--namespace gatekeeper-system \</p>
                <p className="text-gray-300 pl-4">--create-namespace</p>
                <p className="text-green-400 mt-3 mb-2"># Apply the no-privileged-containers ConstraintTemplate</p>
                <p className="text-gray-300">kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/privileged-containers/template.yaml</p>
                <p className="text-green-400 mt-3 mb-2"># Create a Constraint to enforce in production namespace</p>
                <p className="text-gray-300">kubectl apply -f - &lt;&lt;EOF</p>
                <p className="text-gray-300">apiVersion: constraints.gatekeeper.sh/v1beta1</p>
                <p className="text-gray-300">kind: K8sPSPPrivilegedContainer</p>
                <p className="text-gray-300">metadata:</p>
                <p className="text-gray-300 pl-4">name: no-privileged-containers</p>
                <p className="text-gray-300">spec:</p>
                <p className="text-gray-300 pl-4">match:</p>
                <p className="text-gray-300 pl-8">namespaces: ["production"]</p>
                <p className="text-gray-300">EOF</p>
                <p className="text-green-400 mt-3 mb-2"># Test: attempt to deploy a privileged pod (should be denied)</p>
                <p className="text-gray-300">kubectl run priv-test --image=nginx --privileged --namespace production</p>
                <p className="text-gray-500 mt-1"># Expected: Error from server: admission webhook denied the request</p>
              </div>
            </div>
          </PhaseStepItem>

          {/* Step 7 */}
          <PhaseStepItem number={7} type="LAB" title="Deploy Falco and trigger a runtime alert"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <div className="space-y-3 text-sm">
              <p>Falco detects anomalous runtime behavior using kernel-level syscall monitoring. Deploy it and trigger the built-in rule: <span className="text-yellow-400">"Terminal shell in container."</span></p>
              <div className="p-3 border border-gray-700 bg-gray-800 text-xs font-mono">
                <p className="text-green-400 mb-2"># Add Falco Helm repo and install</p>
                <p className="text-gray-300">helm repo add falcosecurity https://falcosecurity.github.io/charts</p>
                <p className="text-gray-300">helm repo update</p>
                <p className="text-gray-300">helm install falco falcosecurity/falco \</p>
                <p className="text-gray-300 pl-4">--namespace falco \</p>
                <p className="text-gray-300 pl-4">--create-namespace \</p>
                <p className="text-gray-300 pl-4">--set driver.kind=modern_ebpf</p>
                <p className="text-green-400 mt-3 mb-2"># Watch Falco logs (in a separate terminal)</p>
                <p className="text-gray-300">kubectl logs -n falco -l app.kubernetes.io/name=falco -f</p>
                <p className="text-green-400 mt-3 mb-2"># Trigger the alert: exec into a running container</p>
                <p className="text-gray-300">kubectl run trigger --image=nginx --namespace production</p>
                <p className="text-gray-300">kubectl exec -it trigger -n production -- /bin/bash</p>
                <p className="text-gray-500 mt-1"># Falco log should show: Notice A shell was spawned in a container...</p>
              </div>
              <div className="mt-2 p-2 border border-blue-800/40 bg-blue-900/10">
                <p className="text-blue-400 text-xs">In production, Falco alerts are forwarded to Sentinel (via Falcosidekick → Event Hub → Sentinel data connector). This closes the loop: Falco detects the runtime anomaly, Sentinel creates an incident, the Logic App playbook isolates the pod.</p>
              </div>
            </div>
          </PhaseStepItem>

          {/* Step 7 (continued) - Workload Identity */}
          <PhaseStepItem number={7} type="LAB" title="Configure AKS Workload Identity for Key Vault access"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <div className="space-y-3 text-sm">
              <p>Use AKS Workload Identity to give a specific pod access to Azure Key Vault — no client secrets stored anywhere. The OIDC issuer federates the pod's service account with an Azure Managed Identity.</p>
              <div className="p-3 border border-gray-700 bg-gray-800 text-xs font-mono">
                <p className="text-green-400 mb-2"># 1. Get OIDC issuer URL</p>
                <p className="text-gray-300">OIDC=$(az aks show -g rg-aks-lab -n aks-security-lab --query oidcIssuerProfile.issuerUrl -o tsv)</p>
                <p className="text-green-400 mt-3 mb-2"># 2. Create a User-assigned Managed Identity</p>
                <p className="text-gray-300">az identity create --name mi-aks-pod --resource-group rg-aks-lab</p>
                <p className="text-gray-300">CLIENT_ID=$(az identity show -n mi-aks-pod -g rg-aks-lab --query clientId -o tsv)</p>
                <p className="text-gray-300">PRINCIPAL_ID=$(az identity show -n mi-aks-pod -g rg-aks-lab --query principalId -o tsv)</p>
                <p className="text-green-400 mt-3 mb-2"># 3. Create Key Vault and grant the identity access</p>
                <p className="text-gray-300">az keyvault create -n kv-aks-lab -g rg-aks-lab --enable-rbac-authorization</p>
                <p className="text-gray-300">KV_ID=$(az keyvault show -n kv-aks-lab -g rg-aks-lab --query id -o tsv)</p>
                <p className="text-gray-300">az role assignment create --role "Key Vault Secrets User" \</p>
                <p className="text-gray-300 pl-4">--assignee $PRINCIPAL_ID --scope $KV_ID</p>
                <p className="text-green-400 mt-3 mb-2"># 4. Create federated identity credential</p>
                <p className="text-gray-300">az identity federated-credential create \</p>
                <p className="text-gray-300 pl-4">--name fc-aks-pod \</p>
                <p className="text-gray-300 pl-4">--identity-name mi-aks-pod \</p>
                <p className="text-gray-300 pl-4">--resource-group rg-aks-lab \</p>
                <p className="text-gray-300 pl-4">--issuer $OIDC \</p>
                <p className="text-gray-300 pl-4">--subject "system:serviceaccount:production:kv-reader"</p>
                <p className="text-green-400 mt-3 mb-2"># 5. Create service account with workload identity annotation</p>
                <p className="text-gray-300">kubectl create serviceaccount kv-reader -n production</p>
                <p className="text-gray-300">kubectl annotate sa kv-reader -n production \</p>
                <p className="text-gray-300 pl-4">azure.workload.identity/client-id=$CLIENT_ID</p>
              </div>
            </div>
          </PhaseStepItem>
        </div>

        <div className="space-y-2 mb-6">
          <PhaseStepItem number={8} type="ATTACKER" title="What the attacker sees if this lab is misconfigured"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>
            <p>If <code className="text-yellow-400">--disable-local-accounts</code> is not set, the cluster has a local kubeconfig credential that grants cluster-admin without AAD. An attacker who exfiltrates a developer's kubeconfig file has unconditional cluster-admin — bypassing all Conditional Access, PIM, and audit logs.</p>
            <div className="mt-3 p-3 border border-red-800/40 bg-red-900/10">
              <p className="text-red-400 text-xs font-bold mb-2">Attack path: no NetworkPolicy = lateral movement in seconds</p>
              <p className="text-gray-400 text-xs">Without NetworkPolicies, a compromised pod in the <code className="text-yellow-400">dev</code> namespace can reach the Kubernetes API server, the metadata service, other pods in <code className="text-yellow-400">production</code>, and internal Azure services. An attacker who gains code execution in any pod has a platform-wide foothold. Flannel CNI (the default) doesn't enforce NetworkPolicies — you need Azure CNI or Calico.</p>
            </div>
            <div className="mt-2 p-2 border border-red-800/40 bg-red-900/10">
              <p className="text-gray-400 text-xs"><span className="text-red-400">Node pool managed identity abuse:</span> If pods aren't using Workload Identity and can reach the IMDS endpoint (<code className="text-yellow-400">169.254.169.254</code>), any pod can request a token for the node pool's managed identity — which often has Contributor on the subscription. This is a cluster-to-subscription privilege escalation.</p>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={9} type="WARN" title="Common mistakes in this lab"
            isOpen={open.has(8)} onToggleOpen={() => toggleOpen(8)}
            isChecked={checked.has(8)} onToggleChecked={() => toggleChecked(8)}>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">NetworkPolicy applied to wrong namespace:</span> NetworkPolicies are namespace-scoped. Applying a default-deny to <code className="text-yellow-400">production</code> doesn't affect <code className="text-yellow-400">dev</code>. Apply default-deny to all namespaces separately.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Falco not installed with eBPF driver:</span> On AKS, the kernel module driver may not load due to node OS restrictions. Use <code className="text-yellow-400">driver.kind=modern_ebpf</code> for AKS compatibility (requires kernel 5.8+, which AKS Ubuntu nodes have).</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Gatekeeper constraint with wrong namespace selector:</span> If the Constraint's <code className="text-yellow-400">match.namespaces</code> list is empty or incorrect, the policy applies cluster-wide — potentially blocking system pods in <code className="text-yellow-400">kube-system</code> and breaking the cluster.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Workload Identity federated credential subject mismatch:</span> The subject must exactly match the format <code className="text-yellow-400">system:serviceaccount:&lt;namespace&gt;:&lt;serviceaccount-name&gt;</code>. A typo means the pod's token exchange fails with a 401 from Azure AD.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={10} type="CLEANUP" title="Cleanup — AKS nodes are expensive, delete immediately"
            isOpen={open.has(9)} onToggleOpen={() => toggleOpen(9)}
            isChecked={checked.has(9)} onToggleChecked={() => toggleChecked(9)}>
            <p className="text-sm text-gray-400 mb-3">AKS node VMs charge by the hour. A 2-node Standard_D2s_v3 cluster costs ~$0.19/hour. Delete everything when done.</p>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 1. Delete the entire resource group (AKS, identity, Key Vault)</p>
                <p className="text-gray-400">az group delete --name rg-aks-lab --yes --no-wait</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 2. Delete the MC_ node resource group (auto-created by AKS)</p>
                <p className="text-gray-400">az group delete --name MC_rg-aks-lab_aks-security-lab_eastus --yes --no-wait</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 3. Purge soft-deleted Key Vault</p>
                <p className="text-gray-400">az keyvault purge --name kv-aks-lab --location eastus</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 4. Remove kubeconfig entry</p>
                <p className="text-gray-400">kubectl config delete-context aks-security-lab</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 5. Verify no running VMs remain (MC_ RG can take a few minutes)</p>
                <p className="text-gray-400">az vm list --output table</p>
              </div>
            </div>
          </PhaseStepItem>
        </div>

        <MarkPhaseComplete phaseId={9} checkedCount={checked.size} total={TOTAL} />

        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module9" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 9 Overview
          </Link>
          <Link to="/explore" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Explore <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task9;
