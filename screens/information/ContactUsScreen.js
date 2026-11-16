import InformationScreen from "./InformationScreen";

const ContactUsScreen = () => (
  <InformationScreen
    title="Contact Us"
    subtitle="We would be happy to hear from you."
    showContact
    sections={[
      {
        title: "Need Help?",
        content: [
          "Have a question, found an incorrect answer, noticed an issue, or want to share feedback? Feel free to contact the developer.",
          "You can reach us using the email address or phone number below.",
        ],
      },
    ]}
  />
);

export default ContactUsScreen