export type IngredientType = {
  idIngredient: string | number;
  strIngredient: string;
  strDescription: string;
  strType: string | null;
};

export type IngredientsType = {
  meals: IngredientType[];
};

export async function getAllIngredients() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/list.php?i=list`
    );
    const data: IngredientsType = await res.json();
    return data.meals || [];
  } catch (error) {
    return [];
  }
}
