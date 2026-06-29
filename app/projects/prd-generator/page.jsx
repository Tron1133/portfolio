"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ---------------- Components ---------------- */

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold text-black">{title}</h2>
      <p className="text-gray-600 mt-3 max-w-3xl">{subtitle}</p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
      {text}
    </span>
  );
}

function Card({ title, description }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-xl transition">
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
            className="bg-white rounded-2xl shadow border cursor-pointer overflow-hidden hover:shadow-xl transition"
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

/* ---------------- Page ---------------- */

export default function PRDGenerator() {
  const screenshots = [
    {
      image: "/Projects/prd-generator/1.png",
      title: "AI PRD Generator",
      description: "Generate structured PRDs from simple product ideas.",
    },

    {
      image: "/Projects/prd-generator/2.png",
      title: "Market Research",
      description: "Automated competitor and market intelligence.",
    },

    {
      image: "/Projects/prd-generator/3.png",
      title: "Generated PRD",
      description: "Complete PRD with personas, requirements and KPIs.",
    },

    {
      image: "/Projects/prd-generator/4.png",
      title: "Export",
      description: "Download generated PRDs as PDF.",
    },

    {
      image: "/Projects/prd-generator/5.png",
      title: "AI Workflow",
      description: "LLM powered document generation.",
    },

    {
      image: "/Projects/prd-generator/6.png",
      title: "Dashboard",
      description: "Manage generated documents.",
    },
  ];

  return (
    <main className="bg-gray-100">
      {/* HERO */}

      <section className="max-w-7xl mx-auto px-8 py-20">
        <Link
          href="/projects"
          className="text-green-600 font-semibold hover:underline"
        >
          ← Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-10">
          <div>
            <p className="uppercase tracking-[6px] text-green-600 font-semibold">
              AI PRODUCT
            </p>

            <h1 className="text-6xl font-extrabold mt-6">
              PRD Generator AI Agent
            </h1>

            <p className="mt-8 text-lg text-gray-700 leading-9">
              An AI Copilot that transforms raw product ideas into structured
              Product Requirement Documents (PRDs). The platform automates
              market research, creates user personas, functional requirements,
              KPIs and exports complete documentation in PDF format.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <Badge text="OpenAI" />
              <Badge text="Python" />
              <Badge text="Streamlit" />
              <Badge text="FastAPI" />
              <Badge text="LLMs" />
              <Badge text="PDF Export" />
            </div>
          </div>

          <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/Projects/prd-generator/cover.png"
              alt="PRD Generator"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Project Overview"
            subtitle="Turning ideas into implementation-ready product documents."
          />

          <div className="grid lg:grid-cols-2 gap-10">
            <Card
              title="Problem"
              description="Writing Product Requirement Documents manually is repetitive, time-consuming and often inconsistent. Product managers also spend significant time conducting market research and defining requirements."
            />

            <Card
              title="Solution"
              description="Built an AI-powered copilot that automatically generates complete PRDs, performs competitive analysis and exports structured documents, reducing documentation effort and accelerating product planning."
            />
          </div>
        </div>
      </section>
      {/* AI WORKFLOW */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="How the AI Copilot Works"
            subtitle="A simple workflow that converts product ideas into implementation-ready PRDs."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Product Idea",
              "AI Analysis",
              "Market Research",
              "Generate PRD",
              "Review",
              "Export PDF",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Key Features"
            subtitle="Core capabilities of the AI Copilot."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="AI PRD Generation"
              description="Generate structured Product Requirement Documents from a simple product idea."
            />

            <Card
              title="User Personas"
              description="Automatically create target personas, pain points and user goals."
            />

            <Card
              title="Requirements"
              description="Generate functional requirements, user stories and acceptance criteria."
            />

            <Card
              title="Competitive Intelligence"
              description="Analyze competitors, compare features and identify market gaps automatically."
            />

            <Card
              title="KPIs & Success Metrics"
              description="Recommend measurable product success metrics and business KPIs."
            />

            <Card
              title="PDF Export"
              description="Export complete PRDs into professionally formatted PDF documents."
            />
          </div>
        </div>
      </section>

      {/* MY CONTRIBUTION */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="My Contribution"
            subtitle="End-to-end ownership of the AI product."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              title="Product & AI Development"
              description="Designed and built an AI Copilot that transforms raw product ideas into structured PRDs using LLM APIs. Implemented prompt engineering strategies to generate high-quality documentation."
            />

            <Card
              title="Research & Automation"
              description="Developed a competitive intelligence engine for automated market research, feature benchmarking and document generation. Built complete PDF export workflows using Python and Streamlit."
            />
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Product Walkthrough"
            subtitle="Screens from the AI Copilot."
          />

          <ScreenshotGallery screenshots={screenshots} />
        </div>
      </section>
      {/* TECHNOLOGY STACK */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Technology Stack"
            subtitle="Technologies used to build the AI Copilot."
          />

          <div className="flex flex-wrap gap-4">
            <Badge text="Python" />
            <Badge text="Streamlit" />
            <Badge text="OpenAI API" />
            <Badge text="FastAPI" />
            <Badge text="LLMs" />
            <Badge text="Markdown" />
            <Badge text="PDF Export" />
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
      </section>

      {/* CHALLENGES */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Challenges & Solutions"
            subtitle="Problems encountered while building the AI Copilot."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <Card
              title="Generating Consistent PRDs"
              description="LLM responses initially varied in structure and detail. Prompt engineering and structured templates were introduced to ensure every generated PRD followed a consistent format."
            />

            <Card
              title="Automating Market Research"
              description="Collecting competitor information manually was inefficient. A competitive intelligence workflow automated feature comparison and provided structured market insights inside the generated PRD."
            />
          </div>
        </div>
      </section>

      {/* IMPACT */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <SectionTitle
            title="Project Impact"
            subtitle="How this project improves the product planning workflow."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="⚡ Faster Documentation"
              description="Reduced the time required to create structured PRDs from hours to just a few minutes."
            />

            <Card
              title="🤖 AI-Assisted Research"
              description="Automated competitor analysis and feature benchmarking to support better product decisions."
            />

            <Card
              title="📄 Ready-to-Share Documents"
              description="Generated professional PRDs with PDF export, making documentation easy to share with stakeholders."
            />
          </div>
        </div>
      </section>

      {/* KEY LEARNINGS */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Key Learnings"
            subtitle="Skills strengthened through this project."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              title="AI Product Development"
              description="Learned how to build AI-powered workflows using LLM APIs, prompt engineering and automation to solve real product management problems."
            />

            <Card
              title="Product Thinking"
              description="Strengthened product discovery, documentation, competitive analysis and translating business ideas into implementation-ready product specifications."
            />
          </div>
        </div>
      </section>

      {/* FUTURE IMPROVEMENTS */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Future Improvements"
            subtitle="Potential enhancements for upcoming versions."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Collaborative Editing"
              description="Enable multiple stakeholders to review and edit PRDs together."
            />

            <Card
              title="Jira Integration"
              description="Automatically convert generated requirements into Jira Epics, Stories and Tasks."
            />

            <Card
              title="Multi-Model AI"
              description="Allow users to generate PRDs using different LLM providers such as OpenAI, Claude and Gemini."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-green-600 text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-8">
          <h2 className="text-5xl font-bold">AI + Product Management</h2>

          <p className="mt-6 text-xl text-green-100 leading-9">
            This project combines Product Management, AI, automation and
            software development to simplify one of the most time-consuming
            activities in product development—creating comprehensive Product
            Requirement Documents.
          </p>

          <Link
            href="/projects"
            className="inline-block mt-10 bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            ← Back to All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
