// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { router } from "expo-router";
// import { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Pressable,
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// export default function Login() {
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const isDisabled = phone.length !== 10 || !password;

//   async function handleLogin() {
//     if (phone === "9876543210" && password === "driver123") {
//       await AsyncStorage.setItem("isLoggedIn", "true");
//       router.replace("/(tabs)");
//     } else {
//       alert("Invalid phone or password");
//     }
//   }

//   return (
//     <LinearGradient
//       colors={["#1e3c72", "#2a5298"]}
//       style={styles.container}
//     >
//       <View style={styles.card}>
//         {/* Header */}
//         <Text style={styles.title}>Driver Login</Text>
//         <Text style={styles.subtitle}>Sign in to continue</Text>

//         {/* Phone */}
//         <Text style={styles.label}>Phone Number</Text>
//         <TextInput
//           style={styles.input}
//           keyboardType="number-pad"
//           maxLength={10}
//           value={phone}
//           onChangeText={(t) => setPhone(t.replace(/[^0-9]/g, ""))}
//         />

//         {/* Password */}
//         <Text style={styles.label}>Password</Text>
//         <View style={styles.passwordRow}>
//           <TextInput
//             style={styles.passwordInput}
//             secureTextEntry={!showPassword}
//             value={password}
//             onChangeText={setPassword}
//           />
//           <Pressable onPress={() => setShowPassword(!showPassword)}>
//             <MaterialIcons
//               name={showPassword ? "visibility" : "visibility-off"}
//               size={22}
//               color="#555"
//             />
//           </Pressable>
//         </View>

//         {/* Button */}
//         <TouchableOpacity
//           style={[styles.button, isDisabled && styles.buttonDisabled]}
//           disabled={isDisabled}
//           onPress={handleLogin}
//         >
//           <Text style={styles.buttonText}>LOGIN</Text>
//         </TouchableOpacity>

//         <Text style={styles.forgot}>Forgot your password?</Text>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },

//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 16,
//     padding: 28,
//     elevation: 6, // Android shadow
//     shadowColor: "#000", // iOS shadow
//     shadowOpacity: 0.15,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 4 },
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#1e3c72",
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#777",
//     textAlign: "center",
//     marginBottom: 30,
//     marginTop: 6,
//   },

//   label: {
//     fontSize: 13,
//     color: "#555",
//     marginBottom: 6,
//   },

//   input: {
//     borderBottomWidth: 1.5,
//     borderBottomColor: "#bbb",
//     fontSize: 16,
//     paddingVertical: 8,
//     marginBottom: 26,
//   },

//   passwordRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderBottomWidth: 1.5,
//     borderBottomColor: "#bbb",
//     marginBottom: 36,
//   },
//   passwordInput: {
//     flex: 1,
//     fontSize: 16,
//     paddingVertical: 8,
//   },

//   button: {
//     backgroundColor: "#1e3c72",
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: "center",
//   },
//   buttonDisabled: {
//     backgroundColor: "#9bb0d3",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "700",
//     letterSpacing: 1,
//   },

