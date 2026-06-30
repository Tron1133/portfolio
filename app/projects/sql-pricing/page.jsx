"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ---------------- Components ---------------- */

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

export default function PricingAnalysis() {
  const screenshots = [
    {
      image: "/Projects/sql/1.png",
      title: "Database Schema",
      description:
        "Relational database consisting of Products, Customers, Sales and Transactions.",
    },

    {
      image: "/Projects/sql/2.png",
      title: "SQL Queries",
      description:
        "Complex SQL queries using joins, aggregations and window functions.",
    },

    {
      image: "/Projects/sql/3.png",
      title: "Business Insights",
      description: "Revenue analysis and pricing strategy insights.",
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
              DATA ANALYTICS PROJECT
            </p>

            <h1 className="text-6xl font-extrabold mt-6">
              Pricing Strategy Analysis
            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-700">
              A SQL-based data analytics project focused on evaluating pricing
              strategies using a relational database of products, customers,
              sales and transactions. The analysis identifies revenue trends,
              customer behavior and pricing opportunities to support better
              business decisions.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <Badge text="SQL" />

              <Badge text="MySQL" />

              <Badge text="Data Analytics" />

              <Badge text="Business Intelligence" />

              <Badge text="Joins" />

              <Badge text="Window Functions" />
            </div>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/Projects/sql/cover.png"
              alt="SQL Project"
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
            subtitle="Analyzing pricing strategies using SQL."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <Card
              title="Dataset Design"
              description="Designed a relational database with Products, Customers, Sales and Transactions tables. The schema captured pricing, discounts, customer segments and transactional relationships for business analysis."
            />

            <Card
              title="Objective"
              description="Identify pricing opportunities, evaluate discount effectiveness and understand customer purchasing behaviour through SQL-driven analysis."
            />
          </div>
        </div>
      </section>
      {/* SQL TECHNIQUES */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="SQL Techniques Applied"
            subtitle="Core SQL concepts used to derive business insights."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Joins"
              description="Combined Products, Customers, Sales and Transactions tables to create a unified dataset for analysis."
            />

            <Card
              title="Aggregations"
              description="Calculated total revenue, average selling price, discount percentage and sales volume using aggregate functions."
            />

            <Card
              title="Filtering"
              description="Identified high-value transactions, premium-priced products and the impact of discounts using conditional queries."
            />

            <Card
              title="Subqueries"
              description="Extracted advanced insights such as products sold above their average base price."
            />

            <Card
              title="Window Functions"
              description="Ranked products by revenue and compared sales performance across categories."
            />

            <Card
              title="Nested Queries"
              description="Implemented complex business logic for pricing comparisons and customer segmentation."
            />
          </div>
        </div>
      </section>

      {/* BUSINESS INSIGHTS */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Key Business Insights"
            subtitle="Actionable findings derived from SQL analysis."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              title="Revenue Performance"
              description="Identified the highest revenue-generating products and analyzed their contribution to overall business performance."
            />

            <Card
              title="Discount Effectiveness"
              description="Evaluated how discounts influenced customer purchasing behaviour and overall revenue generation."
            />

            <Card
              title="Customer Segmentation"
              description="Compared purchasing patterns across Retail and Wholesale customers as well as different geographical regions."
            />

            <Card
              title="Premium Products"
              description="Identified products consistently sold above their average base price, highlighting strong pricing power."
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Technology Stack"
            subtitle="Tools used throughout the project."
          />

          <div className="flex flex-wrap gap-4">
            <Badge text="SQL" />
            <Badge text="MySQL" />
            <Badge text="Relational Database" />
            <Badge text="Data Analytics" />
            <Badge text="Business Intelligence" />
            <Badge text="Excel" />
          </div>
        </div>
      </section>

      {/* LEARNINGS */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <SectionTitle
            title="Key Learnings"
            subtitle="Skills strengthened through this analytics project."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              title="Advanced SQL"
              description="Strengthened practical knowledge of joins, aggregations, subqueries, window functions and analytical SQL for solving business problems."
            />

            <Card
              title="Business Analytics"
              description="Learned how to translate raw transactional data into meaningful business insights that support pricing and revenue decisions."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
