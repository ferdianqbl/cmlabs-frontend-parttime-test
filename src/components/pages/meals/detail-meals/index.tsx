import { DetailMealType } from "@/services/meal";
import Image from "next/image";
import DetailHeader from "./detail-header";
import DetailRecipes from "./detail-recipes";
import DetailInstructions from "./detail-instructions";
import DetailTutorial from "./detail-tutorial";

type Props = {
  data: DetailMealType;
};

const DetailMeals: React.FC<Props> = ({ data }) => {
  const instructions = data?.strInstructions?.split(/\r\n/);
  return (
    <div className="flex flex-col gap-4 w-full md:w-3/4 justify-center mx-auto">
      <Image
        src={`${data.strMealThumb}`}
        width={500}
        height={300}
        alt="user img"
        className="w-full max-h-[300px] object-cover object-center rounded-md"
        // priority
        loading="lazy"
      />

      <div className="flex flex-col gap-2 w-full">
        <DetailHeader data={data} />
      </div>
      <div className="flex flex-col gap-2">
        <DetailRecipes data={data} />
      </div>
      <div className="flex flex-col gap-2">
        <DetailInstructions data={data} />
      </div>
      {data.strYoutube && (
        <div className="flex flex-col gap-2">
          <DetailTutorial data={data} />
        </div>
      )}
    </div>
  );
};

export default DetailMeals;
