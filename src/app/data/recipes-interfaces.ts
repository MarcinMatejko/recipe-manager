export interface RecipeResource {
  _id?: string;
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients: IngredientResource[];
}

export interface IngredientResource {
  _id: string;
  name: string;
  quantity: string;
}
