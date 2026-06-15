import { link } from "fs";
import { title } from "process";

export const socialLinks = [
  {
    title: "github",
    link: "https://github.com/tolusophy",
  },
  {
    title: "medium",
    link: "https://tolusophy.medium.com/",
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/toluwaniaremu/",
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/tolusophy/",
  },
  {
    title: "google scholar",
    link: "https://scholar.google.com/citations?user=Ji8fnw0AAAAJ&hl=en",
  },
  {
    title: "hello@toluwani.ai",
    link: "mailto:tioluwaniaremu@gmail.com",
  },
];

type dataType = {
  year: number;
  contents: {
    title: string;
    data: {
      text: string;
      link?: string;
      linkTitle?: string;
      links?: {
        link: string;
        linkTitle: string;
      }[];
    }[];
  }[];
};

const data2026: dataType = {
  year: 2026,
  contents: [
    {
      title: "February",
      data: [
        {
          text: 'Our startup idea is incubated under Kora. Excited for this new chapter.',
          link: "https://www.korahq.com/",
          linkTitle: "[Learn more about Kora]",
        },
      ],
    },
    {
      title: "March",
      data: [
        {
          text: 'Our paper, "MirrorCheck: Efficient Adversarial Defense for Vision-Language Models", has been accepted at CVPR (AdvML) 2026! Congrats to the team.',
          link: "https://openreview.net/pdf?id=pdIPR5TSXy",
          linkTitle: "[Paper]",
        },
      ],
    },
    {
      title: "April",
      data: [
        {
          text: 'I am at the Center for Frontier AI Research, A*STAR Singapore for a 3-month research visit. Looking forward to collaborating with the amazing researchers here.',
        },
      ],
    },
    {
      title: "May",
      data: [
        {
          text: 'I got a gold reviewer award from ICML.',
        },
      ],
    },
    {
      title: "June",
      data: [
        {
          text: 'Our paper, "MirrorCheck: Efficient Adversarial Defense for Vision-Language Models", got the distinguished paper award at CVPR-AdvML!',
          link: "https://openreview.net/pdf?id=pdIPR5TSXy",
          linkTitle: "[Paper]",
        },
        {
          text: "WAXAL-NET is live now! Finetuned Edge ASR Across 19 African Languages, evaluated against 51 open source models.",
          links: [
            {
              link: "https://arxiv.org/pdf/2606.02375",
              linkTitle: "[Paper]",
            },
            {
              link: "https://waxalnet.vercel.app/",
              linkTitle: "[Website]",
            },
            {
              link: "https://huggingface.co/waxal-benchmarking",
              linkTitle: "[HuggingFace]",
            },
          ],
        },
      ],
    },
  ].reverse(),
};

const data2025: dataType = {
  year: 2025,
  contents: [
    {
      title: "January",
      data: [
        {
          text: 'Our paper, "On the Reliability of Large Language Models to Misinformed and Demographically-Informed Prompts", has been accepted at AAAI-AI Magazine. Congrats to the team.',
          link: "https://onlinelibrary.wiley.com/doi/10.1002/aaai.12208",
          linkTitle: "[Paper]",
        },
      ],
    },
    {
      title: "April",
      data: [
        {
          text: 'I am now a PhD Candidate. Looking forward to the next phase of my research journey.',
          // link: "https://onlinelibrary.wiley.com/doi/10.1002/aaai.12208",
          // linkTitle: "[Paper]",
        },
        {
          text: 'I got the MBZUAI Conference Travel Scholarship to present our work on "Optimizing Adaptive Attacks against Content Watermarks for Language Models" which was accepted at ICLR-WMARK 2025!',
          // link: "https://arxiv.org/abs/2410.02440",
          // linkTitle: "[Preprint]",
        },
      ],
    },
    {
      title: "May",
      data: [
        {
          text: 'Our paper, "Optimizing Adaptive Attacks against Content Watermarks for Language Models" has been accepted as a spotlight paper at ICML 2025! Congratulations to the team.',
          link: "https://arxiv.org/abs/2410.02440",
          linkTitle: "[Paper]",
        },
      ],
    },
  ].reverse(),
};

