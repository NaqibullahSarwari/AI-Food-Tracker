import { Stack } from "expo-router";
import tw from "twrnc"

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#F9FAFB",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Login",
          headerShown: false, // Hide header on login screen if desired
        }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          title: "Forgot Password",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="verification-code"
        options={{
          title: "Vertification Code",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "adf",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="setnewpasswordscreen"
        options={{
          title: "",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen     
        name="scan-results-screen"
        options={{
          title: "Scan Results",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
