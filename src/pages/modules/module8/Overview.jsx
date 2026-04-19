import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 7;
const OBJECTIVES = [
  "Understand the DevSecOps philosophy: shift-left security and shared responsibility",
  "Secure CI/CD pipelines — runners, service connections, pipeline-as-code",
  "Implement SAST, secret scanning, and SCA gates in automated workflows",
  "Scan container images and enforce minimal, rootless base images",
  "Apply Infrastructure as Code (IaC) security scanning with policy guardrails",
  "Triage findings, set remediation SLAs, and close the feedback loop",
];

const Day8 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4,5,6]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={8} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-8-devsecops</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_8_devsecops_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 8: DevSecOps Fundamentals</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Security that only happens at the end of development is security that arrives too late. DevSecOps embeds security into every stage of the software delivery lifecycle — from the first commit to production deployment. This module teaches you how to build automated security gates into CI/CD pipelines so vulnerabilities are caught before they ship.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-500">{checked.size}/{TOTAL} complete</span>
            <span className="text-gray-700"># click items to check off</span>
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-12">

          {/* Step 1: Domain & Goal */}
          <PhaseStepItem number={1} type="READ" title="Domain & Goal"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p><span className="text-gray-500">Domain:</span> DevSecOps — Integrating Security into Software Delivery</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Understand how to embed automated security checks into CI/CD pipelines so that vulnerabilities, secrets, and misconfigurations are caught before code reaches production.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">The Shift-Left Principle</p>
              <p className="text-sm text-gray-400">Traditional security operates as a gate at the end — "build it, then test it." DevSecOps shifts security left in the timeline: scan code as it's written, check dependencies before they're merged, validate infrastructure before it's deployed. The earlier you catch a flaw, the cheaper and faster it is to fix.</p>
              <div className="mt-2 text-sm font-mono text-gray-500">
                <p>Code → <span className="text-yellow-400">SAST + Secrets</span> → Build → <span className="text-yellow-400">SCA + Container Scan</span> → Deploy → <span className="text-yellow-400">IaC Scan + Policy</span> → Prod</p>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">DevSecOps ≠ Just Tools</p>
              <p className="text-sm text-gray-400">Adding a scanner to a pipeline is the easy part. DevSecOps is a <em>culture</em> change: developers own security findings, security teams consult rather than block, and every merge request is an opportunity to improve posture. The pipeline enforces the standard; the team agrees on what the standard is.</p>
            </div>
            <p className="mt-2 text-gray-500 text-xs">Industry alignment: AZ-500 (Manage security operations — 25-30%), OWASP DevSecOps Maturity Model (DSOMM), NIST 800-218 (Secure Software Development Framework), CompTIA Cloud+ (DevOps domain — 10%)</p>
          </PhaseStepItem>

          {/* Step 2: CI/CD Pipeline Security */}
          <PhaseStepItem number={2} type="READ" title="CI/CD Pipeline Security"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>The CI/CD pipeline is the most powerful automation in modern software delivery — and one of the most attractive targets for attackers. A compromised pipeline can inject malicious code into every deployment silently.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Pipeline Anatomy (GitHub Actions / Azure DevOps)</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-20 flex-shrink-0">Trigger</span>
                  <div>What starts the pipeline — push, PR, schedule, manual. Restrict triggers to specific branches (e.g., only <code className="text-cyan-400">main</code> and <code className="text-cyan-400">develop</code>).</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-20 flex-shrink-0">Runner</span>
                  <div>The machine executing the pipeline. GitHub-hosted runners are ephemeral (good). Self-hosted runners persist — harden them like servers, never share across trust boundaries.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-20 flex-shrink-0">Steps</span>
                  <div>Individual commands or actions. Pin third-party actions to a commit SHA, not a tag — tags can be reassigned (supply chain risk).</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-20 flex-shrink-0">Secrets</span>
                  <div>Stored in the platform's secret manager, injected as environment variables. Never echo secrets in logs. Use OIDC federation to authenticate to Azure instead of storing service principal credentials.</div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Pipeline Hardening Checklist</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Least-privilege service connections</span> — CI/CD service principals should have Contributor on a single resource group, not Subscription Owner</li>
                <li>• <span className="text-gray-300">Branch protection rules</span> — Require PR reviews, status checks, and signed commits before merging to main</li>
                <li>• <span className="text-gray-300">Pipeline-as-code</span> — Define workflows in version-controlled YAML, not UI-configured pipelines that can be silently modified</li>
                <li>• <span className="text-gray-300">Audit logs</span> — Monitor who modifies pipeline definitions and secrets</li>
                <li>• <span className="text-gray-300">OIDC federation</span> — Use workload identity federation to authenticate to Azure without storing long-lived credentials</li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-red-800/50 bg-red-900/10">
              <p className="text-red-400 text-xs">Real incident: The SolarWinds Orion compromise (2020) injected malicious code during the build process. Thousands of organizations received the backdoor through a trusted software update. Pipeline security is supply chain security.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/devops/pipelines/security/overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Pipeline security overview</a>
              <a href="https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ GitHub Docs: Security hardening for GitHub Actions</a>
            </div>
          </PhaseStepItem>

          {/* Step 3: SAST & Secret Scanning */}
          <PhaseStepItem number={3} type="READ" title="SAST & Secret Scanning"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p><span className="text-yellow-400">Static Application Security Testing (SAST)</span> analyzes source code for vulnerabilities without executing it. <span className="text-yellow-400">Secret scanning</span> detects credentials, API keys, and tokens that should never be in code.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">SAST Tools</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">CodeQL</span>
                  <div>GitHub's semantic code analysis engine. Queries code as data — finds injection flaws, auth bypasses, and data flow issues. Free for public repos, built into GitHub Advanced Security.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">Semgrep</span>
                  <div>Lightweight pattern-matching SAST. Write custom rules or use community rulesets. Fast, CI-friendly, supports 30+ languages. Open-source core.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">SonarQube</span>
                  <div>Full code quality + security platform. Tracks technical debt alongside vulnerabilities. Common in enterprise environments.</div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Secret Scanning</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">GitHub Secret Scanning</span> — Automatically detects 200+ secret patterns (Azure keys, AWS tokens, Stripe keys) in pushes. Alerts maintainers and can block the push.</li>
                <li>• <span className="text-gray-300">Gitleaks</span> — Open-source tool that scans git history for secrets. Runs as a pre-commit hook or CI step. Catches secrets already committed.</li>
                <li>• <span className="text-gray-300">TruffleHog</span> — Scans repos for high-entropy strings and known secret patterns. Can verify if detected credentials are still active.</li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Pre-Commit Hooks — The First Line of Defense</p>
              <p className="text-sm text-gray-400">Pre-commit hooks run locally before code is pushed. They catch secrets and obvious issues before they enter the repository. This is the earliest possible point of detection.</p>
              <div className="mt-2 p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
                <p className="text-gray-500"># .pre-commit-config.yaml</p>
                <p>repos:</p>
                <p>  - repo: https://github.com/gitleaks/gitleaks</p>
                <p>    rev: v8.18.0</p>
                <p>    hooks:</p>
                <p>      - id: gitleaks</p>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://codeql.github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ CodeQL documentation</a>
              <a href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ GitHub Docs: About secret scanning</a>
            </div>
          </PhaseStepItem>

          {/* Step 4: SCA & Dependency Management */}
          <PhaseStepItem number={4} type="READ" title="SCA & Dependency Management"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p><span className="text-yellow-400">Software Composition Analysis (SCA)</span> scans your project's dependencies — the open-source libraries you pull in — for known vulnerabilities (CVEs). Most modern apps are 80%+ open-source code. If a dependency has a critical CVE, your app inherits that risk.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">SCA Tools</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">Dependabot</span>
                  <div>GitHub-native. Automatically opens PRs to update vulnerable dependencies. Zero config — enable in repo settings. Supports npm, pip, Maven, NuGet, and more.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">Snyk</span>
                  <div>Commercial SCA with a generous free tier. Deep vulnerability database, fix suggestions, and license compliance checks. Integrates with CI/CD and IDEs.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">npm audit</span>
                  <div>Built into Node.js. Run <code className="text-cyan-400">npm audit</code> in any project to check for known vulnerabilities. Use <code className="text-cyan-400">npm audit fix</code> to auto-remediate when safe.</div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">SBOM — Software Bill of Materials</p>
              <p className="text-sm text-gray-400">An SBOM is a machine-readable inventory of every component in your software. It answers: "What dependencies am I running, and what versions?" When a new CVE drops (like Log4Shell), an SBOM lets you instantly check if you're affected.</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-400">
                <li>• Generate with <code className="text-cyan-400">syft</code>, <code className="text-cyan-400">cyclonedx-cli</code>, or GitHub's built-in dependency graph</li>
                <li>• Formats: SPDX (ISO standard) or CycloneDX (OWASP standard)</li>
                <li>• U.S. Executive Order 14028 requires SBOMs for software sold to the federal government</li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">CVE Triage & Remediation SLAs</p>
              <p className="text-sm text-gray-400">Not every vulnerability is exploitable in your context. A mature DevSecOps process includes triage:</p>
              <ul className="mt-1 space-y-1 text-sm text-gray-400">
                <li>• <span className="text-red-400 font-bold">Critical (CVSS 9.0+)</span> — Fix within 24-48 hours, or apply a compensating control immediately</li>
                <li>• <span className="text-yellow-400 font-bold">High (CVSS 7.0-8.9)</span> — Fix within 7 days</li>
                <li>• <span className="text-gray-300 font-bold">Medium (CVSS 4.0-6.9)</span> — Fix within 30 days</li>
                <li>• <span className="text-gray-500 font-bold">Low (CVSS 0.1-3.9)</span> — Fix within 90 days or accept risk with documented justification</li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-red-800/50 bg-red-900/10">
              <p className="text-red-400 text-xs">Real incident: Log4Shell (CVE-2021-44228, CVSS 10.0) affected virtually every Java application using Log4j. Organizations with SBOMs identified exposure in hours. Those without spent weeks manually auditing.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://docs.github.com/en/code-security/dependabot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ GitHub Docs: Dependabot</a>
              <a href="https://owasp.org/www-project-cyclonedx/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ OWASP CycloneDX SBOM standard</a>
            </div>
          </PhaseStepItem>

          {/* Step 5: Container Security */}
          <PhaseStepItem number={5} type="READ" title="Container Security"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>Containers are the standard deployment unit in cloud-native environments. A container image packages your app, runtime, libraries, and OS layer — every layer is a potential attack surface.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Container Security Principles</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-28 flex-shrink-0">Minimal images</span>
                  <div>Use <code className="text-cyan-400">alpine</code>, <code className="text-cyan-400">distroless</code>, or <code className="text-cyan-400">scratch</code> base images. Fewer packages = fewer vulnerabilities. A full <code className="text-cyan-400">ubuntu</code> image has hundreds of packages you don't need.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-28 flex-shrink-0">No root</span>
                  <div>Run containers as a non-root user. Add <code className="text-cyan-400">USER 1001</code> in your Dockerfile. If the container is compromised, the attacker has limited privileges.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-28 flex-shrink-0">Pin versions</span>
                  <div>Never use <code className="text-cyan-400">:latest</code>. Pin to a specific digest or version tag. <code className="text-cyan-400">:latest</code> can change under you without warning.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-28 flex-shrink-0">No secrets</span>
                  <div>Never bake secrets into images (even in ENV). Use runtime secret injection via Key Vault, Kubernetes secrets, or environment variables from the orchestrator.</div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Image Scanning Tools</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">Trivy</span>
                  <div>Open-source scanner by Aqua Security. Scans container images, filesystems, and IaC. Fast, CI-friendly, supports OS packages and language-specific deps.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">Defender</span>
                  <div>Microsoft Defender for Containers scans images pushed to Azure Container Registry (ACR). Integrates with Defender for Cloud for centralized vulnerability management.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">Grype</span>
                  <div>Anchore's open-source vulnerability scanner. Pairs with Syft for SBOM generation + vulnerability matching.</div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Image Signing & Trust</p>
              <p className="text-sm text-gray-400">Image signing (using Cosign or Docker Content Trust) provides tamper-proof verification that the image you deploy is the image you built. Without signing, an attacker who compromises your registry can replace images with malicious versions.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://aquasecurity.github.io/trivy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Trivy documentation</a>
              <a href="https://learn.microsoft.com/azure/defender-for-cloud/defender-for-containers-introduction?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Defender for Containers</a>
            </div>
          </PhaseStepItem>

          {/* Step 6: IaC Security Scanning */}
          <PhaseStepItem number={6} type="READ" title="IaC Security Scanning"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p><span className="text-yellow-400">Infrastructure as Code (IaC)</span> defines your cloud resources in version-controlled templates (Bicep, Terraform, ARM, CloudFormation). IaC scanning catches misconfigurations <em>before</em> deployment — storage accounts left public, databases without encryption, NSGs with 0.0.0.0/0 inbound rules.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">IaC Scanning Tools</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">Checkov</span>
                  <div>By Bridgecrew/Prisma Cloud. Scans Terraform, Bicep, ARM, Kubernetes manifests, Dockerfiles. 1,000+ built-in policies mapped to CIS benchmarks. Open-source.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">tfsec</span>
                  <div>Terraform-specific static analysis. Fast, focused, integrates with GitHub Actions. Now part of Trivy.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">Bicep Linter</span>
                  <div>Built into the Bicep CLI. Enforces best practices for Azure Resource Manager templates. Enable strict mode with <code className="text-cyan-400">bicepconfig.json</code>.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold w-20 flex-shrink-0">KICS</span>
                  <div>Keeping Infrastructure as Code Secure. By Checkmarx. Multi-framework scanner with 2,000+ queries.</div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Policy-as-Code & Drift Detection</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Azure Policy</span> — Enforces organizational standards at deployment time. Block resources that violate your policies (e.g., deny unencrypted storage accounts).</li>
                <li>• <span className="text-gray-300">OPA / Rego</span> — Open Policy Agent. Write custom policies for any infrastructure. Used in Kubernetes admission control (Gatekeeper) and CI/CD gates.</li>
                <li>• <span className="text-gray-300">Drift detection</span> — Compare deployed infrastructure against IaC definitions. If someone manually changes a resource in the portal, drift detection flags it. Tools: <code className="text-cyan-400">terraform plan</code>, Defender for Cloud.</li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Pre-Deploy Guardrails Pattern</p>
              <div className="text-sm font-mono text-gray-400">
                <p>1. Developer writes Bicep/Terraform template</p>
                <p>2. PR triggers pipeline → <span className="text-yellow-400">Checkov scans the template</span></p>
                <p>3. Failures block the merge (policy violation = no deploy)</p>
                <p>4. Developer fixes → re-scans → merge approved</p>
                <p>5. Deployment pipeline runs <span className="text-yellow-400">terraform plan</span> → human review → apply</p>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://www.checkov.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Checkov documentation</a>
              <a href="https://learn.microsoft.com/azure/governance/policy/overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Azure Policy overview</a>
            </div>
          </PhaseStepItem>

          {/* Step 7: Real-World Scenario */}
          <PhaseStepItem number={7} type="SCENARIO" title="Real-World Scenario: The Broken Build That Saved Production"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p>A developer on your team opens a pull request that updates a Node.js microservice. The PR looks clean — a new feature, tests pass, code review approved. But the automated pipeline catches two things the humans missed:</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Finding 1: Vulnerable Dependency</p>
              <p className="text-sm text-gray-400">The <code className="text-cyan-400">npm audit</code> step detects that the PR adds <code className="text-cyan-400">jsonwebtoken@8.5.1</code>, which has a critical CVE (CVE-2022-23529 — allows attackers to craft tokens that bypass signature verification). The SCA gate blocks the merge.</p>
              <p className="text-sm text-gray-400 mt-1"><span className="text-green-400">Fix:</span> Update to <code className="text-cyan-400">jsonwebtoken@9.0.0</code>. Re-run pipeline. SCA gate passes.</p>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Finding 2: Committed Secret</p>
              <p className="text-sm text-gray-400">The Gitleaks step detects a hardcoded Azure Storage connection string in a test file. The secret scanning gate blocks the merge.</p>
              <p className="text-sm text-gray-400 mt-1"><span className="text-green-400">Fix:</span> Remove the connection string, add it to Key Vault, reference via environment variable. Rotate the exposed key in Azure Portal. Re-run pipeline. Secret scan passes.</p>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">The Pipeline Saved the Day</p>
              <p className="text-sm text-gray-400">Without automated gates, both issues would have reached production. The vulnerable JWT library could have allowed authentication bypass. The leaked storage key could have exposed customer data. Two automated checks, two incidents prevented — before any human needed to act.</p>
            </div>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Takeaway: The pipeline is your last line of automated defense. A broken build is a success — it means the gates are working. Never bypass a failing security check without documented risk acceptance.</p>
            </div>
          </PhaseStepItem>
        </div>

        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-gray-500 text-xs mb-2"># ready to build</div>
          <p className="text-gray-400 text-sm">
            Now that you understand the components, it's time to build a secure pipeline yourself:
          </p>
          <div className="mt-3">
            <Link to="/module8/task" className="text-red-400 hover:text-red-300 transition-colors text-sm">→ ./start_devsecops_lab.sh</Link>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module7" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 7
          </Link>
          <Link to="/module8/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 8 Lab <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Day8;
