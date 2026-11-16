import InformationScreen from "./InformationScreen";

const CONTACT_EMAIL = "rahul7497678@gmail.com";
const CONTACT_PHONE = "6377408633";

const PrivacyPolicyScreen = () => (
  <InformationScreen
    title="Privacy Policy"
    subtitle="Your privacy matters to us."
    sections={[
      {
        title: "Information We Collect",
        content: [
          "In the current version of this application, we do not ask users to register or provide personal information such as their name, email address, or phone number.",
          "We aim to keep the application usable without requiring users to submit personal details.",
        ],
      },
      {
        title: "Quiz Activity",
        content: [
          "You can use the quiz features to answer questions and practice subjects and topics. Any information stored or processed by the application should be limited to what is necessary to provide these features.",
        ],
      },
      {
        title: "Third-Party Services",
        content: [
          "If third-party services such as advertising, analytics, crash reporting, or external links are introduced, their data practices may also apply. This policy will be updated to explain those services before they are introduced.",
        ],
      },
      {
        title: "Data Security",
        content: [
          "We take reasonable steps to protect information processed by the application. However, no method of electronic storage or transmission can be guaranteed to be completely secure.",
        ],
      },
      {
        title: "Changes to This Policy",
        content: [
          "This Privacy Policy may be updated when application features or data practices change. The latest version will be made available through the application.",
        ],
      },
      {
        title: "Contact",
        content: [
          `For privacy-related questions, contact us at ${CONTACT_EMAIL}.`,
        ],
      },
    ]}
  />
);

export default PrivacyPolicyScreen;
