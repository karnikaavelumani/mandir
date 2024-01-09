import homestyles from "./page.module.css";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className={homestyles.main}>
      <Hero />
    </main>
  );
}
