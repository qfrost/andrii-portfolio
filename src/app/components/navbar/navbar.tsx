import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Andrii</h1>
      <div className="flex gap-4">
        <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost">About</Button>
        </Link>
      </div>
    </nav>
  );
}
