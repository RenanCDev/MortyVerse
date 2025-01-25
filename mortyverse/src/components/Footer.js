export default function Footer() {
    return (
      <footer className="bg-darkPurple text-center text-sm text-neonGreen py-2">
        <p className="text-neonGreen">
          © {new Date().getFullYear()} MortyVerse. Developed and created by{" "}
          <a
            href="https://github.com/RenanCDev"
            className="text-neonGreen hover:text-portalGreen hover:underline mr-2 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Renan Costa
          </a>
          <span className="text-portalGreen">and</span>
          <a
            href="https://github.com/luizmiguel4444"
            className="text-neonGreen hover:text-portalGreen hover:underline ml-2 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luiz Miguel
          </a>
          .
        </p>
        <p className="text-portalGreen">
          Wubba Lubba Dub Dub
        </p>
      </footer>
    );
  }
  