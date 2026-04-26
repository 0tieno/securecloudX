import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import PhaseStepItem from "../../../components/PhaseStepItem";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 9;

const Phase3 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, toggleChecked] = useStepProgress("scx_steps_3_lab3", TOTAL);
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-3-data-security</span>
          <span>/</span><Link to="/module3/task" className="text-gray-400 hover:text-gray-300 transition-colors">lab</Link>
          <span>/</span><span className="text-gray-500">lab-03</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_3_module_3_private_storage_ha.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Lab 03: Private Storage with High Availability</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Secure private company storage with GRS, SAS tokens, lifecycle management, and object replication.
          </p>
          <p className="text-xs text-gray-600 mt-2 font-mono">~20 min read &nbsp;·&nbsp; Lab: ~20 min &nbsp;·&nbsp; Est. cost: $0.00 (GRS free tier)</p>
          <div className="mt-3 p-2 border border-yellow-800/50 bg-yellow-900/10">
            <p className="text-yellow-400 text-xs">prerequisite: complete Lab 02 before starting this lab</p>
          </div>
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
        <div className="flex items-center justify-end gap-4 text-xs text-gray-600 mb-3">
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6,7,8]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-10">
          <PhaseStepItem number={1} type="SCENARIO" title="Context: Private Company Storage"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p>The company needs storage for their offices and departments. This content is <span className="text-yellow-400">private</span> and shouldn't be shared without consent. This storage requires <span className="text-yellow-400">high availability</span> if there's a regional outage. The company also wants to use this storage to back up the public website from Lab 02.</p>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="AI" title="AI Prompts — Explore before you start"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Ask your AI assistant these questions to build context:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-purple-400 flex-shrink-0">&gt;</span><span className="italic">"What security features are available to protect Azure storage?"</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-400 flex-shrink-0">&gt;</span><span className="italic">"What is an Azure SAS and how is it used?"</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Create Storage Account with GRS Redundancy"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>In the Azure portal, search for and select <strong className="text-gray-300">Storage accounts</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <strong className="text-gray-300">+ Create</strong>, use the same resource group from Lab 02</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set name to <code className="text-yellow-400">private</code> + unique identifier, select <strong className="text-gray-300">Review</strong> then <strong className="text-gray-300">Create</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to resource → <strong className="text-gray-300">Data management &gt; Redundancy</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <code className="text-yellow-400">Geo-redundant storage (GRS)</code> — high availability, no secondary read access</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Save, refresh, and review the primary and secondary location information</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Create Private Container & Configure SAS Token"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// create private container and upload a file</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Data storage &gt; Containers</strong> → <strong className="text-gray-300">+ Container</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name it <code className="text-yellow-400">private</code>, set access level to <code className="text-red-400">Private (no anonymous access)</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Upload a test file to the container</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Copy the file URL and paste it in a new tab — verify you get an <code className="text-red-400">error (no access)</code></span></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// configure SAS token for partner access (24h read)</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select your uploaded blob file → go to the <strong className="text-gray-300">Generate SAS</strong> tab</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>In Permissions, ensure only <code className="text-yellow-400">Read</code> is selected</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set expiry date/time to <strong className="text-gray-300">24 hours from now</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <strong className="text-gray-300">Generate SAS token and URL</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Copy the <strong className="text-gray-300">Blob SAS URL</strong> and paste it in a new tab — verify you can access the file</span></li>
                </ul>
              </div>
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Lifecycle Management & Object Replication"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// move blobs to cool tier after 30 days</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Data management &gt; Lifecycle management</strong> → <strong className="text-gray-300">Add rule</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set rule name to <code className="text-yellow-400">movetocool</code>, scope to <code className="text-yellow-400">all blobs in storage account</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set condition: <strong className="text-gray-300">Last modified</strong> more than <code className="text-yellow-400">30</code> days ago</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set action to <code className="text-yellow-400">Move to cool storage</code> → Add rule</span></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// replicate public website to backup container</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>In your <code className="text-yellow-400">private</code> storage account, create a new container named <code className="text-yellow-400">backup</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to the <code className="text-yellow-400">publicwebsite</code> storage account from Lab 02</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Data management &gt; Object replication</strong> → <strong className="text-gray-300">Create replication rules</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set destination storage account to your <code className="text-yellow-400">private</code> account</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set source container to <code className="text-yellow-400">public</code> and destination to <code className="text-yellow-400">backup</code> → Create</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Upload a file to the <code className="text-yellow-400">public</code> container and check the <code className="text-yellow-400">backup</code> container after a few minutes</span></li>
                </ul>
              </div>
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={6} type="NOTE" title="Key Takeaways"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Azure storage has many data protection features: encryption, access control, network security, monitoring, and alerts.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>A <strong className="text-gray-300">Shared Access Signature (SAS)</strong> provides secure delegated access with granular control over permissions and expiry.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><strong className="text-gray-300">Lifecycle rules</strong> automate data tiering to optimize storage costs over time.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><strong className="text-gray-300">Object replication</strong> asynchronously copies block blobs between a source and destination storage account.</span></li>
            </ul>
          </PhaseStepItem>
        </div>

        <div className="space-y-2 mb-6">
          <PhaseStepItem number={7} type="ATTACKER" title="How attackers abuse SAS tokens found in logs or code"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p>SAS tokens are credentials. When they appear in browser URL bars, application logs, CDN access logs, error messages, or Referer headers — anywhere they transit as plaintext — an attacker who captures one can replay it until it expires.</p>
            <div className="mt-3 p-3 border border-red-800/40 bg-red-900/10">
              <p className="text-red-400 text-xs font-bold mb-2">Attack: replay a SAS token found in a log</p>
              <ul className="space-y-1 text-xs text-gray-400 font-mono">
                <li>&gt; # Token found in application log:</li>
                <li>&gt; https://&lt;account&gt;.blob.core.windows.net/private?sv=2023-01-03&amp;ss=b&amp;srt=sco&amp;sp=rwdlacupitfx&amp;se=2027-01-01...</li>
                <li>&gt; # Attacker downloads entire container with no further auth:</li>
                <li>&gt; az storage blob download-batch -s &lt;container-url-with-sas&gt; -d ./exfil/</li>
              </ul>
            </div>
            <div className="mt-2 p-2 border border-red-800/40 bg-red-900/10">
              <p className="text-gray-400 text-xs"><span className="text-red-400">Object replication risk:</span> If an attacker compromises the destination storage account (the replication target), they gain read access to everything being replicated from the source — a persistent, silent exfiltration channel as long as replication runs.</p>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={8} type="WARN" title="Common mistakes in Lab 03"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">SAS expiry set to 1 year &quot;for convenience&quot;:</span> A long-lived SAS is an effectively permanent credential. If leaked, attackers have months or years to exploit it. Design SAS generation into your application with the shortest expiry the use case allows — minutes to hours for user operations.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">SAS scope too broad:</span> A SAS with write + delete on the entire storage account (service SAS at account level) is nearly equivalent to a storage key. Scope to the specific container and the minimum permissions: read-only if the use case only needs reads.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Not using user delegation SAS:</span> Service SAS tokens are signed with the storage account key — if the key leaks, all SAS tokens signed with it are also compromised. User delegation SAS tokens are signed with Azure AD credentials and can be individually revoked by revoking the user's key.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">No Defender for Storage on the replication target:</span> Object replication silently copies blobs to the destination account. If the destination has no Defender for Storage, anomalous access (an attacker reading all replicated blobs) goes undetected.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={9} type="CLEANUP" title="Cleanup — delete Lab 03 storage accounts and replication"
            isOpen={open.has(8)} onToggleOpen={() => toggleOpen(8)}
            isChecked={checked.has(8)} onToggleChecked={() => toggleChecked(8)}>
            <p className="text-sm text-gray-400 mb-3">Delete the object replication policy before deleting accounts, otherwise deletion may fail.</p>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 1. List and delete object replication policies</p>
                <p className="text-gray-400">az storage account or-policy list --account-name &lt;source-account&gt; --output table</p>
                <p className="text-gray-400 mt-1">az storage account or-policy delete --account-name &lt;source-account&gt; --resource-group &lt;rg&gt; --policy-id &lt;id&gt;</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 2. Delete both storage accounts</p>
                <p className="text-gray-400">az storage account delete --name &lt;private-account&gt; --resource-group &lt;rg&gt; --yes</p>
                <p className="text-gray-400 mt-1">az storage account delete --name &lt;replica-account&gt; --resource-group &lt;rg&gt; --yes</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 3. Delete the resource group</p>
                <p className="text-gray-400">az group delete --name &lt;your-rg&gt; --yes --no-wait</p>
              </div>
            </div>
          </PhaseStepItem>
        </div>

        <MarkPhaseComplete phaseId={3} taskKey="task-phase3" checkedCount={checked.size} total={TOTAL} />
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module3/task/phase2" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Lab 02
          </Link>
          <Link to="/module4" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 4 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Phase3;
