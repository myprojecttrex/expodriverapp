// // // import * as Location from "expo-location";
// // // import { Picker } from "@react-native-picker/picker";
// // // import { useState } from "react";
// // // import {
// // //   Keyboard,
// // //   KeyboardAvoidingView,
// // //   Platform,
// // //   StyleSheet,
// // //   Text,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   TouchableWithoutFeedback,
// // //   View,
// // // } from "react-native";
// // // import { LinearGradient } from "expo-linear-gradient";

// // // import { TAMIL_NADU_DISTRICTS } from "../../utils/districts";
// // // import useLocation from "../../utils/useLocation";

// // // export default function Home() {
// // //   const [tripCode, setTripCode] = useState("");
// // //   const [from, setFrom] = useState("");
// // //   const [to, setTo] = useState("");

// // //   const [startTime, setStartTime] = useState("");
// // //   const [pauseTime, setPauseTime] = useState("");
// // //   const [resumeTime, setResumeTime] = useState("");
// // //   const [endTime, setEndTime] = useState("");

// // //   const [status, setStatus] = useState<
// // //     "idle" | "started" | "paused" | "ended"
// // //   >("idle");

// // //   const driverId = "9876543210";
// // //   const getTime = () => new Date().toTimeString().slice(0, 8);

// // //   const { coords, gpsActive } = useLocation(
// // //     status === "started",
// // //     driverId,
// // //     tripCode
// // //   ) as {
// // //     coords: Location.LocationObjectCoords | null;
// // //     gpsActive: boolean;
// // //   };

// // //   function startTrip() {
// // //     if (!tripCode || !from || !to) {
// // //       alert("Enter trip code, From and To");
// // //       return;
// // //     }
// // //     Keyboard.dismiss();
// // //     setStartTime(getTime());
// // //     setStatus("started");
// // //   }

// // //   function pauseTrip() {
// // //     setPauseTime(getTime());
// // //     setStatus("paused");
// // //   }

// // //   function resumeTrip() {
// // //     setResumeTime(getTime());
// // //     setStatus("started");
// // //   }

// // //   function endTrip() {
// // //     setEndTime(getTime());
// // //     setStatus("ended");
// // //   }

// // //   return (
// // //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
// // //       <KeyboardAvoidingView
// // //         style={{ flex: 1 }}
// // //         behavior={Platform.OS === "ios" ? "padding" : undefined}
// // //       >
// // //         <LinearGradient colors={["#1e3c72", "#2a5298"]} style={styles.bg}>
// // //           {/* 👇 CENTER WRAPPER */}
// // //           <View style={styles.centerWrapper}>
// // //             <View style={styles.card}>
// // //               <Text style={styles.title}>Trip Dashboard</Text>

// // //               {/* Trip Code */}
// // //               <Text style={styles.label}>Trip Code</Text>
// // //               <TextInput
// // //                 style={styles.input}
// // //                 keyboardType="number-pad"
// // //                 value={tripCode}
// // //                 onChangeText={(t) => setTripCode(t.replace(/[^0-9]/g, ""))}
// // //               />

// // //               {/* From */}
// // //               <Text style={styles.label}>From</Text>
// // //               <View style={styles.pickerBox}>
// // //                 <Picker
// // //                   selectedValue={from}
// // //                   onValueChange={(v) => {
// // //                     setFrom(v);
// // //                     if (v === to) setTo("");
// // //                   }}
// // //                 >
// // //                   <Picker.Item label="Select District" value="" />
// // //                   {TAMIL_NADU_DISTRICTS.map((d) => (
// // //                     <Picker.Item key={d} label={d} value={d} />
// // //                   ))}
// // //                 </Picker>
// // //               </View>

// // //               {/* To */}
// // //               <Text style={styles.label}>To</Text>
// // //               <View style={styles.pickerBox}>
// // //                 <Picker selectedValue={to} onValueChange={setTo}>
// // //                   <Picker.Item label="Select District" value="" />
// // //                   {TAMIL_NADU_DISTRICTS.map((d) => (
// // //                     <Picker.Item
// // //                       key={d}
// // //                       label={d}
// // //                       value={d}
// // //                       enabled={d !== from}
// // //                     />
// // //                   ))}
// // //                 </Picker>
// // //               </View>

// // //               {/* Buttons */}
// // //               {status === "idle" && (
// // //                 <TouchableOpacity style={styles.startBtn} onPress={startTrip}>
// // //                   <Text style={styles.btnText}>START TRIP</Text>
// // //                 </TouchableOpacity>
// // //               )}

// // //               {status === "started" && (
// // //                 <TouchableOpacity style={styles.pauseBtn} onPress={pauseTrip}>
// // //                   <Text style={styles.btnText}>PAUSE TRIP</Text>
// // //                 </TouchableOpacity>
// // //               )}

// // //               {status === "paused" && (
// // //                 <TouchableOpacity style={styles.resumeBtn} onPress={resumeTrip}>
// // //                   <Text style={styles.btnText}>RESUME TRIP</Text>
// // //                 </TouchableOpacity>
// // //               )}

// // //               {(status === "started" || status === "paused") && (
// // //                 <TouchableOpacity style={styles.endBtn} onPress={endTrip}>
// // //                   <Text style={styles.btnText}>END TRIP</Text>
// // //                 </TouchableOpacity>
// // //               )}

// // //               {/* Time Card */}
// // //               {(startTime || pauseTime || resumeTime || endTime) && (
// // //                 <View style={styles.infoCard}>
// // //                   <Text style={styles.cardTitle}>Trip Timings</Text>
// // //                   {startTime && <Text>Start : {startTime}</Text>}
// // //                   {pauseTime && <Text>Pause : {pauseTime}</Text>}
// // //                   {resumeTime && <Text>Resume : {resumeTime}</Text>}
// // //                   {endTime && <Text>End : {endTime}</Text>}
// // //                 </View>
// // //               )}

// // //               {/* GPS Card */}
// // //               <View style={styles.infoCard}>
// // //                 <Text style={styles.cardTitle}>Live GPS Status</Text>
// // //                 {gpsActive && coords ? (
// // //                   <>
// // //                     <Text>Lat : {coords.latitude.toFixed(6)}</Text>
// // //                     <Text>Lng : {coords.longitude.toFixed(6)}</Text>
// // //                     <Text style={{ color: "green", fontWeight: "bold" }}>
// // //                       GPS Active
// // //                     </Text>
// // //                   </>
// // //                 ) : (
// // //                   <Text style={{ color: "#c0392b", fontWeight: "bold" }}>
// // //                     GPS Not Active
// // //                   </Text>
// // //                 )}
// // //               </View>
// // //             </View>
// // //           </View>
// // //         </LinearGradient>
// // //       </KeyboardAvoidingView>
// // //     </TouchableWithoutFeedback>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   bg: {
// // //     flex: 1,
// // //   },
// // //   centerWrapper: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   card: {
// // //     backgroundColor: "#fff",
// // //     width: "92%",
// // //     borderRadius: 16,
// // //     padding: 20,
// // //     elevation: 6,
// // //   },
// // //   title: {
// // //     fontSize: 22,
// // //     fontWeight: "700",
// // //     color: "#1e3c72",
// // //     textAlign: "center",
// // //     marginBottom: 20,
// // //   },
// // //   label: {
// // //     fontSize: 13,
// // //     color: "#555",
// // //     marginBottom: 6,
// // //   },
// // //   input: {
// // //     borderBottomWidth: 1.5,
// // //     borderBottomColor: "#bbb",
// // //     paddingVertical: 8,
// // //     fontSize: 16,
// // //     marginBottom: 20,
// // //   },
// // //   pickerBox: {
// // //     borderWidth: 1,
// // //     borderColor: "#ccc",
// // //     borderRadius: 10,
// // //     marginBottom: 20,
// // //   },
// // //   startBtn: {
// // //     backgroundColor: "#1e3c72",
// // //     padding: 14,
// // //     borderRadius: 30,
// // //     marginBottom: 10,
// // //   },
// // //   pauseBtn: {
// // //     backgroundColor: "#f39c12",
// // //     padding: 14,
// // //     borderRadius: 30,
// // //     marginBottom: 10,
// // //   },
// // //   resumeBtn: {
// // //     backgroundColor: "#27ae60",
// // //     padding: 14,
// // //     borderRadius: 30,
// // //     marginBottom: 10,
// // //   },
// // //   endBtn: {
// // //     backgroundColor: "#c0392b",
// // //     padding: 14,
// // //     borderRadius: 30,
// // //     marginBottom: 10,
// // //   },
// // //   btnText: {
// // //     color: "#fff",
// // //     textAlign: "center",
// // //     fontWeight: "700",
// // //   },
// // //   infoCard: {
// // //     marginTop: 20,
// // //     padding: 14,
// // //     borderRadius: 12,
// // //     backgroundColor: "#f4f6fb",
// // //   },
// // //   cardTitle: {
// // //     fontSize: 16,
// // //     fontWeight: "700",
// // //     marginBottom: 8,
// // //     color: "#1e3c72",
// // //   },
// // // });
// // import * as Location from "expo-location";
// // import { Picker } from "@react-native-picker/picker";
// // import { useEffect, useState } from "react";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import {
// //   Keyboard,
// //   KeyboardAvoidingView,
// //   Platform,
// //   ScrollView,
// //   StyleSheet,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   TouchableWithoutFeedback,
// //   View,
// //   Alert,
// //   Animated,
// // } from "react-native";
// // import { LinearGradient } from "expo-linear-gradient";
// // import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// // import { TAMIL_NADU_DISTRICTS } from "../../utils/districts";
// // import useLocation from "../../utils/useLocation";

