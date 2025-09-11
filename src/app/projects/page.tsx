import Projects from "../../../components/Projects";

interface ProjectsPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const category = (searchParams?.category as string) || null;

  return (
    <main>
      <Projects categoryFromUrl={category} />
    </main>
  );
}
