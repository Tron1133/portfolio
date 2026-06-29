"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* =====================================================
   Reusable Components
===================================================== */

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-black">{title}</h2>

      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">{subtitle}</p>
      )}
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

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition">
      <p className="uppercase text-xs tracking-[2px] text-gray-500">{title}</p>

      <h3 className="text-2xl font-bold text-green-600 mt-3">{value}</h3>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition">
      <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-2xl mb-6">
        ✓
      </div>

      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <p className="text-gray-600 leading-8">{description}</p>
    </div>
  );
}

function WorkflowCard({ number, title }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg transition">
      <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto font-bold text-lg">
        {number}
      </div>

      <h3 className="font-semibold mt-5">{title}</h3>
    </div>
  );
}

/* =====================================================
   Screenshot Gallery
===================================================== */

function ScreenshotGallery({ screenshots }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {screenshots.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden cursor-pointer transition"
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

            <div className="p-6">
              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-3 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-8"
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

/* =====================================================
   Main Page
===================================================== */

export default function Talk() {
  const screenshots = [
    {
      image: "/Projects/talk/1.png",
      title: "Bot Creation",
      description:
        "Create AI voice agents with customizable conversation flows.",
    },

    {
      image: "/Projects/talk/2.png",
      title: "Knowledge Base",
      description: "Train AI voice agents using business knowledge.",
    },

    {
      image: "/Projects/talk/3.png",
      title: "Campaign Setup",
      description: "Configure outbound calling campaigns.",
    },

    {
      image: "/Projects/talk/4.png",
      title: "Voice Analytics",
      description: "Track conversations and call quality.",
    },

    {
      image: "/Projects/talk/5.png",
      title: "CRM Integration",
      description: "Connect customer information with external CRM systems.",
    },

    {
      image: "/Projects/talk/6.png",
      title: "Dashboard",
      description: "Monitor AI agent performance and campaign analytics.",
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
              PRODUCT MANAGEMENT CASE STUDY
            </p>

            <h1 className="text-7xl font-extrabold mt-6">Talk</h1>

            <h2 className="text-3xl text-gray-600 mt-5">
              AI Voice Agent Platform
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-700">
              Talk enables businesses to automate customer conversations using
              conversational AI voice agents. Organizations can deploy AI agents
              for appointment booking, customer support, lead qualification,
              payment reminders, feedback collection and sales calls.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <Badge text="OpenAI" />
              <Badge text="Twilio" />
              <Badge text="React" />
              <Badge text="Next.js" />
              <Badge text="FastAPI" />
              <Badge text="Express.js" />
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://talk.algorizz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-xl font-semibold transition"
              >
                🌐 View Live Product
              </a>
            </div>
          </div>

          <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/Projects/talk/cover.png"
              alt="Talk"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT SNAPSHOT */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Product Snapshot"
            subtitle="A quick overview of the product and my role."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard title="Industry" value="Conversational AI" />

            <StatCard title="Duration" value="2 Months" />

            <StatCard title="Role" value="Product Management Intern" />

            <StatCard title="Primary Users" value="Businesses" />
          </div>
        </div>
      </section>
      {/* OVERVIEW */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Overview"
            subtitle="Understanding the business problem and product vision behind Talk."
          />

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-5">The Problem</h3>

              <p className="text-gray-600 leading-9">
                Businesses spend thousands of hours every month handling
                repetitive phone conversations such as appointment booking,
                payment reminders, lead qualification and customer support.
                Manual calling is expensive, difficult to scale and often
                results in inconsistent customer experiences.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-5">The Solution</h3>

              <p className="text-gray-600 leading-9">
                Talk enables organizations to deploy AI-powered voice agents
                capable of understanding customer intent, answering questions
                and completing business workflows naturally. This helps
                businesses automate customer communication while reducing
                operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS GOALS */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Business Goals"
            subtitle="The primary objectives of the Talk platform."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard title="Automation" value="Reduce Manual Calls" />

            <StatCard title="Efficiency" value="24×7 AI Support" />

            <StatCard title="Scalability" value="Millions of Calls" />

            <StatCard title="Experience" value="Natural Conversations" />
          </div>
        </div>
      </section>

      {/* BUSINESS USE CASES */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Business Use Cases"
            subtitle="Common business workflows automated by Talk."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="AI Sales Calls"
              description="Automatically engage prospects and improve sales outreach."
            />

            <FeatureCard
              title="Appointment Booking"
              description="Schedule appointments without requiring human agents."
            />

            <FeatureCard
              title="Customer Support"
              description="Answer FAQs and resolve common customer queries."
            />

            <FeatureCard
              title="Lead Qualification"
              description="Qualify leads before routing them to sales representatives."
            />

            <FeatureCard
              title="Payment Reminders"
              description="Automate loan, EMI and subscription reminder calls."
            />

            <FeatureCard
              title="Feedback Collection"
              description="Collect customer feedback immediately after service interactions."
            />
          </div>
        </div>
      </section>

      {/* AI VOICE WORKFLOW */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="AI Voice Workflow"
            subtitle="How Talk automates customer conversations."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            <WorkflowCard number="1" title="Customer" />

            <WorkflowCard number="2" title="Call Starts" />

            <WorkflowCard number="3" title="AI Voice Agent" />

            <WorkflowCard number="4" title="Knowledge Base" />

            <WorkflowCard number="5" title="CRM" />

            <WorkflowCard number="6" title="Call Summary" />

            <WorkflowCard number="7" title="Dashboard" />
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Core Features"
            subtitle="Key capabilities of the Talk platform."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Bot Creation"
              description="Build AI voice agents with customizable conversation flows."
            />

            <FeatureCard
              title="AI Voice Calls"
              description="Handle inbound and outbound calls using conversational AI."
            />

            <FeatureCard
              title="Knowledge Base"
              description="Provide business knowledge for contextual conversations."
            />

            <FeatureCard
              title="CRM Integration"
              description="Sync customer data with existing CRM systems."
            />

            <FeatureCard
              title="Call Recording"
              description="Store and review call recordings for quality assurance."
            />

            <FeatureCard
              title="Voice Analytics"
              description="Analyze conversations using AI-generated insights."
            />

            <FeatureCard
              title="Dashboard"
              description="Monitor campaigns, call activity and business performance."
            />

            <FeatureCard
              title="Campaign Management"
              description="Launch and manage large-scale outbound calling campaigns."
            />

            <FeatureCard
              title="Enterprise Security"
              description="Secure APIs and enterprise-ready deployment architecture."
            />
          </div>
        </div>
      </section>

      {/* PRODUCT VISION */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Product Vision"
            subtitle="Where the product is heading."
          />

          <div className="bg-white rounded-3xl shadow border border-gray-200 p-10">
            <p className="text-xl text-gray-700 leading-10">
              Talk aims to become an enterprise-grade conversational AI platform
              capable of handling millions of voice interactions across
              industries. By combining Voice AI, CRM integrations and
              intelligent automation, the platform empowers businesses to
              deliver fast, personalized and scalable customer experiences.
            </p>
          </div>
        </div>
      </section>
      {/* SUCCESS METRICS */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Success Metrics"
            subtitle="Key metrics used to measure product success."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard title="Call Completion" value="High Completion Rate" />

            <StatCard title="Automation" value="Reduced Manual Calls" />

            <StatCard title="Customer Satisfaction" value="Better Experience" />

            <StatCard title="Agent Productivity" value="24×7 Availability" />
          </div>
        </div>
      </section>

      {/* MY PRODUCT MANAGEMENT JOURNEY */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="My Product Management Journey"
            subtitle="My responsibilities across the end-to-end product lifecycle."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <FeatureCard
              title="Discovery"
              description="Conducted market research, competitor analysis and user interviews to understand business communication challenges."
            />

            <FeatureCard
              title="Planning"
              description="Prepared PRDs, user stories, feature prioritization and sprint planning documentation."
            />

            <FeatureCard
              title="Design"
              description="Created wireframes, user flows and collaborated closely with designers to improve usability."
            />

            <FeatureCard
              title="Execution"
              description="Worked with engineering teams throughout development, backlog refinement and sprint execution."
            />

            <FeatureCard
              title="Validation"
              description="Performed User Acceptance Testing (UAT), monitored analytics and validated features before release."
            />
          </div>
        </div>
      </section>

      {/* PRODUCT WALKTHROUGH */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Product Walkthrough"
            subtitle="A visual tour of the Talk platform."
          />

          <ScreenshotGallery screenshots={screenshots} />
        </div>
      </section>

      {/* CHALLENGES & SOLUTIONS */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Challenges & Solutions"
            subtitle="Key product challenges solved while building Talk."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-red-600">Challenge</h3>

              <p className="mt-5 text-gray-600 leading-8">
                Businesses struggled to scale customer communication without
                increasing support teams and operational costs.
              </p>

              <hr className="my-6" />

              <h3 className="text-2xl font-bold text-green-600">Solution</h3>

              <p className="mt-5 text-gray-600 leading-8">
                Designed AI voice agents capable of handling repetitive
                conversations while integrating seamlessly with business
                workflows.
              </p>
            </div>

            <div className="bg-white rounded-2xl border p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-red-600">Challenge</h3>

              <p className="mt-5 text-gray-600 leading-8">
                AI responses needed to remain accurate and contextual across
                different industries and business scenarios.
              </p>

              <hr className="my-6" />

              <h3 className="text-2xl font-bold text-green-600">Solution</h3>

              <p className="mt-5 text-gray-600 leading-8">
                Introduced Knowledge Base integration and CRM connectivity to
                provide personalized and context-aware conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT THINKING */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Product Thinking"
            subtitle="How I approached Talk from a Product Management perspective."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="🎯 Vision"
              description="Automate customer conversations while maintaining natural, human-like interactions."
            />

            <FeatureCard
              title="📊 Metrics"
              description="Call completion rate, customer satisfaction, conversation success rate and automation rate."
            />

            <FeatureCard
              title="⚖️ Trade-offs"
              description="Balanced AI automation with smooth escalation to human agents when conversations became complex."
            />

            <FeatureCard
              title="🚀 Strategy"
              description="Position Talk as a reusable AI communication platform serving multiple industries."
            />
          </div>
        </div>
      </section>

      {/* TECH STACK */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Technology Stack"
            subtitle="Technologies used while building Talk."
          />

          <div className="flex flex-wrap gap-4">
            <Badge text="OpenAI" />
            <Badge text="Twilio" />
            <Badge text="React" />
            <Badge text="Next.js" />
            <Badge text="FastAPI" />
            <Badge text="Express.js" />
            <Badge text="REST APIs" />
            <Badge text="LLMs" />
          </div>
        </div>
      </section>

      {/* KEY LEARNINGS */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Key Learnings"
            subtitle="Knowledge and skills gained while working on Talk."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border p-8">
              <ul className="space-y-4 text-gray-700">
                <li>✅ Conversational AI product design</li>
                <li>✅ Voice User Experience (VUX)</li>
                <li>✅ Product discovery and user research</li>
                <li>✅ Writing PRDs and user stories</li>
                <li>✅ Sprint planning and feature prioritization</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border p-8">
              <ul className="space-y-4 text-gray-700">
                <li>✅ CRM integration workflows</li>
                <li>✅ AI-first SaaS product development</li>
                <li>✅ Cross-functional collaboration</li>
                <li>✅ User Acceptance Testing (UAT)</li>
                <li>✅ Product analytics and validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
