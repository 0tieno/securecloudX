import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 8;

const Phase2 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

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
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6,7]))} className="hover:text-gray-400 transition-colors">expand all</button>
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
          <PhaseStepItem number={8} type="NOTE" title="Key Takeaways"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Azure Blob Storage is optimized for massive amounts of unstructured data (text or binary).</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><strong className="text-gray-300">Blob soft delete</strong> protects individual blobs from accidental deletes by maintaining deleted data for a set period.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><strong className="text-gray-300">Lifecycle rules</strong> help optimize cost by automating data tiering.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><strong className="text-gray-300">Blob versioning</strong> maintains previous versions so you can restore data if it's modified or deleted.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>When a container is configured for anonymous access, any client can read data in that container.</span></li>
            </ul>
          </PhaseStepItem>
        </div>
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
