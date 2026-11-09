Introduction
TypeScript-এ type alias এবং interface---দুটিই কোনো value বা object-এর
shape নির্ধারণ করতে সাহায্য করে। এগুলো ব্যবহার করে property, function
signature এবং অন্য type-এর সঙ্গে সম্পর্ক নির্ধারণ করা যায়। তবে দুটির কাজের ধরন
পুরোপুরি এক নয়। সঠিকটি বেছে নিতে হলে তাদের বৈশিষ্ট্য ও ব্যবহারের ক্ষেত্র জানা
জরুরি।
Detailed Explanation
interface মূলত object-এর structure বর্ণনা করার জন্য তৈরি। একই নামের
interface একাধিকবার ঘোষণা করলে TypeScript সেগুলোকে একত্র করে, যাকে
declaration merging বলা হয়।
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Sohan",
  age: 22,
};
এখানে দুটি User interface merge হয়ে name ও age---দুটি property-ই
বাধ্যতামূলক করেছে।

অন্যদিকে, type alias দিয়ে শুধু object নয়, primitive, union, tuple,
function এবং intersection type-ও তৈরি করা যায়।
type ID = string | number;

type Admin = {
  name: string;
  role: "admin";
};

type Employee = {
  employeeId: number;
};

type AdminEmployee = Admin & Employee;
এখানে ID একটি union type এবং AdminEmployee হলো দুটি object type-এর
intersection। type alias একই scope-এ একই নামে আবার ঘোষণা করা যায় না।
তবে interface-এর মতো extends ব্যবহার করে interface অন্য interface-কে
প্রসারিত করতে পারে; type alias-এর object shape-ও intersection (&) দিয়ে
একত্র করা যায়।
When Should You Choose One?
সাধারণ object বা class-এর contract নির্ধারণ করতে এবং declaration merging
দরকার হলে interface বেছে নিন। Union, tuple, primitive বা জটিল type
composition দরকার হলে type বেশি উপযোগী। ছোট object type-এর ক্ষেত্রে দুটিই
কার্যকর; তাই দলের coding convention-ও বিবেচনা করুন।
Conclusion
type ও interface---কোনোটিই সব ক্ষেত্রে অন্যটির চেয়ে ভালো নয়। প্রয়োজন
অনুযায়ী বেছে নিলেই code আরও পরিষ্কার, maintainable এবং type-safe হবে।