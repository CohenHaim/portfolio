import { builder } from "@builder.io/sdk";
import type { BuilderContent } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { env } from "~/env";

builder.init(env.NEXT_PUBLIC_BUILDERIO_API_KEY);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const model = "page";
  const content: BuilderContent = await builder.get("page", {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") ?? ""),
      },
      prerender: false,
    })
    .toPromise() as BuilderContent;

  return (
    <>
      <RenderBuilderContent content={content} model={model} />
    </>
  );
}
