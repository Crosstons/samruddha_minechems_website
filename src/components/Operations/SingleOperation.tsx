import { Operation } from "./operationsData";

interface SingleOperationProps {
  operation: Operation;
}

const SingleOperation = ({ operation }: SingleOperationProps) => {
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
              d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
            />
            <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" />
          </svg>
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
          {operation.location} – {operation.state}
        </h3>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-black">Mining Leases:</h4>
              <p className="text-body-color">{operation.miningLeases} (3 Greenfield & 3 Brownfield)</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-black">Reserves:</h4>
              <p className="text-body-color">{operation.reserves}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-black">Mining Area:</h4>
              <p className="text-body-color">{operation.miningArea}</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-black">Mining Capacity:</h4>
              <p className="text-body-color">{operation.capacity}</p>
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-black">Land for BRP Plant:</h4>
            <p className="text-body-color">{operation.landAllotted}</p>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-black">Planned BRP Plant Capacity:</h4>
            <p className="text-body-color">{operation.plantCapacity}</p>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-black">Timeline:</h4>
            <p className="text-body-color">{operation.timeline}</p>
          </div>

          <div className="rounded-md bg-primary bg-opacity-10 p-3">
            <h4 className="mb-1 font-semibold text-primary">Status:</h4>
            <p className="text-sm text-primary">{operation.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOperation;
