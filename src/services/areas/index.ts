export type AreaType = {
  strArea: string;
};

export type AreasType = {
  meals: AreaType[];
};

export async function getAllAreas() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/list.php?a=list`
    );
    const data: AreasType = await res.json();
    return data.meals || [];
  } catch (error) {
    return [];
  }
}
