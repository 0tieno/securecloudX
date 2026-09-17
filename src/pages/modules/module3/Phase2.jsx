import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhaseStepItem from "../../../components/PhaseStepItem";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 13;

const Phase2 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, toggleChecked] = useStepProgress("scx_steps_3_lab2", TOTAL);
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-3-data-security</span>
          <span>/</span><Link to="/module3/task" className="text-gray-400 hover:text-gray-300 transition-colors">lab</Link>
          <span>/</span><span className="text-gray-500">lab-02</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_3_phase_2_public_website_storage.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Lab 02: Secure Public Website Storage</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Configure Azure Blob Storage for a public-facing website with high availability, versioning, and soft delete.
          </p>
          <p className="text-xs text-gray-600 mt-2 font-mono">~20 min read &nbsp;·&nbsp; Lab: ~20 min &nbsp;·&nbsp; Est. cost: $0.00 (RA-GRS free tier)</p>
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6,7,8,9,10,11,12]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-10">
          <PhaseStepItem number={1} type="SCENARIO" title="Context: Public Website Content Storage"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p>The company website supplies <span className="text-yellow-400">product images, videos, marketing literature, and customer success stories</span>. Customers are located worldwide and demand is rapidly expanding. The content is mission-critical and requires low latency load times. It's important to keep track of document versions and to quickly restore documents if they're deleted.</p>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="AI" title="AI Prompts — Explore before you start"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Ask your AI assistant these questions to build context:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-purple-400 flex-shrink-0">&gt;</span><span className="italic">"What is Azure blob storage and when should it be used?"</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-400 flex-shrink-0">&gt;</span><span className="italic">"Compare the different Azure storage redundancy models, highlighting their key features and use cases."</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-400 flex-shrink-0">&gt;</span><span className="italic">"What are the Azure storage tiers and how can those tiers save money?"</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Create a Storage Account with High Availability"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>In the Azure portal, search for and select <strong className="text-gray-300">Storage accounts</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <strong className="text-gray-300">+ Create</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create a new resource group, name your storage account <code className="text-yellow-400">publicwebsite</code> + unique identifier</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <strong className="text-gray-300">Review</strong>, then <strong className="text-gray-300">Create</strong> and go to resource</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Data management &gt; Redundancy</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <code className="text-yellow-400">Read-access Geo-redundant storage (RA-GRS)</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Review the primary and secondary location information</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Allow Anonymous Access & Create Container"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// enable anonymous blob access</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Settings &gt; Configuration</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set <strong className="text-gray-300">Allow blob anonymous access</strong> to <code className="text-green-400">Enabled</code> and save</span></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// create container with public read access</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Data storage &gt; Containers</strong>, select <strong className="text-gray-300">+ Container</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name the container <code className="text-yellow-400">public</code> and select <strong className="text-gray-300">Create</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select the <code className="text-yellow-400">public</code> container → <strong className="text-gray-300">Change access level</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set to <code className="text-yellow-400">Blob (anonymous read access for blobs only)</code> → OK</span></li>
                </ul>
              </div>
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Upload Files & Test Anonymous Access"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Inside the <code className="text-yellow-400">public</code> container, select <strong className="text-gray-300">Upload</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Browse and upload any small image or text file</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select your uploaded file and copy the <strong className="text-gray-300">URL</strong> from the Overview tab</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Paste the URL into a new browser tab — image should display or file should download</span></li>
            </ul>
            <div className="mt-2 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Success: File is publicly accessible via URL without any authentication.</p>
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={6} type="PRACTICE" title="Step 4: Configure Soft Delete (21-day retention)"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// enable soft delete</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>From the storage account Overview, go to <strong className="text-gray-300">Properties &gt; Blob service &gt; Blob soft delete</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Check <strong className="text-gray-300">Enable soft delete for blobs</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set <strong className="text-gray-300">Keep deleted blobs for</strong> to <code className="text-yellow-400">21</code> days and save</span></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// practice restoring a deleted file</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select your uploaded file and delete it</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>On the container Overview, toggle <strong className="text-gray-300">Show deleted blobs</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select the deleted file, click the ellipsis <code className="text-yellow-400">...</code>, and select <strong className="text-gray-300">Undelete</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Refresh the container — confirm the file has been restored</span></li>
                </ul>
              </div>
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={7} type="PRACTICE" title="Step 5: Configure Blob Versioning"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>From the storage account Overview, go to <strong className="text-gray-300">Properties &gt; Blob service &gt; Versioning</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Check <strong className="text-gray-300">Enable versioning for blobs</strong> and save</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Upload a second version of your container file (overwrites the existing file)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Toggle <strong className="text-gray-300">Show deleted blobs</strong> — the previous version is listed there</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={8} type="PRACTICE" title="Step 6: Front with Azure CDN & Restrict Direct Network Access"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>
            <p className="text-xs text-gray-500 mb-2">Enterprises never point a browser straight at a storage blob URL for public content. A CDN/Front Door sits in front for caching, DDoS absorption, and a custom domain.</p>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// create a CDN endpoint in front of blob storage</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>In the Azure portal, search for and select <strong className="text-gray-300">Front Door and CDN profiles</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <strong className="text-gray-300">+ Create</strong> → choose either <code className="text-yellow-400">Azure Front Door Standard</code> or <code className="text-yellow-400">Azure CDN Standard from Microsoft (classic)</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name the profile (e.g. <code className="text-yellow-400">cdn-publicwebsite</code>) and create an endpoint with a unique name</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set <strong className="text-gray-300">Origin type</strong> to <code className="text-yellow-400">Storage</code> and select your <code className="text-yellow-400">publicwebsite</code> account as the origin</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Confirm the <strong className="text-gray-300">Origin host header</strong> matches your storage account's blob hostname (e.g. <code className="text-yellow-400">&lt;account&gt;.blob.core.windows.net</code>)</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <strong className="text-gray-300">Review + create</strong>, then <strong className="text-gray-300">Create</strong></span></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// test content is served through the CDN</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Wait ~15 minutes for the endpoint/route configuration to propagate globally</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Browse to <code className="text-yellow-400">https://&lt;endpoint&gt;.azurefd.net/public/&lt;your-file&gt;</code> (Front Door) or <code className="text-yellow-400">https://&lt;endpoint&gt;.azureedge.net/public/&lt;your-file&gt;</code> (classic CDN)</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>If you get a "page not found" platform error, open the endpoint's <strong className="text-gray-300">Routes</strong> and confirm a route with pattern <code className="text-yellow-400">/*</code> is linked to your origin group</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Confirm the file loads — content is now cached and served from the edge, not directly from storage</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-2 p-2 border border-orange-800/50 bg-orange-900/10">
              <p className="text-orange-400 text-xs"><strong className="text-gray-300">Reality check:</strong> Azure Storage's firewall "Resource instances" exception list only covers a fixed set of PaaS services (Cognitive Search, Data Factory, Synapse, IoT Hub, etc.) — <strong className="text-gray-300">CDN and Front Door aren't on it</strong>. You can't lock a Standard-tier CDN's storage origin down to "only accept CDN traffic" this way. The only supported way to fully hide the storage origin is <strong className="text-gray-300">Azure Front Door Premium + Private Link</strong> (disable public network access entirely, Front Door reaches storage over a private endpoint). For Standard-tier public-content scenarios like this lab, the accepted enterprise trade-off is: scope anonymous access to just the one container, and rely on Defender for Storage to flag anomalous direct-origin access.</p>
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={9} type="PRACTICE" title="Step 7: Enable Microsoft Defender for Storage"
            isOpen={open.has(8)} onToggleOpen={() => toggleOpen(8)}
            isChecked={checked.has(8)} onToggleChecked={() => toggleChecked(8)}>
            <p className="text-xs text-gray-500 mb-2">Since a Standard-tier CDN can't fully hide this storage origin, detection is the compensating control — Defender for Storage flags malware uploads and anomalous access patterns the network layer can't stop.</p>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// enable Defender for Storage on the account</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>On the storage account, go to <strong className="text-gray-300">Security + networking &gt; Microsoft Defender for Cloud</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <strong className="text-gray-300">Enable on storage account</strong> (per-storage-account plan)</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Confirm <strong className="text-gray-300">Activity monitoring</strong> and <strong className="text-gray-300">Malware scanning</strong> are both enabled, then save</span></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// test malware scanning with a benign EICAR file</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Download the industry-standard <code className="text-yellow-400">EICAR</code> antivirus test file (a harmless string, not a real virus, used to safely test AV/malware scanning)</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Upload it to the <code className="text-yellow-400">public</code> container</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Wait a few minutes, then check for a malware detection alert (see next step)</span></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// review security alerts</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Microsoft Defender for Cloud &gt; Security alerts</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Filter by your storage account and review the EICAR malware alert</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Note the other alert types Defender for Storage raises: anonymous access to a sensitive container, access from a Tor exit node, and unusual data extraction volume</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Cost note: Defender for Storage bills per transaction/GB scanned, not free-tier. Leave it enabled just long enough to test, then disable it in cleanup if you're not continuing to use this account.</p>
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={10} type="NOTE" title="Key Takeaways"
            isOpen={open.has(9)} onToggleOpen={() => toggleOpen(9)}
            isChecked={checked.has(9)} onToggleChecked={() => toggleChecked(9)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Azure Blob Storage is optimized for massive amounts of unstructured data (text or binary).</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><strong className="text-gray-300">Blob soft delete</strong> protects individual blobs from accidental deletes by maintaining deleted data for a set period.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><strong className="text-gray-300">Lifecycle rules</strong> help optimize cost by automating data tiering.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><strong className="text-gray-300">Blob versioning</strong> maintains previous versions so you can restore data if it's modified or deleted.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>When a container is configured for anonymous access, any client can read data in that container.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>A <strong className="text-gray-300">CDN or Front Door in front of storage</strong> is the standard enterprise pattern for public content, but Standard-tier storage firewalls can't be scoped to "only accept CDN traffic" — full origin isolation needs <strong className="text-gray-300">Front Door Premium + Private Link</strong>.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><strong className="text-gray-300">Microsoft Defender for Storage</strong> detects malware uploads and anomalous access patterns — the compensating control when the network layer can't fully lock down a public-facing origin.</span></li>
            </ul>
          </PhaseStepItem>
        </div>

        <div className="space-y-2 mb-6">
          <PhaseStepItem number={11} type="ATTACKER" title="What an attacker finds in a misconfigured public container"
            isOpen={open.has(10)} onToggleOpen={() => toggleOpen(10)}
            isChecked={checked.has(10)} onToggleChecked={() => toggleChecked(10)}>
            <p>When container-level anonymous blob access is enabled, <span className="text-red-400">no authentication is required</span> to read any blob in that container. Anonymous reads generate no sign-in audit entries — the access is invisible in Entra ID logs.</p>
            <div className="mt-3 p-3 border border-red-800/40 bg-red-900/10">
              <p className="text-red-400 text-xs font-bold mb-2">Enumeration with no credentials</p>
              <ul className="space-y-1 text-xs text-gray-400 font-mono">
                <li>&gt; az storage blob list --container-name &lt;name&gt; --account-name &lt;name&gt; --auth-mode anonymous</li>
                <li>&gt; curl https://&lt;account&gt;.blob.core.windows.net/&lt;container&gt;?restype=container&amp;comp=list</li>
                <li>&gt; az storage blob download-batch --source &lt;container-url&gt; -d ./exfil/ --no-auth</li>
              </ul>
            </div>
            <p className="text-gray-500 text-xs mt-2">If the &quot;public website storage&quot; account also happens to have a <code className="text-yellow-400">private</code> container, a developer who later enables anonymous access on the wrong container exposes private data. The fix: disable <code className="text-yellow-400">allowBlobPublicAccess</code> at the account level — then no container can be made public, ever.</p>
          </PhaseStepItem>

          <PhaseStepItem number={12} type="WARN" title="Common mistakes in Lab 02"
            isOpen={open.has(11)} onToggleOpen={() => toggleOpen(11)}
            isChecked={checked.has(11)} onToggleChecked={() => toggleChecked(11)}>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Enabling container-level access instead of using a CDN:</span> Public website content should be served via Azure CDN or Front Door, not via direct blob anonymous access. CDN gives you DDoS protection, custom domains, and you can revoke CDN access without changing storage.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Assuming a CDN in front of storage hides the origin:</span> Standard-tier CDN/Front Door doesn't stop someone from hitting the storage blob URL directly — the storage firewall has no supported exception for CDN traffic. If the origin must be fully unreachable, that requires Front Door Premium + Private Link, not a Standard CDN alone.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Not disabling blob public access at the account level:</span> Even if today's containers are all private, leaving <code className="text-yellow-400">allowBlobPublicAccess: true</code> means any future developer can accidentally make a container public. Lock it off at the account level.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Soft delete retention too short:</span> A 1-day retention window isn't enough to detect and respond to a ransomware attack that silently overwrites blobs over several days. Set retention to at least 7–30 days for meaningful recovery.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">RA-GRS secondary endpoint exposed:</span> The secondary read-only endpoint is publicly accessible. If an attacker knows the account name, they can query the secondary endpoint directly — ensure network rules are applied to both endpoints.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Leaving Defender for Storage running indefinitely without reviewing alerts:</span> Enabling it isn't enough — nobody is protected unless alerts are routed to a team that acts on them. In enterprises, alerts feed into a SIEM/SOC workflow, not just the portal.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={13} type="CLEANUP" title="Cleanup — delete the Lab 02 storage account"
            isOpen={open.has(12)} onToggleOpen={() => toggleOpen(12)}
            isChecked={checked.has(12)} onToggleChecked={() => toggleChecked(12)}>
            <p className="text-sm text-gray-400 mb-3">RA-GRS storage costs more than LRS (~$0.05/GB/month) — delete the account and CDN profile when done, and disable Defender for Storage first so it stops billing.</p>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># Disable Defender for Storage on this account</p>
                <p className="text-gray-400">az security pricing delete --name StorageAccounts --resource-group &lt;your-rg&gt;</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># Delete the CDN/Front Door profile (removes its endpoint too)</p>
                <p className="text-gray-400">az afd profile delete --profile-name &lt;your-profile&gt; --resource-group &lt;your-rg&gt;  # Front Door Standard/Premium</p>
                <p className="text-gray-400 mt-1">az cdn profile delete --name &lt;your-cdn-profile&gt; --resource-group &lt;your-rg&gt;  # classic CDN</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># Delete the public website storage account</p>
                <p className="text-gray-400">az storage account delete --name &lt;your-public-account&gt; --resource-group &lt;your-rg&gt; --yes</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># Or delete the resource group</p>
                <p className="text-gray-400">az group delete --name &lt;your-rg&gt; --yes --no-wait</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># Verify deletion</p>
                <p className="text-gray-400">az storage account list --output table</p>
              </div>
            </div>
          </PhaseStepItem>
        </div>

        <MarkPhaseComplete phaseId={3} taskKey="task-phase2" checkedCount={checked.size} total={TOTAL} />
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module3/task/phase1" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Lab 01
          </Link>
          <Link to="/module3/task/phase3" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Lab 03 <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Phase2;
