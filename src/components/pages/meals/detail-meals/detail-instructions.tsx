import { DetailMealType } from "@/services/meal";

type Props = {
  data: DetailMealType;
};
const DetailInstructions: React.FC<Props> = ({ data }) => {
  const instructions = data?.strInstructions?.split(/\r\n/);
  return (
    <>
      <h2 className="text-xl font-semibold">
        Meal <span className="text-blue-600">Instructions</span>
      </h2>
      {instructions?.map((instruction, index) => (
        <p key={`${instruction}${index}`} className="">
          {instruction}
        </p>
      ))}
    </>
  );
};

export default DetailInstructions;