// // type TripStatus = "idle" | "started" | "paused" | "ended";

// // interface TripTime {
// //   start?: string;
// //   pause?: string;
// //   resume?: string;
// //   end?: string;
// // }

// // const STATUS_CONFIG = {
// //   idle: { label: "Not Started", color: "#94a3b8", bg: "#f1f5f9", icon: "time-outline" },
// //   started: { label: "Trip Active", color: "#16a34a", bg: "#dcfce7", icon: "navigate-circle" },
// //   paused: { label: "Paused", color: "#d97706", bg: "#fef3c7", icon: "pause-circle" },
// //   ended: { label: "Trip Ended", color: "#dc2626", bg: "#fee2e2", icon: "checkmark-circle" },
// // };

// // function getTime() {
// //   return new Date().toLocaleTimeString("en-IN", { hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit" });
// // }

// // export default function Home() {
// //   const [tripCode, setTripCode] = useState("");
// //   const [from, setFrom] = useState("");
// //   const [to, setTo] = useState("");
// //   const [status, setStatus] = useState<TripStatus>("idle");
// //   const [times, setTimes] = useState<TripTime>({});
// //   const [driverName, setDriverName] = useState("Driver");
// //   const [busNo, setBusNo] = useState("");
// //   const [driverPhone, setDriverPhone] = useState("");
// //   const [elapsedSec, setElapsedSec] = useState(0);
// //   const [pulse] = useState(new Animated.Value(1));

// //   // Load driver info from storage
// //   useEffect(() => {
// //     (async () => {
// //       const name = await AsyncStorage.getItem("driverName") || "Driver";
// //       const bus = await AsyncStorage.getItem("driverBusNo") || "";
// //       const phone = await AsyncStorage.getItem("driverPhone") || "";
// //       setDriverName(name);
// //       setBusNo(bus);
// //       setDriverPhone(phone);
// //     })();
// //   }, []);

// //   // Timer
// //   useEffect(() => {
// //     let timer: ReturnType<typeof setInterval>;
// //     if (status === "started") {
// //       timer = setInterval(() => setElapsedSec(s => s + 1), 1000);
// //     }
// //     return () => clearInterval(timer);
// //   }, [status]);

// //   // Pulse animation for GPS active
// //   useEffect(() => {
// //     if (status === "started") {
// //       const anim = Animated.loop(
// //         Animated.sequence([
// //           Animated.timing(pulse, { toValue: 1.15, duration: 800, useNativeDriver: true }),
// //           Animated.timing(pulse, { toValue: 1, duration: 800, useNativeDriver: true }),
// //         ])
// //       );
// //       anim.start();
// //       return () => anim.stop();
// //     } else {
// //       pulse.setValue(1);
// //     }
// //   }, [status]);

// //   const driverId = driverPhone || "unknown";

// //   const { coords, gpsActive } = useLocation(
// //     status === "started",
// //     driverId,
// //     tripCode
// //   ) as { coords: Location.LocationObjectCoords | null; gpsActive: boolean };

// //   function formatElapsed(sec: number) {
// //     const h = Math.floor(sec / 3600);
// //     const m = Math.floor((sec % 3600) / 60);
// //     const s = sec % 60;
// //     if (h > 0) return `${h}h ${m}m ${s}s`;
// //     if (m > 0) return `${m}m ${s}s`;
// //     return `${s}s`;
// //   }

// //   function startTrip() {
// //     if (!tripCode.trim()) { Alert.alert("Missing Info", "Please enter a Trip Code."); return; }
// //     if (!from) { Alert.alert("Missing Info", "Please select the From district."); return; }
// //     if (!to) { Alert.alert("Missing Info", "Please select the To district."); return; }
// //     Keyboard.dismiss();
// //     setElapsedSec(0);
// //     setTimes({ start: getTime() });
// //     setStatus("started");
// //   }

// //   function pauseTrip() {
// //     setTimes(t => ({ ...t, pause: getTime() }));
// //     setStatus("paused");
// //   }

// //   function resumeTrip() {
// //     setTimes(t => ({ ...t, resume: getTime() }));
// //     setStatus("started");
// //   }

// //   function endTrip() {
// //     Alert.alert("End Trip", "Are you sure you want to end this trip?", [
// //       { text: "Cancel", style: "cancel" },
// //       {
// //         text: "End Trip", style: "destructive", onPress: () => {
// //           setTimes(t => ({ ...t, end: getTime() }));
// //           setStatus("ended");
// //         }
// //       },
// //     ]);
// //   }

// //   function resetTrip() {
// //     setTripCode("");
// //     setFrom("");
// //     setTo("");
// //     setStatus("idle");
// //     setTimes({});
// //     setElapsedSec(0);
// //   }

// //   const cfg = STATUS_CONFIG[status];
// //   const isActive = status !== "idle" && status !== "ended";

// //   return (
// //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
// //       <LinearGradient colors={["#0f2027", "#203a43", "#2c5364"]} style={{ flex: 1 }}>
// //         <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
// //           <ScrollView contentContainerStyle={S.scroll} showsVerticalScrollIndicator={false}>

// //             {/* ── Header ── */}
// //             <View style={S.header}>
// //               <View>
// //                 <Text style={S.greeting}>Hello, {driverName.split(" ")[0]} 👋</Text>
// //                 <Text style={S.subGreeting}>{busNo || "No bus assigned"}</Text>
// //               </View>
// //               <View style={[S.statusPill, { backgroundColor: cfg.bg }]}>
// //                 <Ionicons name={cfg.icon as any} size={14} color={cfg.color} />
// //                 <Text style={[S.statusPillText, { color: cfg.color }]}>{cfg.label}</Text>
// //               </View>
// //             </View>

// //             {/* ── Driver Info Card ── */}
// //             <View style={S.driverCard}>
// //               <View style={S.driverAvatar}>
// //                 <Text style={S.driverAvatarText}>{driverName.charAt(0).toUpperCase()}</Text>
// //               </View>
// //               <View style={{ flex: 1 }}>
// //                 <Text style={S.driverName}>{driverName}</Text>
// //                 <Text style={S.driverSub}>📞 {driverPhone || "—"}  ·  🚌 {busNo || "—"}</Text>
// //               </View>
// //               {status === "started" && (
// //                 <View style={S.timerBadge}>
// //                   <Text style={S.timerText}>{formatElapsed(elapsedSec)}</Text>
// //                   <Text style={S.timerLabel}>elapsed</Text>
// //                 </View>
// //               )}
// //             </View>

// //             {/* ── Trip Form ── */}
// //             <View style={S.card}>
// //               <Text style={S.cardTitle}>Trip Details</Text>

// //               {/* Trip Code */}
// //               <Text style={S.label}>Trip Code</Text>
// //               <View style={[S.inputRow, isActive && S.inputLocked]}>
// //                 <Ionicons name="barcode-outline" size={20} color="#6b7280" style={S.inputIcon} />
// //                 <TextInput
// //                   style={S.inputField}
// //                   keyboardType="number-pad"
// //                   placeholder="Enter trip code"
// //                   placeholderTextColor="#9ca3af"
// //                   value={tripCode}
// //                   onChangeText={t => setTripCode(t.replace(/[^0-9]/g, ""))}
// //                   editable={status === "idle"}
// //                   maxLength={6}
// //                 />
// //                 {tripCode && status === "idle" && (
// //                   <TouchableOpacity onPress={() => setTripCode("")}>
// //                     <Ionicons name="close-circle" size={18} color="#9ca3af" />
// //                   </TouchableOpacity>
// //                 )}
// //                 {isActive && <Ionicons name="lock-closed" size={16} color="#9ca3af" />}
// //               </View>

