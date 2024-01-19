import { DetailMealType } from "@/services/meal";

type Props = {
  data: DetailMealType;
};
const DetailTutorial: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h2 className="text-xl font-semibold">
        Meal <span className="text-blue-600">Tutorials</span>
      </h2>
      <iframe
        src={`${data.strYoutube?.replace("watch?v=", "embed/")}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`${data.strMeal} Tutorial` || "Tutorial"}
        className="aspect-video h-full w-full p-0 rounded-md shadow"
        loading="lazy"
      />
    </>
  );
};

export default DetailTutorial;
