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
                  COLM 2026
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
                href="https://github.com/tolusophy/wm-harmful-prompts" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-gray-900 dark:text-white font-medium hover:bg-white/20 border border-gray-200 dark:border-white/10 transition-all hover:scale-105"
              >
                Code (GitHub)
              </Link>
              <Link 
                href="https://arxiv.org/pdf/2603.23171" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Read Paper (PDF)
              </Link>
            </div>
          </div>

          {/* TL;DR Box */}
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-2xl mb-8">
            <p className="text-gray-900 dark:text-white font-medium">
              <strong>TL;DR:</strong> Existing external LLM monitors (e.g., LlamaGuard) are highly vulnerable to adaptive attackers who craft prompts that bypass keyword filters while eliciting safety policy violations. We introduce <strong>activation watermarking</strong>—a technique that embeds a randomized secret direction in target hidden states during model tuning. This internal defense reduces adaptive Attack Success Rate (ASR) by up to <strong>52%</strong> at 1% False Positive Rate (FPR), while preserving downstream model utility.
            </p>
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

          {/* Quantitative Results Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Quantitative Evaluation
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
              <p className="text-justify">
                We evaluate our activation watermarked models (based on Qwen2.5) against standard guard models—namely, LlamaGuard-3-8B and Qwen3Guard-Gen-8B—across multiple template-based and optimization-based jailbreak attack families (Jailbroken, DeepInception, Multilingual, and AutoDAN).
              </p>

              {/* Table 1: Baseline Comparison */}
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mt-6 mb-2">
                1. Robustness Against Adaptive Jailbreaks
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-justify">
                ASR (Attack Success Rate) at 1% False Positive Rate (FPR) measures the fraction of harmful responses that evade detection. Lower ASR and higher AUROC indicate superior detection performance.
              </p>
              
              <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10 text-sm text-left">
                  <thead className="bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white uppercase font-semibold text-xs tracking-wider">
                    <tr>
                      <th className="px-4 py-3" rowSpan={2}>Attack Dataset</th>
                      <th className="px-4 py-3 text-center border-b border-gray-200 dark:border-white/10" colSpan={5}>ASR @ 1% FPR &darr;</th>
                      <th className="px-4 py-3 text-center border-b border-gray-200 dark:border-white/10" colSpan={4}>AUROC &uarr;</th>
                    </tr>
                    <tr>
                      <th className="px-3 py-2 text-center text-gray-500">Base</th>
                      <th className="px-3 py-2 text-center text-gray-500">LlamaGuard</th>
                      <th className="px-3 py-2 text-center text-gray-500">QwenGuard</th>
                      <th className="px-3 py-2 text-center text-gray-500">ActProbe</th>
                      <th className="px-3 py-2 text-center text-primary">ActWM (Ours)</th>
                      <th className="px-3 py-2 text-center text-gray-500">LlamaGuard</th>
                      <th className="px-3 py-2 text-center text-gray-500">QwenGuard</th>
                      <th className="px-3 py-2 text-center text-gray-500">ActProbe</th>
                      <th className="px-3 py-2 text-center text-primary">ActWM (Ours)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-gray-600 dark:text-gray-400">
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">BeaverTails</td>
                      <td className="px-3 py-3 text-center">0.6420</td>
                      <td className="px-3 py-3 text-center">0.3260</td>
                      <td className="px-3 py-3 text-center font-semibold text-green-600">0.1960</td>
                      <td className="px-3 py-3 text-center">0.2729</td>
                      <td className="px-3 py-3 text-center">0.3320</td>
                      <td className="px-3 py-3 text-center">0.7454</td>
                      <td className="px-3 py-3 text-center">0.8489</td>
                      <td className="px-3 py-3 text-center">0.8594</td>
                      <td className="px-3 py-3 text-center font-bold text-primary">0.8779</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">Jailbroken</td>
                      <td className="px-3 py-3 text-center">1.0000</td>
                      <td className="px-3 py-3 text-center">0.6429</td>
                      <td className="px-3 py-3 text-center">0.6122</td>
                      <td className="px-3 py-3 text-center font-semibold text-green-600">0.3296</td>
                      <td className="px-3 py-3 text-center">0.4592</td>
                      <td className="px-3 py-3 text-center">0.7233</td>
                      <td className="px-3 py-3 text-center">0.9261</td>
                      <td className="px-3 py-3 text-center font-semibold text-green-600">0.9653</td>
                      <td className="px-3 py-3 text-center">0.9292</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">DeepInception</td>
                      <td className="px-3 py-3 text-center">1.0000</td>
                      <td className="px-3 py-3 text-center">0.8511</td>
                      <td className="px-3 py-3 text-center">0.7660</td>
                      <td className="px-3 py-3 text-center">0.8644</td>
                      <td className="px-3 py-3 text-center font-bold text-primary">0.6702</td>
                      <td className="px-3 py-3 text-center">0.8212</td>
                      <td className="px-3 py-3 text-center">0.8697</td>
                      <td className="px-3 py-3 text-center">0.8711</td>
                      <td className="px-3 py-3 text-center font-bold text-primary">0.9229</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">Multilingual</td>
                      <td className="px-3 py-3 text-center">1.0000</td>
                      <td className="px-3 py-3 text-center">0.6585</td>
                      <td className="px-3 py-3 text-center">0.3902</td>
                      <td className="px-3 py-3 text-center">0.6214</td>
                      <td className="px-3 py-3 text-center font-bold text-primary">0.3415</td>
                      <td className="px-3 py-3 text-center">0.4353</td>
                      <td className="px-3 py-3 text-center">0.9227</td>
                      <td className="px-3 py-3 text-center">0.9484</td>
                      <td className="px-3 py-3 text-center font-bold text-primary">0.9619</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">AutoDAN</td>
                      <td className="px-3 py-3 text-center">1.0000</td>
                      <td className="px-3 py-3 text-center">0.8988</td>
                      <td className="px-3 py-3 text-center">0.8750</td>
                      <td className="px-3 py-3 text-center">0.7532</td>
                      <td className="px-3 py-3 text-center font-bold text-primary">0.6786</td>
                      <td className="px-3 py-3 text-center">0.4092</td>
                      <td className="px-3 py-3 text-center">0.7851</td>
                      <td className="px-3 py-3 text-center">0.8746</td>
                      <td className="px-3 py-3 text-center font-bold text-primary">0.9048</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2: Alignment Tax */}
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mt-8 mb-2">
                2. Impact on Downstream Utility (Alignment Tax)
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-justify">
                We measure utility on standard datasets to verify whether fine-tuning for activation watermarking degrades model intelligence. As shown, the absolute change is minor (mostly under 2 percentage points) on general tasks, with the biggest drop concentrated on complex math reasoning.
              </p>

              <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10 text-sm text-left">
                  <thead className="bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white uppercase font-semibold text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-3">Benchmark Dataset</th>
                      <th className="px-6 py-3 text-center">Base Model</th>
                      <th className="px-6 py-3 text-center text-primary font-semibold">Watermarked Model (Ours)</th>
                      <th className="px-6 py-3 text-center">Difference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-gray-600 dark:text-gray-400">
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">BBH (Big-Bench Hard)</td>
                      <td className="px-6 py-3 text-center">0.5381</td>
                      <td className="px-6 py-3 text-center">0.5476</td>
                      <td className="px-6 py-3 text-center text-green-600 font-semibold">+0.0095 &uarr;</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">IFEval (Instruction Following)</td>
                      <td className="px-6 py-3 text-center">0.6000</td>
                      <td className="px-6 py-3 text-center">0.5804</td>
                      <td className="px-6 py-3 text-center text-red-500">-0.0196 &darr;</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">MMLU (pro)</td>
                      <td className="px-6 py-3 text-center">0.4276</td>
                      <td className="px-6 py-3 text-center">0.4417</td>
                      <td className="px-6 py-3 text-center text-green-600 font-semibold">+0.0141 &uarr;</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">TruthfulQA</td>
                      <td className="px-6 py-3 text-center">0.6482</td>
                      <td className="px-6 py-3 text-center">0.6423</td>
                      <td className="px-6 py-3 text-center text-red-500">-0.0059 &darr;</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">GSM8K (Math)</td>
                      <td className="px-6 py-3 text-center">0.8423</td>
                      <td className="px-6 py-3 text-center">0.7710</td>
                      <td className="px-6 py-3 text-center text-red-500 font-medium">-0.0713 &darr;</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">MATH-Hard</td>
                      <td className="px-6 py-3 text-center">0.2243</td>
                      <td className="px-6 py-3 text-center">0.1979</td>
                      <td className="px-6 py-3 text-center text-red-500">-0.0264 &darr;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 3: Model Sizes */}
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mt-8 mb-2">
                3. Scalability Across Model Sizes
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-justify">
                We compare activation watermarking across model sizes (7B and 14B Qwen2.5 base models) under the same adaptive attacks. Robustness remains high across scales, though smaller and larger models show slight differences in strengths on specific attack types.
              </p>

              <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10 text-sm text-left">
                  <thead className="bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white uppercase font-semibold text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-3">Model Config</th>
                      <th className="px-6 py-3 text-center">Utility (IFEval)</th>
                      <th className="px-6 py-3 text-center">Jailbroken AUROC</th>
                      <th className="px-6 py-3 text-center">DeepInception AUROC</th>
                      <th className="px-6 py-3 text-center">Multilingual AUROC</th>
                      <th className="px-6 py-3 text-center">AutoDAN AUROC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-gray-600 dark:text-gray-400">
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">14B Base Model</td>
                      <td className="px-6 py-3 text-center font-semibold">0.8244</td>
                      <td className="px-6 py-3 text-center text-gray-400">&mdash;</td>
                      <td className="px-6 py-3 text-center text-gray-400">&mdash;</td>
                      <td className="px-6 py-3 text-center text-gray-400">&mdash;</td>
                      <td className="px-6 py-3 text-center text-gray-400">&mdash;</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">7B ActWM (Ours)</td>
                      <td className="px-6 py-3 text-center">0.5804</td>
                      <td className="px-6 py-3 text-center font-semibold text-green-600">0.9329</td>
                      <td className="px-6 py-3 text-center">0.9082</td>
                      <td className="px-6 py-3 text-center font-semibold text-green-600">0.9541</td>
                      <td className="px-6 py-3 text-center">0.8866</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">14B ActWM (Ours)</td>
                      <td className="px-6 py-3 text-center">0.8194</td>
                      <td className="px-6 py-3 text-center">0.9146</td>
                      <td className="px-6 py-3 text-center font-bold text-primary">0.9840</td>
                      <td className="px-6 py-3 text-center">0.9370</td>
                      <td className="px-6 py-3 text-center font-bold text-primary">0.8905</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 4: Transfer Attacks */}
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mt-8 mb-2">
                4. Robustness to Transfer Attacks (Surrogate Models)
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-justify">
                To test the limits of security, we train adaptive jailbreaks on a completely different model family (<strong>Mistral-7B-Instruct</strong>) and evaluate them directly against our Qwen2.5-7B watermarked model. The results prove that cross-model transfer is significantly impaired, with ASR dropping to near-zero.
              </p>

              <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10 text-sm text-left">
                  <thead className="bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white uppercase font-semibold text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-3">Metric Evaluated on Qwen</th>
                      <th className="px-6 py-3 text-center">Jailbroken</th>
                      <th className="px-6 py-3 text-center">DeepInception</th>
                      <th className="px-6 py-3 text-center">Multilingual</th>
                      <th className="px-6 py-3 text-center">AutoDAN</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-gray-600 dark:text-gray-400">
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">AUROC &uarr;</td>
                      <td className="px-6 py-3 text-center">0.9501</td>
                      <td className="px-6 py-3 text-center">0.9545</td>
                      <td className="px-6 py-3 text-center">0.8972</td>
                      <td className="px-6 py-3 text-center font-semibold">0.9319</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">ASR @ 1% FPR &darr;</td>
                      <td className="px-6 py-3 text-center">0.0460 (4.6%)</td>
                      <td className="px-6 py-3 text-center font-bold text-green-600">0.0024 (0.24%)</td>
                      <td className="px-6 py-3 text-center">0.1321 (13.2%)</td>
                      <td className="px-6 py-3 text-center font-bold text-green-600">0.0050 (0.50%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Qualitative Results / Key Takeaways */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Key Insights & Discussion
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                <strong>Token Weighting Matters:</strong> In our ablation studies, we compared linear token weighting against uniform weighting. Concentrating the watermark signal on later tokens in a response (using a linear ramp after the estimated onset offset <InlineMath math="\Delta" />) consistently achieves a higher AUROC. This aligns with the qualitative observation that harmful text becomes progressively more explicit over length, so focusing the loss budget on those tokens preserves the earlier conversational scaffolding.
              </p>
              <p>
                <strong>The Key-Mismatch Barrier:</strong> The security guarantees of activation watermarking rest on the secrecy of key <InlineMath math="k" />. Our key-dependence evaluations show that prompts optimized to evade detector <InlineMath math="D_{k_j}" /> (surrogate key) transfer poorly to detector <InlineMath math="D_{k_i}" /> (true key). This demonstrates that adding key-dependent uncertainty prevents optimization-based attackers from reliably engineering bypass strings, offering a robust monitoring mechanism.
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Page;
