export const socialLinks = [
  {
    title: "github",
    link: "#",
  },
  {
    title: "medium",
    link: "#",
  },
  {
    title: "linkedin",
    link: "#",
  },
  {
    title: "instagram",
    link: "#",
  },
  {
    title: "google scholar",
    link: "#",
  },
  {
    title: "INFO@TOLUWANI.EA",
    link: "#",
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
    }[];
  }[];
};

const data2023: dataType = {
  year: 2023,
  contents: [
    {
      title: "January",
      data: [
        {
          text: "Graduated from Mohamed Bin Zayed University of Artificial Intelligence with a MSc in Machine Learning.",
          link: "",
        },
      ],
    },
    {
      title: "February",
      data: [
        {
          text: 'Published an article on Medium titled, "Learning Rate Schedulers".',
          link: "https://www.google.com",
        },
        {
          text: "Started a new exciting role as an Applied Science Intern at G42 Healthcare.",
          link: "",
        },
        {
          text: "Started a new exciting role as an AI Researcher at the MCR and Metaverse Lab at MBZUAI.",
          link: "",
        },
      ],
    },
    {
      title: "April",
      data: [
        {
          text: "Concluded my internship at G42 Healthcare.",
          link: "",
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
          text: 'Published a preprint on Research Square and arXiv titled, "SSIVD-Net: A Novel Salient Super Image Classification & Detection Technique for Weaponized Violence." [read on RS|read on arXiv]',
          link: "",
        },
        {
          text: 'Published a preprint on SSRN titled, "Unlocking Pandoras Box: Unveiling the Elusive Realm of AI Text Detection."',
          link: "https://www.google.com",
        },
        {
          text: 'Published an article on Medium titled, "AI Text Detectors: Amazing Sleuths or WHAT?"',
          link: "https://www.google.com",
        },
        {
          text: "Got my first ever citation on my published PolyKervNet paper.",
          link: "",
        },
      ],
    },
    {
      title: "July",
      data: [
        {
          text: 'Published an article on Medium titled, "Accented Speech Recognition: The Inclusive Realm of Automatic Speech Recognition Systems."',
          link: "https://www.google.com",
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
          text: "Started PhD in Machine Learning at MBZUAI.",
          link: "",
        },
      ],
    },
  ],
};

const data2022: dataType = {
  year: 2022,
  contents: [
    {
      title: "July",
      data: [
        {
          text: 'Gave a talk titled, "Ethical Perspectives of AI" to graduate students at the Department of Material Sciences, University of Denver.',
          link: "",
          linkTitle: "Slides",
        },
        {
          text: `Published an article on Medium titled, "What AI Still Can't Do #001".`,
          link: "link",
        },
      ],
    },
    {
      title: "August",
      data: [
        {
          text: `Published an article on Medium titled, "What AI Still Can't Do #002".`,
          link: "link",
        },
        {
          text: `Published an article on Medium titled, "Impact of Optimizers in Image Classifiers".`,
          link: "link",
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
          link: "hello",
          linkTitle: "Paper",
        },
        {
          text: `Published an article on Medium titled, "What AI Still Can't Do #003".`,
          link: "",
        },
        {
          text: `Published an article on Medium titled, "Choosing a Learning Rate for DNNs".`,
          link: "",
        },
      ],
    },
  ],
};

const data2021: dataType = {
  year: 2021,
  contents: [
    {
      title: "2021 (THE BIG JUMP)",
      data: [
        {
          text: "Before this, my understanding of AI was rather limited. I had a grasp of the concept of automation, but I never really connected it to AI. My perception of AI was mainly influenced by what I had seen in movies, where it was often depicted as robotics. As a result, I developed a strong desire to study robotics based on those impressions. I also saw a video on YouTube which made me interested in anything automation.",
          link: "",
        },
      ],
    },
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
  ],
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
  ],
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
  ],
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
  ],
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
  ],
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
  ],
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
  ],
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
  ],
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
  ],
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
];

// {
//   title: "",
//   data: [
//     {
//       text: "",
//       link: "",
//     },
//   ],
// },

// {
//   title: "",
//   data: [],
// },
