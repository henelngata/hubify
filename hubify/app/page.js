import Image from "next/image";
import { LogoBar, NavigationBar, Posts } from "./ui/LogoUi";
//logogbar
// posts
//navigation
export default function Home() {
  return (
    <main className="main">
      <header className="logo-header">
        <LogoBar />
      </header>
      <section>
        <Posts />
      </section>
     
    </main>
  );
}