//   forgot: {
//     textAlign: "center",
//     color: "#777",
//     marginTop: 18,
//     fontSize: 13,
//   },
// });
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// ── Hardcoded drivers (replace with Firebase Auth later) ──
const DRIVER_ACCOUNTS: Record<string, { password: string; name: string; busNo: string; phone: string }> = {
  driver1: { password: "driver123", name: "Ramesh Kumar", busNo: "TN-01-AB-1234", phone: "9876543210" },
  driver2: { password: "driver456", name: "Suresh Babu", busNo: "TN-01-CD-5678", phone: "9123456780" },
  driver3: { password: "driver789", name: "Arjun Selvam", busNo: "TN-01-EF-9012", phone: "9988776655" },
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const isDisabled = !username.trim() || !password.trim() || loading;

  function validate() {
    let valid = true;
    setUsernameErr("");
    setPasswordErr("");
    if (!username.trim()) { setUsernameErr("Username is required"); valid = false; }
    if (!password.trim()) { setPasswordErr("Password is required"); valid = false; }
    return valid;
  }

  async function handleLogin() {
    if (!validate()) return;
    setLoading(true);

    // Simulate network delay (replace with Firebase Auth)
    await new Promise(r => setTimeout(r, 1000));

    const driver = DRIVER_ACCOUNTS[username.toLowerCase().trim()];

    if (driver && driver.password === password) {
      // Save session
      await AsyncStorage.setItem("isLoggedIn", "true");
      await AsyncStorage.setItem("driverName", driver.name);
      await AsyncStorage.setItem("driverBusNo", driver.busNo);
      await AsyncStorage.setItem("driverPhone", driver.phone);
      await AsyncStorage.setItem("driverUser", username.toLowerCase().trim());
      router.replace("/(tabs)");
    } else {
      setLoading(false);
      setPasswordErr("Invalid username or password");
    }
  }

  return (
    <LinearGradient colors={["#0f2027", "#203a43", "#2c5364"]} style={styles.bg}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* ── App Brand ── */}
          <View style={styles.brandRow}>
            <View style={styles.busIcon}>
              <Ionicons name="bus" size={38} color="#fff" />
            </View>
            <Text style={styles.appName}>GoBus</Text>
            <Text style={styles.appTagline}>Driver Console</Text>
          </View>

          {/* ── Card ── */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Welcome Back 👋</Text>
            <Text style={styles.cardSub}>Sign in to start your trip</Text>

            {/* Username */}
            <Text style={styles.label}>Username</Text>
            <View style={[styles.inputRow, usernameErr ? styles.inputErr : null]}>
              <Ionicons name="person-outline" size={20} color="#6b7280" style={styles.inputIcon} />
              <TextInput
                style={styles.inputField}
                placeholder="Enter your username"
                placeholderTextColor="#9ca3af"
                autoCapitalize="none"
                autoCorrect={false}
                value={username}
                onChangeText={t => { setUsername(t); setUsernameErr(""); }}
                returnKeyType="next"
              />
              {username.length > 0 && (
                <TouchableOpacity onPress={() => setUsername("")}>
                  <Ionicons name="close-circle" size={18} color="#9ca3af" />
                </TouchableOpacity>
              )}
            </View>
            {usernameErr ? <Text style={styles.errText}>{usernameErr}</Text> : null}

            {/* Password */}
            <Text style={styles.label}>Password</Text>
            <View style={[styles.inputRow, passwordErr ? styles.inputErr : null]}>
              <Ionicons name="lock-closed-outline" size={20} color="#6b7280" style={styles.inputIcon} />
              <TextInput
                style={styles.inputField}
                placeholder="Enter your password"
                placeholderTextColor="#9ca3af"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={t => { setPassword(t); setPasswordErr(""); }}
                returnKeyType="done"
                onSubmitEditing={handleLogin}
              />
              <Pressable onPress={() => setShowPass(p => !p)}>
                <MaterialIcons
                  name={showPassword ? "visibility" : "visibility-off"}
                  size={22}
                  color="#9ca3af"
                />
              </Pressable>
            </View>
            {passwordErr ? <Text style={styles.errText}>{passwordErr}</Text> : null}

            {/* Login Button */}
            <TouchableOpacity
              style={[styles.loginBtn, isDisabled && styles.loginBtnDisabled]}
              disabled={isDisabled}
              onPress={handleLogin}
              activeOpacity={0.85}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <>
                  <Ionicons name="log-in-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
                  <Text style={styles.loginBtnText}>SIGN IN</Text>
                </>
              )}
            </TouchableOpacity>

            <Text style={styles.forgot}>Forgot password? Contact admin</Text>

            {/* Demo accounts hint */}
            <View style={styles.hintBox}>
              <Text style={styles.hintTitle}>📋 Demo Accounts</Text>
              {Object.entries(DRIVER_ACCOUNTS).map(([u, d]) => (
                <TouchableOpacity key={u} onPress={() => { setUsername(u); setPassword(d.password); setUsernameErr(""); setPasswordErr(""); }} style={styles.hintRow}>
                  <Ionicons name="person-circle-outline" size={18} color="#2c5364" />
                  <Text style={styles.hintText}><Text style={{ fontWeight: "700" }}>{u}</Text>  ·  {d.password}  ·  {d.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <Text style={styles.footer}>GoBus Driver App v1.0</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  scroll: { flexGrow: 1, justifyContent: "center", padding: 22, paddingTop: 60, paddingBottom: 40 },

  brandRow: { alignItems: "center", marginBottom: 32 },
  busIcon: { width: 76, height: 76, borderRadius: 24, backgroundColor: "rgba(255,255,255,0.15)", alignItems: "center", justifyContent: "center", marginBottom: 12, borderWidth: 1.5, borderColor: "rgba(255,255,255,0.25)" },
  appName: { fontSize: 32, fontWeight: "800", color: "#ffffff", letterSpacing: 1 },
  appTagline: { fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 3, letterSpacing: 2, textTransform: "uppercase" },

  card: { backgroundColor: "#fff", borderRadius: 24, padding: 26, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 20, shadowOffset: { width: 0, height: 8 }, elevation: 10 },
  cardTitle: { fontSize: 22, fontWeight: "800", color: "#0f172a", marginBottom: 4 },
  cardSub: { fontSize: 13, color: "#94a3b8", marginBottom: 28 },

  label: { fontSize: 12, fontWeight: "700", color: "#374151", marginBottom: 7, textTransform: "uppercase", letterSpacing: 0.5 },
  inputRow: { flexDirection: "row", alignItems: "center", borderWidth: 1.5, borderColor: "#e5e7eb", borderRadius: 14, paddingHorizontal: 14, marginBottom: 6, backgroundColor: "#f9fafb", height: 52 },
  inputErr: { borderColor: "#ef4444", backgroundColor: "#fff5f5" },
  inputIcon: { marginRight: 10 },
  inputField: { flex: 1, fontSize: 15, color: "#0f172a" },
  errText: { fontSize: 12, color: "#ef4444", marginBottom: 14, marginLeft: 4 },

  loginBtn: { backgroundColor: "#0f2027", borderRadius: 30, paddingVertical: 16, alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 10, shadowColor: "#0f2027", shadowOpacity: 0.4, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 5 },
  loginBtnDisabled: { backgroundColor: "#9ca3af", shadowOpacity: 0 },
  loginBtnText: { color: "#fff", fontSize: 16, fontWeight: "800", letterSpacing: 1.5 },

  forgot: { textAlign: "center", color: "#94a3b8", marginTop: 16, fontSize: 13 },

  hintBox: { marginTop: 24, backgroundColor: "#f0f9ff", borderRadius: 14, padding: 14, borderWidth: 1, borderColor: "#bae6fd" },
  hintTitle: { fontSize: 13, fontWeight: "700", color: "#0369a1", marginBottom: 10 },
  hintRow: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 8 },
  hintText: { fontSize: 12, color: "#0f172a", flex: 1 },

  footer: { textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 24 },
});
