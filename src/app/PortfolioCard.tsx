export default function PortfolioCard({ title, children }: any) {
  return (
    <div className="project-card">
      <h2 className="mb-5">{title}</h2>
      <p className="text-lg font-sans font-thin w-[250px]">{children}</p>
    </div>
  );
}
