import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://cms.clubduelz.in/uploads/4_a2b67ca667.jpg",
    alt: "Community Development Initiatives"
  },
  {
    id: 2,
    src: "https://cms.clubduelz.in/uploads/3_29fe27239b.jpg",
    alt: "Environmental Protection Measures"
  },
  {
    id: 3,
    src: "https://cms.clubduelz.in/uploads/5_fd7f08c2ff.jpg",
    alt: "Reforestation and Biodiversity"
  },
  {
    id: 4,
    src: "https://cms.clubduelz.in/uploads/2_aa848032ff.jpg",
    alt: "Safety Training Programs"
  },
  {
    id: 5,
    src: "https://cms.clubduelz.in/uploads/1_67936b413d.jpg",
    alt: "Solar Energy Integration"
  },
  {
    id: 6,
    src: "https://cms.clubduelz.in/uploads/Hallo_3b462882fb.jpg",
    alt: "Sustainable Mining Operations"
  }
];

const SustainabilityGallery = () => {

  return (
    <>
      <section id="sustainability-gallery" className="py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
              Sustainability in Action
            </h2>
            <p className="mx-auto max-w-[600px] text-base leading-relaxed text-body-color">
              Explore our sustainability initiatives through real images showcasing our commitment to responsible mining, community development, and environmental protection.
            </p>
          </div>

          {/* Simple Gallery Grid - Images Only */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SustainabilityGallery;
