import { Logo } from "./logo";

const pages = [
  { name: "Writing", href: "writing" },
  { name: "Events", href: "events" },
  { name: "About", href: "about" },
];

export function NavBar() {
  return (
    <nav className="items-center justify-between hidden sm:flex theme-orange p-6 fixed w-full">
      <Logo />
      <div className="flex gap-12 justify-end">
        {pages.map((page) => (
          <h3 className="text-lg" key={page.name}>
            <a href={page.href}>{page.name}</a>
          </h3>
        ))}
      </div>
    </nav>
  );
}
