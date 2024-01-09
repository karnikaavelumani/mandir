import homestyles from "./page.module.css";
import Hero from "@/components/hero/hero";
import Hours from "@/components/hours/hours";

export default function Home() {
  return (
    <main className={homestyles.main}>
      <Hero />
      <Hours />
    </main>
  );
}
