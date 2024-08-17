const items = {
  Breakfast: [
    {
      id: 1,
      item: "BREAKFAST BOWL",
      description:
        "Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with Lime Cream (Add egg $1)",
      price: "$8.50",
    },
    {
      id: 2,
      item: "EGG SANDWICH",
      description:
        "Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula",
      price: "$7.50",
    },
    {
      id: 3,
      item: "BREAKFAST BURRITO",
      description:
        "Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, & Lime Cream",
      price: "$9.50",
    },
    {
      id: 4,
      item: "veggie jammie",
      description:
        "Everything Bagel with our Homemade Tofu Herb Spread, Cucumber Tomato, Red Onion, & Arugula",
      price: "$5.50",
    },
    {
      id: 5,
      item: "BAGEL WITH CREAM CHEESE",
      description: "Plain, Cranberry, or Everything",
      price: "$6.00",
    },
    {
      id: 6,
      item: "breakfast pastries",
      description:
        "Three Scrambled Effs, cheddar, our Housemade Black Bean Cake, Avocado, Pico, & Lime Cream",
      price: "$9.00",
    },
    {
      id: 7,
      item: "Fried egg",
      description:
        "three fried eggs, house hot sauce, local cheddar mac, lettuce, pickle & onion on a sesame roll",
      price: "$9.50",
    },
    {
      id: 8,
      item: "SMOKED SALMON BAGEL",
      description:
        "Smoked Salmon, Capers, House Pickled Red Onions, & Cream Cheese served on a Toasted Bagel",
      price: "$9.50",
    },
    {
      id: 9,
      item: "breakfast jammie",
      description:
        "Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula",
      price: "$6.50",
    },

    {
      id: 10,
      item: "AVOCADO TOAST",
      description:
        "Crushed Avocado topped with MV Sea Salt on Toasted Multigrain",
      price: "$6.50",
    },
    {
      id: 11,
      item: "AVOCADO TOAST",
      description:
        "Crushed Avocado topped with MV Sea Salt on Toasted Multigrain",
      price: "$6.50",
    },
  ],
  Lunch: [
    {
      id: 1,
      item: "GRILLED CHICKEN SANDWICH",
      description:
        "Grilled chicken breast with lettuce, tomato, and mayo on a toasted bun, served with fries.",
      price: "$12.00",
    },
    {
      id: 2,
      item: "CAESAR SALAD",
      description:
        "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese. Add chicken for $3.00.",
      price: "$9.00",
    },
    {
      id: 3,
      item: "CLUB SANDWICH",
      description:
        "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
      price: "$11.00",
    },
    {
      id: 4,
      item: "VEGGIE WRAP",
      description:
        "A tortilla filled with hummus, avocado, mixed greens, tomatoes, cucumbers, and red onions.",
      price: "$10.00",
    },
    {
      id: 5,
      item: "TURKEY BURGER",
      description:
        "Juicy turkey burger with lettuce, tomato, avocado, and chipotle mayo, served with sweet potato fries.",
      price: "$13.00",
    },
    {
      id: 6,
      item: "MARGHERITA PIZZA",
      description:
        "Classic Margherita pizza with fresh mozzarella, tomatoes, and basil.",
      price: "$14.00",
    },
    {
      id: 7,
      item: "FISH AND CHIPS",
      description:
        "Crispy battered fish fillets served with fries and tartar sauce.",
      price: "$15.00",
    },
    {
      id: 8,
      item: "GREEK SALAD",
      description:
        "Mixed greens with feta cheese, olives, cucumbers, tomatoes, and red onions, served with a Greek vinaigrette.",
      price: "$10.50",
    },
  ],
  Dinner: [
    {
      id: 1,
      item: "GRILLED CHICKEN",
      description:
        "Juicy grilled chicken breast served with steamed vegetables and mashed potatoes.",
      price: "$15.00",
    },
    {
      id: 2,
      item: "STEAK",
      description:
        "Tender steak cooked to perfection, served with a side of garlic butter and roasted potatoes.",
      price: "$22.00",
    },
    {
      id: 3,
      item: "PASTA ALFREDO",
      description:
        "Creamy Alfredo sauce over fettuccine pasta, topped with grilled chicken or shrimp.",
      price: "$14.00",
    },
    {
      id: 4,
      item: "SALMON",
      description:
        "Pan-seared salmon fillet with a lemon butter sauce, served with asparagus and rice.",
      price: "$18.00",
    },
    {
      id: 5,
      item: "VEGAN BOWL",
      description:
        "Quinoa, black beans, avocado, roasted vegetables, and tahini sauce.",
      price: "$12.00",
    },
    {
      id: 6,
      item: "BURGER",
      description:
        "Classic beef burger with lettuce, tomato, onion, and cheese, served with fries.",
      price: "$13.00",
    },
    {
      id: 7,
      item: "CHICKEN PARMESAN",
      description:
        "Breaded chicken breast topped with marinara sauce and melted mozzarella, served over pasta.",
      price: "$16.00",
    },
    {
      id: 8,
      item: "SHRIMP TACOS",
      description:
        "Grilled shrimp in soft tortillas with cabbage slaw and a spicy lime sauce.",
      price: "$14.50",
    },
  ],
  Desserts: [
    {
      id: 1,
      item: "CHOCOLATE CAKE",
      description:
        "Rich and moist chocolate cake with a creamy chocolate frosting.",
      price: "$5.00",
    },
    {
      id: 2,
      item: "CHEESECAKE",
      description:
        "Creamy cheesecake with a graham cracker crust and a hint of lemon.",
      price: "$6.00",
    },
    {
      id: 3,
      item: "APPLE PIE",
      description:
        "Classic apple pie with a flaky crust and spiced apple filling.",
      price: "$4.50",
    },
    {
      id: 4,
      item: "BROWNIE",
      description:
        "Fudgy brownie with a rich chocolate flavor and a crispy top.",
      price: "$3.50",
    },
    {
      id: 5,
      item: "ICE CREAM SUNDAE",
      description:
        "Vanilla ice cream topped with chocolate sauce, whipped cream, and a cherry.",
      price: "$4.00",
    },
    {
      id: 6,
      item: "TIRAMISU",
      description:
        "Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.",
      price: "$6.50",
    },
    {
      id: 7,
      item: "FRIED EGG",
      description:
        "Three Fried Eggs, house hot sauce, local cheddar mac, lettuce, pickle & onion on a sesame roll",
      price: "$9.50",
    },
    {
      id: 8,
      item: "LEMON TART",
      description:
        "Tangy lemon curd in a buttery crust, topped with a dollop of whipped cream.",
      price: "$5.50",
    },
  ],
  Drinks: [
    {
      id: 1,
      item: "ESPRESSO",
      description:
        "Rich and bold espresso shot made with premium coffee beans.",
      price: "$3.00",
    },
    {
      id: 2,
      item: "CAPPUCCINO",
      description: "Espresso with steamed milk and a layer of foam.",
      price: "$4.50",
    },
    {
      id: 3,
      item: "LATTE",
      description:
        "Smooth espresso with steamed milk and a light layer of foam.",
      price: "$4.00",
    },
    {
      id: 4,
      item: "MOCHA",
      description:
        "Espresso with steamed milk and chocolate, topped with whipped cream.",
      price: "$4.75",
    },
    {
      id: 5,
      item: "TEA",
      description: "Selection of premium teas served hot or iced.",
      price: "$2.50",
    },
    {
      id: 6,
      item: "HOT CHOCOLATE",
      description: "Rich and creamy hot chocolate topped with whipped cream.",
      price: "$3.50",
    },
    {
      id: 7,
      item: "SMOOTHIE",
      description:
        "Blend of fresh fruits and yogurt, available in various flavors.",
      price: "$5.00",
    },
    {
      id: 8,
      item: "ICED COFFEE",
      description:
        "Chilled coffee served over ice, with optional milk and sweeteners.",
      price: "$3.50",
    },
  ],
};
export default items;
