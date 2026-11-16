import InformationScreen from "./InformationScreen";

const CONTACT_EMAIL = "rahul7497678@gmail.com";
const CONTACT_PHONE = "6377408633";

const TermsScreen = () => (
  <InformationScreen
    title="Terms & Conditions"
    subtitle="Please read these terms before using the app."
    sections={[
      {
        title: "Acceptance of Terms",
        content: [
          "By accessing or using this application, you agree to these Terms & Conditions. If you do not agree, please discontinue using the application.",
        ],
      },
      {
        title: "Educational Purpose",
        content: [
          "This application is intended for educational purposes, self-study, and examination practice. It is not an official examination portal or a substitute for official study material.",
        ],
      },
      {
        title: "Content and Copyright",
        content: [
          "Educational questions, explanations, examination names, and other materials may be based on or reference third-party sources.",
          "Copyright and other intellectual property rights remain with their respective owners. Users must not reproduce, redistribute, or commercially exploit protected content without the required permission.",
        ],
      },
      {
        title: "Acceptable Use",
        content: [
          "Users agree not to misuse the application, interfere with its operation, attempt unauthorized access, or use the application for unlawful purposes.",
        ],
      },
      {
        title: "Accuracy of Information",
        content: [
          "We make reasonable efforts to maintain useful and accurate educational content. However, we do not guarantee that every question, answer, explanation, or reference will always be complete, accurate, or up to date.",
        ],
      },
      {
        title: "Changes to the Application",
        content: [
          "We may modify, update, suspend, or discontinue application features when necessary.",
        ],
      },
      {
        title: "Contact",
        content: [`For questions about these terms, contact ${CONTACT_EMAIL}.`],
      },
    ]}
  />
);

export default TermsScreen;
