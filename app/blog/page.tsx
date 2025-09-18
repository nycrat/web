import Separator from "@/components/separator";
import BlogPreview from "./blog-preview";

export default function BlogPage() {
  // TODO replace placeholder
  const blogPreviews = [
    {
      title: "why vim is the best text editor",
      summary:
        "vim seems like the only good option for developers because its very beneficial to have a terminal based workflow especially when you are working with. to blah blh blah",
      image_url: "Woah",
      content: "woahhhhh",
    },
    {
      title: "why neovim is the best text editor",
      summary:
        "vim seems like the only good option for developers because its very beneficial to have a terminal based workflow especially when you are working with. to blah blh blah",
      image_url: "Woah",
      content: "woahhhhh",
    },
    {
      title: "terminal basics",
      summary:
        "vim seems like the only good option for developers because its very beneficial to have a terminal based workflow especially when you are working with. to blah blh blah",
      image_url: "Woah",
      content: "woahhhhh",
    },
  ];

  return (
    <div className="grid min-h-screen p-8">
      <main className="flex flex-col gap-8">
        <h1>blog</h1>

        <Separator />

        {blogPreviews.map((blog) => (
          <BlogPreview key={blog.title} {...blog} />
        ))}
      </main>
    </div>
  );
}
