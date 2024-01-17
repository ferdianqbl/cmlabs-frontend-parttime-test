export async function getAllMealsByIngredient(ingredientName: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/filter.php?i=${ingredientName}`
  );
  const data = await res.json();
  return data;
}

export async function getDetailMeal(mealId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/lookup.php?i=${mealId}`
  );
  const data = await res.json();
  return data;
}
