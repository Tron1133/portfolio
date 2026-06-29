import ProjectCard from "../../components/ProjectCard";
import projects from "../../Assets/projects";

export default function Projects() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mt-3 text-center">Projects</h1>

        <p className="text-center text-gray-600 mt-5 text-xl">
          Products I Have Managed And Delivered
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