// //               {/* From District */}
// //               <Text style={S.label}>From</Text>
// //               <View style={[S.pickerBox, isActive && S.inputLocked]}>
// //                 <Ionicons name="location-outline" size={18} color="#6b7280" style={{ marginLeft: 12, marginRight: 6 }} />
// //                 <View style={{ flex: 1 }}>
// //                   <Picker
// //                     selectedValue={from}
// //                     onValueChange={v => { setFrom(v); if (v === to) setTo(""); }}
// //                     enabled={status === "idle"}
// //                     style={{ color: "#0f172a" }}
// //                   >
// //                     <Picker.Item label="Select district..." value="" color="#9ca3af" />
// //                     {TAMIL_NADU_DISTRICTS.map(d => (
// //                       <Picker.Item key={d} label={d} value={d} />
// //                     ))}
// //                   </Picker>
// //                 </View>
// //               </View>

// //               {/* To District */}
// //               <Text style={S.label}>To</Text>
// //               <View style={[S.pickerBox, isActive && S.inputLocked]}>
// //                 <Ionicons name="flag-outline" size={18} color="#6b7280" style={{ marginLeft: 12, marginRight: 6 }} />
// //                 <View style={{ flex: 1 }}>
// //                   <Picker
// //                     selectedValue={to}
// //                     onValueChange={setTo}
// //                     enabled={status === "idle"}
// //                     style={{ color: "#0f172a" }}
// //                   >
// //                     <Picker.Item label="Select district..." value="" color="#9ca3af" />
// //                     {TAMIL_NADU_DISTRICTS.map(d => (
// //                       <Picker.Item key={d} label={d} value={d} enabled={d !== from} />
// //                     ))}
// //                   </Picker>
// //                 </View>
// //               </View>

// //               {/* Route summary */}
// //               {from && to && (
// //                 <View style={S.routeSummary}>
// //                   <Text style={S.routeFrom}>{from}</Text>
// //                   <Ionicons name="arrow-forward" size={16} color="#4f46e5" />
// //                   <Text style={S.routeTo}>{to}</Text>
// //                 </View>
// //               )}
// //             </View>

// //             {/* ── Action Buttons ── */}
// //             <View style={S.btnGroup}>
// //               {status === "idle" && (
// //                 <TouchableOpacity style={[S.actionBtn, S.startBtn]} onPress={startTrip} activeOpacity={0.85}>
// //                   <Ionicons name="play-circle" size={22} color="#fff" />
// //                   <Text style={S.actionBtnText}>START TRIP</Text>
// //                 </TouchableOpacity>
// //               )}

// //               {status === "started" && (
// //                 <TouchableOpacity style={[S.actionBtn, S.pauseBtn]} onPress={pauseTrip} activeOpacity={0.85}>
// //                   <Ionicons name="pause-circle" size={22} color="#fff" />
// //                   <Text style={S.actionBtnText}>PAUSE TRIP</Text>
// //                 </TouchableOpacity>
// //               )}

// //               {status === "paused" && (
// //                 <TouchableOpacity style={[S.actionBtn, S.resumeBtn]} onPress={resumeTrip} activeOpacity={0.85}>
// //                   <Ionicons name="play-circle" size={22} color="#fff" />
// //                   <Text style={S.actionBtnText}>RESUME TRIP</Text>
// //                 </TouchableOpacity>
// //               )}

// //               {(status === "started" || status === "paused") && (
// //                 <TouchableOpacity style={[S.actionBtn, S.endBtn]} onPress={endTrip} activeOpacity={0.85}>
// //                   <Ionicons name="stop-circle" size={22} color="#fff" />
// //                   <Text style={S.actionBtnText}>END TRIP</Text>
// //                 </TouchableOpacity>
// //               )}

// //               {status === "ended" && (
// //                 <TouchableOpacity style={[S.actionBtn, S.newBtn]} onPress={resetTrip} activeOpacity={0.85}>
// //                   <Ionicons name="add-circle" size={22} color="#fff" />
// //                   <Text style={S.actionBtnText}>NEW TRIP</Text>
// //                 </TouchableOpacity>
// //               )}
// //             </View>

// //             {/* ── GPS Status Card ── */}
// //             <View style={[S.card, { marginBottom: 0 }]}>
// //               <View style={S.gpsTitleRow}>
// //                 <Text style={S.cardTitle}>GPS Status</Text>
// //                 {status === "started" && (
// //                   <Animated.View style={[S.liveDot, { transform: [{ scale: pulse }] }]}>
// //                     <View style={S.liveDotInner} />
// //                   </Animated.View>
// //                 )}
// //               </View>

// //               {gpsActive && coords ? (
// //                 <View>
// //                   <View style={S.coordsRow}>
// //                     <View style={S.coordBox}>
// //                       <Text style={S.coordLabel}>LATITUDE</Text>
// //                       <Text style={S.coordVal}>{coords.latitude.toFixed(6)}</Text>
// //                     </View>
// //                     <View style={S.coordBox}>
// //                       <Text style={S.coordLabel}>LONGITUDE</Text>
// //                       <Text style={S.coordVal}>{coords.longitude.toFixed(6)}</Text>
// //                     </View>
// //                   </View>
// //                   <View style={S.speedRow}>
// //                     <Ionicons name="speedometer-outline" size={18} color="#16a34a" />
// //                     <Text style={S.speedText}>
// //                       {coords.speed != null && coords.speed > 0
// //                         ? `${(coords.speed * 3.6).toFixed(1)} km/h`
// //                         : "Speed: —"}
// //                     </Text>
// //                     <View style={S.gpsActivePill}>
// //                       <View style={S.greenDot} />
// //                       <Text style={S.gpsActiveText}>Transmitting to Firebase</Text>
// //                     </View>
// //                   </View>
// //                 </View>
// //               ) : (
// //                 <View style={S.gpsOffBox}>
// //                   <Ionicons name="location-outline" size={32} color="#94a3b8" style={{ marginBottom: 8 }} />
// //                   <Text style={S.gpsOffText}>
// //                     {status === "idle" || status === "ended"
// //                       ? "Start a trip to enable GPS tracking"
// //                       : "Waiting for GPS signal..."}
// //                   </Text>
// //                 </View>
// //               )}
// //             </View>

// //             {/* ── Trip Timings ── */}
// //             {Object.keys(times).length > 0 && (
// //               <View style={S.card}>
// //                 <Text style={S.cardTitle}>Trip Timings</Text>
// //                 {[
// //                   ["🟢 Started", times.start],
// //                   ["🟡 Paused", times.pause],
// //                   ["🔵 Resumed", times.resume],
// //                   ["🔴 Ended", times.end],
// //                 ].filter(([, v]) => v).map(([label, val]) => (
// //                   <View key={label as string} style={S.timeRow}>
// //                     <Text style={S.timeLabel}>{label as string}</Text>
// //                     <Text style={S.timeVal}>{val as string}</Text>
// //                   </View>
// //                 ))}
// //                 {status === "started" && (
// //                   <View style={S.timeRow}>
// //                     <Text style={S.timeLabel}>⏱ Elapsed</Text>
// //                     <Text style={[S.timeVal, { color: "#4f46e5", fontWeight: "700" }]}>{formatElapsed(elapsedSec)}</Text>
// //                   </View>
// //                 )}
// //               </View>
// //             )}

// //           </ScrollView>
// //         </KeyboardAvoidingView>
// //       </LinearGradient>
// //     </TouchableWithoutFeedback>
// //   );
// // }

// // const S = StyleSheet.create({
// //   scroll: { padding: 20, paddingTop: Platform.OS === "ios" ? 60 : 50, paddingBottom: 40 },

// //   // Header
// //   header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 18 },
// //   greeting: { fontSize: 22, fontWeight: "800", color: "#fff" },
// //   subGreeting: { fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 2 },
// //   statusPill: { flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
// //   statusPillText: { fontSize: 12, fontWeight: "700" },

// //   // Driver card
// //   driverCard: { backgroundColor: "rgba(255,255,255,0.12)", borderRadius: 18, padding: 16, flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 16, borderWidth: 1, borderColor: "rgba(255,255,255,0.15)" },
// //   driverAvatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: "#4f46e5", alignItems: "center", justifyContent: "center" },
// //   driverAvatarText: { fontSize: 22, fontWeight: "800", color: "#fff" },
// //   driverName: { fontSize: 15, fontWeight: "700", color: "#fff" },
// //   driverSub: { fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 3 },
// //   timerBadge: { backgroundColor: "rgba(79,70,229,0.8)", borderRadius: 12, paddingHorizontal: 12, paddingVertical: 8, alignItems: "center" },
// //   timerText: { fontSize: 14, fontWeight: "800", color: "#fff" },
// //   timerLabel: { fontSize: 9, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: 0.5 },

