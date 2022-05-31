const { Comment } = require("../models/index");

const commentList = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis sed. Massa ultricies mi quis hendrerit dolor. Quis lectus nulla at volutpat diam ut venenatis tellus in. Euismod elementum nisi quis eleifend.",
    user_id: "1",
    post_id: "2",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis sed. Massa ultricies mi quis hendrerit dolor. Quis lectus nulla at volutpat diam ut venenatis tellus in. Euismod elementum nisi quis eleifend.",
    user_id: "3",
    post_id: "7",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis sed. Massa ultricies mi quis hendrerit dolor. Quis lectus nulla at volutpat diam ut venenatis tellus in. Euismod elementum nisi quis eleifend.",
    user_id: "2",
    post_id: "2",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis sed. Massa ultricies mi quis hendrerit dolor. Quis lectus nulla at volutpat diam ut venenatis tellus in. Euismod elementum nisi quis eleifend.",
    user_id: "6",
    post_id: "3",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis sed. Massa ultricies mi quis hendrerit dolor. Quis lectus nulla at volutpat diam ut venenatis tellus in. Euismod elementum nisi quis eleifend.",
    user_id: "5",
    post_id: "3",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis sed. Massa ultricies mi quis hendrerit dolor. Quis lectus nulla at volutpat diam ut venenatis tellus in. Euismod elementum nisi quis eleifend.",
    user_id: "4",
    post_id: "3",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis sed. Massa ultricies mi quis hendrerit dolor. Quis lectus nulla at volutpat diam ut venenatis tellus in. Euismod elementum nisi quis eleifend.",
    user_id: "1",
    post_id: "9",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis sed. Massa ultricies mi quis hendrerit dolor. Quis lectus nulla at volutpat diam ut venenatis tellus in. Euismod elementum nisi quis eleifend.",
    user_id: "6",
    post_id: "9",
  },
];

const seedComments = () => Comment.bulkCreate(commentList);

module.exports = seedComments;
