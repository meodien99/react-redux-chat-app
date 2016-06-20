'use strict';
export function hello() {
   let name = "Foo";
   let greeting = `Hello ${name}`;

   if(false) {
      // Should not be covered
      return 'Goodbye';
   }

   return greeting;
}
