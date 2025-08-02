import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-dvh flex items-center p-4">
      <div className="m-auto w-fit">
        <h2 className="flex flex-wrap gap-2">
          <div className="whitespace-nowrap">404 |</div>
          <div className="whitespace-nowrap">There's nothing here</div>
        </h2>
        <p>
          We might still be working on this section.
          <br />
          Meanwhile <Link href="/">return home</Link>
        </p>
      </div>
    </section>
  );
}
