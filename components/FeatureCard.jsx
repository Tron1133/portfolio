export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition">
      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-5">
        <span className="text-green-700 text-2xl">✓</span>
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p className="text-gray-600 leading-7">{description}</p>
    </div>
  );
}
