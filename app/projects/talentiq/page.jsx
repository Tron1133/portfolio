"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ============================================
   Reusable Components
============================================ */

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-black">{title}</h2>

      {subtitle && (
        <p className="text-gray-600 mt-4 text-lg max-w-3xl">{subtitle}</p>
      )}
    </div>
  );
}

function Badge({ text }) {
  return (
    <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm">
      {text}
    </span>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition">
      <p className="uppercase text-gray-500 text-sm tracking-widest">{title}</p>

      <h3 className="text-2xl font-bold mt-3 text-green-600">{value}</h3>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition">
      <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-2xl mb-5">
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
      <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto text-xl font-bold">
        {number}
      </div>

      <h3 className="font-bold text-lg mt-5">{title}</h3>
    </div>
  );
}

/* ============================================
   Screenshot Gallery
============================================ */

function ScreenshotGallery({ screenshots }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {screenshots.map((shot, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden cursor-pointer transition"
            onClick={() => setSelected(shot)}
          >
            <div className="relative h-60">
              <Image
                src={shot.image}
                alt={shot.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-bold text-xl">{shot.title}</h3>

              <p className="text-gray-600 mt-3">{shot.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
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

/* ============================================
   Main Page
============================================ */

export default function TalentIQ() {
  const screenshots = [
    {
      image: "/Projects/talentiq/1.png",
      title: "Requirement Creation",
      description:
        "Recruiters define hiring requirements before launching assessments.",
    },

    {
      image: "/Projects/talentiq/2.png",
      title: "AI Resume Screening",
      description:
        "AI automatically ranks resumes based on skills, experience and job relevance.",
    },

    {
      image: "/Projects/talentiq/3.png",
      title: "Skills Assessment",
      description: "Role-specific technical and aptitude assessments.",
    },

    {
      image: "/Projects/talentiq/4.png",
      title: "AI Interview",
      description: "Candidates complete AI-led structured interviews.",
    },

    {
      image: "/Projects/talentiq/5.png",
      title: "AI Proctoring",
      description:
        "Browser lockdown and AI monitoring ensure assessment integrity.",
    },

    {
      image: "/Projects/talentiq/6.png",
      title: "Candidate Reports",
      description:
        "Comprehensive AI-generated reports help recruiters shortlist confidently.",
    },
  ];

  return (
    <main className="bg-gray-100">
      {/* HERO */}

      <section className="max-w-7xl mx-auto px-8 py-20">
        <Link
          href="/projects"
          className="inline-block mt-10 text-black transition px-8 py-4 rounded-xl font-semibold"
        >
          ← Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-5">
          <div>
            <p className="uppercase tracking-[6px] text-green-600 font-semibold">
              PRODUCT MANAGEMENT
            </p>

            <h1 className="text-7xl font-extrabold mt-6">TalentIQ</h1>

            <h2 className="text-3xl text-gray-600 mt-5">
              AI Talent Assessment Platform
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-700">
              TalentIQ helps enterprises hire faster by automating resume
              screening, AI interviews, skills assessment, browser lockdown and
              AI-powered candidate reports. The platform reduces recruiter
              effort while improving hiring quality and consistency.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <Badge text="OpenAI" />
              <Badge text="Python" />
              <Badge text="Next.js" />
              <Badge text="Express.js" />
              <Badge text="FastAPI" />
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://talentiq-interviewai.algorizz.com/"
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
              src="/Projects/talentiq/cover.png"
              alt="TalentIQ"
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
            subtitle="A quick overview of the product and my contribution."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard title="Industry" value="HRTech" />

            <StatCard title="Duration" value="2 Months" />

            <StatCard title="Role" value="Product Management" />

            <StatCard title="Users" value="Recruiters" />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Overview"
            subtitle="Understanding the business problem and product vision."
          />

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-5">The Problem</h3>

              <p className="text-gray-600 leading-9">
                Recruiters spend significant time manually reviewing resumes,
                scheduling interviews and evaluating candidates. Hiring
                processes are often inconsistent, slow and difficult to scale
                across large organizations.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-5">The Solution</h3>

              <p className="text-gray-600 leading-9">
                TalentIQ combines AI resume screening, skills assessments,
                AI-led interviews, browser lockdown, proctoring and intelligent
                reports into a unified hiring platform that enables recruiters
                to shortlist candidates faster and with greater confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* TARGET USERS */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Target Users"
            subtitle="TalentIQ is designed for multiple stakeholders involved in the recruitment process."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Recruiters"
              description="Quickly shortlist qualified candidates using AI-powered resume screening, assessments and interview reports."
            />

            <FeatureCard
              title="HR Teams"
              description="Manage hiring workflows, candidate pipelines and recruitment operations efficiently."
            />

            <FeatureCard
              title="Enterprises"
              description="Standardize hiring across departments while reducing recruitment cost and time-to-hire."
            />

            <FeatureCard
              title="Candidates"
              description="Complete AI interviews and assessments remotely through a secure and guided experience."
            />
          </div>
        </div>
      </section>

      {/* PRODUCT WORKFLOW */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="End-to-End Product Workflow"
            subtitle="The complete hiring journey powered by TalentIQ."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <WorkflowCard number="1" title="Requirement Creation" />

            <WorkflowCard number="2" title="Resume Screening" />

            <WorkflowCard number="3" title="Skills Assessment" />

            <WorkflowCard number="4" title="AI Interview" />

            <WorkflowCard number="5" title="AI Proctoring" />

            <WorkflowCard number="6" title="Candidate Report" />
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Core Features"
            subtitle="Key capabilities that simplify and automate enterprise hiring."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Requirement Creation"
              description="Recruiters define job descriptions, required skills, interview rounds and hiring criteria before launching assessments."
            />

            <FeatureCard
              title="AI Resume Screening"
              description="Automatically analyzes resumes, extracts relevant information and ranks candidates according to job requirements."
            />

            <FeatureCard
              title="Personality Assessment"
              description="Measures behavioral traits and communication style to evaluate candidate-job fit."
            />

            <FeatureCard
              title="Skills Assessment"
              description="Conducts technical, aptitude and domain-specific assessments based on the target role."
            />

            <FeatureCard
              title="AI Video Interview"
              description="Generates role-specific interview questions and evaluates candidate responses using AI."
            />

            <FeatureCard
              title="Browser Lockdown & Proctoring"
              description="Maintains assessment integrity using browser restrictions, webcam monitoring and AI-powered proctoring."
            />

            <FeatureCard
              title="Candidate Reports"
              description="Creates detailed reports containing resume insights, assessment scores, interview summaries and recommendations."
            />

            <FeatureCard
              title="Analytics Dashboard"
              description="Provides hiring statistics, assessment completion rates and recruiter insights for better decision making."
            />

            <FeatureCard
              title="Enterprise Ready"
              description="Designed for organizations hiring at scale with secure workflows and standardized evaluation processes."
            />
          </div>
        </div>
      </section>

      {/* PRODUCT VISION */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Product Vision"
            subtitle="The long-term vision behind TalentIQ."
          />

          <div className="bg-white rounded-3xl p-10 shadow-md border border-gray-200">
            <p className="text-xl text-gray-700 leading-10">
              TalentIQ aims to become an end-to-end AI hiring platform that
              helps enterprises move beyond traditional resume-based hiring. By
              combining AI screening, assessments, interviews and intelligent
              reporting, the platform enables organizations to identify the best
              candidates faster while delivering a consistent, scalable and
              data-driven recruitment experience.
            </p>
          </div>
        </div>
      </section>

      {/* SUCCESS METRICS */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Success Metrics"
            subtitle="Key metrics that indicate product success."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard title="Time to Hire" value="↓ Faster Screening" />

            <StatCard
              title="Assessment Completion"
              value="High Completion Rate"
            />

            <StatCard
              title="Recruiter Productivity"
              value="Reduced Manual Work"
            />

            <StatCard title="Hiring Quality" value="Better Candidate Match" />
          </div>
        </div>
      </section>

      {/* MY PRODUCT MANAGEMENT JOURNEY */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="My Product Management Journey"
            subtitle="My contributions throughout the end-to-end product lifecycle."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <FeatureCard
              title="Discovery"
              description="Conducted market research, competitor analysis and user interviews to identify hiring pain points."
            />

            <FeatureCard
              title="Planning"
              description="Prepared PRDs, user stories, acceptance criteria and prioritized features using product frameworks."
            />

            <FeatureCard
              title="Design"
              description="Created wireframes, user flows and collaborated closely with designers to improve usability."
            />

            <FeatureCard
              title="Execution"
              description="Worked with engineering teams during sprint planning, feature implementation and backlog grooming."
            />

            <FeatureCard
              title="Validation"
              description="Performed UAT, monitored analytics and validated product functionality before release."
            />
          </div>
        </div>
      </section>
      {/* PRODUCT WALKTHROUGH */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Product Walkthrough"
            subtitle="A visual walkthrough of the TalentIQ platform showcasing key recruiter workflows."
          />

          <ScreenshotGallery screenshots={screenshots} />
        </div>
      </section>

      {/* CHALLENGES & SOLUTIONS */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Challenges & Product Decisions"
            subtitle="Some key product problems solved while building TalentIQ."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow border">
              <h3 className="text-2xl font-bold text-red-600">Challenge</h3>

              <p className="mt-5 text-gray-600 leading-8">
                Recruiters spent hours manually reviewing resumes, resulting in
                inconsistent candidate shortlisting.
              </p>

              <hr className="my-6" />

              <h3 className="text-2xl font-bold text-green-600">Solution</h3>

              <p className="mt-5 text-gray-600 leading-8">
                Introduced AI Resume Screening that automatically ranks resumes
                using predefined hiring criteria.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow border">
              <h3 className="text-2xl font-bold text-red-600">Challenge</h3>

              <p className="mt-5 text-gray-600 leading-8">
                Recruiters lacked confidence in remote assessments because
                candidates could switch tabs or seek external help.
              </p>

              <hr className="my-6" />

              <h3 className="text-2xl font-bold text-green-600">Solution</h3>

              <p className="mt-5 text-gray-600 leading-8">
                Added Browser Lockdown and AI Proctoring to ensure assessment
                integrity and reduce malpractice.
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
            subtitle="How I approached the product from a PM perspective."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="🎯 Product Vision"
              description="Enable enterprises to hire faster using AI-powered assessments instead of relying only on resumes."
            />

            <FeatureCard
              title="📊 Success Metrics"
              description="Time-to-hire, recruiter productivity, assessment completion rate and candidate quality."
            />

            <FeatureCard
              title="⚖️ Trade-offs"
              description="Balanced AI automation with recruiter control by allowing human review before final decisions."
            />

            <FeatureCard
              title="🚀 Strategy"
              description="Build TalentIQ as a complete AI recruitment suite instead of a standalone assessment platform."
            />
          </div>
        </div>
      </section>

      {/* TECH STACK */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Technology Stack"
            subtitle="Technologies used while building TalentIQ."
          />

          <div className="flex flex-wrap gap-5">
            <Badge text="OpenAI" />
            <Badge text="React" />
            <Badge text="Next.js" />
            <Badge text="FastAPI" />
            <Badge text="Express.js" />
            <Badge text="REST APIs" />
            <Badge text="AI" />
            <Badge text="LLMs" />
          </div>
        </div>
      </section>

      {/* KEY LEARNINGS */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Key Learnings"
            subtitle="What I learned while managing TalentIQ."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow border p-8">
              <ul className="space-y-5 text-gray-700 leading-8">
                <li>
                  ✅ Conducting user interviews with recruiters and HR teams.
                </li>

                <li>
                  ✅ Writing detailed Product Requirement Documents (PRDs).
                </li>

                <li>✅ Creating wireframes and user flows.</li>

                <li>✅ Prioritizing features using business impact.</li>

                <li>✅ Collaborating with design and engineering teams.</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow border p-8">
              <ul className="space-y-5 text-gray-700 leading-8">
                <li>✅ Agile sprint planning and backlog management.</li>

                <li>✅ Performing User Acceptance Testing (UAT).</li>

                <li>✅ Defining success metrics and analytics.</li>

                <li>✅ Building AI-first enterprise SaaS products.</li>

                <li>✅ Managing the product lifecycle end-to-end.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
