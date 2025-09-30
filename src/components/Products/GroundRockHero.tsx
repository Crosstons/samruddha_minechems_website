import Image from "next/image";

const GroundRockHero = () => {
  return (
    <>
      <section
        id="ground-rock"
        className="relative z-10 overflow-hidden bg-gray-50 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-square max-w-[500px] lg:ml-0">
                <Image
                  src="/images/products/product-1.jpg"
                  alt="Rock Phosphate Run Of Mines"
                  fill
                  className="mx-auto max-w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto max-w-[570px] lg:ml-0">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Ground Rock Phosphate
                </h1>
                <p className="mb-8 text-base leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Finely ground rock phosphate powder, processed to 100 mesh for enhanced solubility and better plant absorption.
                </p>

                <div className="mb-8">
                  <div className="mb-4 flex items-center">
                    <span className="mr-3 inline-block h-3 w-3 rounded-full bg-primary"></span>
                    <span className="text-lg font-semibold text-black">Grade: 12–14% P₂O₅</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
                  <div className="rounded-lg bg-primary/10 p-4">
                    <h3 className="mb-2 font-semibold text-black">Packaging</h3>
                    <p className="text-sm text-body-color">Bulk Loose, or Jumbo Bags (100 mesh powder)</p>
                  </div>

                  <div className="rounded-lg bg-primary/10 p-4">
                    <h3 className="mb-2 font-semibold text-black">Dispatch</h3>
                    <p className="text-sm text-body-color">Ex-plant, Rail, or Road</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black">Applications:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-body-color">
                      <span className="mr-3 text-primary">•</span>
                      Manufacturing BRP
                    </li>
                    <li className="flex items-center text-body-color">
                      <span className="mr-3 text-primary">•</span>
                      Organic Rock Phosphate Fertilizer
                    </li>
                    <li className="flex items-center text-body-color">
                      <span className="mr-3 text-primary">•</span>
                      Blending with Commercial Grade Rock Phosphate
                    </li>
                    <li className="flex items-center text-body-color">
                      <span className="mr-3 text-primary">•</span>
                      PROM (Phosphate Rock of Morocco)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute left-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="400"
            height="500"
            viewBox="0 0 400 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="url(#paint0_linear_25:218)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="20"
                y1="-80"
                x2="380"
                y2="280"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#d1ab7a" />
                <stop offset="1" stopColor="#d1ab7a" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default GroundRockHero;
