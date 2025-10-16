import { SustainabilityItem } from "./sustainabilityData";
import { Users, Heart, Pickaxe, Leaf, TreePine, Zap } from "lucide-react";

interface SingleSustainabilityProps {
  item: SustainabilityItem;
}

const SingleSustainability = ({ item }: SingleSustainabilityProps) => {
  // Map icon names to actual components
  const getIconComponent = (iconName: string) => {
    const iconMap = {
      'Users': Users,
      'Heart': Heart,
      'Pickaxe': Pickaxe,
      'Leaf': Leaf,
      'TreePine': TreePine,
      'Zap': Zap,
    };
    return iconMap[iconName] || Users;
  };

  const IconComponent = getIconComponent(item.icon);

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary/10 text-primary">
          <IconComponent className="h-8 w-8" />
        </div>
        <div className="mb-4">
          <span className={`inline-block rounded-full px-4 py-2 text-sm font-medium ${
            item.category === "Community"
              ? "bg-blue-100 text-blue-800"
              : "bg-green-100 text-green-800"
          }`}>
            {item.category}
          </span>
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
          {item.title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default SingleSustainability;
