export default function Header() {
  return (
    <header className="bg-darkPurple text-neonGreen py-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className="text-3xl font-bold hover:text-portalGreen">
          MortyVerse
        </a>
        <nav className="flex flex-wrap justify-center sm:justify-end gap-4">
          <a href="/home" className="font-bold hover:underline hover:text-portalGreen">
            Home
          </a>
          <a href="/favorites" className="font-bold hover:underline hover:text-portalGreen">
            Favorites
          </a>
          <a href="/character" className="font-bold hover:underline hover:text-portalGreen">
            Character
          </a>
          <a href="/location" className="font-bold hover:underline hover:text-portalGreen">
            Location
          </a>
          <a href="/episode" className="font-bold hover:underline hover:text-portalGreen">
            Episode
          </a>
          <a href="/cards" className="font-bold hover:underline hover:text-portalGreen">
            Cards
          </a>
        </nav>
      </div>
    </header>
  );
}
