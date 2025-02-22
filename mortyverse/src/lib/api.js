export async function getCharacters() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    if (!res.ok) throw new Error("Failed to fetch characters");
    return res.json();
  }
  
  export async function getCharacterById(id) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!res.ok) throw new Error("Failed to fetch character details");
    return res.json();
  }
  