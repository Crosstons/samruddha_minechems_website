import Image from "next/image";
import { Leader } from "./leadershipData";

interface SingleLeaderProps {
  leader: Leader;
}

const SingleLeader = ({ leader }: SingleLeaderProps) => {
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-8 flex justify-center">
          <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full">
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="mb-2 text-xl font-bold text-black">
            {leader.name}
          </h3>
          <p className="mb-4 text-lg font-semibold text-primary">
            {leader.position}
          </p>

          <div className="space-y-3 text-left">
            <div>
              <h4 className="mb-1 font-semibold text-black">Education:</h4>
              <p className="text-sm text-body-color">{leader.education}</p>
            </div>

            <div>
              <h4 className="mb-1 font-semibold text-black">Experience:</h4>
              <p className="text-sm text-body-color">{leader.experience}</p>
            </div>

            <div>
              <h4 className="mb-1 font-semibold text-black">Background:</h4>
              <p className="text-sm text-body-color">{leader.background}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLeader;
