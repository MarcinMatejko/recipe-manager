import { RecipeResource } from './recipes-interfaces';

export const mockRecipes: RecipeResource[] = [
  {
    _id: '18f2eebf29f04113a1',
    name: 'Zaupa Pomidorowa',
    preparationTimeInMinutes: 50,
    description: 'Klasyczne polskie danie. Każdy zna i lubi',
    ingredients: [
      {
        _id: '1',
        name: 'Kość na zupę',
        quantity: '1',
      },
      {
        _id: '2',
        name: 'Pomidory',
        quantity: '4',
      },
      {
        _id: '3',
        name: 'Cebula',
        quantity: '2',
      },
    ],
  },
  {
    _id: '28f2eebf29f04113a2',
    name: 'Schabowy',
    preparationTimeInMinutes: 50,
    description: 'Coś tam, coś tam, musi być dużo',
    ingredients: [
      {
        _id: '1',
        name: 'Schab',
        quantity: '1',
      },
      {
        _id: '2',
        name: 'Masło',
        quantity: '4',
      },
      {
        _id: '3',
        name: 'Marchewka',
        quantity: '2',
      },
    ],
  },
  {
    _id: '38f2eebf29f04113a3',
    name: 'Pizza z pieca najlepsza w mieście',
    preparationTimeInMinutes: 50,
    description: 'Coś tam, coś tam, musi być dużo',
    ingredients: [
      {
        _id: '1',
        name: 'Ciasto',
        quantity: '1',
      },
      {
        _id: '2',
        name: 'Pieczarki',
        quantity: '4',
      },
      {
        _id: '3',
        name: 'Ananas',
        quantity: '2',
      },
    ],
  },
  {
    _id: '48f2eebf29f04113a4',
    name: 'Pierogi',
    preparationTimeInMinutes: 50,
    description:
      'CLorem ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo similique alias aliquid. Amet, assumenda itaque consequuntur nesciunt officiis ullam, vel ab quaerat, consequatur est at? Pariatur nihil veniam eligendi odio magnam assumenda maiores quidem, quisquam harum obcaecati ipsum consectetur a labore ad enim porro! Assumenda facere officia laboriosam odio consectetur beatae impedit inventore, dignissimos animi molestias, delectus quae, est ut. Illum, totam? Totam quasi minima earum id eius tenetur reprehenderit beatae sunt rem laudantium magni corporis similique iure consequatur voluptas maxime, modi nobis alias necessitatibus et, consequuntur sequi? In accusamus eum explicabo officia nobis. Totam atque commodi dignissimos quia.',
    ingredients: [
      {
        _id: '1',
        name: 'Farsz',
        quantity: '1',
      },
      {
        _id: '2',
        name: 'Ciasto',
        quantity: '4',
      },
      {
        _id: '3',
        name: 'Woda',
        quantity: '2',
      },
    ],
  },
];
