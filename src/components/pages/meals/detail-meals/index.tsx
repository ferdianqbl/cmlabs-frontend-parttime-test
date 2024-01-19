import { DetailMealType } from "@/services/meal";
import Image from "next/image";

type Props = {
  data: DetailMealType;
};

const DetailMeals: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-3/4 justify-center mx-auto">
      <Image
        src={`${data.strMealThumb}`}
        width={500}
        height={300}
        alt="user img"
        className="w-full max-h-[300px] object-cover object-center rounded-md"
        priority
      />

      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-blue-600 font-bold text-2xl text-center">
          {data.strMeal}
        </h1>
        <div className="flex flex-row gap-2">
          <p className="text-gray-400">Category:</p>
          <p className="text-gray-600">{data.strCategory}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">
          Meal <span className="text-blue-600">Recipes</span>
        </h2>
        <p className="">{data.strInstructions}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">
          Meal <span className="text-blue-600">Instructions</span>
        </h2>
        <p className="">{data.strInstructions}</p>
      </div>
    </div>
  );
};

export default DetailMeals;
