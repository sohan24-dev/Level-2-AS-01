// console.log("Hello, Sohan!");
function multiplyValue(value, multiplier) {
    return value * (multiplier ?? 2);
}
// console.log(multiplyValue(10));   
// console.log(multiplyValue(10, 2)); 
// console.log(multiplyValue(7, 3));  
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive";
    }
}
// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
function concatenateArrays(...arrays) {
    return arrays.flat();
}
function getPopularCourses(courses, minStudents) {
    return courses.filter(course => course.isPublished === true &&
        course.students >= minStudents);
}
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
// console.log(getPopularCourses(courses, 80));
function pluckValues(items, key) {
    return items.map(item => item[key]);
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
// console.log(pluckValues(users, "name"));
// console.log(pluckValues(users, "id"));
// console.log(pluckValues(users, "role"));
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());
function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}
// Test 1
validateAgeAsync(20)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));
// Test 2
validateAgeAsync(15)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));
export {};
//# sourceMappingURL=solutions.js.map