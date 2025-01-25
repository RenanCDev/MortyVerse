export default function Header() {
    return (
      <header className="bg-darkPurple text-neonGreen py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl font-bold hover:text-portalGreen">MortyVerse</a>
          <nav className="flex gap-4">
            <a href="/" className="hover:underline hover:text-portalGreen">Home</a>
            <a href="/favorites" className="hover:underline hover:text-portalGreen">Favorites</a>
            <a href="/character" className="hover:underline hover:text-portalGreen">Character</a>
            <a href="/location" className="hover:underline hover:text-portalGreen">Location</a>
            <a href="/episode" className="hover:underline hover:text-portalGreen">Episode</a>
            <a href="/recent" className="hover:underline hover:text-portalGreen">Recent</a>
            <a href="/cards" className="hover:underline hover:text-portalGreen">Cards</a>
          </nav>
        </div>
      </header>
    );
  }
  