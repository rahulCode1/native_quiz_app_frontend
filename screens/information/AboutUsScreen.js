import InformationScreen from "./InformationScreen"
import Colors from "../../components/constants/Color";
import Fonts from "../../components/constants/Fonts";

const AboutUsScreen = () => (
  <InformationScreen
    title="About Us"
    subtitle="Learn smarter. Prepare better."
    sections={[
      {
        title: "Who We Are",
        content: [
          "We are an independent educational quiz application developed by Rahul, with the aim of helping students prepare for competitive and academic examinations.",
          "Our goal is to make exam preparation easier through subject-wise questions, topic-based quizzes, difficulty levels, and previous-year examination questions.",
        ],
      },
      {
        title: "Our Content",
        content: [
          "Our educational content is prepared using references from RBSE, CBSE, and recognized educational institutions and certified institutes.",
          "Previous-year question papers are sourced from the official websites of the respective examination-conducting authorities, wherever available.",
          "We aim to provide organized and useful study material to help students practice and improve their knowledge.",
        ],
      },
      {
        title: "Our Mission",
        content: [
          "Our mission is to make quality educational practice accessible and convenient for students through a simple, focused, and user-friendly learning experience.",
        ],
      },
      {
        title: "Developer",
        content: [
          "Developed and maintained by Rahul.",
        ],
      },
    ]}
  />
);

export default AboutUsScreen