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
    <section className="grid items-center grid-cols-1 object-cover grow bg-orange-50 lg:grid-cols-3 lg:px-20 lg:bg-orange-50 lg:block lg:gap-4 lg:*:mt-[400px] lg:object-cover lg:items-center">
      <Recipes />
    </section>
  </main>
);
