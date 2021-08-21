import PokemonList from "../components/PokemonList";
import ClientOnly from "../components/QlientOnly";

export default function Home() {
  return (
    <div>
      <h1>Pokemon list</h1>
      <ClientOnly>
        <PokemonList />
      </ClientOnly>
    </div>
  );
}
