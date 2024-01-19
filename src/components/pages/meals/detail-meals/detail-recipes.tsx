import { DetailMealType } from "@/services/meal";

type Props = {
  data: DetailMealType;
};
const DetailRecipes: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h2 className="text-xl font-semibold">
        Meal <span className="text-blue-600">Recipes</span>
      </h2>
      <ul>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((item) => {
          if (
            (data as any)[`strIngredient${item}`] !== null &&
            (data as any)[`strIngredient${item}`] !== ""
          ) {
            return (
              <li key={`${item}`}>
                🥯{" "}
                <span className="font-semibold">
                  {(data as any)[`strMeasure${item}`]}
                </span>{" "}
                {(data as any)[`strIngredient${item}`]}
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default DetailRecipes;
