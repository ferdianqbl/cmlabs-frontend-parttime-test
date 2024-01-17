export async function getAllIngredients({
  ingredientName,
}: {
  ingredientName?: string;
}) {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/list.php?i=${ingredientName || "list"}`
  );
  const data = await res.json();
  return data.data;
}
