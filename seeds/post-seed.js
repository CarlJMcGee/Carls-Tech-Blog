const { User, Post } = require("../models");

const PostList = [
  {
    title: "Post 1",
    content:
      " ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tellus orci ac auctor augue mauris augue neque gravida in. A diam sollicitudin tempor id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Faucibus pulvinar elementum integer enim neque volutpat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Elementum curabitur vitae nunc sed velit dignissim. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Venenatis urna cursus eget nunc scelerisque viverra. Malesuada proin libero nunc consequat interdum. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Odio eu feugiat pretium nibh ipsum.",
    user_id: "1",
  },
  {
    title: "Post 2",
    content:
      " ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tellus orci ac auctor augue mauris augue neque gravida in. A diam sollicitudin tempor id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Faucibus pulvinar elementum integer enim neque volutpat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Elementum curabitur vitae nunc sed velit dignissim. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Venenatis urna cursus eget nunc scelerisque viverra. Malesuada proin libero nunc consequat interdum. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Odio eu feugiat pretium nibh ipsum.",
    user_id: "1",
  },
  {
    title: "Post 3",
    content:
      " ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tellus orci ac auctor augue mauris augue neque gravida in. A diam sollicitudin tempor id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Faucibus pulvinar elementum integer enim neque volutpat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Elementum curabitur vitae nunc sed velit dignissim. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Venenatis urna cursus eget nunc scelerisque viverra. Malesuada proin libero nunc consequat interdum. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Odio eu feugiat pretium nibh ipsum.",
    user_id: "3",
  },
  {
    title: "Post 4",
    content:
      " ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tellus orci ac auctor augue mauris augue neque gravida in. A diam sollicitudin tempor id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Faucibus pulvinar elementum integer enim neque volutpat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Elementum curabitur vitae nunc sed velit dignissim. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Venenatis urna cursus eget nunc scelerisque viverra. Malesuada proin libero nunc consequat interdum. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Odio eu feugiat pretium nibh ipsum.",
    user_id: "4",
  },
  {
    title: "Post 5",
    content:
      " ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tellus orci ac auctor augue mauris augue neque gravida in. A diam sollicitudin tempor id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Faucibus pulvinar elementum integer enim neque volutpat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Elementum curabitur vitae nunc sed velit dignissim. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Venenatis urna cursus eget nunc scelerisque viverra. Malesuada proin libero nunc consequat interdum. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Odio eu feugiat pretium nibh ipsum.",
    user_id: "4",
  },
  {
    title: "Post 6",
    content:
      " ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tellus orci ac auctor augue mauris augue neque gravida in. A diam sollicitudin tempor id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Faucibus pulvinar elementum integer enim neque volutpat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Elementum curabitur vitae nunc sed velit dignissim. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Venenatis urna cursus eget nunc scelerisque viverra. Malesuada proin libero nunc consequat interdum. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Odio eu feugiat pretium nibh ipsum.",
    user_id: "5",
  },
  {
    title: "Post 6",
    content:
      " ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tellus orci ac auctor augue mauris augue neque gravida in. A diam sollicitudin tempor id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Faucibus pulvinar elementum integer enim neque volutpat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Elementum curabitur vitae nunc sed velit dignissim. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Venenatis urna cursus eget nunc scelerisque viverra. Malesuada proin libero nunc consequat interdum. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Odio eu feugiat pretium nibh ipsum.",
    user_id: "6",
  },
  {
    title: "Post 8",
    content:
      " ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tellus orci ac auctor augue mauris augue neque gravida in. A diam sollicitudin tempor id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Faucibus pulvinar elementum integer enim neque volutpat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Elementum curabitur vitae nunc sed velit dignissim. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Venenatis urna cursus eget nunc scelerisque viverra. Malesuada proin libero nunc consequat interdum. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Odio eu feugiat pretium nibh ipsum.",
    user_id: "6",
  },
  {
    title: "Post 9",
    content:
      " ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tellus orci ac auctor augue mauris augue neque gravida in. A diam sollicitudin tempor id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Faucibus pulvinar elementum integer enim neque volutpat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Elementum curabitur vitae nunc sed velit dignissim. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Venenatis urna cursus eget nunc scelerisque viverra. Malesuada proin libero nunc consequat interdum. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Odio eu feugiat pretium nibh ipsum.",
    user_id: "2",
  },
];

const seedPosts = () => Post.bulkCreate(PostList);

module.exports = seedPosts;