// //   // Card
// //   card: { backgroundColor: "#fff", borderRadius: 20, padding: 20, marginBottom: 14, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 5 },
// //   cardTitle: { fontSize: 16, fontWeight: "800", color: "#0f172a", marginBottom: 16 },

// //   // Form
// //   label: { fontSize: 11, fontWeight: "700", color: "#64748b", marginBottom: 7, textTransform: "uppercase", letterSpacing: 0.5 },
// //   inputRow: { flexDirection: "row", alignItems: "center", borderWidth: 1.5, borderColor: "#e5e7eb", borderRadius: 14, paddingHorizontal: 12, marginBottom: 16, backgroundColor: "#f9fafb", height: 52 },
// //   inputLocked: { backgroundColor: "#f1f5f9", borderColor: "#e2e8f0" },
// //   inputIcon: { marginRight: 8 },
// //   inputField: { flex: 1, fontSize: 15, color: "#0f172a" },
// //   pickerBox: { flexDirection: "row", alignItems: "center", borderWidth: 1.5, borderColor: "#e5e7eb", borderRadius: 14, marginBottom: 16, backgroundColor: "#f9fafb" },

// //   // Route summary
// //   routeSummary: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: "#eef2ff", borderRadius: 12, padding: 10, marginTop: -6, marginBottom: 4 },
// //   routeFrom: { fontSize: 14, fontWeight: "700", color: "#4f46e5" },
// //   routeTo: { fontSize: 14, fontWeight: "700", color: "#4f46e5" },

// //   // Buttons
// //   btnGroup: { gap: 10, marginBottom: 14 },
// //   actionBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, borderRadius: 16, paddingVertical: 16, shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 4 },
// //   actionBtnText: { color: "#fff", fontSize: 16, fontWeight: "800", letterSpacing: 1 },
// //   startBtn: { backgroundColor: "#1d4ed8" },
// //   pauseBtn: { backgroundColor: "#d97706" },
// //   resumeBtn: { backgroundColor: "#16a34a" },
// //   endBtn: { backgroundColor: "#dc2626" },
// //   newBtn: { backgroundColor: "#7c3aed" },

// //   // GPS
// //   gpsTitleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
// //   liveDot: { width: 28, height: 28, borderRadius: 14, backgroundColor: "#dcfce7", alignItems: "center", justifyContent: "center" },
// //   liveDotInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: "#16a34a" },
// //   coordsRow: { flexDirection: "row", gap: 10, marginBottom: 12 },
// //   coordBox: { flex: 1, backgroundColor: "#f8fafc", borderRadius: 12, padding: 12 },
// //   coordLabel: { fontSize: 10, fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 },
// //   coordVal: { fontSize: 14, fontWeight: "800", color: "#0f172a" },
// //   speedRow: { flexDirection: "row", alignItems: "center", gap: 8 },
// //   speedText: { fontSize: 14, fontWeight: "700", color: "#16a34a", flex: 1 },
// //   gpsActivePill: { flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#dcfce7", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
// //   greenDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: "#16a34a" },
// //   gpsActiveText: { fontSize: 11, fontWeight: "700", color: "#16a34a" },
// //   gpsOffBox: { alignItems: "center", paddingVertical: 20 },
// //   gpsOffText: { fontSize: 13, color: "#94a3b8", textAlign: "center" },

// //   // Timings
// //   timeRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "#f1f5f9" },
// //   timeLabel: { fontSize: 13, color: "#64748b" },
// //   timeVal: { fontSize: 13, fontWeight: "600", color: "#0f172a" },
// // });
// import * as Location from "expo-location";
// import { Picker } from "@react-native-picker/picker";
// import { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import {
//   Alert, Animated, Keyboard, KeyboardAvoidingView, Platform,
//   ScrollView, StyleSheet, Text, TextInput, TouchableOpacity,
//   TouchableWithoutFeedback, View,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";

// import { TAMIL_NADU_DISTRICTS } from "../../utils/districts";
// import useLocation from "../../utils/useLocation";
// import { endTrip } from "../../utils/SaveLocation";

// type TripStatus = "idle" | "started" | "paused" | "ended";

// const STATUS_CONFIG = {
//   idle:    { label: "Not Started", color: "#94a3b8", bg: "#f1f5f9", icon: "time-outline" },
//   started: { label: "Trip Active", color: "#16a34a", bg: "#dcfce7", icon: "navigate-circle" },
//   paused:  { label: "Paused",      color: "#d97706", bg: "#fef3c7", icon: "pause-circle" },
//   ended:   { label: "Trip Ended",  color: "#dc2626", bg: "#fee2e2", icon: "checkmark-circle" },
// };

// function getTime() {
//   return new Date().toLocaleTimeString("en-IN", { hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit" });
// }

// export default function Home() {
//   const [tripCode, setTripCode]   = useState("");
//   const [from, setFrom]           = useState("");
//   const [to, setTo]               = useState("");
//   const [status, setStatus]       = useState<TripStatus>("idle");
//   const [times, setTimes]         = useState<Record<string, string>>({});
//   const [driverName, setDriverName]   = useState("Driver");
//   const [busNo, setBusNo]             = useState("");
//   const [driverPhone, setDriverPhone] = useState("");
//   const [elapsedSec, setElapsedSec]   = useState(0);
//   const [pulse]                       = useState(new Animated.Value(1));

//   useEffect(() => {
//     (async () => {
//       setDriverName( await AsyncStorage.getItem("driverName")  || "Driver");
//       setBusNo(      await AsyncStorage.getItem("driverBusNo") || "");
//       setDriverPhone(await AsyncStorage.getItem("driverPhone") || "");
//     })();
//   }, []);

//   useEffect(() => {
//     let t: ReturnType<typeof setInterval>;
//     if (status === "started") t = setInterval(() => setElapsedSec(s => s + 1), 1000);
//     return () => clearInterval(t);
//   }, [status]);

//   useEffect(() => {
//     if (status === "started") {
//       const a = Animated.loop(Animated.sequence([
//         Animated.timing(pulse, { toValue: 1.18, duration: 800, useNativeDriver: true }),
//         Animated.timing(pulse, { toValue: 1,    duration: 800, useNativeDriver: true }),
//       ]));
//       a.start();
//       return () => a.stop();
//     }
//     pulse.setValue(1);
//   }, [status]);

//   // ✅ KEY FIX — tripInfo passed to useLocation → SaveLocation → Firebase
//   const tripInfo = { from, to, busNo, status: status === "started" ? "active" : status };

//   const { coords, gpsActive } = useLocation(
//     status === "started",
//     driverPhone || "unknown",
//     tripCode,
//     tripInfo
//   ) as { coords: Location.LocationObjectCoords | null; gpsActive: boolean };

//   function formatElapsed(sec: number) {
//     const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
//     if (h > 0) return `${h}h ${m}m ${s}s`;
//     if (m > 0) return `${m}m ${s}s`;
//     return `${s}s`;
//   }

//   function startTrip() {
//     if (!tripCode.trim()) { Alert.alert("Missing", "Enter Trip Code"); return; }
//     if (!from) { Alert.alert("Missing", "Select From district"); return; }
//     if (!to)   { Alert.alert("Missing", "Select To district");   return; }
//     Keyboard.dismiss();
//     setElapsedSec(0);
//     setTimes({ start: getTime() });
//     setStatus("started");
//   }

//   function pauseTrip()  { setTimes(t => ({ ...t, pause:  getTime() })); setStatus("paused"); }
//   function resumeTrip() { setTimes(t => ({ ...t, resume: getTime() })); setStatus("started"); }

//   function confirmEnd() {
//     Alert.alert("End Trip", "Sure you want to end this trip?", [
//       { text: "Cancel", style: "cancel" },
//       { text: "End Trip", style: "destructive", onPress: () => {
//           setTimes(t => ({ ...t, end: getTime() }));
//           setStatus("ended");
//           endTrip(tripCode); // ✅ Marks trip ended in Firebase
//         }
//       },
//     ]);
//   }

//   function resetTrip() {
//     setTripCode(""); setFrom(""); setTo("");
//     setStatus("idle"); setTimes({}); setElapsedSec(0);
//   }

//   const cfg      = STATUS_CONFIG[status];
//   const isActive = status !== "idle" && status !== "ended";

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <LinearGradient colors={["#0f2027", "#203a43", "#2c5364"]} style={{ flex: 1 }}>
//         <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
//           <ScrollView contentContainerStyle={S.scroll} showsVerticalScrollIndicator={false}>

