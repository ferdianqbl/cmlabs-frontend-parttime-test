export async function getAllMealsByIngredient({ mealId }: { mealId: string }) {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/lookup.php?i=${mealId}`
  );
  const data = await res.json();
  return data.data;
}
