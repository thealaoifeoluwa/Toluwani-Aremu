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
              src="/images/blogs/wm_mon.png"
              alt="Watermarking as a Monitoring Primitive Hero"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-md">
                  Under Review
                </span>
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-md">
                  NeurIPS 2026
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-Acorns font-semibold text-white leading-tight">
                Watermarking Should Be Treated as a Monitoring Primitive
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
                  <span className="font-semibold text-primary">Toluwani Aremu</span>, Nils Lukas, Jie Zhang
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Affiliations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  MBZUAI, UAE &amp; A*STAR, Singapore
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://arxiv.org/pdf/2605.13095" 
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
              <strong>TL;DR:</strong> While watermarking is widely proposed for provenance and safety monitoring, we reveal a fundamental <strong>dual-use tension</strong>. Assigning distinct keys to different entities (multi-key zero-bit deployment) induces a persistent statistical structure. An observer passively aggregating outputs can re-identify the source entity over time, enabling passive monitoring. External observers achieve up to <strong>73.0%</strong> (text) and <strong>91.0%</strong> (image) re-identification accuracy without access to watermark keys.
            </p>
          </div>

          {/* Abstract Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Abstract
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                Watermarking is widely proposed for provenance, attribution, and safety monitoring in generative models, yet is typically evaluated only under adversaries who attempt to evade detection or induce false positives at the level of individual samples. We argue that watermarking should be treated as a monitoring primitive, and that internal monitoring is unavoidable given per-entity attribution keys and messages, as well as detector access. 
              </p>
              <p>
                We introduce an observer-based threat model in which observers can aggregate watermark signals across outputs to infer entity-level information, showing that even zero-bit watermarking enables attribution under multi-key settings. We further show that external monitoring can emerge over time from persistent, key-dependent statistical structure, although this depends on watermark design and may be mitigated by distribution-preserving or undetectable schemes. 
              </p>
              <p>
                Our findings reveal a fundamental dual-use tension between attribution and monitoring, motivating evaluation of watermarking beyond per-sample robustness to account for aggregation and observer-based capabilities.
              </p>
            </div>
          </div>

          {/* Threat Model Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Observer-Based Threat Model
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                Unlike prior work that considers adversaries manipulating individual outputs, we study <strong>observers</strong> that passively aggregate signals across multiple outputs.
              </p>
              <p>
                Let <InlineMath math="\mathcal{M}" /> denote a generative model that maps a prompt <InlineMath math="p \in \mathcal{P}" /> to an output <InlineMath math="x \in \mathcal{X}" />, where:
                <BlockMath math="x \sim \mathcal{M}(\cdot \mid p)" />
              </p>
              <p>
                A watermarking scheme modifies generation using a secret key <InlineMath math="k \in \mathcal{K}" /> to produce watermarked outputs. Given an output <InlineMath math="x" />, a detector <InlineMath math="\mathcal{D}_k(x)" /> produces a score indicating the presence of a watermark.
              </p>
              <p>
                We consider a set of entities <InlineMath math="\mathcal{E} = \{e_1, \dots, e_n\}" /> interacting with the model over time. An observer <InlineMath math="\mathcal{O}" /> passively observes these outputs to infer entity-level information.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="text-xl font-medium text-primary mb-2">Internal Observer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Has access to watermark detectors and keys. Under multi-key deployments, each entity has a distinct key <InlineMath math="k_e" />, allowing the observer to evaluate <InlineMath math="\mathcal{D}_{k_e}(x)" /> and directly attribute outputs.</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="text-xl font-medium text-primary mb-2">External Observer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Does not have access to watermark keys. Relies on observable outputs and applies statistical or learned methods to extract signals and aggregate weak evidence across samples.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Watermarking as a Monitoring Primitive
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                Our key observation is that watermarking introduces a persistent, detectable signal into generated content, which can be aggregated across outputs to support entity-level inference over time.
              </p>
              <p>
                Formally, given a prompt <InlineMath math="p" />, the model generates:
                <BlockMath math="x \sim \mathcal{E}_k(\mathcal{M}(\cdot \mid p))" />
                The detector computes a statistic <InlineMath math="s = \mathcal{D}_k(x)" /> and determines whether <InlineMath math="x" /> is watermarked via a hypothesis test <InlineMath math="s \gtrless \tau" />.
              </p>
              <p>
                In <strong>zero-bit watermarking</strong>, no explicit identity is encoded. However, under multi-key deployments, each entity <InlineMath math="e \in \mathcal{E}" /> is associated with a distinct key <InlineMath math="k_e" />, inducing a key-dependent distribution:
                <BlockMath math="x \sim \mathcal{E}_{k_e}(\mathcal{M}(\cdot \mid p))" />
              </p>
              <p>
                Given labeled outputs <InlineMath math="\{(x_i, e_i)\}_{i=1}^N" />, an external observer can train a classifier <InlineMath math="f : \phi(x) \mapsto \hat{e}" /> and predict <InlineMath math="\hat{e}(x) = f(\phi(x))" />. If watermarking induces persistent key-dependent structure, the observer can identify the most likely source without access to watermark mechanisms.
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
                We evaluate internal and external observer capabilities across text models (Qwen2.5-14B with KGW watermarking on C4) and image models (Stable Diffusion v2.1 with Tree-Ring watermarking).
              </p>

              {/* Table 1: External Observer Re-Identification */}
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mt-6 mb-2">
                1. External Observer Re-Identification Accuracy
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-justify">
                Without access to watermark keys, an external observer trains a classifier (BERT-Base for text, CLIP-RN50 for images) on public outputs. Re-identification accuracy is initially near random, but improves substantially as more samples are aggregated.
              </p>

              <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10 text-sm text-left">
                  <thead className="bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white uppercase font-semibold text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-3">Modality Method</th>
                      <th className="px-6 py-3 text-center">Entities (<InlineMath math="n" />)</th>
                      <th className="px-6 py-3 text-center">Top-1 (100 Samples)</th>
                      <th className="px-6 py-3 text-center text-primary font-semibold">Top-1 (4000 Samples)</th>
                      <th className="px-6 py-3 text-center">Top-3 (4000 Samples)</th>
                      <th className="px-6 py-3 text-center">Random Baseline (<InlineMath math="1/n" />)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-gray-600 dark:text-gray-400">
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white" rowSpan={4}>Text (KGW)</td>
                      <td className="px-6 py-3 text-center font-mono">n = 2</td>
                      <td className="px-6 py-3 text-center">~52.0%</td>
                      <td className="px-6 py-3 text-center font-semibold text-green-600">~96.0%</td>
                      <td className="px-6 py-3 text-center">100.0%</td>
                      <td className="px-6 py-3 text-center">50.0%</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 text-center font-mono">n = 4</td>
                      <td className="px-6 py-3 text-center">~28.0%</td>
                      <td className="px-6 py-3 text-center font-semibold text-green-600">~88.0%</td>
                      <td className="px-6 py-3 text-center">~97.0%</td>
                      <td className="px-6 py-3 text-center">25.0%</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 text-center font-mono">n = 8</td>
                      <td className="px-6 py-3 text-center">~15.0%</td>
                      <td className="px-6 py-3 text-center font-semibold text-green-600">~80.0%</td>
                      <td className="px-6 py-3 text-center">~93.0%</td>
                      <td className="px-6 py-3 text-center">12.5%</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 text-center font-mono border-b border-gray-200 dark:border-white/10">n = 16</td>
                      <td className="px-6 py-3 text-center border-b border-gray-200 dark:border-white/10">11.3%</td>
                      <td className="px-6 py-3 text-center font-bold text-primary border-b border-gray-200 dark:border-white/10">73.0%</td>
                      <td className="px-6 py-3 text-center border-b border-gray-200 dark:border-white/10">90.0%</td>
                      <td className="px-6 py-3 text-center border-b border-gray-200 dark:border-white/10">6.25%</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white" rowSpan={4}>Images (Tree-Ring)</td>
                      <td className="px-6 py-3 text-center font-mono">n = 2</td>
                      <td className="px-6 py-3 text-center">~55.0%</td>
                      <td className="px-6 py-3 text-center font-semibold text-green-600">~98.0%</td>
                      <td className="px-6 py-3 text-center">100.0%</td>
                      <td className="px-6 py-3 text-center">50.0%</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 text-center font-mono">n = 4</td>
                      <td className="px-6 py-3 text-center">~32.0%</td>
                      <td className="px-6 py-3 text-center font-semibold text-green-600">~94.0%</td>
                      <td className="px-6 py-3 text-center">~99.0%</td>
                      <td className="px-6 py-3 text-center">25.0%</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 text-center font-mono">n = 8</td>
                      <td className="px-6 py-3 text-center">~18.0%</td>
                      <td className="px-6 py-3 text-center font-semibold text-green-600">~92.0%</td>
                      <td className="px-6 py-3 text-center">~97.0%</td>
                      <td className="px-6 py-3 text-center">12.5%</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 text-center font-mono">n = 16</td>
                      <td className="px-6 py-3 text-center">~12.0%</td>
                      <td className="px-6 py-3 text-center font-bold text-primary">91.0%</td>
                      <td className="px-6 py-3 text-center">96.0%</td>
                      <td className="px-6 py-3 text-center">6.25%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2: Control Experiments */}
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mt-8 mb-2">
                2. Isolating Watermarking Roles (Control Settings for <InlineMath math="n=16" />)
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-justify">
                We compare four settings at 4000 samples to confirm that monitoring ability emerges specifically from the key-dependent watermark structure rather than model prompt biases. Without watermarking or under a shared-key setup, observer accuracy collapses to random chance.
              </p>

              <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10 text-sm text-left">
                  <thead className="bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white uppercase font-semibold text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-3">Deployment Setting</th>
                      <th className="px-6 py-3 text-center">Text Modality (KGW)</th>
                      <th className="px-6 py-3 text-center">Image Modality (Tree-Ring)</th>
                      <th className="px-6 py-3 text-center">Random Guess Baseline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-gray-600 dark:text-gray-400">
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">Internal Observer (Key Access)</td>
                      <td className="px-6 py-3 text-center font-semibold text-green-600">~98.0% TPR</td>
                      <td className="px-6 py-3 text-center font-semibold text-green-600">~99.0% TPR</td>
                      <td className="px-6 py-3 text-center">6.25%</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">External Observer (BERT/CLIP)</td>
                      <td className="px-6 py-3 text-center font-bold text-primary">73.0% Top-1</td>
                      <td className="px-6 py-3 text-center font-bold text-primary">91.0% Top-1</td>
                      <td className="px-6 py-3 text-center">6.25%</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">No-Watermark Baseline</td>
                      <td className="px-6 py-3 text-center text-red-500">~7.0% Top-1</td>
                      <td className="px-6 py-3 text-center text-red-500">~6.0% Top-1</td>
                      <td className="px-6 py-3 text-center">6.25%</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">Shared-Key Deployment</td>
                      <td className="px-6 py-3 text-center text-red-500">~6.0% Top-1</td>
                      <td className="px-6 py-3 text-center text-red-500 font-medium">~6.0% Top-1</td>
                      <td className="px-6 py-3 text-center">6.25%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Discussion & Takeaways Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Key Insights & Discussion
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                <strong>The Dual-Use Tension:</strong> Provenance technologies like watermarking are typically marketed as security and transparency mechanisms. However, our findings show that assigning distinct keys to individual entities inevitably leaves a persistent, unique statistical trace. A passive observer (such as an ISP, database auditor, or government entity) can aggregate outputs to track, profile, and identify specific users over time.
              </p>
              <p>
                <strong>Mitigation Directions:</strong> Reducing this risk requires watermarking methods that preserve the original text/image probability distribution, making the watermark statistically undetectable without key access. Alternatively, shared-key deployments offer a robust defense against passive external monitoring, although they eliminate the provider&apos;s ability to attribute content to individual target entities.
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Page;
