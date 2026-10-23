import ieukImage from "../assets/IEUK.png";
import shuImage from "../assets/SHU.png";
import barnardoImg from "../assets/Barnardo.jpg";
import goGlobalImg from "../assets/GoGlobal.png";
import printecImg from "../assets/printec.png";
import japan from "../assets/japan.jpg";
import china from "../assets/china.png";
import korea from "../assets/korea.jpg";
import uk from "../assets/uk-flag.png";
import mm from "../assets/myanmar-flag.png";

export const EXPERIENCE = [
    {
        title: "SHU International Student Ambassador",
        org: "Sheffield Hallam University",
        orgLink: "https://www.shu.ac.uk/goglobal",
        orgImage: goGlobalImg,
        period: "Sept 2026 - Present",
        description: "Represent the university to new international students, sitting at the help desk and leading social events",
        logo: null,
    },

    {
        title: "IEUK Virtual Internship",
        org: "Bright Network UK",
        orgLink: "https://www.brightnetwork.co.uk/internship-experience-uk/ieuk-2026-technology-engineering",
        orgImage: ieukImage,
        period: "June 2026",
        description: "Completed a four-day virtual internship of Technology & Engineering Sector featuring industry insights, professional skills development",
        logo: null,
    },

    {
        title: "Operator",
        org: "Printec H.T. Electronics Corp., New Taipei, Taiwan",
        orgLink: "https://www.printecht.com/en/",
        orgImage: printecImg,
        period: "Nov 2024 - Aug 2025",
        description: "Worked as a production line operator, gaining hand-on experience in manufacturing and packaging",
        logo: null,
    },

    {
        title: "Retail Volunteer",
        org: "Barnardo's Children Charity",
        orgLink: "https://www.barnardos.org.uk/get-support?gclsrc=aw.ds&gad_source=1&gad_campaignid=344943041&gbraid=0AAAAAD6aeUN9e-HTAFzGRLNmlhnNJjL4t&gclid=Cj0KCQjw5vLVBhCiARIsAD56SFIpKconYQtynJeoaEdhpmp9RokibLZIdmizvLFPcsJccZlmw_84y6UaAiUHEALw_wcB",
        orgImage: barnardoImg,
        period: "Oct 2025 - Feb 2026",
        description: "Performed retail operations and customer service",
        logo: null,
    },
];

export const EDUCATION = [
    {
        title: "BSc Software Engineering",
        org: "Sheffield Hallam University",
        orgLink: "https://www.shu.ac.uk/courses/computing/beng-honours-software-engineering/full-time/2027",
        orgImage: shuImage,
        period: "2025 – Present",
        description: "Second-year Software Engineering student.",
        logo: null,
    },
    {
        title: "Ontario Secondary School Diploma (OSSD)",
        org: "Kanata Secondary School, Ottawa, Canada",
        orgLink: "https://kanataacademy.com/academics/high-school/",
        period: "May 2023 - Mar 2024",
        description: "Completed high school education with a focus on computer science.",
        logo: null,
    },
];

export const CERTIFICATIONS = [
    {
        title: "Hallam Bronze Award",
        org: "Sheffield Hallam University",
        orgLink: "https://www.shu.ac.uk/careers/programmes/hallam-award",
        period: "October 2026",
        description: "Acheived Hallam Bronze award for taking part in extracurricular activities and personal development."
    },
    {
        title: "AI Literacy",
        org: "Sheffield Hallam University",
        orgLink: "https://www.shu.ac.uk/",
        period: "March 2026",
        description: "Completed training in AI literacy and responsible AI use.",
    }
];

export const LANGUAGES = [
    { title: "English", org: "IELTS", logo: uk },
    { title: "Burmese", org: "Native", logo: mm },
    { title: "JLPT N3", org: "Japanese Language Proficiency Certificate", logo: japan },
    { title: "HSK 3", org: "Chinese Language Proficiency Certificate", logo: china },
    { title: "Korean", org: "Self-study", logo: korea },
];
