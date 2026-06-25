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
              src="/images/blogs/forger.png"
              alt="Watermark Forgery Hero"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-md">
                  Security & Privacy
                </span>
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-md">
                  NeurIPS 2026
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-Acorns font-semibold text-white leading-tight">
                Mitigating Watermark Forgery in Generative Models via Randomized Key Selection
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl space-y-8" data-aos="fade-up" data-aos-delay="100">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-200 dark:border-white/10 pb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Authors</h3>
                <p className="text-gray-900 dark:text-white font-medium text-lg leading-relaxed">
                  Toluwani Aremu, Noor Hussein, Munachiso Nwadike, Samuele Poppi, Jie Zhang, Karthik Nandakumar, Neil Gong, Nils Lukas
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Affiliations</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  MBZUAI, A*STAR, MSU, Duke University
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://github.com/MBZUAI-Trustworthy-ML/watermark-supression" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-gray-900 dark:text-white font-medium hover:bg-white/20 border border-gray-200 dark:border-white/10 transition-all hover:scale-105"
              >
                Code (GitHub)
              </Link>
              <Link 
                href="https://arxiv.org/pdf/2507.07871" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Read Paper (PDF)
              </Link>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-justify">
            
            {/* Video Explainer Section */}
            <div className="my-10 w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl bg-black">
              <video 
                src="/videos/forgery-explainer.mp4" 
                controls 
                className="w-full h-auto aspect-video object-cover"
                poster="/images/blogs/forger.png"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/10 mb-10">
              <h2 className="text-2xl font-Acorns font-semibold text-gray-900 dark:text-white mb-4 mt-0">Abstract</h2>
              <p className="mb-4">
                Watermarking enables GenAI providers to verify whether content was generated by their models. A watermark is a hidden signal in the content, whose presence can be detected using a secret watermark key. A core security threat are forgery attacks, where adversaries insert the provider&apos;s watermark into content <em>not</em> produced by the provider, potentially damaging their reputation and undermining trust.
              </p>
              <p className="mb-4">
                Existing defenses resist forgery by embedding many watermarks with multiple keys into the same content, which can degrade model utility. However, forgery remains a threat when attackers can collect sufficiently many watermarked samples. We propose a defense that is provably forgery-resistant <em>independent</em> of the number of watermarked content collected by the attacker, provided they cannot easily distinguish watermarks from different keys.
              </p>
              <p className="mb-4">
                Our scheme does not further degrade model utility. We randomize the watermark key selection for each query and accept content as genuine only if a watermark is detected by <em>exactly</em> one key. Unlike cryptographic watermarks that rely on computational hardness assumptions and require designing new watermarking schemes from scratch, our method can be applied to any existing watermarking method to improve its forgery resistance.
              </p>
            </div>

            <h2 className="text-3xl font-Acorns font-semibold text-gray-900 dark:text-white mt-12 mb-6">Threat Model & Methodology</h2>
            <p className="mb-4">
              An attacker who collects watermarked samples to use for their forgery process cannot simply distill without learning the statistical signals from all watermarks, since each sample contains a different watermark which is unknown to the attacker. An attacker that distills our watermark inadvertently &apos;poisons&apos; their forgery attack with watermarks from different keys which the provider can detect.
            </p>
            <p className="mb-4">
              We randomly sample a watermarking key from a set of keys <InlineMath math="\mathcal{K} = \{k_1,\dots,k_r\}" /> and use it to generate watermarked content. During detection, the provider runs per-key tests and applies a common threshold <InlineMath math="\tau" /> chosen via the Šidák correction to control the family-wise error rate <InlineMath math="\alpha_{\mathrm{fw}}" /> across <InlineMath math="r=|\mathcal{K}|" /> keys.
            </p>
            
            <div className="my-8 p-6 bg-white dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm overflow-x-auto text-center">
              <BlockMath math="\alpha := 1-(1-\alpha_{\mathrm{fw}})^{1/r}, \qquad \tau := F_{0}^{-1}(1-\alpha)" />
            </div>

            <p className="mb-4">
              We declare <strong>genuine</strong> if <em>exactly one</em> key is detected, <strong>forgery</strong> if two or more keys are detected, and <strong>not ours</strong> if no key is detected.
            </p>

            <h2 className="text-3xl font-Acorns font-semibold text-gray-900 dark:text-white mt-12 mb-6">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/30">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">Forgery Resistance</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed text-justify">
                  Our method makes watermarking forgery significantly more challenging since attackers must trigger exactly one detector and cannot easily &apos;overshoot&apos; their target. Forgery success reduces from up to 100% to as low as 2%, far lower than the theoretical upper bound for blind attackers.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800/30">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">Preserved Utility</h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed text-justify">
                  Improvements in security do not come at the expense of detection accuracy. Our multi-key detector maintains nearly identical detection performance (97-100% TPR) across all configurations. The scheme is also modality-agnostic, functioning effectively across text and images.
                </p>
              </div>
            </div>

            <p className="mb-4">
              A blind adversary training on mixtures of watermarked samples yields a theoretical upper bound for the attacker&apos;s success rate that does <em>not</em> depend on how many watermarked samples the attacker has observed:
            </p>
            <div className="my-8 p-6 bg-white dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm overflow-x-auto text-center">
              <BlockMath math="\Pr_{x\leftarrow\mathcal A}\bigl[s(x)=1\bigr] \le \bigl(1-\tfrac1r\bigr)^{r-1}" />
            </div>

            <p className="mt-8">
              Overall, randomized key selection offers a computationally efficient, model-agnostic layer of defense against sophisticated forgery attempts in generative AI systems.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
