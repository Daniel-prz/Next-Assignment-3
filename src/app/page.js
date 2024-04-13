import Image from "next/image";
import StarWarsCharacter from "./components/StarWarsCharacter.js";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <StarWarsCharacter />
      </div>
    </main>
  );
}
