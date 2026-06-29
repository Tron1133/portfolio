export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-black">{title}</h2>

      {subtitle && (
        <p className="text-gray-600 mt-3 text-lg max-w-3xl">{subtitle}</p>
      )}
    </div>
  );
}
