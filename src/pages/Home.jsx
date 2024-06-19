import { Coment } from "../components/Coment";
import { Banner } from "../components/shared/Banner";
import { Header } from "../components/shared/Header";
import { Navbar } from "../components/shared/Navbar";
import { Recipes } from "../components/shared/Recipes";

export const Home = () => (
  <main className="w-full flex flex-col">
    <Navbar />
    <Header />
    <Coment />
    <Banner />
    <section className="">
        <Recipes />
    </section>
  </main>
);

