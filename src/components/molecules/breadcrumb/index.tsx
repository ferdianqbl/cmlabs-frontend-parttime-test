import Link from "next/link";

export type BreadcrumbType = {
  type: "meal" | "category" | "area" | "ingredient";
  name: string;
  path?: string;
};

type Props = {
  data: BreadcrumbType[];
};

const Breadcrumb: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-wrap w-full gap-2">
      {data.map((item, index) => {
        if (item.path)
          return (
            <Link
              key={`${item.name}_${item.type}_${index}`}
              className="text-sm duration-200 hover:text-blue-600"
              href={item.path}
            >
              {item.name} &gt;
            </Link>
          );
        else
          return (
            <span
              key={`${item.name}_${item.type}_${index}`}
              className="text-sm text-gray-500"
            >
              {item.name}
            </span>
          );
      })}
    </div>
  );
};

export default Breadcrumb;
