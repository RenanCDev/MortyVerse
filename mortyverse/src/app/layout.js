import "./globals.css"

export const metadata = {
    title: "Mortyverse",
    description: "Exibindo personagens com Next.js 13",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-spaceBlue text-alienGreen">
          {children}
        </body>
      </html>
    );
  }
  