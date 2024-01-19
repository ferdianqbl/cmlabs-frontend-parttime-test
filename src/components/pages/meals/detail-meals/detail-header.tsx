import { Badge } from "@/components/ui/badge";
import { DetailMealType } from "@/services/meal";
import Link from "next/link";

type Props = {
  data: DetailMealType;
};
const DetailHeader: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h1 className="text-blue-600 font-bold text-2xl text-center">
        {data.strMeal}
      </h1>
      <div className="space-x-1 text-center">
        <Badge variant={"secondary"}>{data.strCategory}</Badge>
        <Badge variant={"secondary"}>{data.strArea}</Badge>
        {data.strSource && (
          <Badge>
            <Link href={data.strSource} target="_blank">
              Reference 📖
            </Link>
          </Badge>
        )}
      </div>
    </>
  );
};

export default DetailHeader;