//             {/* Header */}
//             <View style={S.header}>
//               <View>
//                 <Text style={S.greeting}>Hello, {driverName.split(" ")[0]} 👋</Text>
//                 <Text style={S.subGreeting}>{busNo || "No bus assigned"}</Text>
//               </View>
//               <View style={[S.statusPill, { backgroundColor: cfg.bg }]}>
//                 <Ionicons name={cfg.icon as any} size={14} color={cfg.color} />
//                 <Text style={[S.statusPillText, { color: cfg.color }]}>{cfg.label}</Text>
//               </View>
//             </View>

//             {/* Driver card */}
//             <View style={S.driverCard}>
//               <View style={S.driverAvatar}>
//                 <Text style={S.driverAvatarText}>{driverName.charAt(0).toUpperCase()}</Text>
//               </View>
//               <View style={{ flex: 1 }}>
//                 <Text style={S.driverName}>{driverName}</Text>
//                 <Text style={S.driverSub}>📞 {driverPhone || "—"}  ·  🚌 {busNo || "—"}</Text>
//               </View>
//               {status === "started" && (
//                 <View style={S.timerBadge}>
//                   <Text style={S.timerText}>{formatElapsed(elapsedSec)}</Text>
//                   <Text style={S.timerLabel}>elapsed</Text>
//                 </View>
//               )}
//             </View>

//             {/* Trip Form */}
//             <View style={S.card}>
//               <Text style={S.cardTitle}>Trip Details</Text>

//               <Text style={S.label}>Trip Code</Text>
//               <View style={[S.inputRow, isActive && S.inputLocked]}>
//                 <Ionicons name="barcode-outline" size={20} color="#6b7280" style={S.inputIcon} />
//                 <TextInput
//                   style={S.inputField} keyboardType="number-pad"
//                   placeholder="Enter trip code" placeholderTextColor="#9ca3af"
//                   value={tripCode} onChangeText={t => setTripCode(t.replace(/[^0-9]/g, ""))}
//                   editable={status === "idle"} maxLength={6}
//                 />
//                 {isActive && <Ionicons name="lock-closed" size={16} color="#9ca3af" />}
//               </View>

//               <Text style={S.label}>From</Text>
//               <View style={[S.pickerBox, isActive && S.inputLocked]}>
//                 <Ionicons name="location-outline" size={18} color="#6b7280" style={{ marginLeft: 12 }} />
//                 <View style={{ flex: 1 }}>
//                   <Picker selectedValue={from} onValueChange={v => { setFrom(v); if (v === to) setTo(""); }} enabled={status === "idle"} style={{ color: "#0f172a" }}>
//                     <Picker.Item label="Select district..." value="" color="#9ca3af" />
//                     {TAMIL_NADU_DISTRICTS.map(d => <Picker.Item key={d} label={d} value={d} />)}
//                   </Picker>
//                 </View>
//               </View>

//               <Text style={S.label}>To</Text>
//               <View style={[S.pickerBox, isActive && S.inputLocked]}>
//                 <Ionicons name="flag-outline" size={18} color="#6b7280" style={{ marginLeft: 12 }} />
//                 <View style={{ flex: 1 }}>
//                   <Picker selectedValue={to} onValueChange={setTo} enabled={status === "idle"} style={{ color: "#0f172a" }}>
//                     <Picker.Item label="Select district..." value="" color="#9ca3af" />
//                     {TAMIL_NADU_DISTRICTS.map(d => <Picker.Item key={d} label={d} value={d} enabled={d !== from} />)}
//                   </Picker>
//                 </View>
//               </View>

//               {from && to && (
//                 <View style={S.routeSummary}>
//                   <Text style={S.routeText}>{from}</Text>
//                   <Ionicons name="arrow-forward" size={16} color="#4f46e5" />
//                   <Text style={S.routeText}>{to}</Text>
//                 </View>
//               )}
//             </View>

//             {/* Action Buttons */}
//             <View style={S.btnGroup}>
//               {status === "idle"    && <TouchableOpacity style={[S.actionBtn, S.startBtn]}  onPress={startTrip}  activeOpacity={0.85}><Ionicons name="play-circle"  size={22} color="#fff" /><Text style={S.actionBtnText}>START TRIP</Text></TouchableOpacity>}
//               {status === "started" && <TouchableOpacity style={[S.actionBtn, S.pauseBtn]}  onPress={pauseTrip}  activeOpacity={0.85}><Ionicons name="pause-circle" size={22} color="#fff" /><Text style={S.actionBtnText}>PAUSE TRIP</Text></TouchableOpacity>}
//               {status === "paused"  && <TouchableOpacity style={[S.actionBtn, S.resumeBtn]} onPress={resumeTrip} activeOpacity={0.85}><Ionicons name="play-circle"  size={22} color="#fff" /><Text style={S.actionBtnText}>RESUME TRIP</Text></TouchableOpacity>}
//               {isActive             && <TouchableOpacity style={[S.actionBtn, S.endBtn]}    onPress={confirmEnd} activeOpacity={0.85}><Ionicons name="stop-circle"  size={22} color="#fff" /><Text style={S.actionBtnText}>END TRIP</Text></TouchableOpacity>}
//               {status === "ended"   && <TouchableOpacity style={[S.actionBtn, S.newBtn]}    onPress={resetTrip}  activeOpacity={0.85}><Ionicons name="add-circle"   size={22} color="#fff" /><Text style={S.actionBtnText}>NEW TRIP</Text></TouchableOpacity>}
//             </View>

//             {/* GPS Status */}
//             <View style={[S.card, { marginBottom: 0 }]}>
//               <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
//                 <Text style={S.cardTitle}>GPS Status</Text>
//                 {status === "started" && (
//                   <Animated.View style={[S.liveDot, { transform: [{ scale: pulse }] }]}>
//                     <View style={S.liveDotInner} />
//                   </Animated.View>
//                 )}
//               </View>
//               {gpsActive && coords ? (
//                 <View>
//                   <View style={S.coordsRow}>
//                     <View style={S.coordBox}><Text style={S.coordLabel}>LATITUDE</Text><Text style={S.coordVal}>{coords.latitude.toFixed(6)}</Text></View>
//                     <View style={S.coordBox}><Text style={S.coordLabel}>LONGITUDE</Text><Text style={S.coordVal}>{coords.longitude.toFixed(6)}</Text></View>
//                   </View>
//                   <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
//                     <Ionicons name="speedometer-outline" size={18} color="#16a34a" />
//                     <Text style={{ fontSize: 14, fontWeight: "700", color: "#16a34a", flex: 1 }}>
//                       {coords.speed != null && coords.speed > 0 ? `${(coords.speed * 3.6).toFixed(1)} km/h` : "Speed: —"}
//                     </Text>
//                     <View style={S.gpsActivePill}>
//                       <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: "#16a34a" }} />
//                       <Text style={{ fontSize: 11, fontWeight: "700", color: "#16a34a" }}>Firebase ✓</Text>
//                     </View>
//                   </View>
//                 </View>
//               ) : (
//                 <View style={{ alignItems: "center", paddingVertical: 20 }}>
//                   <Ionicons name="location-outline" size={32} color="#94a3b8" style={{ marginBottom: 8 }} />
//                   <Text style={{ fontSize: 13, color: "#94a3b8", textAlign: "center" }}>
//                     {status === "idle" || status === "ended" ? "Start a trip to enable GPS" : "Waiting for GPS signal..."}
//                   </Text>
//                 </View>
//               )}
//             </View>

//             {/* Timings */}
//             {Object.keys(times).length > 0 && (
//               <View style={S.card}>
//                 <Text style={S.cardTitle}>Trip Timings</Text>
//                 {[["🟢 Started", times.start], ["🟡 Paused", times.pause], ["🔵 Resumed", times.resume], ["🔴 Ended", times.end]]
//                   .filter(([, v]) => v)
//                   .map(([label, val]) => (
//                     <View key={label as string} style={S.timeRow}>
//                       <Text style={S.timeLabel}>{label as string}</Text>
//                       <Text style={S.timeVal}>{val as string}</Text>
//                     </View>
//                   ))}
//                 {status === "started" && (
//                   <View style={S.timeRow}>
//                     <Text style={S.timeLabel}>⏱ Elapsed</Text>
//                     <Text style={[S.timeVal, { color: "#4f46e5", fontWeight: "700" }]}>{formatElapsed(elapsedSec)}</Text>
//                   </View>
//                 )}
//               </View>
//             )}

//           </ScrollView>
//         </KeyboardAvoidingView>
//       </LinearGradient>
//     </TouchableWithoutFeedback>
//   );
// }

