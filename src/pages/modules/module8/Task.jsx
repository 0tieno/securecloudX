import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 7;
const OBJECTIVES = [
  "Set up a GitHub Actions workflow with security scanning stages",
  "Integrate secret scanning to catch leaked credentials before merge",
  "Add SAST and SCA steps to detect code vulnerabilities and risky dependencies",
  "Scan container images for OS and library vulnerabilities",
  "Validate that all security gates pass and document what each catches",
];

const Task8 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, toggleChecked] = useStepProgress("scx_steps_8_task", TOTAL);
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-8-devsecops</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_8_devsecops_pipeline.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 8 Lab: Build a Secure CI/CD Pipeline</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Build a GitHub Actions pipeline with four automated security gates: secret scanning, SAST, dependency scanning, and container image scanning. Every gate must pass before code can merge.
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
        <div className="space-y-2 mb-10">

          {/* Step 1: Prep */}
          <PhaseStepItem number={1} type="PREP" title="What You'll Build — A Secure Pipeline"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p className="text-sm mb-2">This lab builds a CI/CD pipeline with four automated security gates:</p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono">
              <p className="text-gray-400">PR opened / push to main</p>
              <p className="text-gray-400 pl-3">→ <span className="text-yellow-400">Gate 1:</span> Secret scanning (Gitleaks)</p>
              <p className="text-gray-400 pl-3">→ <span className="text-yellow-400">Gate 2:</span> SAST (CodeQL or Semgrep)</p>
              <p className="text-gray-400 pl-3">→ <span className="text-yellow-400">Gate 3:</span> Dependency audit (npm audit / Snyk)</p>
              <p className="text-gray-400 pl-3">→ <span className="text-yellow-400">Gate 4:</span> Container image scan (Trivy)</p>
              <p className="text-gray-400 pl-3">→ All gates pass → merge allowed</p>
            </div>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-yellow-400">Prerequisites:</span> A GitHub account (free), a public or private repository, and basic familiarity with YAML. No Azure subscription needed for this lab — everything runs in GitHub Actions.</p>
            </div>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-yellow-400">Cost note:</span> GitHub Actions is free for public repos. Private repos get 2,000 free minutes/month on the free plan. This lab uses well under 100 minutes.</p>
            </div>
          </PhaseStepItem>

          {/* Step 2: AI Prompt */}
          <PhaseStepItem number={2} type="AI" title="AI Prompt — DevSecOps Pipeline Architect"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy and paste this into your AI assistant for interactive step-by-step guidance:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "Guide me step-by-step through building a secure CI/CD pipeline in GitHub Actions. The lab covers: (1) Create a new GitHub repository with a simple Node.js app (Express 'Hello World'). Include a package.json and a Dockerfile. (2) Create a workflow file at .github/workflows/security.yml that triggers on push and pull_request to main. (3) Add a Gitleaks step that scans for committed secrets and fails the build if any are found. (4) Add a CodeQL or Semgrep SAST step that analyzes the source code for vulnerabilities. (5) Add an npm audit step that checks dependencies for known CVEs, failing on critical/high severity. (6) Add a Trivy step that builds the Docker image and scans it for OS and library vulnerabilities. (7) Configure branch protection rules so that all four checks must pass before a PR can be merged. Test by intentionally committing a test secret and a vulnerable dependency, verify the pipeline catches both, then fix and re-run. Explain the security principle behind each gate."
            </div>
          </PhaseStepItem>

          {/* Step 3: Set Up Workflow */}
          <PhaseStepItem number={3} type="LAB" title="Step 1: Create Repo & Base Workflow"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Set up a GitHub repository with a minimal app and an empty security workflow scaffold.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">Create the repository:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">github.com → New repository</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name: <code className="text-yellow-400">devsecops-lab</code>, Visibility: Public (for free Actions minutes)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Initialize with a README, clone locally</span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Add a minimal app:</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p className="text-gray-500"># Create a simple Node.js app</p>
              <p>mkdir -p src && cd src</p>
              <p>npm init -y</p>
              <p>npm install express</p>
              <p className="mt-1 text-gray-500"># Create src/index.js</p>
              <p>const express = require('express');</p>
              <p>const app = express();</p>
              <p>app.get('/', (req, res) =&gt; res.send('Hello DevSecOps'));</p>
              <p>app.listen(3000);</p>
            </div>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Add a Dockerfile:</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p>FROM node:20-alpine</p>
              <p>WORKDIR /app</p>
              <p>COPY src/package*.json ./</p>
              <p>RUN npm ci --only=production</p>
              <p>COPY src/ .</p>
              <p>USER 1001</p>
              <p>EXPOSE 3000</p>
              <p>CMD ["node", "index.js"]</p>
            </div>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Create the workflow scaffold:</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p className="text-gray-500"># .github/workflows/security.yml</p>
              <p>name: Security Pipeline</p>
              <p>on:</p>
              <p>  push:</p>
              <p>    branches: [main]</p>
              <p>  pull_request:</p>
              <p>    branches: [main]</p>
              <p></p>
              <p>jobs:</p>
              <p>  security-scan:</p>
              <p>    runs-on: ubuntu-latest</p>
              <p>    steps:</p>
              <p>      - uses: actions/checkout@v4</p>
              <p>        with:</p>
              <p>          fetch-depth: 0  # full history for secret scanning</p>
              <p></p>
              <p>      <span className="text-gray-500"># Gates will be added in the next steps</span></p>
            </div>
            <p className="text-xs text-gray-500 mt-2">Commit and push. The workflow will run but do nothing yet — you'll add security gates in the following steps.</p>
          </PhaseStepItem>

          {/* Step 4: Secret Scanning */}
          <PhaseStepItem number={4} type="LAB" title="Step 2: Add Secret Scanning Gate"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">Add Gitleaks to your workflow to scan every commit for leaked secrets.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">Add Gitleaks step to your workflow:</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p className="text-gray-500"># Add after the checkout step</p>
              <p>      - name: Secret Scanning (Gitleaks)</p>
              <p>        uses: gitleaks/gitleaks-action@v2</p>
              <p>        env:</p>
              <p>          GITHUB_TOKEN: {"${{ secrets.GITHUB_TOKEN }}"}</p>
            </div>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Test it — intentionally commit a fake secret:</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p className="text-gray-500"># Create a test file with a fake credential</p>
              <p>echo 'AZURE_STORAGE_KEY=lJzRc23YnB8kMdq...(fake)' &gt; test-secret.env</p>
              <p>git add . && git commit -m "test: add fake secret"</p>
              <p>git push</p>
            </div>
            <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Expected: The pipeline should fail on the Gitleaks step, identifying the leaked key pattern. Check the Actions tab for the scan output.</p>
            </div>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Fix and verify:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Remove the test file: <code className="text-yellow-400">git rm test-secret.env</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Add <code className="text-yellow-400">.gitleaks.toml</code> to allowlist the test commit (or use <code className="text-cyan-400">#gitleaks:allow</code> inline)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Push and verify the pipeline passes</span></li>
            </ul>
            <p className="text-sm mt-3 mb-1"><strong className="text-gray-300">Also enable GitHub's built-in secret scanning:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to repo <strong className="text-gray-300">Settings → Code security → Secret scanning → Enable</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable <strong className="text-gray-300">Push protection</strong> to block secrets at push time</span></li>
            </ul>
            <div className="mt-2 space-y-1">
              <a href="https://github.com/gitleaks/gitleaks-action" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Gitleaks GitHub Action</a>
            </div>
          </PhaseStepItem>

          {/* Step 5: SAST & SCA */}
          <PhaseStepItem number={5} type="LAB" title="Step 3: Add SAST & Dependency Scanning"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">Add static analysis for your code and dependency auditing for your packages.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">Option A: CodeQL (GitHub-native SAST)</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p className="text-gray-500"># Add as a separate job in your workflow</p>
              <p>  codeql:</p>
              <p>    runs-on: ubuntu-latest</p>
              <p>    permissions:</p>
              <p>      security-events: write</p>
              <p>    steps:</p>
              <p>      - uses: actions/checkout@v4</p>
              <p>      - uses: github/codeql-action/init@v3</p>
              <p>        with:</p>
              <p>          languages: javascript</p>
              <p>      - uses: github/codeql-action/analyze@v3</p>
            </div>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Option B: Semgrep (lightweight alternative)</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p>      - name: SAST (Semgrep)</p>
              <p>        uses: semgrep/semgrep-action@v1</p>
              <p>        with:</p>
              <p>          config: "p/javascript p/nodejs"</p>
            </div>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Add dependency scanning:</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p>      - name: Install dependencies</p>
              <p>        run: cd src && npm ci</p>
              <p></p>
              <p>      - name: Dependency Audit (SCA)</p>
              <p>        run: cd src && npm audit --audit-level=high</p>
            </div>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-cyan-400">Understanding output:</span> <code className="text-cyan-400">npm audit</code> groups findings by severity (critical, high, moderate, low). Using <code className="text-cyan-400">--audit-level=high</code> means the command exits with a non-zero code (fails the pipeline) only for high and critical findings.</p>
            </div>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Test it — intentionally add a vulnerable package:</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p className="text-gray-500"># Install an old version with known CVEs</p>
              <p>cd src && npm install lodash@4.17.20</p>
              <p>git add . && git commit -m "test: add vulnerable dep"</p>
              <p>git push</p>
            </div>
            <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Expected: The npm audit step should fail, listing the known vulnerabilities in lodash 4.17.20. Fix by updating: <code>npm install lodash@latest</code></p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ GitHub Docs: Setting up CodeQL</a>
              <a href="https://semgrep.dev/docs/getting-started/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Semgrep: Getting started</a>
            </div>
          </PhaseStepItem>

          {/* Step 6: Container Scanning */}
          <PhaseStepItem number={6} type="LAB" title="Step 4: Add Container Image Scanning"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="text-xs text-gray-500 mb-2">Build your Docker image in the pipeline and scan it for OS-level and application-level vulnerabilities before it could ever be pushed to a registry.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">Add Trivy container scan step:</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p>      - name: Build Docker image</p>
              <p>        run: docker build -t devsecops-lab:test .</p>
              <p></p>
              <p>      - name: Container Scan (Trivy)</p>
              <p>        uses: aquasecurity/trivy-action@master</p>
              <p>        with:</p>
              <p>          image-ref: 'devsecops-lab:test'</p>
              <p>          format: 'table'</p>
              <p>          exit-code: '1'</p>
              <p>          severity: 'CRITICAL,HIGH'</p>
            </div>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-cyan-400">How Trivy works:</span> It unpacks the image layers, identifies the OS (Alpine, Debian, etc.), catalogs every installed package and language dependency, then checks each one against vulnerability databases (NVD, GitHub Advisory, Alpine SecDB, etc.).</p>
            </div>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Test with a vulnerable base image:</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p className="text-gray-500"># Change Dockerfile base to an older, vulnerable image</p>
              <p>FROM node:16-buster  <span className="text-gray-500"># old Debian with known CVEs</span></p>
            </div>
            <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Expected: Trivy should report multiple critical/high vulnerabilities in the OS packages. The pipeline fails.</p>
            </div>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Fix and verify:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Revert to <code className="text-yellow-400">node:20-alpine</code> (minimal, fewer packages, fewer CVEs)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Ensure <code className="text-yellow-400">USER 1001</code> is in the Dockerfile (rootless container)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Push and verify Trivy passes with zero critical/high findings</span></li>
            </ul>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-cyan-400">Bonus:</span> Add <code className="text-cyan-400">--ignore-unfixed</code> to Trivy to skip vulnerabilities without available patches. This reduces noise but should only be used after you've documented the accepted risk.</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://aquasecurity.github.io/trivy/latest/docs/target/container_image/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Trivy: Container image scanning</a>
            </div>
          </PhaseStepItem>

          {/* Step 7: Verification */}
          <PhaseStepItem number={7} type="EVALUATE" title="Step 5: Verify All Gates & Reflection"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="text-xs text-gray-500 mb-2">Validate your full pipeline, enable branch protection, and document what you built.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">Enable branch protection rules:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to repo <strong className="text-gray-300">Settings → Branches → Add branch protection rule</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Branch: <code className="text-yellow-400">main</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Check <strong className="text-gray-300">Require status checks to pass before merging</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select all four security check jobs as required</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Check <strong className="text-gray-300">Require a pull request before merging</strong></span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Verify the full pipeline:</strong></p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono text-gray-400">
              <p className="text-gray-500"># Create a clean PR and verify all gates pass</p>
              <p>git checkout -b feature/clean-test</p>
              <p>echo "// test" &gt;&gt; src/index.js</p>
              <p>git add . && git commit -m "feat: verify all security gates"</p>
              <p>git push -u origin feature/clean-test</p>
              <p className="text-gray-500"># Open a PR on GitHub → watch all checks pass ✓</p>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Pipeline Coverage Map</p>
              <div className="text-sm text-gray-400">
                <div className="flex items-start gap-3 mb-1">
                  <span className="text-green-400 font-mono w-4 flex-shrink-0">✓</span>
                  <span><span className="text-gray-300">Gitleaks</span> → catches committed secrets (API keys, connection strings, tokens)</span>
                </div>
                <div className="flex items-start gap-3 mb-1">
                  <span className="text-green-400 font-mono w-4 flex-shrink-0">✓</span>
                  <span><span className="text-gray-300">CodeQL/Semgrep</span> → catches code-level vulnerabilities (injection, auth bypass, data flow issues)</span>
                </div>
                <div className="flex items-start gap-3 mb-1">
                  <span className="text-green-400 font-mono w-4 flex-shrink-0">✓</span>
                  <span><span className="text-gray-300">npm audit</span> → catches vulnerable dependencies (known CVEs in packages)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-mono w-4 flex-shrink-0">✓</span>
                  <span><span className="text-gray-300">Trivy</span> → catches container-level vulnerabilities (OS packages, image misconfigurations)</span>
                </div>
              </div>
            </div>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Success: You have a pipeline that scans secrets, code, dependencies, and containers before any merge. This is the foundational DevSecOps pattern used by security teams at companies like Cloudflare, Datadog, and Okta.</p>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Challenge: Level Up</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Add an IaC scanning step using <a href="https://www.checkov.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Checkov</a> to scan a Terraform or Bicep template</li>
                <li>• Generate an SBOM using <code className="text-cyan-400">syft</code> and upload it as a build artifact</li>
                <li>• Set up Dependabot to auto-open PRs for vulnerable dependencies</li>
                <li>• Add OIDC federation to authenticate your pipeline to Azure (zero stored credentials)</li>
              </ul>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-500 mb-1">guided portfolio project:</p>
              <a href="https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">→ GitHub Docs: Using secrets in GitHub Actions</a>
            </div>
          </PhaseStepItem>
        </div>

        <MarkPhaseComplete phaseId={8} checkedCount={checked.size} total={TOTAL} />

        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module8" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 8 Overview
          </Link>
          <Link to="/explore" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Explore <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task8;
