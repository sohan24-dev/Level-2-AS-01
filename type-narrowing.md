TypeScript-এ Type Narrowing হলো এমন একটি প্রক্রিয়া, যার মাধ্যমে কোনো variable-এর সম্ভাব্য একাধিক type থেকে নির্দিষ্ট type শনাক্ত করা হয়।

ধরো, একটি variable-এর type string | number। অর্থাৎ এতে string অথবা number—দুই ধরনের value থাকতে পারে। কোনো operation করার আগে TypeScript-কে নিশ্চিত করতে হয় variable-টি বর্তমানে কোন type-এর value ধারণ করছে। এই নিশ্চয়তা তৈরি করতেই Type Narrowing ব্যবহার করা হয়।
Detailed Explanation
1. typeof Operator
Primitive type যেমন string, number বা boolean শনাক্ত করতে typeof ব্যবহার করা হয়।
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}


এখানে typeof check করার পর TypeScript বুঝতে পারে value কোন branch-এ string এবং কোন branch-এ number।
2. instanceof Operator
কোনো object নির্দিষ্ট class-এর instance কি না, তা যাচাই করতে instanceof ব্যবহার করা হয়।
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}


এখানে instanceof ব্যবহার করে বোঝা যাচ্ছে animal-টি Dog নাকি Cat।
3. in Operator
কোনো object-এর মধ্যে নির্দিষ্ট property আছে কি না, তা পরীক্ষা করতে in operator ব্যবহার করা হয়।
type Admin = { name: string; role: "admin" };
type User = { name: string; email: string };

function showInfo(person: Admin | User): void {
  if ("role" in person) {
    console.log(person.role);
  } else {
    console.log(person.email);
  }
}


এখানে role property থাকলে TypeScript বুঝবে এটি Admin, অন্যথায় User।
Conclusion
Type Narrowing TypeScript-কে আরও নিরাপদ ও নির্ভুলভাবে code বুঝতে সাহায্য করে।
- typeof primitive value শনাক্ত করে।
- instanceof class instance শনাক্ত করে।
- in object-এর property যাচাই করে।