const data2024: dataType = {
  year: 2024,
  contents: [
    {
      title: "January",
      data: [
        {
          text: 'Our paper, "ScholarFace: Scanning Faces, Discovering Minds", has been published in the 2024 IEEE International Conference on Consumer Electronics (ICCE). Congratulations to the team!',
          link: "https://ieeexplore.ieee.org/abstract/document/10444350",
          linkTitle: "[Paper]",
        },
        {
          text: 'Our preprint, "On the Reliability of Large Language Models to Misinformed and Demographically-Informed Prompts", has been uploaded on SSRN.',
          link: "https://arxiv.org/abs/2410.10850",
          linkTitle: "[Preprint]",
        },
      ],
    },
    {
      title: "April",
      data: [
        {
          text: 'Our paper, "Redefining Contributions: Shapley-Driven Federated Learning", has been accepted for presentation and publication at the 33rd International Joint Conference on Artificial Intelligence (IJCAI), Jeju, Korea. Congrats to the team.',
          link: "https://www.ijcai.org/proceedings/2024/0554",
          linkTitle: "[Paper]",
        },
      ],
    },
    {
      title: "December",
      data: [
        {
          text: 'Our paper, "On the Reliability of Large Language Models to Misinformed and Demographically-Informed Prompts", has been accepted for inclusion and publication in AI Magazine (official journal of the AAAI). Congrats to the team. Published version coming out soon!',
          link: "https://arxiv.org/abs/2410.10850",
          linkTitle: "[Preprint]",
        },
      ],
    },
  ].reverse(),
};

const data2023: dataType = {
  year: 2023,
  contents: [
    {
      title: "January",
      data: [
        {
          text: "Graduated from Mohamed Bin Zayed University of Artificial Intelligence with a MSc in Machine Learning.",
        },
      ],
    },
    {
      title: "February",
      data: [
        {
          text: 'Published an article on Medium titled, "Learning Rate Schedulers".',
          link: "https://pub.towardsai.net/choosing-a-learning-rate-for-dnns-35c201b1b49b",
        },
        {
          text: "Started a new exciting role as an Applied Science Intern at",
          link: "https://www.g42healthcare.ai/",
          linkTitle: "G42 Healthcare.",
        },
        {
          text: "Started a new exciting role as an AI Researcher at the MCR and Metaverse Lab at",
          link: "https://mbzuai.ac.ae/",
          linkTitle: "MBZUAI.",
        },
      ],
    },
    {
      title: "April",
      data: [
        {
          text: "Concluded my internship at",
          link: "https://www.g42healthcare.ai/",
          linkTitle: "G42 Healthcare.",
        },
      ],
    },
    {
      title: "May",
      data: [
        {
          text: 'Got my first football coaching license, "EE Playmaker" by the English Football Association.',
          link: "",
        },
      ],
    },
    {
      title: "June",
      data: [
        {
          text: 'Our preprint, "SSIVD-Net: A Novel Salient Super Image Classification & Detection Technique for Weaponized Violence" has been uploaded on ResearchSquare and ArXiv. Update!!! It has been accepted for presentation at the 2024 SAI Computing Conference and will appear in the Springer Lecture Notes in Networks and Systems publication. Congratulations to the team.',
          links: [
            {
              link: "https://www.researchsquare.com/article/rs-3024402/v1",
              linkTitle: "[ResearchSquare]",
            },
            {
              link: "https://arxiv.org/abs/2207.12850",
              linkTitle: "[ArXiv]",
            },
          ],
        },
        {
          text: `My preprint "Unlocking Pandora's Box: Unveiling the Elusive Realm of AI Text Detection" has been uploaded on SSRN.`,
          link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4470719",
          linkTitle: "[Paper]",
        },
        {
          text: 'Published an article on Medium titled, "AI Text Detectors: Amazing Sleuths or WHAT?"',
          link: "https://pub.towardsai.net/ai-text-detectors-amazing-sleuths-or-what-31e4e2ca7803",
        },
      ],
    },
    {
      title: "July",
      data: [
        {
          text: 'Published an article on Medium titled, "Accented Speech Recognition: The Inclusive Realm of Automatic Speech Recognition Systems."',
          link: "https://pub.towardsai.net/accented-speech-recognition-the-inclusive-realm-of-automatic-speech-recognition-systems-881ee480c502",
        },
      ],
    },
    {
      title: "August",
      data: [
        {
          text: "Applied for my first patent. [More details to come]",
          link: "",
        },
        {
          text: "Started PhD in Machine Learning at",
          link: "https://mbzuai.ac.ae/",
          linkTitle: "MBZUAI.",
        },
      ],
    },
  ].reverse(),
};

