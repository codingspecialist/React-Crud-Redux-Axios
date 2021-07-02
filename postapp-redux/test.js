const posts = [
  {
    id: 1,
    title: "title1",
    content: "content1",
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
  },
  {
    id: 3,
    title: "title3",
    content: "content3",
  },
];

const result = posts.filter((post) => post.id === 1);
console.log(result);
