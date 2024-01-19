export type CategoryType = {
  idCategory: string | number;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string | null;
};

export type CategoriesType = {
  categories: CategoryType[];
};

export async function getAllCategories() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories.php`
    );
    const data: CategoriesType = await res.json();
    return data.categories || [];
  } catch (error) {
    return [];
  }
}
