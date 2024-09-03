import { NoteCreate } from "@/components/create";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { ListContact } from "@/components/list";

export default async function Home() {
  return (
    <div className="container flex max-w-lg flex-col justify-center bg-white">
      <Header />
      <NoteCreate />
      <ListContact />
      <Footer />
    </div>
  );
}
