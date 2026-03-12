import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Ivan David | AI Engineer",
  description:
    "Portfolio of Ivan David, an AI Engineer specializing in machine learning, deep learning, data science, predictive modeling, LLMs, and building intelligent systems that drive business value.",
  keywords: [
    "Ivan David",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Predictive Modeling",
    "LLM",
    "OpenCL",
    "Python",
    "TensorFlow",
  ],
  authors: [{ name: "Ivan David" }],
  creator: "Ivan David",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ivandavid.com",
    title: "Ivan David | AI Engineer",
    description:
      "Portfolio of Ivan David, an AI Engineer specializing in machine learning, deep learning, data science, and building intelligent systems that drive business value.",
    siteName: "Ivan David Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Ivan David Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan David | AI Engineer",
    description:
      "Portfolio of Ivan David, an AI Engineer specializing in machine learning, deep learning, and data science.",
    creator: "@ivandavid",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'
