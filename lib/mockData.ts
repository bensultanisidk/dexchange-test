// mockdata.ts

// --- Types ---
export type Stat = { title: string; value: string; change: string; trend: "up" | "down" | "flat" };
export type Project = { company: string; members: number; budget: string; completion: string; status: "Working" | "Done" | "Canceled"; logo: string };
export type Order = { description: string; date: string };
export type Author = { name: string; email: string; function: string; status: "Online" | "Offline"; employed: string; avatar: string };

// --- Couleur verte-bleu précise (optionnel pour graphiques) ---
export const MINT_BLUE = "#2EC4B6";

// --- Données statistiques ---
export const statsData: Stat[] = [
  { title: "Total Sales", value: "$53,000", change: "+80%", trend: "up" },
  { title: "Today's Users", value: "2,300", change: "+5%", trend: "up" },
  { title: "New Clients", value: "+3,062", change: "-4%", trend: "down" },
  { title: "Total Revenue", value: "$173,000", change: "+0%", trend: "flat" },
];

// --- Données des projets ---
export const projectsData: Project[] = [
  { company: "Chakra Soft UI Template", members: 4, budget: "$14,000", completion: "80%", status: "Working", logo: "⚛️" },
  { company: "Chakra Soft UI Track", members: 3, budget: "$3,000", completion: "30%", status: "Canceled", logo: "📊" },
  { company: "Add Progress Track", members: 5, budget: "$9,000", completion: "50%", status: "Working", logo: "📈" },
  { company: "Fix Platform Errors", members: 4, budget: "Not set", completion: "100%", status: "Done", logo: "🐛" },
  { company: "Launch our Mobile App", members: 6, budget: "$32,000", completion: "65%", status: "Done", logo: "📱" },
  { company: "Add the New Pricing Page", members: 2, budget: "$7,000", completion: "90%", status: "Working", logo: "💰" },
];

// --- Données des commandes ---
export const ordersData: Order[] = [
  { description: "$2400, Design changes", date: "22 Dec 7:20 PM" },
  { description: "New order #4219423", date: "21 Dec 11:2 PM" },
  { description: "Server Payments for April", date: "20 Dec 2:20 PM" },
  { description: "New card added for order #3210145", date: "18 Dec 2:0 PM" },
  { description: "Unlock packages for Development", date: "18 Dec 1:50 PM" },
  { description: "New order #9851258", date: "15 Dec 4:40 PM" },
];

// --- Données des auteurs ---
export const authorsData: Author[] = [
  { name: "Esthera Jackson", email: "esthera@simmmple.com", function: "Manager", status: "Online", employed: "14/06/21", avatar: "👤" },
  { name: "Alexa Liras", email: "alexa@simmmple.com", function: "Programmer", status: "Offline", employed: "14/06/21", avatar: "👩‍💻" },
  { name: "Laurent Michael", email: "laurent@simmmple.com", function: "Executive", status: "Online", employed: "14/06/21", avatar: "👨‍💼" },
  { name: "Ferdinando Hill", email: "ferdinando@simmmple.com", function: "Manager", status: "Online", employed: "14/06/21", avatar: "🧑‍💼" },
  { name: "Daniel Thomas", email: "daniel@simmmple.com", function: "Programmer", status: "Offline", employed: "14/06/21", avatar: "👨‍🔬" },
  { name: "Mark Wilson", email: "mark@simmmple.com", function: "Designer", status: "Offline", employed: "14/06/21", avatar: "🎨" },
];