// const S = StyleSheet.create({
//   scroll:         { padding: 20, paddingTop: Platform.OS === "ios" ? 60 : 50, paddingBottom: 40 },
//   header:         { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 18 },
//   greeting:       { fontSize: 22, fontWeight: "800", color: "#fff" },
//   subGreeting:    { fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 2 },
//   statusPill:     { flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
//   statusPillText: { fontSize: 12, fontWeight: "700" },
//   driverCard:     { backgroundColor: "rgba(255,255,255,0.12)", borderRadius: 18, padding: 16, flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 16, borderWidth: 1, borderColor: "rgba(255,255,255,0.15)" },
//   driverAvatar:   { width: 50, height: 50, borderRadius: 25, backgroundColor: "#4f46e5", alignItems: "center", justifyContent: "center" },
//   driverAvatarText: { fontSize: 22, fontWeight: "800", color: "#fff" },
//   driverName:     { fontSize: 15, fontWeight: "700", color: "#fff" },
//   driverSub:      { fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 3 },
//   timerBadge:     { backgroundColor: "rgba(79,70,229,0.8)", borderRadius: 12, paddingHorizontal: 12, paddingVertical: 8, alignItems: "center" },
//   timerText:      { fontSize: 14, fontWeight: "800", color: "#fff" },
//   timerLabel:     { fontSize: 9, color: "rgba(255,255,255,0.7)", textTransform: "uppercase" },
//   card:           { backgroundColor: "#fff", borderRadius: 20, padding: 20, marginBottom: 14, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 5 },
//   cardTitle:      { fontSize: 16, fontWeight: "800", color: "#0f172a", marginBottom: 16 },
//   label:          { fontSize: 11, fontWeight: "700", color: "#64748b", marginBottom: 7, textTransform: "uppercase", letterSpacing: 0.5 },
//   inputRow:       { flexDirection: "row", alignItems: "center", borderWidth: 1.5, borderColor: "#e5e7eb", borderRadius: 14, paddingHorizontal: 12, marginBottom: 16, backgroundColor: "#f9fafb", height: 52 },
//   inputLocked:    { backgroundColor: "#f1f5f9", borderColor: "#e2e8f0" },
//   inputIcon:      { marginRight: 8 },
//   inputField:     { flex: 1, fontSize: 15, color: "#0f172a" },
//   pickerBox:      { flexDirection: "row", alignItems: "center", borderWidth: 1.5, borderColor: "#e5e7eb", borderRadius: 14, marginBottom: 16, backgroundColor: "#f9fafb" },
//   routeSummary:   { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: "#eef2ff", borderRadius: 12, padding: 10, marginTop: -6, marginBottom: 4 },
//   routeText:      { fontSize: 14, fontWeight: "700", color: "#4f46e5" },
//   btnGroup:       { gap: 10, marginBottom: 14 },
//   actionBtn:      { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, borderRadius: 16, paddingVertical: 16, shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 4 },
//   actionBtnText:  { color: "#fff", fontSize: 16, fontWeight: "800", letterSpacing: 1 },
//   startBtn:       { backgroundColor: "#1d4ed8" },
//   pauseBtn:       { backgroundColor: "#d97706" },
//   resumeBtn:      { backgroundColor: "#16a34a" },
//   endBtn:         { backgroundColor: "#dc2626" },
//   newBtn:         { backgroundColor: "#7c3aed" },
//   liveDot:        { width: 28, height: 28, borderRadius: 14, backgroundColor: "#dcfce7", alignItems: "center", justifyContent: "center" },
//   liveDotInner:   { width: 12, height: 12, borderRadius: 6, backgroundColor: "#16a34a" },
//   coordsRow:      { flexDirection: "row", gap: 10, marginBottom: 12 },
//   coordBox:       { flex: 1, backgroundColor: "#f8fafc", borderRadius: 12, padding: 12 },
//   coordLabel:     { fontSize: 10, fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 },
//   coordVal:       { fontSize: 14, fontWeight: "800", color: "#0f172a" },
//   gpsActivePill:  { flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#dcfce7", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
//   timeRow:        { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "#f1f5f9" },
//   timeLabel:      { fontSize: 13, color: "#64748b" },
//   timeVal:        { fontSize: 13, fontWeight: "600", color: "#0f172a" },
// });
// ═══════════════════════════════════════════════════════════
// DRIVER APP — Trip Code Validation + GPS Control
// File: driverapp/app/(tabs)/index.tsx
// Replaces the existing index.tsx
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// DRIVER APP — Trip Code Validation (Firebase Direct)
// ✅ NO BACKEND SERVER NEEDED
// File: driverapp/app/(tabs)/index.tsx
// ═══════════════════════════════════════════════════════════

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { ref, get, update } from "firebase/database";
import { db } from "../../firebase";
import useLocation from "../../utils/useLocation";
import { endTrip } from "../../utils/SaveLocation";

// ─── Types ────────────────────────────────────────────────
type TripStatus = "idle" | "validating" | "started" | "paused" | "ended";

interface TripDetails {
  tripCode: string;
  from: string;
  to: string;
  busNo: string;
  driverName: string;
}

