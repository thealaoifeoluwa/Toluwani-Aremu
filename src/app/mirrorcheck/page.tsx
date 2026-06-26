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
              src="/images/blogs/mirrorcheck.png"
              alt="MirrorCheck Hero"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-md">
                  Security & Robustness
                </span>
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-md">
                  CVPR 2026 (AdvML) [Distinguished Paper🏆]
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-Acorns font-semibold text-white leading-tight">
                MirrorCheck: Efficient Adversarial Defense for Vision-Language Models
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
                  Samar Fares<sup className="text-xs">*</sup>, Klea Ziu<sup className="text-xs">*</sup>, <span className="font-semibold text-primary">Toluwani Aremu<sup className="text-xs">*</sup></span>, Nikita Durasov, Martin Takáč, Pascal Fua, Ivan Laptev, Karthik Nandakumar
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Affiliations</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI), NVIDIA, EPFL, Michigan State University
                </p>
                <p className="text-xs text-gray-500 mt-1">* Equal contribution</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://github.com/klea-ziu/MirrorCheck" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-gray-900 dark:text-white font-medium hover:bg-white/20 border border-gray-200 dark:border-white/10 transition-all hover:scale-105"
              >
                Code (GitHub)
              </Link>
              <Link 
                href="https://openreview.net/pdf?id=pdIPR5TSXy" 
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
              <strong>TL;DR:</strong> Vision-Language Models (VLMs) are highly vulnerable to adversarial image perturbations. We present <strong>MirrorCheck</strong>—a model-agnostic defense that regenerates visual content from captions generated by the VLM using Text-to-Image (T2I) models and measures semantic consistency in feature space. To thwart adaptive attacks, we introduce stochastic encoder/generator selection and One-Time-Use (OTU) parameter perturbations, maintaining detection rates up to <strong>99%</strong>.
            </p>
          </div>

          {/* YouTube Video Section */}
          <div className="my-10 w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl bg-black">
            <iframe 
              src="https://www.youtube.com/embed/3OEuU5bfNZQ" 
              title="MirrorCheck Explainer Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="w-full h-auto aspect-video object-cover border-0"
            ></iframe>
          </div>

          {/* Abstract Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Abstract
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                Vision-Language Models (VLMs) are increasingly susceptible to sophisticated adversarial attacks, including adaptive strategies specifically designed to bypass existing defenses. To address this vulnerability, we propose <strong>MirrorCheck</strong>, a robust and model-agnostic detection framework that operates effectively in both unimodal and multimodal settings. 
              </p>
              <p>
                MirrorCheck leverages Text-to-Image (T2I) models to regenerate visual content from captions produced by the target model and assesses semantic consistency by comparing feature-space embeddings between the original and synthesized images. To enhance robustness against adaptive attacks, MirrorCheck introduces a stochastic defense strategy that randomly selects T2I generators and image encoders from a diverse model zoo. Additionally, we incorporate a novel One-Time-Use (OTU) perturbation applied to the selected encoder embeddings, regulated by a scaling factor, which decreases the effectiveness of adaptive attacks. Extensive experiments across multiple threat scenarios demonstrate that MirrorCheck consistently outperforms baseline methods, and maintains its utility even under strong adaptive adversarial conditions.
              </p>
            </div>
          </div>

          {/* Threat Model Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Threat Model
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                Our framework is designed to detect adversarial attacks, irrespective of the attacker&apos;s level of knowledge. In this scenario, there are two parties:
              </p>
              <p>
                <strong>Attacker:</strong> The attacker&apos;s goal is to generate an adversarial image <InlineMath math="x_{\text{adv}} = x_{\text{clean}} + \delta" /> that causes the victim model to produce an incorrect caption or classification. The attack can be <strong>targeted</strong>, where the generated text matches a predefined adversarial target, or <strong>untargeted</strong>, where the model is simply forced to misinterpret or misdescribe the input image. In both cases, the perturbation <InlineMath math="\delta" /> is constrained within an <InlineMath math="\ell_\infty" /> or <InlineMath math="\ell_2" /> bounded adversarial budget. The adversary may have full white-box access or operate in a black-box setting.
              </p>
              <p>
                <strong>Defender:</strong> The defender aims to correctly classify input images as either <em>clean</em> or <em>adversarial</em> by assessing the consistency between the model&apos;s interpretation of the input and a reference image generated from the model&apos;s textual output. The defender only assumes black-box access to the victim model and has no access to any ground-truth clean reference image.
              </p>
            </div>
          </div>

          {/* Methodology Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Methodology
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                Let <InlineMath math="\mathcal{F}_\theta(x_{\text{in}}; p) \rightarrow t" /> be the victim model (which can be a VLM or classification model producing a description text <InlineMath math="t" /> from input image <InlineMath math="x_{\text{in}}" /> under prompt <InlineMath math="p" />). Let <InlineMath math="\mathcal{I}_{\phi}(x) \rightarrow z" /> be a pretrained image encoder and let <InlineMath math="G_{\psi}(t) \rightarrow x_{\text{gen}}" /> denote a pretrained text-conditioned image generation (T2I) model.
              </p>
              <p>
                The defender first obtains the output caption <InlineMath math="t = \mathcal{F}_\theta(x_{\text{in}}; p)" />, then synthesizes the reference image <InlineMath math="x_{\text{gen}} = G_{\psi}(t)" />. Semantic consistency is assessed by computing the cosine similarity between the feature embeddings:
                <BlockMath math="c = \cos(\mathcal{I}_\phi(x_{\text{in}}), \mathcal{I}_\phi(x_{\text{gen}})) = \frac{\langle \mathcal{I}_\phi(x_{\text{in}}), \mathcal{I}_\phi(x_{\text{gen}}) \rangle}{\|\mathcal{I}_\phi(x_{\text{in}})\|_2 \, \|\mathcal{I}_\phi(x_{\text{gen}})\|_2}" />
              </p>
              <p>
                <strong>Stochastic MirrorCheck & OTU Noise:</strong> To defend against adaptive white-box attackers who optimize perturbations to fool both the VLM and the detector, we introduce:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Stochastic Model Zoo selection:</strong> Randomly selecting T2I generators (Stable Diffusion, UniDiffuser, ControlNet) and image encoders (CLIP variants, OpenCLIP) per query.
                </li>
                <li>
                  <strong>One-Time-Use (OTU) Perturbations:</strong> Injecting unique Gaussian noise scale <InlineMath math="\eta \sim \mathcal{N}(0, \sigma^2 I)" /> directly to image encoder parameter weights before each query, creating a random projection that breaks gradient-based optimization attacks.
                </li>
              </ol>
            </div>
          </div>

          {/* Quantitative Evaluation Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Quantitative Evaluation
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
              <p className="text-justify">
                We evaluate MirrorCheck against classical unimodal defenses (FeatureSqueeze, MagNet, PuVAE, DiffPure) and VLM-specific multimodal baselines (CIDER, Naive, CLIP, JailGuard, SmoothVLM, DPS) across multiple VLM architectures and classification tasks.
              </p>

              {/* Table 1: Baseline Comparison */}
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mt-6 mb-2">
                1. Adversarial Detection Performance (AUROC)
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-justify">
                Overall detection rate (AUROC) under text-targeted (AttackVLM-T) and query-targeted (AttackVLM-Q) VLM attacks, as well as multimodal fusion attacks (Attack-MMFM). Higher is better.
              </p>

              <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10 text-xs text-left">
                  <thead className="bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white uppercase font-semibold tracking-wider">
                    <tr>
                      <th className="px-3 py-3" rowSpan={2}>Victim Model</th>
                      <th className="px-3 py-3" rowSpan={2}>Attack Setting</th>
                      <th className="px-3 py-3 text-center border-b border-gray-200 dark:border-white/10" colSpan={4}>Unimodal Baselines</th>
                      <th className="px-3 py-3 text-center border-b border-gray-200 dark:border-white/10" colSpan={5}>Multimodal Baselines</th>
                      <th className="px-3 py-3 text-center border-b border-gray-200 dark:border-white/10" colSpan={2}>Ours</th>
                    </tr>
                    <tr>
                      <th className="px-2 py-2 text-center text-gray-500">FS</th>
                      <th className="px-2 py-2 text-center text-gray-500">MagNet</th>
                      <th className="px-2 py-2 text-center text-gray-500">PuVAE</th>
                      <th className="px-2 py-2 text-center text-gray-500">DiffPure</th>
                      <th className="px-2 py-2 text-center text-gray-500">CIDER</th>
                      <th className="px-2 py-2 text-center text-gray-500">Naive</th>
                      <th className="px-2 py-2 text-center text-gray-500">CLIP</th>
                      <th className="px-2 py-2 text-center text-gray-500">JailGuard</th>
                      <th className="px-2 py-2 text-center text-gray-500">SmoothVLM</th>
                      <th className="px-2 py-2 text-center text-primary">MC</th>
                      <th className="px-2 py-2 text-center text-primary font-bold">Stochastic-MC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-gray-600 dark:text-gray-400">
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-3 py-3 font-semibold text-gray-900 dark:text-white" rowSpan={2}>UniDiffuser</td>
                      <td className="px-2 py-3 text-center font-mono">VLM-T</td>
                      <td className="px-2 py-3 text-center">0.56</td>
                      <td className="px-2 py-3 text-center">0.74</td>
                      <td className="px-2 py-3 text-center">0.51</td>
                      <td className="px-2 py-3 text-center">0.80</td>
                      <td className="px-2 py-3 text-center">0.84</td>
                      <td className="px-2 py-3 text-center">0.68</td>
                      <td className="px-2 py-3 text-center">0.59</td>
                      <td className="px-2 py-3 text-center">0.81</td>
                      <td className="px-2 py-3 text-center">0.82</td>
                      <td className="px-2 py-3 text-center font-semibold text-green-600">0.96</td>
                      <td className="px-2 py-3 text-center">0.95</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-2 py-3 text-center font-mono">VLM-Q</td>
                      <td className="px-2 py-3 text-center">0.65</td>
                      <td className="px-2 py-3 text-center">0.85</td>
                      <td className="px-2 py-3 text-center">0.70</td>
                      <td className="px-2 py-3 text-center">0.81</td>
                      <td className="px-2 py-3 text-center">0.80</td>
                      <td className="px-2 py-3 text-center">0.65</td>
                      <td className="px-2 py-3 text-center">0.57</td>
                      <td className="px-2 py-3 text-center">0.83</td>
                      <td className="px-2 py-3 text-center">0.83</td>
                      <td className="px-2 py-3 text-center font-bold text-primary">0.98</td>
                      <td className="px-2 py-3 text-center font-bold text-primary">0.98</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-3 py-3 font-semibold text-gray-900 dark:text-white" rowSpan={2}>BLIP</td>
                      <td className="px-2 py-3 text-center font-mono">VLM-T</td>
                      <td className="px-2 py-3 text-center">0.52</td>
                      <td className="px-2 py-3 text-center">0.60</td>
                      <td className="px-2 py-3 text-center">0.50</td>
                      <td className="px-2 py-3 text-center">0.71</td>
                      <td className="px-2 py-3 text-center">0.81</td>
                      <td className="px-2 py-3 text-center">0.66</td>
                      <td className="px-2 py-3 text-center">0.61</td>
                      <td className="px-2 py-3 text-center">0.79</td>
                      <td className="px-2 py-3 text-center">0.77</td>
                      <td className="px-2 py-3 text-center">0.90</td>
                      <td className="px-2 py-3 text-center font-bold text-primary">0.93</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-2 py-3 text-center font-mono">VLM-Q</td>
                      <td className="px-2 py-3 text-center">0.57</td>
                      <td className="px-2 py-3 text-center">0.65</td>
                      <td className="px-2 py-3 text-center">0.80</td>
                      <td className="px-2 py-3 text-center">0.76</td>
                      <td className="px-2 py-3 text-center">0.85</td>
                      <td className="px-2 py-3 text-center">0.64</td>
                      <td className="px-2 py-3 text-center">0.55</td>
                      <td className="px-2 py-3 text-center">0.84</td>
                      <td className="px-2 py-3 text-center">0.81</td>
                      <td className="px-2 py-3 text-center">0.89</td>
                      <td className="px-2 py-3 text-center font-bold text-primary">0.97</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-3 py-3 font-semibold text-gray-900 dark:text-white" rowSpan={3}>BLIP-2</td>
                      <td className="px-2 py-3 text-center font-mono">VLM-T</td>
                      <td className="px-2 py-3 text-center">0.61</td>
                      <td className="px-2 py-3 text-center">0.73</td>
                      <td className="px-2 py-3 text-center">0.52</td>
                      <td className="px-2 py-3 text-center">0.80</td>
                      <td className="px-2 py-3 text-center">0.84</td>
                      <td className="px-2 py-3 text-center">0.70</td>
                      <td className="px-2 py-3 text-center">0.62</td>
                      <td className="px-2 py-3 text-center">0.82</td>
                      <td className="px-2 py-3 text-center">0.80</td>
                      <td className="px-2 py-3 text-center">0.93</td>
                      <td className="px-2 py-3 text-center font-bold text-primary">0.94</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-2 py-3 text-center font-mono">VLM-Q</td>
                      <td className="px-2 py-3 text-center">0.61</td>
                      <td className="px-2 py-3 text-center">0.85</td>
                      <td className="px-2 py-3 text-center">0.72</td>
                      <td className="px-2 py-3 text-center">0.83</td>
                      <td className="px-2 py-3 text-center">0.77</td>
                      <td className="px-2 py-3 text-center">0.67</td>
                      <td className="px-2 py-3 text-center">0.58</td>
                      <td className="px-2 py-3 text-center">0.80</td>
                      <td className="px-2 py-3 text-center">0.78</td>
                      <td className="px-2 py-3 text-center">0.92</td>
                      <td className="px-2 py-3 text-center font-bold text-primary">0.99</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-2 py-3 text-center font-mono">Bard</td>
                      <td className="px-2 py-3 text-center">&mdash;</td>
                      <td className="px-2 py-3 text-center">&mdash;</td>
                      <td className="px-2 py-3 text-center">&mdash;</td>
                      <td className="px-2 py-3 text-center">0.79</td>
                      <td className="px-2 py-3 text-center">0.87</td>
                      <td className="px-2 py-3 text-center">0.65</td>
                      <td className="px-2 py-3 text-center">0.58</td>
                      <td className="px-2 py-3 text-center">0.89</td>
                      <td className="px-2 py-3 text-center">0.87</td>
                      <td className="px-2 py-3 text-center font-semibold text-green-600">0.98</td>
                      <td className="px-2 py-3 text-center">0.95</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-3 py-3 font-semibold text-gray-900 dark:text-white">LLaVA</td>
                      <td className="px-2 py-3 text-center font-mono">MMFM</td>
                      <td className="px-2 py-3 text-center">&mdash;</td>
                      <td className="px-2 py-3 text-center">&mdash;</td>
                      <td className="px-2 py-3 text-center">&mdash;</td>
                      <td className="px-2 py-3 text-center">0.67</td>
                      <td className="px-2 py-3 text-center">0.83</td>
                      <td className="px-2 py-3 text-center">0.62</td>
                      <td className="px-2 py-3 text-center">0.52</td>
                      <td className="px-2 py-3 text-center font-semibold text-green-600">0.85</td>
                      <td className="px-2 py-3 text-center font-semibold text-green-600">0.85</td>
                      <td className="px-2 py-3 text-center">0.82</td>
                      <td className="px-2 py-3 text-center font-bold text-primary">0.85</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-3 py-3 font-semibold text-gray-900 dark:text-white">OpenFlamingo</td>
                      <td className="px-2 py-3 text-center font-mono">MMFM</td>
                      <td className="px-2 py-3 text-center">&mdash;</td>
                      <td className="px-2 py-3 text-center">&mdash;</td>
                      <td className="px-2 py-3 text-center">&mdash;</td>
                      <td className="px-2 py-3 text-center">0.65</td>
                      <td className="px-2 py-3 text-center">0.84</td>
                      <td className="px-2 py-3 text-center">0.60</td>
                      <td className="px-2 py-3 text-center">0.51</td>
                      <td className="px-2 py-3 text-center font-bold text-primary">0.87</td>
                      <td className="px-2 py-3 text-center">0.84</td>
                      <td className="px-2 py-3 text-center">0.81</td>
                      <td className="px-2 py-3 text-center">0.81</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2: Similarity Gaps */}
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mt-8 mb-2">
                2. Semantic Similarity Scores (Clean vs. Attack)
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-justify">
                We measure the cosine similarity score gap under clean and adversarial conditions. Legitimate clean images maintain high semantic consistency under regeneration (typically &gt;0.70), while adversarial generation collapses the feature-space similarity.
              </p>

              <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10 text-sm text-left">
                  <thead className="bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white uppercase font-semibold text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-3">Victim Model</th>
                      <th className="px-6 py-3">Task Setting</th>
                      <th className="px-6 py-3 text-center">Clean Similarity &uarr;</th>
                      <th className="px-6 py-3 text-center">Attack Similarity (VLM-Q) &darr;</th>
                      <th className="px-6 py-3 text-center font-semibold text-primary">Semantic Gap</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-gray-600 dark:text-gray-400">
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">UniDiffuser</td>
                      <td className="px-6 py-3">Image Captioning</td>
                      <td className="px-6 py-3 text-center text-green-600 font-semibold">0.721</td>
                      <td className="px-6 py-3 text-center text-red-500">0.498</td>
                      <td className="px-6 py-3 text-center font-bold text-primary">0.223</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">BLIP</td>
                      <td className="px-6 py-3">Image Captioning</td>
                      <td className="px-6 py-3 text-center text-green-600 font-semibold">0.707</td>
                      <td className="px-6 py-3 text-center text-red-500">0.508</td>
                      <td className="px-6 py-3 text-center font-bold text-primary">0.199</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">BLIP-2</td>
                      <td className="px-6 py-3">Image Captioning</td>
                      <td className="px-6 py-3 text-center text-green-600 font-semibold">0.729</td>
                      <td className="px-6 py-3 text-center text-red-500">0.380</td>
                      <td className="px-6 py-3 text-center font-bold text-primary">0.349</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">Img2Prompt</td>
                      <td className="px-6 py-3">Visual Question Answering</td>
                      <td className="px-6 py-3 text-center text-green-600 font-semibold">0.675</td>
                      <td className="px-6 py-3 text-center text-red-500">0.517</td>
                      <td className="px-6 py-3 text-center font-bold text-primary">0.158</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Qualitative Results Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Qualitative Results
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
              <p className="text-justify">
                To demonstrate the visual consistency captured by MirrorCheck, we evaluate samples generated by Stable Diffusion when conditioned on the VLM&apos;s caption features. Under clean settings, synthesized images preserve the high-level semantic layout and context. Under adversarial attack, the VLM generates mismatched descriptions, leading to regenerated reference images that diverge drastically from the original features.
              </p>

              {/* Grid of qualitative images */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
                <div className="flex flex-col items-center">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm bg-black/40">
                    <Image src="/images/blogs/adapter1.png" alt="Adapter Sample 1" fill className="object-cover" />
                  </div>
                  <span className="text-[10px] text-gray-500 mt-2">Reconstruction 1</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm bg-black/40">
                    <Image src="/images/blogs/adapter2.png" alt="Adapter Sample 2" fill className="object-cover" />
                  </div>
                  <span className="text-[10px] text-gray-500 mt-2">Reconstruction 2</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm bg-black/40">
                    <Image src="/images/blogs/adapter3.png" alt="Adapter Sample 3" fill className="object-cover" />
                  </div>
                  <span className="text-[10px] text-gray-500 mt-2">Reconstruction 3</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm bg-black/40">
                    <Image src="/images/blogs/adapter4.png" alt="Adapter Sample 4" fill className="object-cover" />
                  </div>
                  <span className="text-[10px] text-gray-500 mt-2">Reconstruction 4</span>
                </div>
              </div>

              <p className="text-justify text-sm text-gray-500 italic mt-2 text-center">
                Figure: Images generated by Stable Diffusion conditioned on the latent embeddings of UniDiffuser captions. The adapter successfully aligns caption-based representations with image generation pipelines, demonstrating visually coherent semantic preservation.
              </p>
            </div>
          </div>

          {/* Adaptive Attacks & Complexity Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-Acorns font-medium text-gray-900 dark:text-gray-100">
              Robustness & Complexity
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-justify">
              <p>
                <strong>Adaptive Attacks (BPDA+EoT):</strong> We stress-test our defense by modeling a white-box adversary who has full access to the victim VLM, the alignment adapter, and the detection pipeline. Under the Backward Pass Differentiable Approximation (BPDA) and Expectation over Transformation (EoT) optimization, we observe that Stochastic MirrorCheck maintains high defense integrity. Specifically, while a single encoder is slightly susceptible, an ensemble of <strong>7 or more encoders</strong> combined with One-Time-Use parameter noise (scale <InlineMath math="\ge 5\times10^{-4}" />) achieves a detection accuracy of over <strong>98%</strong>, defeating the adaptive optimization loop.
              </p>
              <p>
                <strong>Computational Complexity:</strong> Running on a single NVIDIA Quadro RTX A6000 GPU, the defense pipeline processes an image in 15 seconds (victim model captioning: 0.2s, T2I generation: 5s, similarity calculation: 10s). By reducing the T2I diffusion timesteps from 50 to 10, the total inference time drops to just <strong>1.2 seconds</strong> with only a marginal reduction in detection AUROC, showing a practical path for low-latency production serving.
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Page;
