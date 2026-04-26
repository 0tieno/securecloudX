import { useState } from "react";
import { Link } from "react-router-dom";

const FINDINGS = [
  {
    id: 1,
    title: "Public Blob Access Enabled",
    severity: "CRITICAL",
    hint: "Try accessing the storage account URL without any authentication. Can you list the container contents?",
    what: "The storage account has `Allow Blob public access` enabled and the container is set to Anonymous read access (Blob level). Anyone on the internet can download any file without credentials.",
    how: `$ curl https://stbreachlab.blob.core.windows.net/public-data/?restype=container&comp=list
# Returns XML listing all blobs — no key, no SAS, no identity required`,
    fix: "Disable public blob access at the account level via Azure Portal → Storage Account → Configuration → 'Allow Blob public access' → Disabled. Or via CLI: az storage account update --allow-blob-public-access false",
    control: "Azure Policy: 'Storage accounts should prohibit public blob access' (built-in)",
  },
  {
    id: 2,
    title: "SAS Token Found in Blob Contents",
    severity: "CRITICAL",
    hint: "Read the contents of `readme.txt` in the container. What do you find?",
    what: "A SAS token with full read/write/delete permissions and no expiry was stored inside a file in the public container. Once public access is open, all file contents are exposed — including any credentials stored as files.",
    how: `$ curl https://stbreachlab.blob.core.windows.net/public-data/readme.txt
# Output contains: ?sv=2021-06-08&ss=b&srt=co&sp=rwdlacupiytfx&se=9999-12-31&...
# This SAS token has: all permissions, no expiry, no IP restriction`,
    fix: "Never store SAS tokens as files. Rotate immediately: delete and regenerate the storage account access key the SAS was signed with. Store SAS tokens only in Key Vault references or CI/CD secret stores.",
    control: "Microsoft Defender for Storage detects 'Unusual data access' anomalies",
  },
  {
    id: 3,
    title: "No Diagnostic Logging — Zero Audit Trail",
    severity: "HIGH",
    hint: "Check if the storage account has diagnostic settings configured. Go to Monitoring → Diagnostic settings.",
    what: "No diagnostic settings are configured on the storage account. Every access to the account — including the attacker's — is invisible. There's no way to know when the breach started, what was accessed, or by whom.",
    how: `# Azure Portal: Storage Account → Monitoring → Diagnostic settings
# Expected: 'No diagnostic settings defined'
# This means: read operations, write operations, deletes — all unlogged`,
    fix: "Enable diagnostic logging for all storage operations: az storage account update --enable-storage-analytics-logging. Route logs to a Log Analytics workspace with 90+ day retention.",
    control: "CIS Azure Benchmark 3.12: Ensure storage logging is enabled for blob service",
  },
  {
    id: 4,
    title: "Soft Delete Not Enabled — Data Permanently Deletable",
    severity: "HIGH",
    hint: "Check the Data Protection settings. What happens if an attacker deletes all blobs?",
    what: "Blob soft delete and container soft delete are both disabled. An attacker (or ransomware) that deletes all blobs in this container causes permanent, unrecoverable data loss with zero recoverability period.",
    how: `# Portal: Storage Account → Data management → Data protection
# Expected: 'Soft delete for blobs: Disabled, Soft delete for containers: Disabled'
# Attack: az storage blob delete-batch --source public-data --account-name stbreachlab
# Result: all data permanently destroyed`,
    fix: "Enable blob soft delete (minimum 7 days, recommended 30 days) and container soft delete. For compliance data, add WORM immutability policy.",
    control: "NIST SP 800-111: Availability controls for stored data",
  },
  {
    id: 5,
    title: "No Lifecycle Policy — Stale Data Accumulates Indefinitely",
    severity: "MEDIUM",
    hint: "Check the Lifecycle Management rules. How long has data been accumulating?",
    what: "No lifecycle management policy is configured. All blobs are retained indefinitely regardless of age. Stale data — including potentially sensitive historical records — accumulates with no automatic expiry or tiering.",
    how: `# Portal: Storage Account → Data management → Lifecycle management
# Expected: 'No rules defined'
# ls -la equivalent:
$ az storage blob list --container-name public-data --account-name stbreachlab --query '[].{name:name,lastModified:properties.lastModified}'
# Blobs dating back 3+ years, never deleted`,
    fix: "Define lifecycle management rules: move to Cool tier after 30 days, Archive after 90 days, Delete after 365 days (or per your retention policy). Ensure expiry aligns with data classification requirements.",
    control: "ISO 27001 A.8.3.1: Management of removable media",
  },
];

const SEVERITY_CONFIG = {
  CRITICAL: { color: "text-red-400", border: "border-red-500/40", bg: "bg-red-500/10" },
  HIGH:     { color: "text-orange-400", border: "border-orange-500/40", bg: "bg-orange-500/10" },
  MEDIUM:   { color: "text-yellow-400", border: "border-yellow-500/40", bg: "bg-yellow-500/10" },
};

