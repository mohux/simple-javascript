// * Some times, we need to extract values from arrays that match certain pattern.
// * lets filter some easy and little bit challenging arrays.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// * filter is a built in function that returns the index only if the condition is true
const evens = numbers.filter(number => number % 2 === 0);

// * lets return filter items with valid expiry date !

const items = [
  { name: "Milk", expires_at: "2020-3-28" },
  { name: "Oil", expires_at: "2020-5-21" },
  { name: "Ketchup", expires_at: "2020-4-15" },
  { name: "Fish", expires_at: "2020-2-20" }
];

// * we had to check the date if its larger than today's date
const valid_items = items.filter(
  item => new Date(item.expires_at) > new Date()
);