// ─── Helper ───────────────────────────────────────────────
function getTime(): string {
  return new Date().toLocaleTimeString("en-IN", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function formatElapsed(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) return `${h}h ${m}m ${s}s`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

// ─── Component ────────────────────────────────────────────
export default function Home() {
  const [driverName, setDriverName]           = useState<string>("Driver");
  const [driverPhone, setDriverPhone]         = useState<string>("");
  const [busNo, setBusNo]                     = useState<string>("");
  const [tripCodeInput, setTripCodeInput]     = useState<string>("");
  const [tripDetails, setTripDetails]         = useState<TripDetails | null>(null);
  const [validationError, setValidationError] = useState<string>("");
  const [status, setStatus]                   = useState<TripStatus>("idle");
  const [times, setTimes]                     = useState<Record<string, string>>({});
  const [elapsedSec, setElapsedSec]           = useState<number>(0);
  const [pulse]                               = useState(new Animated.Value(1));

  // Load driver info from AsyncStorage
  useEffect(() => {
    (async () => {
      const name  = await AsyncStorage.getItem("driverName");
      const phone = await AsyncStorage.getItem("driverPhone");
      const bus   = await AsyncStorage.getItem("driverBusNo");
      if (name)  setDriverName(name);
      if (phone) setDriverPhone(phone);
      if (bus)   setBusNo(bus);
    })();
  }, []);

  // Elapsed timer
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    if (status === "started") {
      timer = setInterval(() => setElapsedSec((s) => s + 1), 1000);
    }
    return () => { if (timer) clearInterval(timer); };
  }, [status]);

  // Pulse animation
  useEffect(() => {
    if (status === "started") {
      const anim = Animated.loop(
        Animated.sequence([
          Animated.timing(pulse, { toValue: 1.2, duration: 800, useNativeDriver: true }),
          Animated.timing(pulse, { toValue: 1,   duration: 800, useNativeDriver: true }),
        ])
      );
      anim.start();
      return () => anim.stop();
    }
    pulse.setValue(1);
  }, [status]);

  // GPS — only active when trip is "started" AND validation passed
  const tripInfo = tripDetails
    ? {
        from:   tripDetails.from,
        to:     tripDetails.to,
        busNo:  tripDetails.busNo,
        status: status === "started" ? "active" : status,
      }
    : {};

  const { coords, gpsActive } = useLocation(
    status === "started",
    driverPhone,
    tripDetails?.tripCode ?? "",
    tripInfo
  ) as { coords: { latitude: number; longitude: number; speed: number | null } | null; gpsActive: boolean };

  // ═══════════════════════════════════════════════════════
  // Validate Trip Code — reads from Firebase tripCodes node
  // ═══════════════════════════════════════════════════════
  async function validateTripCode(): Promise<void> {
    const code = tripCodeInput.trim().toUpperCase();

    if (!code) {
      setValidationError("Please enter a trip code.");
      return;
    }
    if (!driverPhone) {
      setValidationError("Driver phone not found. Please log in again.");
      return;
    }

    setStatus("validating");
    setValidationError("");

    try {
      const snap = await get(ref(db, `tripCodes/${code}`));

      // Check 1: Code exist பண்றதா?
      if (!snap.exists()) {
        setValidationError("Invalid trip code. Please check and try again.");
        setStatus("idle");
        return;
      }

      const trip = snap.val() as {
        driverPhone: string;
        status: string;
        expiresAt?: number;
        from?: string;
        to?: string;
        busNo?: string;
        driverName?: string;
      };

      // Check 2: இந்த driver-க்கு assign ஆனதா?
      if (String(trip.driverPhone) !== String(driverPhone)) {
        setValidationError(
          "Invalid trip code or this trip is not assigned to this driver."
        );
        setStatus("idle");
        return;
      }

      // Check 3: Already use ஆனதா?
      if (trip.status === "active") {
        setValidationError("This trip is already in progress.");
        setStatus("idle");
        return;
      }
      if (trip.status === "ended") {
        setValidationError("This trip code has already been completed.");
        setStatus("idle");
        return;
      }

      // Check 4: Expired?
      if (trip.expiresAt && Date.now() > trip.expiresAt) {
        await update(ref(db, `tripCodes/${code}`), { status: "expired" });
        setValidationError(
          "This trip code has expired. Please request a new one from your admin."
        );
        setStatus("idle");
        return;
      }

      // ✅ All passed — activate trip
      await update(ref(db, `tripCodes/${code}`), {
        status:      "active",
        activatedAt: Date.now(),
      });

      setTripDetails({
        tripCode:   code,
        from:       trip.from       ?? "",
        to:         trip.to         ?? "",
        busNo:      trip.busNo      ?? busNo,
        driverName: trip.driverName ?? driverName,
      });

      setStatus("started");
      setTimes({ start: getTime() });
      setElapsedSec(0);
      setValidationError("");

    } catch (err) {
      console.error("Validation error:", err);
      setValidationError("Error checking trip code. Check your internet connection.");
      setStatus("idle");
    }
  }

  function pauseTrip(): void {
    setTimes((t) => ({ ...t, pause: getTime() }));
    setStatus("paused");
  }

  function resumeTrip(): void {
    setTimes((t) => ({ ...t, resume: getTime() }));
    setStatus("started");
  }

  function confirmEnd(): void {
    Alert.alert("End Trip", "Are you sure you want to end this trip?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "End Trip",
        style: "destructive",
        onPress: async () => {
          setTimes((t) => ({ ...t, end: getTime() }));
          setStatus("ended");
          if (tripDetails?.tripCode) {
            await update(ref(db, `tripCodes/${tripDetails.tripCode}`), {
              status:  "ended",
              endedAt: Date.now(),
            });
            endTrip(tripDetails.tripCode);
          }
        },
      },
    ]);
  }

  function resetTrip(): void {
    setTripCodeInput("");
    setTripDetails(null);
    setStatus("idle");
    setTimes({});
    setElapsedSec(0);
    setValidationError("");
  }

  const isActive    = status === "started" || status === "paused";
  const isValidating = status === "validating";

  return (
    <LinearGradient colors={["#0f2027", "#203a43", "#2c5364"]} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={S.scroll} showsVerticalScrollIndicator={false}>

          {/* Header */}
          <View style={S.header}>
            <View>
              <Text style={S.greeting}>Hello, {driverName.split(" ")[0]} 👋</Text>
              <Text style={S.sub}>{busNo || "No bus assigned"}</Text>
            </View>
            <View style={[S.pill, { backgroundColor: isActive ? "#dcfce7" : "#f1f5f9" }]}>
              <Ionicons
                name={isActive ? "navigate-circle" : "time-outline"}
                size={14}
                color={isActive ? "#16a34a" : "#94a3b8"}
              />
              <Text style={[S.pillTxt, { color: isActive ? "#16a34a" : "#94a3b8" }]}>
                {status === "idle"       ? "Not Started"
                : isValidating           ? "Checking..."
                : status === "started"   ? "Active"
                : status === "paused"    ? "Paused"
                :                         "Ended"}
              </Text>
            </View>
          </View>

          {/* Driver Card */}
          <View style={S.driverCard}>
            <View style={S.avatar}>
              <Text style={S.avatarTxt}>{driverName.charAt(0).toUpperCase()}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={S.driverName}>{driverName}</Text>
              <Text style={S.driverSub}>📞 {driverPhone || "—"}  ·  🚌 {busNo || "—"}</Text>
            </View>
            {status === "started" && (
              <View style={S.timerBadge}>
                <Text style={S.timerTxt}>{formatElapsed(elapsedSec)}</Text>
                <Text style={S.timerLbl}>elapsed</Text>
              </View>
            )}
          </View>

          {/* ── IDLE / ENDED — Trip Code Entry ── */}
          {(status === "idle" || status === "ended") && (
            <View style={S.card}>
              {status === "ended" ? (
                <View style={{ alignItems: "center", paddingVertical: 10 }}>
                  <Ionicons name="checkmark-circle" size={60} color="#16a34a" />
                  <Text style={S.doneTitle}>Trip Completed!</Text>
                  <Text style={S.doneSub}>
                    {tripDetails?.from} → {tripDetails?.to}
                  </Text>
                  <TouchableOpacity
                    style={[S.btn, { backgroundColor: "#7c3aed", width: "100%", marginTop: 20 }]}
                    onPress={resetTrip}
                    activeOpacity={0.85}
                  >
                    <Ionicons name="add-circle" size={20} color="#fff" />
                    <Text style={S.btnTxt}>START NEW TRIP</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <>
                  <Text style={S.cardTitle}>🎫 Enter Trip Code</Text>
                  <Text style={S.cardDesc}>
                    Enter the code from your admin/manager to begin GPS tracking.
                  </Text>

                  {/* Input */}
                  <View style={[S.codeInput, validationError ? S.inputErr : undefined]}>
                    <Ionicons name="barcode-outline" size={22} color="#6b7280" />
                    <TextInput
                      style={S.codeField}
                      placeholder="TC-XXXXXX"
                      placeholderTextColor="#d1d5db"
                      value={tripCodeInput}
                      onChangeText={(t) => {
                        setTripCodeInput(t.toUpperCase());
                        setValidationError("");
                      }}
                      autoCapitalize="characters"
                      autoCorrect={false}
                      maxLength={9}
                    />
                    {tripCodeInput.length > 0 && (
                      <TouchableOpacity onPress={() => setTripCodeInput("")}>
                        <Ionicons name="close-circle" size={20} color="#9ca3af" />
                      </TouchableOpacity>
                    )}
                  </View>

                  {/* Error */}
                  {validationError !== "" && (
                    <View style={S.errorBox}>
                      <Ionicons name="alert-circle" size={16} color="#dc2626" />
                      <Text style={S.errorTxt}>{validationError}</Text>
                    </View>
                  )}

                  {/* Button */}
                  <TouchableOpacity
                    style={[S.btn, { backgroundColor: "#1d4ed8", marginTop: 14 }]}
                    onPress={validateTripCode}
                    disabled={isValidating}
                    activeOpacity={0.85}
                  >
                    {isValidating ? (
                      <ActivityIndicator color="#fff" size="small" />
                    ) : (
                      <Ionicons name="shield-checkmark" size={20} color="#fff" />
                    )}
                    <Text style={S.btnTxt}>
                      {isValidating ? "VALIDATING..." : "VALIDATE & START TRIP"}
                    </Text>
                  </TouchableOpacity>

                  {/* Note */}
                  <View style={S.noteBox}>
                    <Ionicons name="lock-closed-outline" size={13} color="#6b7280" />
                    <Text style={S.noteTxt}>
                      Verified with Firebase. GPS starts only after successful validation.
                    </Text>
                  </View>
                </>
              )}
            </View>
          )}

          {/* ── ACTIVE — Trip Running ── */}
          {isActive && tripDetails !== null && (
            <>
              {/* Trip Info */}
              <View style={S.card}>
                <View style={S.cardRow}>
                  <Text style={S.cardTitle}>✅ Active Trip</Text>
                  <View style={S.codeTag}>
                    <Text style={S.codeTagTxt}>{tripDetails.tripCode}</Text>
                  </View>
                </View>

                <View style={S.routeRow}>
                  <Text style={S.routeTxt}>{tripDetails.from || "—"}</Text>
                  <Ionicons name="arrow-forward" size={18} color="#4f46e5" />
                  <Text style={S.routeTxt}>{tripDetails.to || "—"}</Text>
                </View>

                <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}>
                  <View style={S.chip}>
                    <Text style={S.chipLbl}>BUS</Text>
                    <Text style={S.chipVal}>{tripDetails.busNo || "—"}</Text>
                  </View>
                  <View style={S.chip}>
                    <Text style={S.chipLbl}>ELAPSED</Text>
                    <Text style={[S.chipVal, { color: "#4f46e5" }]}>
                      {formatElapsed(elapsedSec)}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Buttons */}
              <View style={S.btnGroup}>
                {status === "started" && (
                  <TouchableOpacity
                    style={[S.btn, { backgroundColor: "#d97706" }]}
                    onPress={pauseTrip}
                    activeOpacity={0.85}
                  >
                    <Ionicons name="pause-circle" size={20} color="#fff" />
                    <Text style={S.btnTxt}>PAUSE TRIP</Text>
                  </TouchableOpacity>
                )}
                {status === "paused" && (
                  <TouchableOpacity
                    style={[S.btn, { backgroundColor: "#16a34a" }]}
                    onPress={resumeTrip}
                    activeOpacity={0.85}
                  >
                    <Ionicons name="play-circle" size={20} color="#fff" />
                    <Text style={S.btnTxt}>RESUME TRIP</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={[S.btn, { backgroundColor: "#dc2626" }]}
                  onPress={confirmEnd}
                  activeOpacity={0.85}
                >
                  <Ionicons name="stop-circle" size={20} color="#fff" />
                  <Text style={S.btnTxt}>END TRIP</Text>
                </TouchableOpacity>
              </View>

              {/* GPS Card */}
              <View style={S.card}>
                <View style={S.cardRow}>
                  <Text style={S.cardTitle}>📡 GPS Status</Text>
                  {status === "started" && (
                    <Animated.View style={[S.liveDot, { transform: [{ scale: pulse }] }]}>
                      <View style={S.liveDotInner} />
                    </Animated.View>
                  )}
                </View>

                {gpsActive && coords ? (
                  <View>
                    <View style={{ flexDirection: "row", gap: 10, marginBottom: 12 }}>
                      <View style={S.coordBox}>
                        <Text style={S.coordLbl}>LATITUDE</Text>
                        <Text style={S.coordVal}>{coords.latitude.toFixed(6)}</Text>
                      </View>
                      <View style={S.coordBox}>
                        <Text style={S.coordLbl}>LONGITUDE</Text>
                        <Text style={S.coordVal}>{coords.longitude.toFixed(6)}</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                      <Ionicons name="speedometer-outline" size={18} color="#16a34a" />
                      <Text style={{ fontSize: 14, fontWeight: "700", color: "#16a34a", flex: 1 }}>
                        {coords.speed != null && coords.speed > 0
                          ? `${(coords.speed * 3.6).toFixed(1)} km/h`
                          : "Stopped"}
                      </Text>
                      <View style={S.gpsLive}>
                        <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: "#16a34a" }} />
                        <Text style={{ fontSize: 11, fontWeight: "700", color: "#16a34a" }}>
                          Firebase ✓
                        </Text>
                      </View>
                    </View>
                  </View>
                ) : (
                  <View style={{ alignItems: "center", paddingVertical: 20 }}>
                    <ActivityIndicator color="#4f46e5" />
                    <Text style={{ fontSize: 13, color: "#94a3b8", marginTop: 10 }}>
                      Waiting for GPS signal...
                    </Text>
                  </View>
                )}
              </View>
            </>
          )}

          {/* Timings */}
          {Object.keys(times).length > 0 && (
            <View style={S.card}>
              <Text style={S.cardTitle}>⏱ Trip Timings</Text>
              {(
                [
                  ["🟢 Started", times.start],
                  ["🟡 Paused",  times.pause],
                  ["🔵 Resumed", times.resume],
                  ["🔴 Ended",   times.end],
                ] as [string, string | undefined][]
              )
                .filter(([, v]) => Boolean(v))
                .map(([label, val]) => (
                  <View key={label} style={S.timeRow}>
                    <Text style={S.timeLbl}>{label}</Text>
                    <Text style={S.timeVal}>{val}</Text>
                  </View>
                ))}
              {status === "started" && (
                <View style={S.timeRow}>
                  <Text style={S.timeLbl}>⏱ Elapsed</Text>
                  <Text style={[S.timeVal, { color: "#4f46e5", fontWeight: "700" }]}>
                    {formatElapsed(elapsedSec)}
                  </Text>
                </View>
              )}
            </View>
          )}

        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

