import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Haar kar jeetne waale ko hi baazigar kehte hai.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "adarsh",
    lastName: "balika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic: "https://picsum.photos/id/1027/200/300",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "And God said 'let there be cutenes on Earth ' . Thats when Dogs came on this planet   ",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kailey",
    firstName: "kailey",

    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic: "https://res.cloudinary.com/dvbw8xujd/image/upload/v1657787764/y7yiyiogvkanju8hyzwq.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shaurya",
    firstName: "shaurya",
    lastName: "kumar",
    profilePic: "https://picsum.photos/id/27/200/300",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Almost nobody dances sober, unless they happen to be insane.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "shreya",
    lastName: "thakur",
    username: "ShreyaT",

    createdAt: formatDate(),
    updatedAt: formatDate(),

    link: "https://peerlist.io/stutisk",
    profilePic:
      "https://i.pinimg.com/originals/ae/78/04/ae780460656b0f63788cf5ff47812398.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Code is like humor. When you have to explain it, its bad. ",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "stuti",
    lastName: "Skk",
    username: "stutiSk",
    createdAt: formatDate(),
    updatedAt: formatDate(),

    profilePic: "https://stutikumari17.netlify.app/images/my.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
