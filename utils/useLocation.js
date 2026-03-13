// // driverapp/utils/useLocation.js
// import * as Location from "expo-location";
// import { useEffect, useState } from "react";
// import { saveDriverLocation } from "./SaveLocation";

// export default function useLocation(shouldTrack, driverId, tripCode) {
//   const [coords, setCoords] = useState(null);
//   const [gpsActive, setGpsActive] = useState(false);

//   useEffect(() => {
//     let subscription = null;

//     async function startTracking() {
//       // 1️⃣ Permission check
//       const { status } =
//         await Location.requestForegroundPermissionsAsync();

//       if (status !== "granted") {
//         console.log("❌ Location permission denied");
//         setGpsActive(false);
//         return;
//       }

//       console.log("✅ Permission granted");

//       // 2️⃣ START GPS directly (Expo Go FIX)
//       subscription = await Location.watchPositionAsync(
//         {
//           accuracy: Location.Accuracy.High,
//           timeInterval: 5000,
//           distanceInterval: 5,
//         },
//         (location) => {
//           const { latitude, longitude, speed } = location.coords;

//           setCoords(location.coords);
//           setGpsActive(true);

//           console.log("📍 GPS ACTIVE:", latitude, longitude);

//           saveDriverLocation(driverId, tripCode, {
//             latitude,
//             longitude,
//             speed,
//           });
//         }
//       );
//     }

//     if (shouldTrack && driverId && tripCode) {
//       startTracking();
//     } else {
//       setGpsActive(false);
//     }

//     return () => {
//       if (subscription) subscription.remove();
//     };
//   }, [shouldTrack, driverId, tripCode]);

//   return { coords, gpsActive };
// }
// driverapp/utils/useLocation.js
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { saveDriverLocation } from "./SaveLocation";

/**
 * Custom hook — watches GPS and pushes to Firebase.
 *
 * @param shouldTrack  boolean — true when trip is "started"
 * @param driverId     string  — driver phone number
 * @param tripCode     string  — trip code entered by driver
 * @param tripInfo     object  — { from, to, busNo, status }
 */
export default function useLocation(shouldTrack, driverId, tripCode, tripInfo = {}) {
  const [coords, setCoords]       = useState(null);
  const [gpsActive, setGpsActive] = useState(false);

  useEffect(() => {
    let subscription = null;

    async function startTracking() {
      // 1️⃣ Ask permission
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("❌ Location permission denied");
        setGpsActive(false);
        return;
      }

      console.log("✅ GPS permission granted — starting watch");

      // 2️⃣ Watch GPS
      subscription = await Location.watchPositionAsync(
        {
          accuracy:         Location.Accuracy.High,
          timeInterval:     5000,   // every 5 seconds
          distanceInterval: 5,      // or every 5 metres
        },
        (location) => {
          const { latitude, longitude, speed } = location.coords;
          setCoords(location.coords);
          setGpsActive(true);

          console.log("📍 GPS:", latitude.toFixed(5), longitude.toFixed(5), "speed:", speed);

          // 3️⃣ Push to Firebase with full trip info
          saveDriverLocation(driverId, tripCode, { latitude, longitude, speed }, tripInfo);
        }
      );
    }

    if (shouldTrack && driverId && tripCode) {
      startTracking();
    } else {
      setGpsActive(false);
    }

    // Cleanup on unmount / when shouldTrack becomes false
    return () => {
      if (subscription) {
        subscription.remove();
        console.log("🛑 GPS watch stopped");
      }
    };
  }, [shouldTrack, driverId, tripCode]);

  return { coords, gpsActive };
}