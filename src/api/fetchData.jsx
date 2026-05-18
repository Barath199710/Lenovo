// export async function fetchPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }
export async function fetchPosts() {
  // Replace with your own English data source
  return [
    { id: 1, title: "Build a responsive website" },
    { id: 2, title: "Learn React components" },
    { id: 3, title: "Practice CRUD operations" },
    { id: 4, title: "Integrate APIs in projects" },
    { id: 5, title: "Deploy apps on Netlify" }
  ];
}