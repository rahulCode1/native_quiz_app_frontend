import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch } from "react-redux";
import { useFonts } from "expo-font";
import store from "./store/store.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import QuizScreen from "./screens/QuizScreen";
import Colors from "./components/constants/Color.js";
import {
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";

import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";
import Ionicons from "@react-native-vector-icons/ionicons";
import LoadingSpinner from "./components/ui/LoadingSpinner.js";
import AboutUsScreen from "./screens/information/AboutUsScreen.js";
import ContactUsScreen from "./screens/information/ContactUsScreen.js";
import DisclamerScreen from "./screens/information/DisclaimerScreen.js";
import PrivacyPolicyScreen from "./screens/information/PrivacyPolicyScreen.js";
import TermsScreen from "./screens/information/TermsScreen.js";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="AboutUs"
      screenOptions={{
        drawerActiveTintColor: Colors.activeTintColor,
        drawerInactiveTintColor: Colors.inActiveTintColor,
      }}
    >
      <Drawer.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={{
          title: "About Us",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="ContactUs"
        component={ContactUsScreen}
        options={{
          title: "Contact Us",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Disclamer"
        component={DisclamerScreen}
        options={{
          title: "Disclaimer",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="alert-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={{
          title: "Privacy Policy",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="shield-checkmark-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Terms"
        component={TermsScreen}
        options={{
          title: "Terms & Conditions",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.background,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={QuizScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,

    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <LoadingSpinner size={30} />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabs.Navigator
            screenOptions={{
              tabBarActiveTintColor: Colors.tabActiveTint,
              tabBarInactiveTintColor: Colors.tabInactiveTint,
              tabBarActiveBackgroundColor: Colors.tabActiveBackground,
            }}
          >
            <BottomTabs.Screen
              name="Quiz"
              component={StackNavigator}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="reader-outline" color={color} size={size} />
                ),
              }}
            />
            <BottomTabs.Screen
              name="aboutUs"
              component={DrawerNavigator}
              options={{
                title: "About Us",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons
                    name="ellipsis-horizontal-circle-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </BottomTabs.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
