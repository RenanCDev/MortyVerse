export default function CharacterCard({ character }) {
    return (
      <div className="bg-darkPurple text-neonGreen rounded-xl shadow-md p-4">
        <img src={character.image} alt={character.name} className="w-full rounded-md" />
        <h3 className="text-xl font-bold">{character.name}</h3>
      </div>
    );
  }
  