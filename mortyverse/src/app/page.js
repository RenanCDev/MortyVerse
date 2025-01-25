import "./globals.css";
//import { useState } from "react";
import Link from "next/link";
//import { useRouter } from "next/navigation";

export const metadata = {
  title: "Rick and Morty Character Grid",
  description: "Exibindo personagens com Next.js e Tailwind",
};

// Função para buscar todos os personagens
async function getCharacters() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    if (!res.ok) {
      throw new Error("Failed to fetch characters");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching characters:", error.message);
    return null;
  }
}

// Função para buscar detalhes de um personagem
async function getCharacterById(id) {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch character details");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching character details:", error.message);
    return null;
  }
}

// Página inicial com a grade de personagens
export default async function RootLayout({ children }) {
  const data = await getCharacters();

  return (
    <html lang="en">
      <body
        className="bg-darkGray text-neonGreen min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/rick-and-morty-bg01.webp')" }}
      >
        <div className="container mx-auto p-4 sm:p-6">
          <h1 className="text-center text-4xl sm:text-5xl font-bold text-portalGreen mb-8">
            Rick and Morty Characters
          </h1>
          {data ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.results.map((character) => (
                <Link href={`/character/${character.id}`} key={character.id} passHref>
                  <div
                    className="bg-darkPurple text-neonGreen rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:z-10 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative w-full h-60 overflow-hidden">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover rounded-t-2xl hover:scale-110 transition-all duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-2xl font-bold text-vividPink mb-2">
                        {character.name}
                      </h2>
                      <p className="text-sm">
                        <span className="font-semibold text-skyBlue">Status:</span> {character.status}
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold text-skyBlue">Species:</span> {character.species}
                      </p>
                      {character.type && (
                        <p className="text-sm">
                          <span className="font-semibold text-skyBlue">Type:</span> {character.type}
                        </p>
                      )}
                      <p className="text-sm">
                        <span className="font-semibold text-skyBlue">Gender:</span> {character.gender}
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold text-skyBlue">Origin:</span> {character.origin.name}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-vividPink font-bold">
              Failed to fetch character details.
            </p>
          )}
        </div>
        {children}
      </body>
    </html>
  );
}

// Página de detalhes do personagem
export async function CharacterPage({ params }) {
  const character = await getCharacterById(params.id);

  if (!character) {
    return (
      <div className="text-center text-vividPink font-bold">
        Failed to fetch character details.
      </div>
    );
  }

  return (
    <div className="bg-darkGray text-neonGreen min-h-screen flex items-center justify-center">
      <div className="max-w-3xl bg-darkPurple rounded-2xl shadow-lg p-6">
        <div className="relative w-full h-96 mb-6">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-vividPink mb-4">
          {character.name}
        </h1>
        <p className="text-lg mb-2">
          <span className="font-semibold text-skyBlue">Status:</span> {character.status}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold text-skyBlue">Species:</span> {character.species}
        </p>
        {character.type && (
          <p className="text-lg mb-2">
            <span className="font-semibold text-skyBlue">Type:</span> {character.type}
          </p>
        )}
        <p className="text-lg mb-2">
          <span className="font-semibold text-skyBlue">Gender:</span> {character.gender}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-skyBlue">Origin:</span> {character.origin.name}
        </p>
      </div>
    </div>
  );
}