const data2022: dataType = {
  year: 2022,
  contents: [
    {
      title: "July",
      data: [
        {
          text: 'Gave a talk titled, "Ethical Perspectives of AI" to graduate students at the Department of Material Sciences, University of Denver.',
          link: "https://docs.google.com/presentation/d/e/2PACX-1vQ9e8YoL_JvkHoZxx_E27kwqOKOYyOIQ7Q9CiJWkTKwZuVheooS1AicZfKGw_vU1Q/pub?start=true&loop=true&delayms=5000&slide=id.p1",
          linkTitle: "[Slides]",
        },
        {
          text: `Published an article on Medium titled, "What AI Still Can't Do #001".`,
          link: "https://tolusophy.medium.com/what-ai-still-cant-do-001-69c25d2f3a7e",
        },
      ],
    },
    {
      title: "August",
      data: [
        {
          text: `Published an article on Medium titled, "What AI Still Can't Do #002".`,
          link: "https://tolusophy.medium.com/what-ai-still-cant-do-002-e8893991012",
        },
        {
          text: `Published an article on Medium titled, "Impact of Optimizers in Image Classifiers".`,
          link: "https://pub.towardsai.net/impact-of-optimizers-in-image-classifiers-3b04ed20823a",
        },
      ],
    },
    {
      title: "October",
      data: [
        {
          text: `Defended my master's thesis titled, "PolyKervNets: Activation-Free Neural Networks for Efficient Private Inference" at the Mohamed Bin Zayed University of Artificial Intelligence.`,
          link: "",
        },
      ],
    },
    {
      title: "December",
      data: [
        {
          text: `My first ever research paper, based on my master's thesis titled, "PolyKervNets: Activation-Free Neural Networks for Efficient Private Inference" was accepted for oral presentation at the 2023 IEEE Secure and Trustworthy Machine Learning (SaTML) conference.`,
          link: "https://openreview.net/pdf?id=OGzt9NKC0lO",
          linkTitle: "[Paper]",
        },
        {
          text: `Published an article on Medium titled, "What AI Still Can't Do #003".`,
          link: "https://pub.towardsai.net/what-ai-still-cant-do-003-c2123837dd90",
        },
        {
          text: `Published an article on Medium titled, "Choosing a Learning Rate for DNNs".`,
          link: "https://pub.towardsai.net/choosing-a-learning-rate-for-dnns-35c201b1b49b",
        },
      ],
    },
  ].reverse(),
};

const data2021: dataType = {
  year: 2021,
  contents: [
    {
      title: "January",
      data: [
        {
          text: "Started studying at MBZUAI.",
          link: "",
        },
      ],
    },
    {
      title: "August",
      data: [
        {
          text: "Started working as a Research Assistant at the SPriNT-AI lab.",
          link: "",
        },
      ],
    },
    {
      title: "2021 (THE BIG JUMP)",
      data: [
        {
          text: "Before this, my understanding of AI was rather limited. I had a grasp of the concept of automation, but I never really connected it to AI. My perception of AI was mainly influenced by what I had seen in movies, where it was often depicted as robotics. As a result, I developed a strong desire to study robotics based on those impressions. I also saw a video on YouTube which made me interested in anything automation.",
          link: "",
        },
      ],
    },
  ].reverse(),
};

const data2020: dataType = {
  year: 2020,
  contents: [
    {
      title: "February",
      data: [
        {
          text: "Stopped working as a Graduate Research Assistant at University of Ibadan.",
          link: "",
        },
      ],
    },
    {
      title: "May",
      data: [
        {
          text: "Graduated and got my master's degree in computer science.",
          link: "",
        },
      ],
    },
    {
      title: "June",
      data: [
        {
          text: "Accepted a fully funded scholarship to study Machine Learning at the Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI), UAE.",
          link: "",
        },
      ],
    },
    {
      title: "November",
      data: [
        {
          text: "Flew to Abu Dhabi to commence my master's degree at MBZUAI.",
          link: "",
        },
      ],
    },
  ].reverse(),
};

const data2019: dataType = {
  year: 2019,
  contents: [
    {
      title: "January 2019",
      data: [
        {
          text: "Started working as a Graduate Research & Teaching Assistant at the University of Ibadan.",
          link: "",
        },
      ],
    },
  ].reverse(),
};

