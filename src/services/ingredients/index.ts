export async function getAllIngredients() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/list.php?i=list`);
  const data = await res.json();
  return data.data;
}
