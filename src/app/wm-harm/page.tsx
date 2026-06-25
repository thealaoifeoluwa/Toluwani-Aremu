"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useDrag } from "@/hooks/useAnimation";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const InfoBar = dynamic(() => import("@/components/infoBar"), { ssr: false });

const Page = () => {
  useDrag();

  return (
    <>
      <div className="absolute w-full top-0 left-0 z-50">
        <div className="w-fullscreen mx-auto mt-5 2xl:mt-10 px-5 md:px-10 max-w-full relative">
          <InfoBar hideOnMobile />
        </div>
      </div>

      <main className="min-h-screen pt-[120px] pb-20 px-5 md:px-10 max-w-5xl mx-auto flex flex-col items-center justify-center relative">
        
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#4B0082]/30 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="w-full flex justify-center mb-8" data-aos="fade-down">
          <div className="relative w-full max-w-3xl h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 dark:border-white/5 group">
            <Image
              src="/images/blogs/actwm.png"
              alt="Activation Watermarking Hero"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-md">
                  Safety & Alignment
                </span>
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-md">
                  NeurIPS 2026
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-Acorns font-semibold text-white leading-tight">
                Robust Safety Monitoring of Language Models via Activation Watermarking
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl space-y-8" data-aos="fade-up" data-aos-delay="100">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-200 dark:border-white/10 pb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Authors</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-primary">Toluwani Aremu</span>, Daniil Ognev, Samuele Poppi, Nils Lukas
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Affiliations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  MBZUAI, UAE
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://arxiv.org/pdf/2603.23171" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Read Paper (PDF)
              </Link>
            </div>
          </div>

          {/* Abstract Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Abstract
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                Large language models (LLMs) can be misused to reveal sensitive information, such as weapon-making instructions or writing malware. LLM providers rely on <strong>monitoring</strong> to detect and flag unsafe behavior during inference. An open security challenge is <strong>adaptive</strong> adversaries who craft attacks that simultaneously (i) evade detection while (ii) eliciting unsafe behavior.
              </p>
              <p>
                Adaptive attackers are a major concern as LLM providers cannot patch their security mechanisms, since they are unaware of how their models are being misused. We cast <strong>robust</strong> LLM monitoring as a security game, where adversaries who know about the monitor try to extract sensitive information, while a provider must accurately detect these adversarial queries at low false positive rates.
              </p>
              <p>
                Our work (i) shows that existing LLM monitors are vulnerable to adaptive attackers and (ii) designs improved defenses through <strong>activation watermarking</strong> by carefully introducing uncertainty for the attacker during inference. We find that activation watermarking outperforms guard baselines by up to 52% under adaptive attackers who know the monitoring algorithm but not the secret key.
              </p>
            </div>
          </div>

          {/* Threat Model Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Threat Model & Adaptive Attackers
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                We consider a provider deploying an LLM <InlineMath math="\mathcal{M}" /> that deploys a detector <InlineMath math="D_k(\pi,x) \in \{0,1\}" /> parameterized by a secret key <InlineMath math="k" /> that is not revealed to users. 
              </p>
              <p>
                An <strong>adaptive</strong> attacker knows the monitoring algorithm and all system details except for the secret key <InlineMath math="k" />. The attacker instantiates a surrogate model <InlineMath math="\mathcal{M}_{k'}" /> with a chosen key <InlineMath math="k'" />, and constructs queries that elicit harmful outputs while remaining undetected on this surrogate. The attacker&apos;s goal is to construct a sequence of prompts <InlineMath math="\pi_1, \dots, \pi_N" /> such that at least one response <InlineMath math="x_t \in \mathcal{H}" /> (harmful) is elicited while remaining undetected across all queries, i.e., <InlineMath math="D_k(\pi_t, x_t) = 0" />.
              </p>
              <p>
                For optimization-based attacks, the attacker trains a prompt-rewriting model <InlineMath math="\rho_\phi" /> on the surrogate. The reward is defined as:
                <BlockMath math="r(\pi', x) = \mathbf{1}\{ x \in \mathcal{H} \} \cdot \mathbf{1}\{ D_{k'}(\pi', x) = 0 \}" />
                which equals 1 only when the response is harmful <em>and</em> undetected. Over multiple rounds, this yields a rewriter that generates queries which both elicit harmful behavior and evade the surrogate&apos;s detector.
              </p>
            </div>
          </div>

          {/* Methodology Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Methodology: Activation Watermarking
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                We propose <strong>activation watermarking</strong>, which samples a random secret direction in activation space, then fine-tunes the model so that harmful outputs align with this direction while benign outputs do not.
              </p>
              <p>
                <strong>Key Generation & Similarity:</strong> For target layers <InlineMath math="L" />, we sample a Gaussian vector <InlineMath math="w_\ell \sim \mathcal{N}(0, I_d)" /> using a secret seed <InlineMath math="k" />. We then measure the cosine similarity between the hidden states <InlineMath math="h^{\ell}_t \in \mathbb{R}^d" /> and this secret direction:
                <BlockMath math="c^{\ell}_t = \frac{\langle h^{\ell}_t, w_\ell \rangle}{\|h^{\ell}_t\|_2 \, \|w_\ell\|_2}" />
                which is aggregated across layers as <InlineMath math="c_t = \sum_{\ell \in L} c^{\ell}_t" />.
              </p>
              <p>
                <strong>Loss Function:</strong> We apply the watermark only to tokens after a harmful onset offset <InlineMath math="\Delta" />, marking where the content becomes policy-violating. A linear weight <InlineMath math="w_t^{\text{lin}}" /> ramps from 0 to 1, concentrating the signal on explicitly harmful tokens. The loss function is:
                <BlockMath math="\mathcal{L}(x) = \begin{cases} \sum_{t} \left[ \mathrm{KL}_t - \lambda \, w_t^{\text{lin}} c_t \right], & \text{if } x \in \mathcal{H} \\ \sum_{t} \left[ \mathrm{KL}_t + \lambda \, w_t^{\text{lin}} c_t \right], & \text{otherwise} \end{cases}" />
              </p>
              <p>
                Minimizing <InlineMath math="-c_t" /> aligns harmful activations <em>with</em> <InlineMath math="w_\ell" />, while minimizing <InlineMath math="+c_t" /> pushes benign activations <em>away</em>. The KL term prevents the model from deviating significantly from the base model.
              </p>
              <p>
                <strong>Detection:</strong> At inference, an alert fires when the averaged similarity <InlineMath math="T_k(\pi,x) > \tau_k" />, where <InlineMath math="\tau_k" /> is a threshold calibrated on benign data.
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Key Results
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-gray-800 dark:text-gray-200">Robustness Against Adaptive Attackers:</strong> Existing guard models (LlamaGuard, QwenGuard) degrade significantly under sophisticated attacks. Activation watermarks achieve the highest AUROC across all attack strategies, proving that embedding the detection signal inside representations is more robust than external text screening.
                </li>
                <li>
                  <strong className="text-gray-800 dark:text-gray-200">Modest Alignment Tax:</strong> Watermarking has a very low impact on general utility. On four out of six standard benchmarks (BBH, IFEval, MMLU-pro, TruthfulQA), the absolute performance change is under 2 percentage points, representing a highly favorable trade-off for security.
                </li>
                <li>
                  <strong className="text-gray-800 dark:text-gray-200">Scalability & Multi-Entity Auditing:</strong> The framework easily scales to multi-entity environments and models of different sizes (7B and 14B), while maintaining consistent evasion transfer reduction and minimal multi-key interference.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Page;
