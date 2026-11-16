import InformationScreen from "./InformationScreen";

const DisclaimerScreen = () => (
  <InformationScreen
    title="Disclaimer"
    subtitle="Important information about our educational content."
    sections={[
      {
        title: "Independent Educational Application",
        content: [
          "This application is independently developed and is not affiliated with, endorsed by, or officially associated with RBSE, CBSE, or any government department, examination board, or educational institution.",
        ],
      },
      {
        title: "Sources of Educational Content",
        content: [
          "Questions and educational references may be based on materials from RBSE, CBSE, recognized educational institutions, and certified institutes.",
          "Previous-year examination papers are sourced from the official websites of the respective examination-conducting authorities, wherever available.",
        ],
      },
      {
        title: "Copyright and Ownership",
        content: [
          "The names, logos, trademarks, examination papers, and other third-party materials belong to their respective owners. Their appearance in this application does not imply any official partnership or endorsement.",
          "Public availability of a question paper does not automatically mean that it is free to reproduce or distribute. We aim to use third-party content only where permitted.",
        ],
      },
      {
        title: "Accuracy and Examination Updates",
        content: [
          "We try to provide accurate questions and answers, but errors or outdated information may occur. Always refer to the official examination authority's website for the latest syllabus, notifications, results, and examination information.",
        ],
      },
      {
        title: "No Guarantee of Results",
        content: [
          "Using this application does not guarantee success in any examination. Results depend on individual preparation, knowledge, and performance.",
        ],
      },
    ]}
  />
);

export default DisclaimerScreen