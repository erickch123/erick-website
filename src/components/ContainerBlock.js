import React from "react";
import { Route, Routes, Navigate } from "react-router";

export default function ContainerBlock({ children, ...customMeta }) {
    const router = useRouter();
  
    const meta = {
      title: "Erick Chandra- Software Engineer, Fintech, Photographer and Specialty Coffee Drinker",
      description: `I'm a second year Computer Science Student at SUTD.`,
      image: "/logo.svg",
      type: "website",
      ...customMeta,
    };
    return (
      <div>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://yourwebsite.com${router.asPath}`}
          />
          <link
            rel="canonical"
            href={`https://yourwebsite.com${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Manu Arora" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mannupaaji" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
        </Head>
        <main className="dark:bg-gray-800 w-full">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </main>
      </div>
    );
  }