import { getAllIngredients } from "@/services/ingredients";
import { getAllMealsByIngredient, getDetailMeal } from "@/services/meal";

export default async function Home() {
  const res = await getDetailMeal("52796");
  console.log({ res });
  return <h1>Hello</h1>;
}
