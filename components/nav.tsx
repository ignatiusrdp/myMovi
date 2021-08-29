import Link from "next/link";

const links = [
  { href: "/", label: "Route" },
  { href: "/", label: "Route" },
];

export const Nav = () => {
  return (
    <nav className="w-full bg-transparent">
      <ul className="flex items-center justify-between px-8 py-4">
        <li>
          <Link href="/">
            <a className="font-bold text-green-400">MyMovi</a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a className="dark: text-white hover:text-green-400">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
        Dark Mode
      </ul>
    </nav>
  );
};
