import Projects from "../../../components/Projects";

// נגדיר טיפוס מותאם לפרמטרים
export type SearchParams = Record<string, string | string[] | undefined>;

export default function ProjectsPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const category = (searchParams?.category as string) || null;

  return (
    <main>
      <Projects categoryFromUrl={category} />
    </main>
  );
}
