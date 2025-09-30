import { Product } from "./productsData";

interface SingleProductProps {
  product: Product;
}

const SingleProduct = ({ product }: SingleProductProps) => {
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="fill-current"
          >
            <path
              opacity="0.5"
              d="M39 12C39.5523 12 40 12.4477 40 13V39C40 39.5523 39.5523 40 39 40H13C12.4477 40 12 39.5523 12 39V33C12 32.4477 12.4477 32 13 32H31C31.5523 32 32 31.5523 32 31V13C32 12.4477 32.4477 12 33 12H39Z"
            />
            <rect width="28" height="28" rx="1" />
          </svg>
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
          {product.name}
        </h3>
        <div className="mb-4">
          <span className="inline-block rounded-full bg-primary bg-opacity-10 px-4 py-2 text-sm font-medium text-primary">
            Grade: {product.grade}
          </span>
        </div>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {product.description}
        </p>

        <div className="mt-6">
          <h4 className="mb-3 text-lg font-semibold text-black">Applications:</h4>
          <ul className="mb-4 space-y-2">
            {product.applications.map((app, index) => (
              <li key={index} className="flex items-center text-body-color">
                <span className="mr-2 text-primary">•</span>
                {app}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h5 className="mb-2 font-semibold text-black">Packaging:</h5>
              <p className="text-sm text-body-color">{product.packaging}</p>
            </div>
            <div>
              <h5 className="mb-2 font-semibold text-black">Dispatch:</h5>
              <p className="text-sm text-body-color">{product.dispatch}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
