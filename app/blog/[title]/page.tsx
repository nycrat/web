import Separator from "@/components/separator";
import Image from "next/image";

export default async function BlogContentPage(props: {
  params: Promise<{ title: string }>;
}) {
  const title = await new Promise<string>((resolve) => {
    setTimeout(async () => {
      resolve(decodeURI((await props.params).title));
    }, 500);
  });

  return (
    <div className="p-8 grid min-h-screen">
      <main className="flex flex-col gap-8">
        <h1 className="text-2xl!">{title}</h1>
        <Separator />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          soluta molestias quos corporis? Doloribus molestiae quos accusantium
          labore, voluptatibus provident? Aperiam, nulla. Nisi a error sint
          saepe ex excepturi architecto.
        </p>
        <Image
          src="/placeholder.webp"
          alt="TODO !!!"
          width={1280}
          height={720}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          soluta molestias quos corporis? Doloribus molestiae quos accusantium
          labore, voluptatibus provident? Aperiam, nulla. Nisi a error sint
          saepe ex excepturi architecto.
        </p>
      </main>
    </div>
  );
}
