"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ===============================
Reusable Components
=============================== */

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
    <div className="bg-white rounded-2xl p-8 shadow border hover:shadow-lg transition">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <p className="text-gray-600 leading-8">{description}</p>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow border">
      <p className="uppercase text-xs tracking-widest text-gray-500">{title}</p>

      <h3 className="text-2xl font-bold text-green-600 mt-3">{value}</h3>
    </div>
  );
}

function ScreenshotGallery({ screenshots }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {screenshots.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow cursor-pointer overflow-hidden hover:shadow-xl transition"
            onClick={() => setSelected(item)}
          >
            <div className="relative h-60">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="font-bold">{item.title}</h3>

              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
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

export default function Pinksalt() {
  const screenshots = [
    {
      image: "/Projects/pinksalt/1.png",
      title: "Campaign Builder",
      description: "Create AI-powered campaigns.",
    },

    {
      image: "/Projects/pinksalt/2.png",
      title: "Audience Segmentation",
      description: "Target customers using filters.",
    },

    {
      image: "/Projects/pinksalt/3.png",
      title: "AI Content",
      description: "Generate campaign copies instantly.",
    },

    {
      image: "/Projects/pinksalt/4.png",
      title: "Scheduling",
      description: "Schedule campaigns in advance.",
    },

    {
      image: "/Projects/pinksalt/5.png",
      title: "Analytics",
      description: "Track delivery and engagement.",
    },

    {
      image: "/Projects/pinksalt/6.png",
      title: "Dashboard",
      description: "Monitor campaign performance.",
    },
  ];

  return (
    <main className="bg-gray-100">
      <section className="max-w-7xl mx-auto px-8 py-20">
        <Link
          href="/projects"
          className="text-black font-semibold hover:underline mt-4 inline-block"
        >
          ← Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-10">
          <div>
            <p className="uppercase tracking-[6px] text-green-600 font-semibold">
              PRODUCT MANAGEMENT CASE STUDY
            </p>

            <h1 className="text-7xl font-bold mt-6">Pinksalt</h1>

            <h2 className="text-3xl text-gray-600 mt-5">
              AI Campaign Platform
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-700">
              Pinksalt enables businesses to create AI-powered marketing
              campaigns and engage customers through WhatsApp and RCS. The
              platform simplifies campaign creation, audience targeting and
              campaign analytics from one dashboard.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <Badge text="OpenAI" />
              <Badge text="React" />
              <Badge text="Express.js" />
              <Badge text="Next.js" />
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://dev.pinksalt.algorizz.com/"
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
              src="/Projects/pinksalt/cover.png"
              alt="Pinksalt"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Product Snapshot"
            subtitle="Overview of the AI campaign platform."
          />

          <div className="grid md:grid-cols-4 gap-8">
            <Stat title="Industry" value="MarTech" />

            <Stat title="Duration" value="2 Months" />

            <Stat title="Role" value="Product Management" />

            <Stat title="Users" value="Marketing Teams" />
          </div>
        </div>
      </section>
      {/* OVERVIEW */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Overview"
            subtitle="Understanding the business problem and how Pinksalt solves it."
          />

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-5">The Problem</h3>

              <p className="text-gray-600 leading-8">
                Businesses often struggle to create personalized marketing
                campaigns across multiple communication channels. Manual
                campaign creation is time-consuming, difficult to scale, and
                requires significant effort from marketing teams.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-5">The Solution</h3>

              <p className="text-gray-600 leading-8">
                Pinksalt uses Generative AI to help businesses create, automate
                and manage marketing campaigns. It enables teams to generate
                campaign content, target the right audience, schedule campaigns
                and measure performance using a single platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET INDUSTRIES */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Industries Served"
            subtitle="Businesses using Pinksalt to automate customer engagement."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Restaurants"
              description="Promote offers, festive campaigns and customer loyalty programs through WhatsApp and RCS."
            />

            <Card
              title="Retail"
              description="Launch promotional campaigns, product announcements and seasonal offers."
            />

            <Card
              title="Salons & Wellness"
              description="Automate appointment reminders, promotional campaigns and customer re-engagement."
            />
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Core Features"
            subtitle="Key capabilities that simplify campaign creation and execution."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Campaign Builder"
              description="Create marketing campaigns using an intuitive visual workflow."
            />

            <Card
              title="Audience Segmentation"
              description="Target customers using filters such as demographics, location and engagement history."
            />

            <Card
              title="AI Content Generation"
              description="Generate campaign messages instantly using AI."
            />

            <Card
              title="Campaign Scheduling"
              description="Schedule campaigns to run automatically at the right time."
            />

            <Card
              title="WhatsApp & RCS"
              description="Deliver campaigns across WhatsApp Business and Rich Communication Services (RCS)."
            />

            <Card
              title="Analytics Dashboard"
              description="Track delivery rates, clicks, engagement and campaign performance."
            />
          </div>
        </div>
      </section>

      {/* MY CONTRIBUTION */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="My Product Management Contribution"
            subtitle="My responsibilities throughout the product lifecycle."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Product Discovery"
              description="Conducted market research and competitor analysis to understand the AI marketing landscape."
            />

            <Card
              title="Product Planning"
              description="Prepared PRDs, user stories, feature prioritization and collaborated during sprint planning."
            />

            <Card
              title="Design & Validation"
              description="Created wireframes, supported feature implementation and performed User Acceptance Testing (UAT)."
            />
          </div>
        </div>
      </section>

      {/* PRODUCT WALKTHROUGH */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Product Walkthrough"
            subtitle="Key screens from the Pinksalt platform."
          />

          <ScreenshotGallery screenshots={screenshots} />
        </div>
      </section>
      {/* CHALLENGES & SOLUTIONS */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Challenges & Solutions"
            subtitle="Key product challenges addressed while building Pinksalt."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <Card
              title="Challenge: Creating Campaigns Takes Time"
              description="Marketing teams spent significant time writing campaign content, selecting audiences and scheduling campaigns manually. AI-powered content generation and reusable campaign templates reduced campaign creation time."
            />

            <Card
              title="Challenge: Measuring Campaign Success"
              description="Businesses lacked visibility into campaign performance. The analytics dashboard provided delivery, engagement and campaign performance metrics to help marketers optimize future campaigns."
            />
          </div>
        </div>
      </section>

      {/* PRODUCT STRATEGY */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Product Strategy"
            subtitle="Product decisions that shaped the platform."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="AI First"
              description="Reduce campaign creation effort using AI-generated marketing content."
            />

            <Card
              title="Multi-Channel"
              description="Enable businesses to engage customers through WhatsApp and RCS from one platform."
            />

            <Card
              title="Simple Experience"
              description="Design an intuitive workflow so marketing teams can launch campaigns without technical expertise."
            />
          </div>
        </div>
      </section>

      {/* FUTURE ROADMAP */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Future Roadmap"
            subtitle="Potential improvements for future releases."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="A/B Testing"
              description="Compare campaign variants to identify the highest-performing content."
            />

            <Card
              title="Customer Journey Automation"
              description="Build automated campaign journeys triggered by user behavior."
            />

            <Card
              title="Predictive Analytics"
              description="Use AI to recommend the best audience, channel and send time for every campaign."
            />
          </div>
        </div>
      </section>

      {/* TECH STACK */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Technology Stack"
            subtitle="Technologies used during product development."
          />

          <div className="flex flex-wrap gap-3">
            <Badge text="OpenAI" />
            <Badge text="React" />
            <Badge text="Next.js" />
            <Badge text="FastAPI" />
            <Badge text="WhatsApp API" />
            <Badge text="RCS" />
            <Badge text="REST APIs" />
          </div>
        </div>
      </section>

      {/* KEY LEARNINGS */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Key Learnings"
            subtitle="What I learned while working on Pinksalt."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              title="Product Management"
              description="Strengthened my skills in product discovery, competitor analysis, PRD writing, feature prioritization, sprint planning and cross-functional collaboration."
            />

            <Card
              title="AI Product Development"
              description="Learned how AI can improve marketing workflows, customer engagement and campaign automation while validating features through User Acceptance Testing."
            />
          </div>
        </div>
      </section>

      {/* MY IMPACT */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-green-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold">My Product Management Impact</h2>

            <p className="mt-6 text-lg leading-9 text-green-100">
              Throughout this project, I contributed across the complete product
              lifecycle—from product discovery and market research to PRD
              creation, wireframing, feature prioritization, sprint planning,
              User Acceptance Testing (UAT) and product validation. Working
              closely with design and engineering teams helped me understand how
              AI-powered products are built and shipped in an agile environment.
            </p>
          </div>
        </div>
      </section>

      {/* BACK TO PROJECTS */}

      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-8">
          <h2 className="text-5xl font-bold">Thanks for Reading</h2>

          <p className="mt-6 text-xl text-gray-300">
            Explore my other Product Management case studies and AI products.
          </p>

          <Link
            href="/projects"
            className="inline-block mt-10 bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-xl font-semibold"
          >
            ← Back to All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
