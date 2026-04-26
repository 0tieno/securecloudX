import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 10;
const OBJECTIVES = [
  "Create an Azure Key Vault and store secrets securely",
  "Deploy an App Service with a System Managed Identity",
  "Connect the App Service to Key Vault using zero credentials",
  "Harden the App Service with HTTPS, TLS 1.2, authentication, and access restrictions",
];

const Task4 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, toggleChecked] = useStepProgress("scx_steps_4_task", TOTAL);
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-4-app-security</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_4_keyvault_managed_identity.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 4 Lab: Key Vault, Managed Identity & App Hardening</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Build the golden pattern: an App Service that reads secrets from Key Vault using a Managed Identity — zero credentials in code. Then harden every security setting.
          </p>
          <p className="text-xs text-gray-600 mt-2 font-mono">~45 min read &nbsp;·&nbsp; Lab: ~60 min &nbsp;·&nbsp; Est. cost: $0.00 (App Service F1 free tier)</p>
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
        <div className="space-y-2 mb-10">
          {/* Step 1: Prep */}
          <PhaseStepItem number={1} type="PREP" title="What You'll Build — The Golden Pattern"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p className="text-sm mb-2">This lab builds the most important application security pattern in Azure:</p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono">
              <p className="text-gray-400">App Service (<span className="text-yellow-400">Managed Identity</span>)</p>
              <p className="text-gray-400 pl-3">→ authenticates to Key Vault (no credentials)</p>
              <p className="text-gray-400 pl-6">→ retrieves secrets at runtime</p>
              <p className="text-gray-400 pl-9">→ zero secrets in code, config, or env vars</p>
            </div>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-yellow-400">Cost note:</span> App Service Free tier (F1) + Key Vault Standard tier = minimal cost. Key Vault charges per operation (first 10,000 operations are essentially free).</p>
            </div>
          </PhaseStepItem>

          {/* Step 2: AI Prompt */}
          <PhaseStepItem number={2} type="AI" title="AI Prompt — AppSec Architect Guide"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy and paste this into your AI assistant for interactive step-by-step guidance:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "Guide me step-by-step through securing an Azure web application. The lab covers: (1) Create a Key Vault called kv-scx-lab with RBAC permission model, soft-delete enabled, and purge protection on. Store a secret called DatabasePassword. (2) Deploy an App Service on Free tier (F1) with a System Managed Identity enabled. (3) Grant the App Service's identity the 'Key Vault Secrets User' role on the Key Vault. (4) Add an App Setting on the App Service that references the Key Vault secret using the @Microsoft.KeyVault() syntax, and verify it resolves. (5) Harden the App Service: enable HTTPS Only, set minimum TLS to 1.2, disable FTP, disable remote debugging. (6) Enable built-in authentication (EasyAuth) with Microsoft Entra ID. (7) Review Defender for Cloud recommendations for the App Service. Explain each step with portal navigation and the security principle behind each decision."
            </div>
          </PhaseStepItem>

          {/* Step 3: Key Vault */}
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Create Key Vault & Store a Secret"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Key Vault is the centralized secrets store. Always use RBAC permission model over legacy access policies.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Key Vaults → Create</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Resource group: <code className="text-yellow-400">rg-scx-appsec-lab</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name: <code className="text-yellow-400">kv-scx-lab-[unique]</code> (Key Vault names must be globally unique)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Permission model: <span className="text-yellow-400">Azure role-based access control (recommended)</span></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable <span className="text-gray-300">soft-delete</span> (on by default) and <span className="text-gray-300">purge protection</span></span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Store a secret:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to the Key Vault → <strong className="text-gray-300">Secrets → Generate/Import</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name: <code className="text-yellow-400">DatabasePassword</code>, Value: any test string</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Copy the <span className="text-gray-300">Secret Identifier</span> URI — you'll need this in Step 3</span></li>
            </ul>
            <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">If you get "Access denied" when creating a secret, assign yourself the <code>Key Vault Secrets Officer</code> role on the Key Vault via Access Control (IAM).</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/key-vault/general/quick-create-portal?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Quickstart: Create a Key Vault</a>
            </div>
          </PhaseStepItem>

          {/* Step 4: App Service + MI → KV */}
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Deploy App Service & Connect to Key Vault"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">Deploy an App Service, enable its Managed Identity, then grant it access to Key Vault.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">Create App Service:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">App Services → Create</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name: <code className="text-yellow-400">app-scx-lab-[unique]</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Runtime: <code className="text-yellow-400">Node 20 LTS</code> (or any runtime), Plan: <code className="text-yellow-400">Free (F1)</code></span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Enable Managed Identity:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to the App Service → <strong className="text-gray-300">Identity → System assigned → Status: On → Save</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Copy the <span className="text-gray-300">Object (principal) ID</span> — this is the identity</span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Grant Key Vault access:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to Key Vault → <strong className="text-gray-300">Access control (IAM) → Add role assignment</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Role: <code className="text-yellow-400">Key Vault Secrets User</code> (read-only access to secrets)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Assign to: <span className="text-gray-300">Managed identity</span> → select your App Service</span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Reference the secret:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to App Service → <strong className="text-gray-300">Configuration → Application settings → New</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name: <code className="text-yellow-400">DB_PASSWORD</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Value: <code className="text-yellow-400">@Microsoft.KeyVault(SecretUri=https://kv-scx-lab-[unique].vault.azure.net/secrets/DatabasePassword/)</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Save → Check the setting shows a green checkmark (resolved successfully)</span></li>
            </ul>
            <div className="mt-2 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">The app can now read the database password at runtime. Zero credentials exist in code, config files, or environment variables. The Managed Identity handles authentication automatically.</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/app-service/app-service-key-vault-references?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Key Vault references in App Service</a>
            </div>
          </PhaseStepItem>

          {/* Step 5: Harden App Service */}
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Harden App Service Security Settings"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">Run through this security hardening checklist — these are CIS Benchmark requirements for App Service.</p>
            <div className="p-3 bg-gray-900 border border-gray-700">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono w-4 flex-shrink-0">□</span>
                  <div><span className="text-gray-300">HTTPS Only</span> → Settings → Configuration → General → <code className="text-cyan-400">HTTPS Only: On</code></div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono w-4 flex-shrink-0">□</span>
                  <div><span className="text-gray-300">Minimum TLS Version</span> → Settings → Configuration → General → <code className="text-cyan-400">Minimum TLS: 1.2</code></div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono w-4 flex-shrink-0">□</span>
                  <div><span className="text-gray-300">FTP State</span> → Settings → Configuration → General → <code className="text-cyan-400">FTP: Disabled</code></div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono w-4 flex-shrink-0">□</span>
                  <div><span className="text-gray-300">Remote Debugging</span> → Settings → Configuration → General → <code className="text-cyan-400">Remote debugging: Off</code></div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono w-4 flex-shrink-0">□</span>
                  <div><span className="text-gray-300">Client Certificate Mode</span> → Settings → Configuration → General → <code className="text-cyan-400">Incoming client certificates: Require</code> (for mutual TLS scenarios)</div>
                </li>
              </ul>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/app-service/overview-security?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: App Service security overview</a>
            </div>
          </PhaseStepItem>

          {/* Step 6: Authentication */}
          <PhaseStepItem number={6} type="PRACTICE" title="Step 4: Enable Built-in Authentication (EasyAuth)"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="text-xs text-gray-500 mb-2">App Service has built-in authentication that integrates with Entra ID — no code changes required.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to App Service → <strong className="text-gray-300">Authentication → Add identity provider</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Provider: <code className="text-yellow-400">Microsoft</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>App registration: <span className="text-gray-300">Create new</span> (auto-creates an Entra ID app registration)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Unauthenticated requests: <code className="text-yellow-400">Require authentication</code> (HTTP 302 redirect to login)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Save → Try visiting the app URL in an incognito browser — you should be redirected to Microsoft login</span></li>
            </ul>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-cyan-400">Why this matters:</span> EasyAuth adds authentication at the platform level. Even if your app code has no auth logic, unauthenticated users are blocked before they reach your code. This is Defense in Depth applied to the application layer.</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/app-service/overview-authentication-authorization?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Authentication and authorization in App Service</a>
            </div>
          </PhaseStepItem>

          {/* Step 7: Review */}
          <PhaseStepItem number={7} type="PRACTICE" title="Step 5: Review Security Posture & Clean Up"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="text-xs text-gray-500 mb-2">Review what you've built against the OWASP Top 10.</p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-300 font-semibold mb-1">OWASP Coverage Mapping</p>
              <ul className="space-y-0.5 text-gray-400">
                <li>• <span className="text-red-400">A01 Broken Access Control</span> → EasyAuth + RBAC on Key Vault</li>
                <li>• <span className="text-red-400">A02 Cryptographic Failures</span> → HTTPS Only + TLS 1.2 + Key Vault encryption</li>
                <li>• <span className="text-red-400">A05 Security Misconfiguration</span> → Disabled FTP, remote debug, enforced settings</li>
                <li>• <span className="text-red-400">A07 Auth Failures</span> → Managed Identity (no passwords), EasyAuth (enforced login)</li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500 mb-1"><span className="text-cyan-400">Challenge:</span> Go to <strong className="text-gray-300">Defender for Cloud → Recommendations</strong> and filter by your App Service. Fix any remaining recommendations to improve your Secure Score.</p>
            </div>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Success: App reads secrets from Key Vault via Managed Identity, no credentials in code, HTTPS enforced, authentication required, management interfaces disabled.</p>
            </div>
            <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Cleanup: Delete the resource group to remove all resources. Key Vault will enter soft-delete state (recoverable for 90 days).</p>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-500 mb-1">guided portfolio project:</p>
              <a href="https://learn.microsoft.com/training/modules/authenticate-apps-with-managed-identities/?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">→ Authenticate apps to Azure services by using managed identities</a>
            </div>
          </PhaseStepItem>
        </div>

        <div className="space-y-2 mb-6">
          <PhaseStepItem number={8} type="ATTACKER" title="What the attacker sees if this lab is misconfigured"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>
            <p>If your App Service has a connection string or secret stored in <span className="text-yellow-400">Application Settings</span> (environment variables visible in the portal), any developer with Contributor access to the resource group can read them. The portal displays them in plaintext — no audit log by default.</p>
            <div className="mt-3 p-3 border border-red-800/40 bg-red-900/10">
              <p className="text-red-400 text-xs font-bold mb-2">Attack path: SSRF to IMDS token theft</p>
              <p className="text-gray-400 text-xs">If your app fetches URLs from user input without validation, an attacker submits <code className="text-yellow-400">http://169.254.169.254/metadata/identity/oauth2/token?api-version=2018-02-01&amp;resource=https://storage.azure.com/</code> as the URL. The server fetches it and returns a valid Azure storage token scoped to the Managed Identity. Attacker now has full storage access.</p>
            </div>
            <div className="mt-2 p-2 border border-red-800/40 bg-red-900/10">
              <p className="text-gray-400 text-xs"><span className="text-red-400">WAF bypass:</span> Azure WAF in Detection mode logs attacks but doesn't block them. If you forget to switch to Prevention mode, your WAF is a logging system, not a security control.</p>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={9} type="WARN" title="Common mistakes in this lab"
            isOpen={open.has(8)} onToggleOpen={() => toggleOpen(8)}
            isChecked={checked.has(8)} onToggleChecked={() => toggleChecked(8)}>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Key Vault firewall blocking the App Service:</span> If you enable Key Vault network restrictions but forget to allow the App Service's VNet Integration subnet or Trusted Azure Services, your app will get 403 errors from Key Vault at runtime.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Managed Identity not assigned the right Key Vault role:</span> System-assigned identity must have "Key Vault Secrets User" (read) or "Key Vault Secrets Officer" (read/write). "Key Vault Contributor" (ARM role) does NOT grant data plane access — a very common confusion.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">CORS set to '*':</span> Wildcard CORS allows any origin to make cross-origin requests to your API. This enables CSRF attacks and breaks SameSite cookie security. Always restrict CORS to specific known origins.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Debug endpoints left enabled in production:</span> /debug, /trace, /swagger, /actuator endpoints expose internal state. Disable them or restrict to internal IPs via App Service IP restrictions.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={10} type="CLEANUP" title="Cleanup — prevent unexpected charges"
            isOpen={open.has(9)} onToggleOpen={() => toggleOpen(9)}
            isChecked={checked.has(9)} onToggleChecked={() => toggleChecked(9)}>
            <p className="text-sm text-gray-400 mb-3">App Service Plans, Key Vault, and Application Gateway incur costs even when idle.</p>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 1. Delete the resource group</p>
                <p className="text-gray-400">az group delete --name rg-appsec-lab --yes --no-wait</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 2. Purge soft-deleted Key Vault (optional — avoids name reservation)</p>
                <p className="text-gray-400">az keyvault purge --name &lt;kv-name&gt; --location &lt;region&gt;</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 3. Verify App Service Plan deleted</p>
                <p className="text-gray-400">az appservice plan list --output table</p>
              </div>
            </div>
          </PhaseStepItem>
        </div>

        <MarkPhaseComplete phaseId={4} checkedCount={checked.size} total={TOTAL} />
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module4" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 4 Overview
          </Link>
          <Link to="/module5" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 5 <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task4;
