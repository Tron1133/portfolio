export default function TechBadge({ tech }) {
  return (
    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-200 transition">
      {tech}
    </span>
  );
}
