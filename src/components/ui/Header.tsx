import Container from "./Container";
import NavLink from "./NavLink";
import { ROUTES } from "@/lib/constants";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-10 min-h-10 w-full py-3 shadow-2xs">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Rick and Morty</h1>
          <nav className="flex items-center gap-4">
            <NavLink path={ROUTES.HOME}>Home</NavLink>
            <NavLink path={ROUTES.FAVORITES}>Favorites</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}
