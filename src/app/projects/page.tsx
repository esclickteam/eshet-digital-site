import Projects from "../../../components/Projects";

type SearchParams = { [key: string]: string | string[] | undefined };

interface ProjectsPageProps {
  searchParams?: SearchParams;
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const category = (searchParams?.category as string) || null;

  return (
    <main>
      <Projects categoryFromUrl={category} />
    </main>
  );
}
