import Link from "next/link";
import { useRouter } from "next/router";
import ClientOnly from "../components/QlientOnly";
import PokemonDetail from "../components/PokemonDetail";

export default function PokemonView() {
  const router = useRouter();
  const { pokemonId } = router.query as { pokemonId: string };

  return (
    <div>
      <Link href="/">
        <a>← Back to Home</a>
      </Link>
      <ClientOnly>
        <PokemonDetail pokemonId={pokemonId} />
      </ClientOnly>
    </div>
  );
}
