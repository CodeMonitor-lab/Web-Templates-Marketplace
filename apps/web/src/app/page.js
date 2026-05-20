import Image from "next/image";
import { CategoryHeader, HomeHero, ProjectPRECard,SlideCard} from "@/components/UI/Home";
import { InputSearch } from "@/components/Common";
import { FilterTooltip } from "@/components/Common";
import categoryData from "@/data/category-header.json";


export default function Home() {
  return (
    <div>
      <HomeHero />

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Category Headers */}
          <CategoryHeader />
        {/* Filter Tooltip */}
        <div className="flex justify-between items-center" >
        <InputSearch/>
        <FilterTooltip />
        </div>
      </section>

      {/* Featured Projects / Cards */}
      <ProjectPRECard />
      <SlideCard />
    </div>
  );
}
