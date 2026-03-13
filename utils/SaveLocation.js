// import { ref, update } from "firebase/database";
// import { db } from "../firebase";

// export async function saveDriverLocation(driverId, tripCode, coords) {
//   if (!driverId || !tripCode || !coords) {
//     console.log("❌ Missing data, location not saved");
//     return;
//   }

//   try {
//     await update(
//       ref(db, `trips/${tripCode}/drivers/${driverId}`),
//       {
//         latitude: coords.latitude,
//         longitude: coords.longitude,
//         speed: coords.speed || 0,
//         updatedAt: Date.now(),
//       }
//     );

//     console.log("✅ Location saved under trip:", tripCode);
//   } catch (error) {
//     console.log("❌ Error saving location:", error);
//   }
// }
import { ref, update } from "firebase/database";
import { db } from "../firebase";

/**
 * Saves driver GPS location + trip info to Firebase.
 *
 * Firebase path:
 *   trips/{tripCode}/from         → "Chennai"
 *   trips/{tripCode}/to           → "Madurai"
 *   trips/{tripCode}/busNo        → "TN-01-AB-1234"
 *   trips/{tripCode}/status       → "active"
 *   trips/{tripCode}/drivers/{driverId}/latitude
 *   trips/{tripCode}/drivers/{driverId}/longitude
 *   trips/{tripCode}/drivers/{driverId}/speed
 *   trips/{tripCode}/drivers/{driverId}/updatedAt
 */
export async function saveDriverLocation(driverId, tripCode, coords, tripInfo = {}) {
  if (!driverId || !tripCode || !coords) {
    console.log("❌ Missing data, location not saved");
    return;
  }

  try {
    // 1️⃣ Save trip-level info (from, to, busNo, status)
    await update(ref(db, `trips/${tripCode}`), {
      from:   tripInfo.from   || "",
      to:     tripInfo.to     || "",
      busNo:  tripInfo.busNo  || "",
      status: tripInfo.status || "active",
      tripCode: String(tripCode),
    });

    // 2️⃣ Save driver GPS under the trip
    await update(ref(db, `trips/${tripCode}/drivers/${driverId}`), {
      latitude:  coords.latitude,
      longitude: coords.longitude,
      speed:     coords.speed || 0,
      updatedAt: Date.now(),
      driverId:  String(driverId),
    });

    console.log("✅ Location + trip info saved:", tripCode, coords.latitude, coords.longitude);
  } catch (error) {
    console.log("❌ Error saving location:", error);
  }
}

/**
 * Marks a trip as ended in Firebase.
 */
export async function endTrip(tripCode) {
  if (!tripCode) return;
  try {
    await update(ref(db, `trips/${tripCode}`), { status: "ended" });
    console.log("✅ Trip marked as ended:", tripCode);
  } catch (e) {
    console.log("❌ Error ending trip:", e);
  }
}