const data2018: dataType = {
  year: 2018,
  contents: [
    {
      title: "January",
      data: [
        {
          text: "Started working as a Data Analyst at the Osun State Bureau of Work Efficiency & Productivity.",
          link: "",
        },
      ],
    },
    {
      title: "May",
      data: [
        {
          text: "Started my master's degree in computer science at the University of Ibadan.",
          link: "",
        },
      ],
    },
    {
      title: "December",
      data: [
        {
          text: "Left the Osun State Bureau of Work Efficiency & Productivity to focus on my graduate studies.",
          link: "",
        },
      ],
    },
  ].reverse(),
};

const data2017: dataType = {
  year: 2017,
  contents: [
    {
      title: "January",
      data: [
        {
          text: "Started working as a Systems Engineer at the Bureau of Information and Communication Technology (BICT), Ekiti State Government.",
          link: "",
        },
        {
          text: "Joined the Federal Road Safety Commission (FRSC) Community Development Service (CDS) Group.",
          link: "",
        },
      ],
    },
    {
      title: "April",
      data: [
        {
          text: "Became the Flag Cadet of the FRSC CDS group.",
          link: "",
        },
      ],
    },
    {
      title: "November",
      data: [
        {
          text: "Concluded my year of compulsory service",
          link: "",
        },
      ],
    },
  ].reverse(),
};

const data2016: dataType = {
  year: 2016,
  contents: [
    {
      title: "July",
      data: [
        {
          text: "Graduated and got my bachelor's degree in computer science.",
          link: "",
        },
      ],
    },
    {
      title: "November",
      data: [
        {
          text: " Started my one year of compulsory service (NYSC) for my country.",
          link: "",
        },
      ],
    },
  ].reverse(),
};

const data2015: dataType = {
  year: 2015,
  contents: [
    {
      title: "August",
      data: [
        {
          text: " Started working as a System Engineering Intern at MIS Unit, LAUTECH Teaching Hospital, Osun State.",
          link: "",
        },
      ],
    },
    {
      title: "November",
      data: [
        {
          text: " Completed my internship at LAUTECH.",
          link: "",
        },
      ],
    },
  ].reverse(),
};

const data2014: dataType = {
  year: 2014,
  contents: [
    {
      title: "August",
      data: [
        {
          text: "Started working as a Network Analyst Intern at INTECU, Obafemi Awolowo University, Osun State.",
          link: "",
        },
      ],
    },
    {
      title: "November",
      data: [
        {
          text: " Completed my internship at INTECU.",
          link: "",
        },
      ],
    },
  ].reverse(),
};

const data2012: dataType = {
  year: 2012,
  contents: [
    {
      title: "July",
      data: [
        {
          text: "Completed Secondary School and got my O' Level Certificates.",
          link: "",
        },
      ],
    },
    {
      title: "October",
      data: [
        {
          text: "Started as a Computer Science student at Adeleke University.",
          link: "",
        },
      ],
    },
  ].reverse(),
};

export const allData = [
  data2012,
  data2014,
  data2015,
  data2016,
  data2017,
  data2018,
  data2019,
  data2020,
  data2021,
  data2022,
  data2023,
  data2024,
  data2025,
  data2026,
];

export const years = allData.map((data) => data.year);

