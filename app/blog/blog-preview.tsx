import { Blog } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    <div className="flex flex-col gap-4">
      <h2>
        <Link href={`/blog/${encodeURI(props.title)}`}>{props.title}</Link>
      </h2>

      <p>{props.summary}</p>

      <Image
        src={"/placeholder.webp"}
        alt="TODO !!!"
        width={1280}
        height={720}
      />
    </div>
  );
}
