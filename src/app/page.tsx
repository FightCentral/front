import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <span className="font-[family-name:var(--font-sternbach)] text-5xl font-bold italic">FIGHT CENTRAL</span>
        <span className="font-[family-name:var(--font-euro-ex)] text-[#D20A0A] font-thin text-4xl italic">CHAMPION</span>
        <span className="font-[family-name:var(--font-euro-ex)] text- font-normal tracking-wide leading-6">
        L'Ultimate Fighting Championship (UFC) est une organisation américaine d'arts martiaux mixtes (MMA), actuellement reconnue comme la plus importante ligue mondiale de ce sport de combat. La première soirée tenue par la promotion en novembre 1993 à Denver dans le Colorado, se présente comme un tournoi permettant de confronter différents styles d'arts martiaux et sports de combat dans des règles libres. Cet événement est alors souvent considéré comme un pilier de l'avènement des « MMA modernes ».
        </span>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>
          Nous avons gagné la bagarre
        </div>
      </footer>
    </div>
  );
}