function Finding({ finding, index }) {
  const [revealed, setRevealed] = useState(false);
  const cfg = SEVERITY_CONFIG[finding.severity];

  return (
    <div className="border border-gray-700 bg-gray-800/40">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-700/50">
        <span className="text-gray-600 text-xs font-mono">[{String(index + 1).padStart(2, "0")}]</span>
        <span className={`text-xs font-bold font-mono px-2 py-0.5 border ${cfg.color} ${cfg.border} ${cfg.bg}`}>
          {finding.severity}
        </span>
        <span className="text-gray-300 font-semibold text-sm">{finding.title}</span>
      </div>
      <div className="px-4 py-3">
        <p className="text-gray-500 text-xs italic mb-3">{finding.hint}</p>
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="text-xs font-mono text-red-400 border border-red-800/50 px-3 py-1 hover:border-red-600 transition-colors"
          >
            $ ./reveal_finding.sh
          </button>
        ) : (
          <div className="space-y-3">
            <div>
              <p className="text-gray-500 text-xs mb-1"># what happened</p>
              <p className="text-gray-300 text-xs leading-relaxed">{finding.what}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1"># how to verify</p>
              <pre className="text-xs text-green-300 font-mono bg-gray-900 border border-gray-700 p-3 overflow-x-auto whitespace-pre-wrap leading-relaxed">{finding.how}</pre>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1"># remediation</p>
              <p className="text-green-400 text-xs leading-relaxed">{finding.fix}</p>
            </div>
            <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
              <p className="text-indigo-400 text-xs"><span className="font-bold">Control ref:</span> {finding.control}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BrokenByDesign() {
  const [allRevealed, setAllRevealed] = useState(false);
  const revealedCount = allRevealed ? FINDINGS.length : 0;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span>
          <span className="text-gray-400">lab</span>
          <span>/</span>
          <span className="text-gray-500">broken-by-design</span>
        </div>

        {/* Scenario brief */}
        <div className="mb-8">
          <div className="text-red-400 text-xs mb-3">$ ./security_assessment.sh --target stbreachlab</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Broken By Design</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            You've been hired as a security engineer to assess a startup's Azure environment before they go live. Their Azure Storage account (<code className="text-yellow-400">stbreachlab</code>) holds customer data. Find every misconfiguration before the attacker does.
          </p>
        </div>

        {/* Context */}
        <div className="mb-8 p-4 border border-red-800/40 bg-red-900/10">
          <div className="text-red-400 text-xs mb-2">$ cat engagement_rules.txt</div>
          <ul className="space-y-1 text-sm text-gray-400">
            <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">▸</span><span>This is a guided walkthrough of a simulated misconfigured Azure Storage account. No real Azure access is needed.</span></li>
            <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">▸</span><span>For each finding: read the hint, try to identify the misconfiguration yourself, then reveal the full analysis.</span></li>
            <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">▸</span><span>Your goal: find all {FINDINGS.length} misconfigurations, understand the attack path, and articulate the remediation.</span></li>
            <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">▸</span><span>After completing this lab, apply the same methodology to your own Azure environment.</span></li>
          </ul>
        </div>

        {/* Target info */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-gray-500 text-xs mb-3"># target information</div>
          <div className="font-mono text-sm space-y-1 text-gray-400">
            <p><span className="text-gray-600">Resource:</span> Azure Storage Account</p>
            <p><span className="text-gray-600">Name:</span> <span className="text-yellow-400">stbreachlab</span></p>
            <p><span className="text-gray-600">Container:</span> <span className="text-yellow-400">public-data</span></p>
            <p><span className="text-gray-600">Region:</span> East US</p>
            <p><span className="text-gray-600">Data classification:</span> <span className="text-red-400">CONFIDENTIAL (customer PII)</span></p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>findings identified</span>
            <span className="text-gray-300">{allRevealed ? FINDINGS.length : "?"} / {FINDINGS.length}</span>
          </div>
          <div className="w-full bg-gray-800 border border-gray-700 h-1.5">
            <div className="bg-red-500 h-full transition-all duration-500" style={{ width: allRevealed ? "100%" : "0%" }} />
          </div>
        </div>

        {/* Findings */}
        <div className="space-y-4 mb-8">
          {FINDINGS.map((f, i) => (
            <Finding key={f.id} finding={f} index={i} />
          ))}
        </div>

        {/* Debrief */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-gray-500 text-xs mb-3"># debrief</div>
          <p className="text-gray-400 text-sm mb-3">
            These 5 misconfigurations are based on real patterns seen in the Power Apps (2021), Toyota (2023), and Cognyte (2021) breaches covered in Module 3's Architect Notes. In each case, the root cause was the same: insecure defaults + no monitoring.
          </p>
          <p className="text-gray-400 text-sm mb-3">
            A single Azure Policy assignment (<span className="text-yellow-400">CIS Azure Foundations Benchmark</span>) would have flagged all 5 issues automatically. Defender for Storage would have detected the public access anomaly on day one.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link to="/module3" className="text-xs text-blue-400 border border-blue-800/50 px-3 py-1 hover:border-blue-600 transition-colors">→ Module 3: Data Security</Link>
            <Link to="/module5" className="text-xs text-blue-400 border border-blue-800/50 px-3 py-1 hover:border-blue-600 transition-colors">→ Module 5: CSPM</Link>
            <Link to="/glossary" className="text-xs text-blue-400 border border-blue-800/50 px-3 py-1 hover:border-blue-600 transition-colors">→ Glossary: WORM, SAS, CMK</Link>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/home" className="text-gray-500 hover:text-gray-300 transition-colors">← dashboard</Link>
          <Link to="/module3" className="text-gray-500 hover:text-red-400 transition-colors">Module 3: Data Security →</Link>
        </div>
      </div>
    </div>
  );
}
