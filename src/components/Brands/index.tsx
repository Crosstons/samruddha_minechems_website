import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="text-center mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                Our Key Clients
              </h2>
              <p className="text-base text-body-color">
                Trusted by leading companies in the fertilizer and chemical industry
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center rounded-xs bg-gray-light px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="text-center text-sm font-semibold text-body-color transition hover:text-primary sm:text-base"
      >
        {name}
      </a>
    </div>
  );
};
