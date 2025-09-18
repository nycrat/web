import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-screen p-8">
      <main className="flex flex-col items-center justify-center">
        <Link href="/blog">blog</Link>
        <Link href="https://github.com/nycrat">github</Link>
      </main>
    </div>
  );
}
