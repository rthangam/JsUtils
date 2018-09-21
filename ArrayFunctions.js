 const fruits = ['🍎', '🍌', '🍈', '🍉', '🌶️', '🍊']

 const chop = (fruits, pieces = 4) =>
     fruits.map(type =>
         ({ type, pieces })

         /* ☝️ ES6 allows us to avoid typing unnecessary 
            key, value pairs if there are arguments 
            with the same name within the same scope.
            
            Also ({ type, pieces }) is simply shorthand
            for "return { type, pieces }".
         */
     );

 const choppedFruits = chop(fruits);

 const removeChilis = fruits =>
     fruits.filter(fruit => fruit.type !== '🌶️')

 const fruitsWithoutChilis = removeChilis(choppedFruits)

 console.log(fruitsWithoutChilis);

 const mix = (fruits, bowl = '') =>
     fruits.reduce(
         (content, fruit) => content + fruit.type, bowl)

 /*
   This yields a String `🍎🍌🍈🍉🍊🍓` because
   we're just concatinating these guys together.
 */
 const fruitSalad = mix(fruitsWithoutChilis)

 // But is it really a fruit salad? Let's check...
 console.log(fruitSalad === `🍎🍌🍈🍉🍊🍓` ? '🥗' : '😱')

 // 🥗, yay!