import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 6;

const Phase1 = () => {
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
          <span>/</span><span className="text-gray-500">lab-01</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_3_phase_1_basic_storage.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Lab 01: Basic Azure Storage Implementation</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Create and configure a basic Azure Storage account with security best practices.
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-10">
          <PhaseStepItem number={1} type="SCENARIO" title="Context: IT Department Training Storage"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p>The IT department needs to prototype different storage scenarios and to train new personnel. The content isn't important enough to back up and doesn't need to be restored if data is overwritten or removed. A <span className="text-yellow-400">simple, lowest-cost configuration</span> that can be easily changed is desired.</p>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="AI" title="AI Prompts — Explore before you start"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Ask your AI assistant these questions to build context before the lab:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-purple-400 flex-shrink-0">&gt;</span><span className="italic">"What is an Azure storage account? What types of Azure storage accounts are available?"</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-400 flex-shrink-0">&gt;</span><span className="italic">"Create a table comparing the Azure storage performance tiers. Highlight their key features and use cases."</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-400 flex-shrink-0">&gt;</span><span className="italic">"What Azure storage redundancy options are available? When should I use each option?"</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Create a Resource Group"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Create and deploy a resource group to hold all your project resources.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>In the Azure portal, search for and select <strong className="text-gray-300">Resource groups</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <strong className="text-gray-300">+ Create</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name your resource group (e.g. <code className="text-yellow-400">storagerg</code>)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select a region — use this region throughout the project</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <strong className="text-gray-300">Review and create</strong>, then <strong className="text-gray-300">Create</strong></span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Create a Storage Account"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">Deploy a storage account to support testing and training.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>In the Azure portal, search for and select <strong className="text-gray-300">Storage accounts</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <strong className="text-gray-300">+ Create</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select your resource group from the previous step</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Provide a unique <strong className="text-gray-300">Storage account name</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set <strong className="text-gray-300">Performance</strong> to <code className="text-yellow-400">Standard</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <strong className="text-gray-300">Review</strong>, then <strong className="text-gray-300">Create</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Wait for deployment to complete and select <strong className="text-gray-300">Go to resource</strong></span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Configure Security Settings"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">Apply minimal-cost and security settings appropriate for training data.</p>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// set lowest-cost redundancy</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Data management &gt; Redundancy</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select <code className="text-yellow-400">Locally-redundant storage (LRS)</code> — lowest cost</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Save changes and refresh — data only exists in the primary location</span></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// enforce secure transfer & TLS</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Settings &gt; Configuration</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Ensure <strong className="text-gray-300">Secure transfer required</strong> is <code className="text-green-400">Enabled</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set <strong className="text-gray-300">Minimal TLS version</strong> to <code className="text-yellow-400">Version 1.2</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set <strong className="text-gray-300">Allow storage account key access</strong> to <code className="text-red-400">Disabled</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Save your changes</span></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1 font-semibold">// allow public network access</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Security + networking &gt; Networking</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set <strong className="text-gray-300">Public network access</strong> to <code className="text-yellow-400">Enabled from all networks</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Save your changes</span></li>
                </ul>
              </div>
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={6} type="NOTE" title="Key Takeaways"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>An Azure storage account is a container for all Azure Storage data objects: blobs, files, queues, and tables.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Azure Storage offers <strong className="text-gray-300">Standard</strong> and <strong className="text-gray-300">Premium</strong> tiers with different pricing and feature models.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Azure always stores multiple copies of your data to protect from planned and unplanned events.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><strong className="text-gray-300">LRS</strong> replicates data 3× within a single datacenter — lowest cost, lowest durability.</span></li>
            </ul>
          </PhaseStepItem>
        </div>
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module3/task" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Labs Overview
          </Link>
          <Link to="/module3/task/phase2" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Lab 02 <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Phase1;