export const blogs = [
  {
    title: "Check my updated list of publications and research projects!",
    image: "/scholar.png",
    link: "https://scholar.google.com/citations?hl=en&user=Ji8fnw0AAAAJ&view_op=list_works&sortby=pubdate",
    authors: ["Toluwani Aremu"],
    venue: "Google Scholar",
    year: 2026,
  },
  {
    title: "WAXAL-NET: Finetuned Edge ASR Across 19 African Languages",
    image: "/waxal.png",
    link: "https://arxiv.org/pdf/2606.02375",
    authors: ["Toluwani Aremu", "et al."],
    venue: "arXiv",
    year: 2026,
  },
  {
    title: "Watermarking Should Be Treated as a Monitoring Primitive",
    image: "/wm_mon.png",
    link: "https://arxiv.org/pdf/2605.13095",
    authors: ["Toluwani Aremu", "Nils Lukas", "Jie Zhang"],
    venue: "arXiv",
    year: 2026,
  },
  {
    title: "Robust Safety Monitoring of Language Models via Activation Watermarking",
    image: "/actwm.png",
    link: "https://arxiv.org/pdf/2603.23171",
    authors: ["Toluwani Aremu", "Daniil Ognev", "Samuele Poppi", "Nils Lukas"],
    venue: "arXiv",
    year: 2026,
  },
  {
    title: "Mitigating Watermark Forgery in Generative Models via Randomized Key Selection",
    image: "/forger.png",
    link: "https://arxiv.org/pdf/2507.07871",
    authors: ["Toluwani Aremu", "Noor Hussein", "Munachiso Nwadike", "Samuele Poppi", "Jie Zhang", "Karthik Nandakumar", "Neil Gong", "Nils Lukas"],
    venue: "arXiv",
    year: 2026,
  },
  {
    title: "Aligning Stuttered-Speech Research with End-User Needs: Review, Survey, and Guidelines",
    image: "/stut.png",
    link: "https://arxiv.org/pdf/2604.20535",
    authors: ["Hawau Toyin", "Mutiah Apampa", "Toluwani Aremu", "Humaid Alblooshi", "A. Valente", "G. Leal", "Z. Yue", "Z. Talat", "Hanan Aldarmaki"],
    venue: "arXiv",
    year: 2026,
  },
  {
    title: "MirrorCheck: Efficient Adversarial Defense for Vision-Language Models",
    image: "/mirrorcheck.png",
    link: "https://openreview.net/pdf?id=pdIPR5TSXy",
    authors: ["Samar Fares*", "Klea Ziu*", "Toluwani Aremu*", "Nikita Durasov", "Martin Takáč", "Pascal Fua", "Karthik Nandakumar", "Ivan Laptev"],
    venue: "CVPR (AdvML) [Distinguished Paper🏆]",
    year: 2026,
  },
  {
    title: "Optimizing Adaptive Attacks against Watermarks for Language Models",
    image: "/wmark.png",
    link: "https://arxiv.org/pdf/2410.02440",
    authors: ["Abdulrahman Diaa", "Toluwani Aremu", "Nils Lukas"],
    venue: "ICML [Spotlight🏆]",
    year: 2025,
  },
  {
    title: "On the reliability of Large Language Models to misinformed and demographically informed prompts",
    image: "/llmreliable.png",
    link: "https://onlinelibrary.wiley.com/doi/pdf/10.1002/aaai.12208",
    authors: ["Toluwani Aremu", "Kemi Akinwehinmi", "Emeka Nwagu", "Syed Ahmed", "Rita Orji", "P. Arnau Del Amo", "Abdulmotaleb El Saddik"],
    venue: "AAAI Magazine",
    year: 2025,
  },
  {
    title: "Library-Like Behavior In Language Models is Enhanced by Self-Referencing Causal Cycles",
    image: "/llm.png",
    link: "https://aclanthology.org/2025.acl-long.1232.pdf",
    authors: ["Munachiso Nwadike", "Zangir Iklassov", "Toluwani Aremu", "T. Hiraoka", "B. Heinzerling", "V. Bojkovic", "H. Alqaubeh", "Martin Takáč", "Kentaro Inui"],
    venue: "ACL (Main)",
    year: 2025,
  },
  {
    title: "All Languages Matter: Evaluating LMMs on Culturally Diverse 100 Languages",
    image: "/lmm.png",
    link: "https://arxiv.org/pdf/2411.16508",
    authors: ["Ashmal Vayani", "Dinura Dissanayake", "Hasindri Watawana", "Noor Hassan", "...", "Toluwani Aremu", "et al."],
    venue: "CVPR [Spotlight🏆]",
    year: 2025,
  },
  {
    title: "A Call for Patience and Perspective",
    image: "/protest.webp",
    link: "https://x.com/tolusophy/status/1908792259832930563",
    authors: ["Toluwani Aremu"],
    venue: "X (Social)",
    year: 2025,
  },
  {
    title: "Human Social Mirrors and AI Looking Glass",
    image: "/ailookingglass.jpg",
    link: "https://pub.towardsai.net/human-social-mirrors-and-ai-looking-glass-1939919c02d9",
    authors: ["Toluwani Aremu"],
    venue: "Towards AI",
    year: 2025,
  },
  {
    title: "The Thinker vs. The Builder",
    image: "/thinkbuild.jpeg",
    link: "https://x.com/tolusophy/status/1900886093907849322",
    authors: ["Toluwani Aremu"],
    venue: "X (Social)",
    year: 2025,
  },
  {
    title: "Slow down!",
    image: "/slowdown.webp",
    link: "https://x.com/tolusophy/status/1887112651794235807",
    authors: ["Toluwani Aremu"],
    venue: "X (Social)",
    year: 2025,
  },
  {
    title: "ScholarFace: Scanning Faces, Discovering Minds",
    image: "/scholarface.png",
    link: "https://patents.google.com/patent/US12423369B2/en",
    authors: ["Wong Yu Kang", "Toluwani Aremu", "Younes Balah", "Maryam Nadeem", "Ivo Gollini Navarrete", "Abdulmotaleb El Saddik"],
    venue: "Patent",
    year: 2025,
  },
  {
    title: "The Dark Side of Boycotting and Cancel Culture",
    image: "/boycott.jpeg",
    link: "https://x.com/tolusophy/status/1827269838848319862",
    authors: ["Toluwani Aremu"],
    venue: "X (Social)",
    year: 2024,
  },
  {
    title: "Redefining Contributions: Shapley-Driven Federated Learning",
    image: "/shfl.png",
    link: "https://arxiv.org/pdf/2406.00569",
    authors: ["Nurbek Tastan", "Samar Fares", "Toluwani Aremu", "Samuel Horvath", "Karthik Nandakumar"],
    venue: "IJCAI",
    year: 2024,
  },
  {
    title: "SSIVD-Net: A Novel Salient Super Image Classification & Detection Technique for Weaponized Violence",
    image: "/violencenet.png",
    link: "https://arxiv.org/pdf/2207.12850",
    authors: ["Toluwani Aremu", "Li Zhiyuan", "Reem Alameeri", "Mustaqeem Khan", "Abdulmotaleb El Saddik"],
    venue: "SAI",
    year: 2024,
  },
  {
    title: "Accented Speech Recognition: The Inclusive Realm of Automatic Speech Recognition Systems",
    image: "/image-1.png",
    link: "https://tolusophy.medium.com/accented-speech-recognition-the-inclusive-realm-of-automatic-speech-recognition-systems-881ee480c502",
    authors: ["Toluwani Aremu"],
    venue: "Medium",
    year: 2023,
  },
  {
    title: "AI Text Detectors: Amazing Sleuths or WHAT?",
    image: "/image-2.png",
    link: "https://tolusophy.medium.com/ai-text-detectors-amazing-sleuths-or-what-31e4e2ca7803",
    authors: ["Toluwani Aremu"],
    venue: "Medium",
    year: 2023,
  },
  {
    title: "Unlocking Pandora's Box: Unveiling the Elusive Realm of AI Text Detection",
    image: "/aidet.png",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4470719",
    authors: ["Toluwani Aremu"],
    venue: "SSRN",
    year: 2023,
  },
  {
    title: "Learning Rate Schedulers",
    image: "/image-3.png",
    link: "https://pub.towardsai.net/learning-rate-schedulers-6bd7ae60ed47",
    authors: ["Toluwani Aremu"],
    venue: "Medium",
    year: 2023,
  },
  {
    title: "PolyKervNets: Activation-free Neural Networks For Efficient Private Inference",
    image: "/pkn.png",
    link: "https://openreview.net/pdf?id=OGzt9NKC0lO",
    authors: ["Toluwani Aremu", "Karthik Nandakumar"],
    venue: "IEEE SaTML",
    year: 2023,
  },
  {
    title: "Choosing a Learning Rate for DNNs",
    image: "/image-4.png",
    link: "https://pub.towardsai.net/choosing-a-learning-rate-for-dnns-35c201b1b49b",
    authors: ["Toluwani Aremu"],
    venue: "Medium",
    year: 2022,
  },
  {
    title: "What AI Still Can’t Do #003",
    image: "/image-5.png",
    link: "https://pub.towardsai.net/what-ai-still-cant-do-003-c2123837dd90",
    authors: ["Toluwani Aremu"],
    venue: "Medium",
    year: 2022,
  },
  {
    title: "Impact of Optimizers in Image Classifiers",
    image: "/image-6.png",
    link: "https://pub.towardsai.net/impact-of-optimizers-in-image-classifiers-3b04ed20823a",
    authors: ["Toluwani Aremu"],
    venue: "Medium",
    year: 2022,
  },
  {
    title: "What AI still can’t do #002",
    image: "/image-7.png",
    link: "https://tolusophy.medium.com/what-ai-still-cant-do-002-e8893991012",
    authors: ["Toluwani Aremu"],
    venue: "Medium",
    year: 2022,
  },
  {
    title: "What AI still can’t do #001",
    image: "/image-8.png",
    link: "https://tolusophy.medium.com/what-ai-still-cant-do-001-69c25d2f3a7e",
    authors: ["Toluwani Aremu"],
    venue: "Medium",
    year: 2022,
  },
];

export const email = "tioluwaniaremu@gmail.com";
