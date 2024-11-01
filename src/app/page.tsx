import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import {Text} from '@/components/ui/text';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <Button variant="default" disabled>
          <span className="material-symbols-outlined !text-xs animate-spin">progress_activity</span>
          Button
        </Button>
        <Input placeholder="email" isError={true} errorMessage="Champ non valide"/>
        <Text variant="title">UFC Newcomer Kai Asakura To Challenge Flyweight Champion
Alexandre Pantoja At UFC 310</Text>
        <Text variant="subtitle">Bonjour</Text>
        <Text variant="bodyHighlighted">Bonjour</Text>
        <Text variant="body">Bonjour</Text>

        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          Jokester began sneaking into the castle in the middle of the night and leaving
          jokes all over the place: under the king's pillow, in his soup, even in the
          royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
          then, one day, the people of the kingdom discovered that the jokes left by
          Jokester were so funny that they couldn't help but laugh. And once they
          started laughing, they couldn't stop.
        </ScrollArea>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
