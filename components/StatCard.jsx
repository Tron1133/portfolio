export default function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
      <h3 className="text-gray-500 mb-2">{title}</h3>

      <p className="text-2xl font-bold text-green-600">{value}</p>
    </div>
  );
}
