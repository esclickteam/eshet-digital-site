import Projects from "../../../components/Projects";

export default function ProjectsPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const category = (searchParams?.category as string) || null;

  return (
    <main>
      <Projects categoryFromUrl={category} />
    </main>
  );
}
