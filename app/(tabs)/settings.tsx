// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { router } from "expo-router";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default function Settings() {
//   async function handleLogout() {
//   // ❌ REMOVE LOGIN STATE
//   await AsyncStorage.removeItem("isLoggedIn");

//   // 👉 BACK TO LOGIN
//   router.replace("/login");
// }


//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Settings</Text>

//       <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
//         <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 30,
//   },
//   logoutBtn: {
//     backgroundColor: "#c0392b",
//     paddingVertical: 14,
//     paddingHorizontal: 40,
//     borderRadius: 10,
//   },
//   logoutText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Settings() {
  const [driverName, setDriverName] = useState("Driver");
  const [busNo, setBusNo] = useState("—");
  const [phone, setPhone] = useState("—");
  const [username, setUsername] = useState("—");

  useEffect(() => {
    (async () => {
      setDriverName(await AsyncStorage.getItem("driverName") || "Driver");
      setBusNo(await AsyncStorage.getItem("driverBusNo") || "—");
      setPhone(await AsyncStorage.getItem("driverPhone") || "—");
      setUsername(await AsyncStorage.getItem("driverUser") || "—");
    })();
  }, []);

  function confirmLogout() {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", style: "destructive", onPress: doLogout },
      ]
    );
  }

  async function doLogout() {
    await AsyncStorage.multiRemove(["isLoggedIn", "driverName", "driverBusNo", "driverPhone", "driverUser"]);
    router.replace("/login");
  }

  const initials = driverName.split(" ").map((w: string) => w[0]).join("").toUpperCase().slice(0, 2);

  return (
    <LinearGradient colors={["#0f2027", "#203a43", "#2c5364"]} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={S.scroll} showsVerticalScrollIndicator={false}>

        {/* Page Title */}
        <Text style={S.pageTitle}>Settings</Text>

        {/* ── Driver Profile Card ── */}
        <View style={S.profileCard}>
          <View style={S.avatar}>
            <Text style={S.avatarText}>{initials}</Text>
          </View>
          <Text style={S.driverName}>{driverName}</Text>
          <Text style={S.driverUsername}>@{username}</Text>

          <View style={S.badgeRow}>
            <View style={S.badge}>
              <Ionicons name="bus-outline" size={13} color="#4f46e5" />
              <Text style={S.badgeText}>{busNo}</Text>
            </View>
            <View style={S.badge}>
              <Ionicons name="call-outline" size={13} color="#4f46e5" />
              <Text style={S.badgeText}>{phone}</Text>
            </View>
          </View>

          <View style={S.statusOnline}>
            <View style={S.greenDot} />
            <Text style={S.statusText}>On Duty</Text>
          </View>
        </View>

        {/* ── Info Grid ── */}
        <View style={S.card}>
          <Text style={S.cardTitle}>Driver Information</Text>
          {[
            ["person-outline", "Full Name", driverName],
            ["call-outline", "Phone", phone],
            ["bus-outline", "Bus Number", busNo],
            ["person-circle-outline", "Username", username],
          ].map(([icon, label, value]) => (
            <View key={label} style={S.infoRow}>
              <View style={S.infoIconBox}>
                <Ionicons name={icon as any} size={18} color="#4f46e5" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={S.infoLabel}>{label}</Text>
                <Text style={S.infoValue}>{value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* ── App Info ── */}
        <View style={S.card}>
          <Text style={S.cardTitle}>App Information</Text>
          {[
            ["information-circle-outline", "App Name", "GoBus Driver"],
            ["code-slash-outline", "Version", "1.0.0"],
            ["server-outline", "Backend", "Firebase Realtime DB"],
            ["navigate-circle-outline", "GPS Engine", "Expo Location"],
          ].map(([icon, label, value]) => (
            <View key={label} style={S.infoRow}>
              <View style={S.infoIconBox}>
                <Ionicons name={icon as any} size={18} color="#10b981" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={S.infoLabel}>{label}</Text>
                <Text style={S.infoValue}>{value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* ── Logout ── */}
        <TouchableOpacity style={S.logoutBtn} onPress={confirmLogout} activeOpacity={0.85}>
          <Ionicons name="log-out-outline" size={22} color="#fff" />
          <Text style={S.logoutText}>LOGOUT</Text>
        </TouchableOpacity>

        <Text style={S.footer}>GoBus Driver App · All rights reserved</Text>
      </ScrollView>
    </LinearGradient>
  );
}

const S = StyleSheet.create({
  scroll: { padding: 20, paddingTop: Platform.OS === "ios" ? 60 : 50, paddingBottom: 50 },
  pageTitle: { fontSize: 26, fontWeight: "800", color: "#fff", marginBottom: 20 },

  // Profile Card
  profileCard: { backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 24, padding: 26, alignItems: "center", marginBottom: 16, borderWidth: 1, borderColor: "rgba(255,255,255,0.15)" },
  avatar: { width: 90, height: 90, borderRadius: 45, backgroundColor: "#4f46e5", alignItems: "center", justifyContent: "center", marginBottom: 14, borderWidth: 3, borderColor: "rgba(255,255,255,0.3)" },
  avatarText: { fontSize: 36, fontWeight: "800", color: "#fff" },
  driverName: { fontSize: 22, fontWeight: "800", color: "#fff", marginBottom: 4 },
  driverUsername: { fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 14 },

  badgeRow: { flexDirection: "row", gap: 10, marginBottom: 14 },
  badge: { flexDirection: "row", alignItems: "center", gap: 6, backgroundColor: "rgba(255,255,255,0.95)", borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6 },
  badgeText: { fontSize: 12, fontWeight: "700", color: "#0f172a" },

  statusOnline: { flexDirection: "row", alignItems: "center", gap: 7, backgroundColor: "#dcfce7", borderRadius: 20, paddingHorizontal: 14, paddingVertical: 6 },
  greenDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#16a34a" },
  statusText: { fontSize: 12, fontWeight: "700", color: "#16a34a" },

  // Info Card
  card: { backgroundColor: "#fff", borderRadius: 20, padding: 20, marginBottom: 14, shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 4 },
  cardTitle: { fontSize: 15, fontWeight: "800", color: "#0f172a", marginBottom: 16 },
  infoRow: { flexDirection: "row", alignItems: "center", gap: 14, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#f1f5f9" },
  infoIconBox: { width: 40, height: 40, borderRadius: 12, backgroundColor: "#f1f5f9", alignItems: "center", justifyContent: "center" },
  infoLabel: { fontSize: 11, fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 },
  infoValue: { fontSize: 14, fontWeight: "600", color: "#0f172a" },

  // Logout
  logoutBtn: { backgroundColor: "#dc2626", borderRadius: 16, paddingVertical: 16, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 20, shadowColor: "#dc2626", shadowOpacity: 0.4, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 5 },
  logoutText: { color: "#fff", fontSize: 16, fontWeight: "800", letterSpacing: 1 },

  footer: { textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: 11 },
});