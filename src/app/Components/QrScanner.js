"use client";
import AppRouts from "@/Constant/Constant";
import { AuthContext } from "@/Context/context";
import axios from "axios";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";

const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

export default function QRScanner() {
  const { user } = useContext(AuthContext);
  const [scanned, setScanned] = useState(false);

  const handleScan = async (data) => {
    if (data && !scanned && user) {
      setScanned(true);
      const res = await axios.post(AppRouts.markAttendance, {
        user: user?.name,
        uid: user?.email,
        time: new Date().toISOString(),
        scannedData: data,
      });

      const result = await res.json();
      alert(result.message);
    }
  };

  const handleError = (err) => {
    console.error(err.message);
    alert("QR scan error");
  };

  return (
    <div>
      <h2>Scan QR to Mark Attendance</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
    </div>
  );
}
