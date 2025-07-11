// Student 1: Your Information
const firstName1 = "Nancy";
const middleName1 = "Bulan";
const lastName1 = "Luis";

const birthDate1 = "December 3, 2012";
const birthPlace1 = "Binatug, Sitio Malaya , Isabela, Philippines";
const address1 = "Binatug, Isabela, Philippines";
const courseYear1 = "Bachelor of Science in Computer Science";
const dreamJob1 = "Software Engineer";

// Student 2: Classmate's Information
const firstName2 = "Denver";
const middleName2 = "Ramos";
const lastName2 = "Santos";

const birthDate2 = "November 14, 2004";
const birthPlace2 = "Barangay Ubbog,Candon City, Ilocos Sur, Philippines";
const address2 = "Barangay Ubbog, Candon City, Ilocos Sur, Philippines";
const courseYear2 = "Bachelor of Science in Information Technology";
const dreamJob2 = "Cybersecurity Analyst";

// Format and display output using string concatenation and template literals
const sentence1 = `[${firstName1.toUpperCase()} ${middleName1.toUpperCase()} ${lastName1.toUpperCase()}] was born [${birthDate1}] at [${birthPlace1.toUpperCase()}], and currently living at [${address1.toUpperCase()}]. [${(firstName1 + " " + middleName1 + " " + lastName1).toLowerCase()}] is taking up [${courseYear1.toLowerCase()}] and dreams to be [${dreamJob1}] after graduation.`;

const sentence2 = `[${firstName2.toUpperCase()} ${middleName2.toUpperCase()} ${lastName2.toUpperCase()}] was born [${birthDate2}] at [${birthPlace2.toUpperCase()}], and currently living at [${address2.toUpperCase()}]. [${(firstName2 + " " + middleName2 + " " + lastName2).toLowerCase()}] is taking up [${courseYear2.toLowerCase()}] and dreams to be [${dreamJob2}] after graduation.`;

// Print both personas
console.log(sentence1);
console.log("\n");
console.log(sentence2);
