import Image from "next/image";

const HirapurHero = () => {
  return (
    <>
      <section
        id="hirapur"
        className="relative z-10 overflow-hidden bg-gray-50 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto max-w-[570px] lg:mr-0">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Hirapur Operations
                </h1>
                <p className="mb-8 text-base leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Our expanding mining operations in Hirapur, Madhya Pradesh.
                  Featuring 4 mining leases with ~22 million tons of Rock Phosphate reserves.
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-8">
                  <div className="rounded-lg bg-primary/10 p-4">
                    <h3 className="mb-2 text-lg font-bold text-black">Mining Leases</h3>
                    <p className="text-xl font-bold text-primary">4</p>
                    <p className="text-sm text-body-color">(2 Greenfield & 2 Brownfield)</p>
                  </div>

                  <div className="rounded-lg bg-primary/10 p-4">
                    <h3 className="mb-2 text-lg font-bold text-black">Reserves</h3>
                    <p className="text-xl font-bold text-primary">~22M Tons</p>
                    <p className="text-sm text-body-color">Rock Phosphate</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-8">
                  <div className="rounded-lg bg-primary/10 p-4">
                    <h3 className="mb-2 text-lg font-bold text-black">Mining Area</h3>
                    <p className="text-xl font-bold text-primary">175+</p>
                    <p className="text-sm text-body-color">Hectares</p>
                  </div>

                  <div className="rounded-lg bg-primary/10 p-4">
                    <h3 className="mb-2 text-lg font-bold text-black">Capacity</h3>
                    <p className="text-sm text-body-color">1M tons annually by Dec 2028</p>
                  </div>
                </div>

                <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 mb-8">
                  <h3 className="mb-2 text-lg font-semibold text-blue-800">Status</h3>
                  <p className="text-blue-700 font-medium">Development Phase</p>
                  <p className="text-sm text-blue-600">Plant commissioning by 2028</p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-square max-w-[500px] lg:mr-0">
                <Image
                  src="https://devstrapi-shared.up.railway.app/uploads/hirapur_mining_a8a8f65ee4.jpg"
                  alt="Hirapur Mining Operations"
                  fill
                  className="mx-auto max-w-full rounded-lg object-cover shadow-lg"
                />
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

export default HirapurHero;