// ─── Styles ───────────────────────────────────────────────
const S = StyleSheet.create({
  scroll:       { padding: 20, paddingTop: Platform.OS === "ios" ? 60 : 50, paddingBottom: 40 },
  // Header
  header:       { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 18 },
  greeting:     { fontSize: 22, fontWeight: "800", color: "#fff" },
  sub:          { fontSize: 13, color: "rgba(255,255,255,.65)", marginTop: 2 },
  pill:         { flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  pillTxt:      { fontSize: 12, fontWeight: "700" },
  // Driver card
  driverCard:   { backgroundColor: "rgba(255,255,255,0.12)", borderRadius: 18, padding: 16, flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 16, borderWidth: 1, borderColor: "rgba(255,255,255,0.15)" },
  avatar:       { width: 50, height: 50, borderRadius: 25, backgroundColor: "#4f46e5", alignItems: "center", justifyContent: "center" },
  avatarTxt:    { fontSize: 22, fontWeight: "800", color: "#fff" },
  driverName:   { fontSize: 15, fontWeight: "700", color: "#fff" },
  driverSub:    { fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 3 },
  timerBadge:   { backgroundColor: "rgba(79,70,229,0.85)", borderRadius: 12, paddingHorizontal: 12, paddingVertical: 8, alignItems: "center" },
  timerTxt:     { fontSize: 14, fontWeight: "800", color: "#fff" },
  timerLbl:     { fontSize: 9, color: "rgba(255,255,255,0.7)", textTransform: "uppercase" },
  // Cards
  card:         { backgroundColor: "#fff", borderRadius: 20, padding: 20, marginBottom: 14, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 5 },
  cardTitle:    { fontSize: 16, fontWeight: "800", color: "#0f172a", marginBottom: 12 },
  cardDesc:     { fontSize: 13, color: "#64748b", marginBottom: 16, lineHeight: 20 },
  cardRow:      { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 14 },
  doneTitle:    { fontSize: 20, fontWeight: "800", color: "#0f172a", marginTop: 12 },
  doneSub:      { fontSize: 13, color: "#64748b", marginTop: 6 },
  // Code input
  codeInput:    { flexDirection: "row", alignItems: "center", borderWidth: 2, borderColor: "#e5e7eb", borderRadius: 16, paddingHorizontal: 14, paddingVertical: 14, backgroundColor: "#f9fafb", marginBottom: 8 },
  inputErr:     { borderColor: "#dc2626", backgroundColor: "#fff5f5" },
  codeField:    { flex: 1, fontSize: 22, fontWeight: "900", color: "#0f172a", letterSpacing: 3, marginLeft: 10 },
  // Error
  errorBox:     { flexDirection: "row", alignItems: "flex-start", gap: 8, backgroundColor: "#fef2f2", borderRadius: 10, padding: 12, marginBottom: 4 },
  errorTxt:     { fontSize: 13, color: "#dc2626", flex: 1, fontWeight: "600", lineHeight: 18 },
  // Buttons
  btn:          { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, borderRadius: 16, paddingVertical: 16, shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 4 },
  btnTxt:       { color: "#fff", fontSize: 15, fontWeight: "800", letterSpacing: 0.8 },
  btnGroup:     { gap: 10, marginBottom: 14 },
  noteBox:      { flexDirection: "row", alignItems: "flex-start", gap: 8, backgroundColor: "#f8fafc", borderRadius: 10, padding: 10, marginTop: 12 },
  noteTxt:      { fontSize: 12, color: "#6b7280", flex: 1, lineHeight: 18 },
  // Trip active
  codeTag:      { backgroundColor: "#eef2ff", paddingHorizontal: 12, paddingVertical: 5, borderRadius: 10 },
  codeTagTxt:   { fontSize: 13, fontWeight: "900", color: "#4f46e5", letterSpacing: 1 },
  routeRow:     { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 12, backgroundColor: "#eef2ff", borderRadius: 14, padding: 14 },
  routeTxt:     { fontSize: 15, fontWeight: "800", color: "#4f46e5" },
  chip:         { flex: 1, backgroundColor: "#f8fafc", borderRadius: 12, padding: 12 },
  chipLbl:      { fontSize: 10, fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 },
  chipVal:      { fontSize: 14, fontWeight: "800", color: "#0f172a" },
  // GPS
  liveDot:      { width: 28, height: 28, borderRadius: 14, backgroundColor: "#dcfce7", alignItems: "center", justifyContent: "center" },
  liveDotInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: "#16a34a" },
  coordBox:     { flex: 1, backgroundColor: "#f8fafc", borderRadius: 12, padding: 12 },
  coordLbl:     { fontSize: 10, fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 },
  coordVal:     { fontSize: 13, fontWeight: "800", color: "#0f172a" },
  gpsLive:      { flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#dcfce7", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  // Timings
  timeRow:      { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 9, borderBottomWidth: 1, borderBottomColor: "#f1f5f9" },
  timeLbl:      { fontSize: 13, color: "#64748b" },
  timeVal:      { fontSize: 13, fontWeight: "600", color: "#0f172a" },
});