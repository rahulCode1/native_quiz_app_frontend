import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Linking,
} from "react-native";

import Colors from "../../components/constants/Color";
import Fonts from "../../components/constants/Fonts";


const CONTACT_EMAIL = "rahul7497678@gmail.com";
const CONTACT_PHONE = "6377408633";

const InformationSection = ({ title, content }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {content.map((paragraph, index) => (
        <Text key={index} style={styles.sectionText}>
          {paragraph}
        </Text>
      ))}
    </View>
  );
};

const ContactItem = ({ label, value, onPress }) => (
  <Pressable
    onPress={onPress}
    android_ripple={{ color: "#D0D1D1" }}
    style={styles.contactItem}
  >
    <View style={styles.contactTextContainer}>
      <Text style={styles.contactLabel}>{label}</Text>
      <Text style={styles.contactValue}>{value}</Text>
    </View>
    <Text style={styles.contactArrow}>↗</Text>
  </Pressable>
);

const InformationScreen = ({
  title,
  subtitle,
  sections = [],
  showContact = false,
}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headingContainer}>
        <Text style={styles.pageLabel}>INFORMATION</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {sections.map((section, index) => (
        <InformationSection
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}

      {showContact && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get in touch</Text>

          <ContactItem
            label="EMAIL ADDRESS"
            value={CONTACT_EMAIL}
            onPress={() => Linking.openURL(`mailto:${CONTACT_EMAIL}`)}
          />

          <ContactItem
            label="CONTACT NUMBER"
            value={CONTACT_PHONE}
            onPress={() => Linking.openURL(`tel:${CONTACT_PHONE}`)}
          />
        </View>
      )}

      <Text style={styles.footer}>Thank you for using our application.</Text>
    </ScrollView>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  headingContainer: {
    marginBottom: 26,
  },
  pageLabel: {
    fontFamily: Fonts.manropeSemiBold,
    fontSize: 10,
    letterSpacing: 2,
    color: Colors.textSecondary,
    marginBottom: 10,
  },
  title: {
    fontFamily: Fonts.spaceSemiBold,
    fontSize: 28,
    color: Colors.textPrimary,
  },
  subtitle: {
    fontFamily: Fonts.manropeRegular,
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 6,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: Fonts.spaceSemiBold,
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  sectionText: {
    fontFamily: Fonts.manropeRegular,
    fontSize: 13,
    lineHeight: 22,
    color: Colors.textSecondary,
    marginBottom: 9,
  },
  contactItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 14,
    marginTop: 10,
    overflow: "hidden",
  },
  contactTextContainer: {
    flex: 1,
    gap: 5,
  },
  contactLabel: {
    fontFamily: Fonts.manropeSemiBold,
    fontSize: 9,
    letterSpacing: 1.5,
    color: Colors.textSecondary,
  },
  contactValue: {
    fontFamily: Fonts.manropeSemiBold,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  contactArrow: {
    fontSize: 20,
    color: Colors.textSecondary,
    marginLeft: 10,
  },
  footer: {
    fontFamily: Fonts.manropeRegular,
    fontSize: 11,
    color: Colors.textTertiary,
    textAlign: "center",
    marginTop: 10,
  },
});
