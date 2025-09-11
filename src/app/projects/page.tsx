import Projects from "../../../components/Projects";

export default function ProjectsPage({
  searchParams,
}: {
  searchParams?: any;
}) {
  const category = (searchParams?.category as string) || null;

  return (
    <main>
      <Projects categoryFromUrl={category} />
    </main>
  );
}
