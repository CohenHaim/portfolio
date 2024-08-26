import { Home } from "~/components/component/home";

interface PageProps {
  params: { slug: string[] };
  searchParams: Record<string, string>;
}

export default async function HomePage(props: PageProps) {
  return <Home />;
}
