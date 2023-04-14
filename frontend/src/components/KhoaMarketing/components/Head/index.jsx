import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function HeadOfSite() {

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Khoa Marketing</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta name="description" content="Khoa Marketing - Trường Đại học Tài chính - Marketing"/>

        <meta name="keywords" content="Marketing, quan tri marketing, thuong hieu, quan tri thuong hieu, truyen thong, quản trị marketing, quản trị thương hiệu, truyền thông "/>

        {/* <!-- Favicon --> */}
        <link href="landing/favicon-16x16.png" rel="icon" />

        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Icon Font Stylesheet --> */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* <!-- Libraries Stylesheet --> */}
        <link href="landing/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="landing/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        
        {/* <!-- Customized Bootstrap Stylesheet --> */}
        <link href="landing/css/bootstrap.min.css" rel="stylesheet" />

        {/* <!-- Template Stylesheet --> */}
        <link href="landing/css/style.css" rel="stylesheet" />
      </Head>
    </>
  );
}
