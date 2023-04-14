import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import KhoaMarketing from "@/components/KhoaMarketing";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [subdomain, setSubdomain] = useState("");

  const getSubdomain = (url) => {
    let domain = url;
    if (url.includes("://")) {
      domain = url.split("://")[1];
    }
    const subdomain = domain.split(".")[0];
    return subdomain;
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    setSubdomain(getSubdomain(url.href));
  }, []);

  return (
    <>
      <KhoaMarketing />
    </>
  );
}
