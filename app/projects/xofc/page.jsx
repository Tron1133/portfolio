"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ---------- Components ---------- */

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-gray-600 mt-3 max-w-3xl">{subtitle}</p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
      {text}
    </span>
  );
}

function Card({ title, description }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-lg transition">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <p className="text-gray-600 leading-8">{description}</p>
    </div>
  );
}

function ScreenshotGallery({ screenshots }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {screenshots.map((shot, index) => (
          <div
            key={index}
            onClick={() => setSelected(shot)}
            className="bg-white rounded-xl shadow border overflow-hidden cursor-pointer hover:shadow-xl transition"
          >
            <div className="relative h-56">
              <Image
                src={shot.image}
                alt={shot.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="font-bold">{shot.title}</h3>

              <p className="text-sm text-gray-600 mt-2">{shot.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-10"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-full max-w-6xl h-[85vh]">
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function XOFCPage() {
  const screenshots = [
    {
      image: "/Projects/xofc/1.png",
      title: "Home",
      description: "Landing page with football highlights.",
    },

    {
      image: "/Projects/xofc/2.png",
      title: "Fixtures",
      description: "Upcoming and live football matches.",
    },

    {
      image: "/Projects/xofc/3.png",
      title: "Player Profiles",
      description: "Player statistics and career information.",
    },

    {
      image: "/Projects/xofc/4.png",
      title: "League Table",
      description: "Real-time standings and rankings.",
    },

    {
      image: "/Projects/xofc/5.png",
      title: "Analytics",
      description: "Google Analytics user engagement tracking.",
    },

    {
      image: "/Projects/xofc/6.png",
      title: "Responsive Design",
      description: "Optimized mobile experience.",
    },
  ];

  return (
    <main className="bg-gray-100">
      <section className="max-w-7xl mx-auto px-8 py-20">
        <Link
          href="/projects"
          className="text-black font-semibold hover:underline"
        >
          ← Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-10">
          <div>
            <p className="uppercase tracking-[6px] text-green-600 font-semibold">
              SPORTS TECH
            </p>

            <h1 className="text-6xl font-extrabold mt-6">XOFC</h1>

            <p className="mt-8 text-lg text-gray-700 leading-9">
              XOFC is an interactive football platform built to deliver live
              football data, player profiles, league standings and match
              fixtures. The project combines API integration, responsive web
              development and analytics to create an engaging experience for
              football fans.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <Badge text="React" />
              <Badge text="Football API" />
              <Badge text="Google Analytics" />
              <Badge text="Responsive UI" />
              <Badge text="REST APIs" />
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://xofc-india.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-xl font-semibold transition"
              >
                🌐 View Live Product
              </a>
            </div>
          </div>

          <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/Projects/xofc/cover.png"
              alt="XOFC"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Project Overview"
            subtitle="Building an engaging football platform using live data."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <Card
              title="Problem"
              description="Football fans often need to switch between multiple platforms to access fixtures, player statistics and league standings."
            />

            <Card
              title="Solution"
              description="Developed a centralized football platform that integrates live data APIs and presents player insights, fixtures and league information through an intuitive interface."
            />
          </div>
        </div>
      </section>
      {/* KEY FEATURES */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Key Features"
            subtitle="Core capabilities that enhance the football fan experience."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Live Football Data"
              description="Integrated external football APIs to display live match schedules, results and league information in real time."
            />

            <Card
              title="Player Profiles"
              description="Designed detailed player pages with statistics, team information and performance insights."
            />

            <Card
              title="Match Fixtures"
              description="Provided upcoming fixtures, match details and league standings through an intuitive interface."
            />

            <Card
              title="Responsive Experience"
              description="Optimized the platform for desktop, tablet and mobile devices using responsive layouts."
            />

            <Card
              title="Google Analytics"
              description="Tracked user engagement, page views and interaction patterns to better understand user behaviour."
            />

            <Card
              title="Performance Optimization"
              description="Focused on clean UI design and efficient API integration for a smooth browsing experience."
            />
          </div>
        </div>
      </section>

      {/* TECHNICAL IMPLEMENTATION */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Technical Implementation"
            subtitle="How the platform was built."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <Card
              title="API Integration"
              description="Connected external football APIs to fetch live fixtures, player information and league standings, ensuring users always received updated data."
            />

            <Card
              title="Analytics"
              description="Integrated Google Analytics to measure user engagement, monitor traffic and identify the most visited sections of the platform."
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Technology Stack"
            subtitle="Technologies used throughout the project."
          />

          <div className="flex flex-wrap gap-4">
            <Badge text="React" />
            <Badge text="JavaScript" />
            <Badge text="REST APIs" />
            <Badge text="Football API" />
            <Badge text="Google Analytics" />
            <Badge text="Responsive Design" />
          </div>
        </div>
      </section>

      {/* KEY LEARNINGS */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Key Learnings"
            subtitle="Skills strengthened while building XOFC."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              title="API Integration"
              description="Improved my understanding of integrating third-party APIs, handling dynamic data and presenting real-time information in a user-friendly way."
            />

            <Card
              title="Data-Driven Product Development"
              description="Learned how analytics can be used to understand user behaviour, evaluate feature adoption and continuously improve the product experience."
            />
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}

      <section className="bg-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-8 rounded-3xl">
          <h2 className="text-4xl font-bold mb-8">Project Highlights</h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold">⚽</h3>

              <p className="mt-4 text-green-100">Live Match Data</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">👤</h3>

              <p className="mt-4 text-green-100">Player Profiles</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">📊</h3>

              <p className="mt-4 text-green-100">Google Analytics</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">📱</h3>

              <p className="mt-4 text-green-100">Responsive UI</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
