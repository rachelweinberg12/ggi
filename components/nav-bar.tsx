const pages = [
  { name: "Writing", href: "about" },
  { name: "Events", href: "about" },
  { name: "About", href: "about" },
];

export function NavBar() {
  return (
    <nav className="flex gap-6 items-center hidden sm:block theme-orange">
      {pages.map((page) => (
        <a key={page.name} href={page.href} className="link">
          {page.name}
        </a>
      ))}
    </nav>
  );
}
