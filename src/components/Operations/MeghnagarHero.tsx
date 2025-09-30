import Image from "next/image";

const MeghnagarHero = () => {
  return (
    <>
      <section
        id="meghnagar"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 lg:order-2">
              <div className="mx-auto max-w-[570px] lg:ml-0">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Meghnagar Operations
                </h1>
                <p className="mb-8 text-base leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Our flagship mining operations in Meghnagar, Jhabua District, Madhya Pradesh.
                  Home to 6 mining leases with ~23 million tons of Rock Phosphate reserves.
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-8">
                  <div className="rounded-lg bg-primary/10 p-4">
                    <h3 className="mb-2 text-lg font-bold text-black">Mining Leases</h3>
                    <p className="text-xl font-bold text-primary">6</p>
                    <p className="text-sm text-body-color">(3 Greenfield & 3 Brownfield)</p>
                  </div>

                  <div className="rounded-lg bg-primary/10 p-4">
                    <h3 className="mb-2 text-lg font-bold text-black">Reserves</h3>
                    <p className="text-xl font-bold text-primary">~23M Tons</p>
                    <p className="text-sm text-body-color">Rock Phosphate</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-8">
                  <div className="rounded-lg bg-primary/10 p-4">
                    <h3 className="mb-2 text-lg font-bold text-black">Mining Area</h3>
                    <p className="text-xl font-bold text-primary">150+</p>
                    <p className="text-sm text-body-color">Hectares</p>
                  </div>

                  <div className="rounded-lg bg-primary/10 p-4">
                    <h3 className="mb-2 text-lg font-bold text-black">Capacity</h3>
                    <p className="text-sm text-body-color">1M tons annually by Dec 2026</p>
                  </div>
                </div>

                <div className="rounded-lg bg-green-50 border border-green-200 p-4 mb-8">
                  <h3 className="mb-2 text-lg font-semibold text-green-800">Status</h3>
                  <p className="text-green-700 font-medium">Environmental Clearance: Secured in June 2025</p>
                  <p className="text-sm text-green-600">Plant commissioning by Dec 2026</p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 lg:order-1">
              <div className="relative mx-auto aspect-square max-w-[500px] lg:ml-0">
                <Image
                  src="https://devstrapi-shared.up.railway.app/uploads/meghnagar_mining_beba44bd35.jpg"
                  alt="Meghnagar Mining Operations"
                  fill
                  className="mx-auto max-w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="277"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
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

export default MeghnagarHero;
