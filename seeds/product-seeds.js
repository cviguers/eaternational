const { Product } = require('../models');

const productData = [
  // latin america
  {
    name: 'Palito de Coco',
    price: 2.50,
    stock: 50,
    origin_country: 'Dominican Republic',
    description: 'A coconut and caramel flavored lollipop wrapped in colorful cellophane',
    continent_id: 1,
  },
  {
    name: 'Galak',
    price: 4.00,
    stock: 25,
    origin_country: 'Ecuador',
    description: 'These white chocolate bars are famous for their milky, melt in your mouth quality.',
    continent_id: 1,
  },
  {
    name: 'Ajonjoli',
    price: 5.00,
    stock: 20,
    origin_country: 'Puerto Rico',
    description: 'Imagine a mild and crunchy combination of sesame seeds and honey taking over your mouth and youll understand why these Puerto Rican snack bites are so popular.',
    continent_id: 1,
  },
  {
    name: 'Galletas Doña Pepa',
    price: 6.00,
    stock: 30,
    origin_country: 'Peru',
    description: 'These simple vanilla cookies with a chocolate coating were created in tribute to the classic ~turrón de Doña Pepa~, a beloved pastry that has found its match in these less complicated, but crazy addictive treats! ',
    continent_id: 1,
  },
  // asia
  {
    name: 'Tikka Masala Corn Chips',
    price: 5.00,
    stock: 40,
    origin_country: 'India',
    description: 'Think Doritos... but tikka masala flavored',
    continent_id: 2,
  },
  {
    name: 'Chicken Larb Flavored Seaweed Chips',
    price: 4.50,
    stock: 15,
    origin_country: 'Thailand',
    description: 'Crisp Thai seaweed with spicy chicken flavor.',
    continent_id: 2,
  },
  {
    name: '',
    price: ,
    stock: ,
    origin_country: '',
    description: '',
    continent_id: ,
  },
  {
    name: '',
    price: ,
    stock: ,
    origin_country: '',
    description: '',
    continent_id: ,
  },
  {
    name: '',
    price: ,
    stock: ,
    origin_country: '',
    description: '',
    continent_id: ,
  },
];

const seedProduct = () => SnackType.bulkCreate(productData);

module.exports = seedProduct;
