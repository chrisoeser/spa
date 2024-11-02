const recipes = [
    {
      id: 1,
      title: "Avocado Toast",
      image: "/images/avocado-toast.jpg",
      ingredients: [
        "1 slice of whole-grain bread",
        "1/2 ripe avocado",
        "Salt, to taste",
        "Red pepper flakes, to taste",
        "Optional: 1 fried egg, cherry tomatoes"
      ],
      instructions: [
        "Toast the slice of bread until golden brown.",
        "Scoop the avocado onto the toast and mash with a fork.",
        "Season with salt and red pepper flakes to taste.",
        "Optional: Top with a fried egg or cherry tomatoes for added flavor."
      ]
    },
    {
      id: 2,
      title: "Chicken Stir Fry",
      image: "/images/chicken-stir-fry.jpg",
      ingredients: [
        "1 tbsp olive oil",
        "200g chicken breast, sliced",
        "1 bell pepper, sliced",
        "1/2 onion, sliced",
        "1 carrot, julienned",
        "2 tbsp soy sauce",
        "1 tbsp honey",
        "Salt and pepper, to taste"
      ],
      instructions: [
        "Heat olive oil in a pan over medium heat.",
        "Add chicken slices and cook until golden brown, then remove from pan.",
        "Add bell pepper, onion, and carrot to the pan and stir-fry until tender-crisp.",
        "Return the chicken to the pan, then add soy sauce and honey.",
        "Cook for another 2-3 minutes, until the sauce thickens slightly.",
        "Season with salt and pepper to taste and serve."
      ]
    },
    {
      id: 3,
      title: "Vegetable Tacos",
      image: "/images/vegetable-tacos.jpg",
      ingredients: [
        "4 small tortillas",
        "1 cup black beans",
        "1/2 cup corn kernels",
        "1 bell pepper, diced",
        "1/2 avocado, sliced",
        "Chopped cilantro, to taste",
        "Salsa, to taste",
        "Optional: shredded cheese, sour cream"
      ],
      instructions: [
        "Warm the tortillas in a skillet or microwave.",
        "In a pan, heat the black beans and corn until warmed through.",
        "Assemble the tacos by filling each tortilla with black beans, corn, bell pepper, and avocado slices.",
        "Top with chopped cilantro, salsa, and any optional toppings.",
        "Serve immediately."
      ]
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      image: "/images/chocolate-chip-cookies.jpg",
      ingredients: [
        "1 cup butter, softened",
        "1 cup white sugar",
        "1 cup brown sugar",
        "2 eggs",
        "2 tsp vanilla extract",
        "3 cups all-purpose flour",
        "1 tsp baking soda",
        "1/2 tsp salt",
        "2 cups chocolate chips"
      ],
      instructions: [
        "Preheat oven to 350°F (175°C).",
        "Cream together the butter and sugars until smooth.",
        "Beat in the eggs and vanilla.",
        "In a separate bowl, combine flour, baking soda, and salt; gradually blend into the creamed mixture.",
        "Stir in the chocolate chips.",
        "Drop by rounded spoonfuls onto ungreased baking sheets.",
        "Bake for 10-12 minutes or until edges are golden brown. Cool on wire racks."
      ]
    },
    {
      id: 5,
      title: "Spaghetti Carbonara",
      image: "/images/spaghetti-carbonara.jpg",
      ingredients: [
        "200g spaghetti",
        "100g pancetta, diced",
        "2 large eggs",
        "50g grated Parmesan cheese",
        "2 cloves garlic, minced",
        "Salt and black pepper, to taste",
        "Chopped parsley, for garnish"
      ],
      instructions: [
        "Cook spaghetti according to package instructions until al dente.",
        "In a pan, cook pancetta until crispy. Add garlic and cook for 1 minute.",
        "In a bowl, whisk eggs and Parmesan cheese together.",
        "Drain spaghetti and add to the pan with pancetta, then remove from heat.",
        "Quickly mix in the egg mixture until creamy. Season with salt and pepper.",
        "Serve with chopped parsley and extra Parmesan."
      ]
    },
    {
      id: 6,
      title: "Beef Tacos",
      image: "/images/beef-tacos.jpg",
      ingredients: [
        "500g ground beef",
        "1 packet taco seasoning",
        "12 taco shells",
        "1 cup shredded lettuce",
        "1 cup diced tomatoes",
        "1 cup shredded cheese",
        "Sour cream and salsa, for serving"
      ],
      instructions: [
        "Brown the ground beef in a skillet over medium heat.",
        "Stir in the taco seasoning and cook according to package instructions.",
        "Fill taco shells with the beef mixture and top with lettuce, tomatoes, cheese, sour cream, and salsa.",
        "Serve immediately."
      ]
    },
    {
      id: 7,
      title: "Caprese Salad",
      image: "/images/caprese-salad.jpg",
      ingredients: [
        "2 ripe tomatoes, sliced",
        "200g fresh mozzarella cheese, sliced",
        "Fresh basil leaves",
        "3 tbsp olive oil",
        "Balsamic vinegar, to taste",
        "Salt and pepper, to taste"
      ],
      instructions: [
        "On a plate, alternate layers of tomato and mozzarella slices.",
        "Tuck in fresh basil leaves between layers.",
        "Drizzle with olive oil and balsamic vinegar.",
        "Season with salt and pepper before serving."
      ]
    },
    {
      id: 8,
      title: "Pancakes",
      image: "/images/pancakes.jpg",
      ingredients: [
        "1 cup all-purpose flour",
        "2 tbsp sugar",
        "2 tsp baking powder",
        "1/2 tsp salt",
        "1 cup milk",
        "1 large egg",
        "2 tbsp melted butter",
        "Maple syrup, for serving"
      ],
      instructions: [
        "In a bowl, mix flour, sugar, baking powder, and salt.",
        "In another bowl, whisk together milk, egg, and melted butter.",
        "Combine the wet and dry ingredients until just blended.",
        "Pour batter onto a hot, greased skillet. Cook until bubbles form, then flip.",
        "Serve with maple syrup."
      ]
    },
    {
      id: 9,
      title: "Lemon Chicken",
      image: "/images/lemon-chicken.jpg",
      ingredients: [
        "4 chicken thighs, boneless",
        "Juice of 2 lemons",
        "2 tbsp olive oil",
        "2 garlic cloves, minced",
        "1 tsp dried oregano",
        "Salt and pepper, to taste"
      ],
      instructions: [
        "Preheat oven to 200°C (400°F).",
        "In a bowl, combine lemon juice, olive oil, garlic, oregano, salt, and pepper.",
        "Marinate chicken thighs in the mixture for at least 30 minutes.",
        "Place chicken in a baking dish and bake for 25-30 minutes, until cooked through."
      ]
    },
    {
      id: 10,
      title: "Vegetable Fried Rice",
      image: "/images/vegetable-fried-rice.jpg",
      ingredients: [
        "2 cups cooked rice",
        "1 cup mixed vegetables (carrots, peas, corn)",
        "2 eggs, beaten",
        "2 tbsp soy sauce",
        "2 green onions, sliced",
        "1 tbsp sesame oil",
        "Salt and pepper, to taste"
      ],
      instructions: [
        "Heat sesame oil in a large skillet over medium heat.",
        "Add mixed vegetables and cook until tender.",
        "Push vegetables to the side, add beaten eggs, and scramble until cooked.",
        "Add cooked rice and soy sauce, stirring to combine.",
        "Season with salt and pepper, and top with green onions before serving."
      ]
    },
    {
      id: 11,
      title: "Greek Salad",
      image: "/images/greek-salad.jpg",
      ingredients: [
        "2 cups diced cucumbers",
        "2 cups diced tomatoes",
        "1/2 red onion, thinly sliced",
        "1 cup Kalamata olives",
        "200g feta cheese, crumbled",
        "2 tbsp olive oil",
        "1 tsp dried oregano",
        "Salt and pepper, to taste"
      ],
      instructions: [
        "In a large bowl, combine cucumbers, tomatoes, red onion, olives, and feta cheese.",
        "Drizzle with olive oil and sprinkle with oregano, salt, and pepper.",
        "Toss gently and serve chilled."
      ]
    },
    {
      id: 12,
      title: "Mango Smoothie",
      image: "/images/mango-smoothie.jpg",
      ingredients: [
        "1 ripe mango, diced",
        "1 banana, sliced",
        "1 cup yogurt",
        "1/2 cup milk",
        "1 tbsp honey",
        "Ice cubes (optional)"
      ],
      instructions: [
        "In a blender, combine mango, banana, yogurt, milk, and honey.",
        "Blend until smooth. Add ice cubes if desired and blend again.",
        "Serve chilled in a glass."
      ]
    },
    {
      id: 13,
      title: "Pumpkin Soup",
      image: "/images/pumpkin-soup.jpg",
      ingredients: [
        "1 kg pumpkin, peeled and diced",
        "1 onion, chopped",
        "2 garlic cloves, minced",
        "4 cups vegetable broth",
        "1 tsp ginger, grated",
        "Salt and pepper, to taste",
        "Cream, for serving"
      ],
      instructions: [
        "In a pot, sauté onion and garlic until translucent.",
        "Add pumpkin and ginger, cooking for a few minutes.",
        "Pour in vegetable broth and bring to a boil. Reduce heat and simmer until pumpkin is tender.",
        "Blend until smooth, then season with salt and pepper.",
        "Serve with a swirl of cream."
      ]
    },
    {
      id: 14,
      title: "Banana Bread",
      image: "/images/banana-bread.jpg",
      ingredients: [
        "3 ripe bananas, mashed",
        "1/3 cup melted butter",
        "1 tsp baking soda",
        "Pinch of salt",
        "3/4 cup sugar",
        "1 large egg, beaten",
        "1 tsp vanilla extract",
        "1 cup all-purpose flour"
      ],
      instructions: [
        "Preheat oven to 175°C (350°F).",
        "In a mixing bowl, combine mashed bananas and melted butter.",
        "Mix in baking soda and salt, then stir in sugar, egg, and vanilla.",
        "Finally, mix in flour until just combined.",
        "Pour into a greased loaf pan and bake for 60 minutes. Cool before slicing."
      ]
    },
    {
      id: 15,
      title: "Stuffed Peppers",
      image: "/images/stuffed-peppers.jpg",
      ingredients: [
        "4 bell peppers, tops cut off and seeds removed",
        "1 cup cooked rice",
        "200g ground beef or turkey",
        "1 can diced tomatoes",
        "1 tsp Italian seasoning",
        "Salt and pepper, to taste",
        "1 cup shredded cheese"
      ],
      instructions: [
        "Preheat oven to 190°C (375°F).",
        "In a bowl, mix cooked rice, ground meat, diced tomatoes, Italian seasoning, salt, and pepper.",
        "Stuff the mixture into the bell peppers and place them upright in a baking dish.",
        "Cover with foil and bake for 30 minutes. Remove foil, sprinkle cheese on top, and bake for an additional 10 minutes."
      ]
    }
];

export default recipes;
