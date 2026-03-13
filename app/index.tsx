import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    const value = await AsyncStorage.getItem("isLoggedIn");
    setLoggedIn(value === "true");
    setLoading(false);
  }

  if (loading) {
    return <View />; // blank screen while checking
  }

  // 🔁 DECIDE FIRST SCREEN
  return loggedIn ? (
    <Redirect href="/(tabs)" />
  ) : (
    <Redirect href="/login" />
  );
}
