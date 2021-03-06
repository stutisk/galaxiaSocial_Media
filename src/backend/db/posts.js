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
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
    username: "adarshbalika",
    firstName: "adarsh",
    lastName: "balika",
    createdAt: "2021-02-23T10:38:12+05:30",
    updatedAt: formatDate(),
    profilePic: "https://picsum.photos/id/1027/200/300",
    comments: [
      {
        _id: uuid(),
        firstName: "shaurya",
        lastName: "kuamr",
        username: "shaurya",
        text: "Yes 😍😍",
        profilePic:
          "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        text: "😍",
        _id: uuid(),
        firstName: "stuti",
        lastName: "Skk",
        username: "stutiSk",
        profilePic: "https://stutikumari17.netlify.app/images/my.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "And God said 'let there be cutenes on Earth ' . Thats when Dogs came on this planet   ",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
    username: "kailey",
    firstName: "kailey",

    createdAt: "2021-03-23T10:38:12+05:30",
    updatedAt: formatDate(),
    profilePic:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1657787764/y7yiyiogvkanju8hyzwq.jpg",
    comments: [
      {
        _id: uuid(),
        firstName: "shaurya",
        lastName: "kuamr",
        username: "shaurya",
        text: "Yes 😍😍",
        profilePic:
          "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        text: "Right!! 🤩🐶",
        _id: uuid(),
        firstName: "adarsh",
        lastName: "balika",
        username: "adarshbalika",
        profilePic: "https://picsum.photos/id/1027/200/300",
        id: uuid(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
    username: "shaurya",
    firstName: "shaurya",
    lastName: "kumar",
    profilePic: "https://picsum.photos/id/27/200/300",
    comments: [
      {
        text: "Interesting",
        _id: uuid(),
        firstName: "shreya",
        lastName: "thakur",
        username: "ShreyaT",
        profilePic:
          "https://i.pinimg.com/originals/ae/78/04/ae780460656b0f63788cf5ff47812398.jpg",
      },

      {
        text: "Right!!",
        _id: uuid(),
        firstName: "adarsh",
        lastName: "balika",
        username: "adarshbalika",
        profilePic: "https://picsum.photos/id/1027/200/300",
        id: uuid(),
      },
    ],
    createdAt: "2021-04-23T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Almost nobody dances sober, unless they happen to be insane.",
    likes: {
      likeCount: 0,
      likedBy: [
      ],
      dislikedBy: [],
    },
    bookmark: [],
    firstName: "shreya",
    lastName: "thakur",
    username: "ShreyaT",
    createdAt: "2022-01-23T10:38:12+05:30",
    updatedAt: formatDate(),
    link: "https://peerlist.io/stutisk",
    profilePic:
      "https://i.pinimg.com/originals/ae/78/04/ae780460656b0f63788cf5ff47812398.jpg",
    comments: [
      {
        text: "😍",
        _id: uuid(),
        firstName: "stuti",
        lastName: "Skk",
        username: "stutiSk",
        profilePic: "https://stutikumari17.netlify.app/images/my.jpg",
      },

      {
        text: "Right!!",
        _id: uuid(),
        firstName: "adarsh",
        lastName: "balika",
        username: "adarshbalika",
        profilePic: "https://picsum.photos/id/1027/200/300",
        id: uuid(),
      },
    ],
  },
  {
    _id: uuid(),
    content: "Code is like humor. When you have to explain it, its bad. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
    firstName: "scooby ",
    lastName: "Boss",
    username: "scooby",
    createdAt: "2022-02-23T10:38:12+05:30",
    updatedAt: formatDate(),

    profilePic:
      "https://scontent.fluh1-2.fna.fbcdn.net/v/t1.18169-9/20992941_10156238556155961_119237620566999832_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kvzimG9PKeEAX86fd_6&_nc_ht=scontent.fluh1-2.fna&oh=00_AT8mYah0yGGk5AALzDph4uGb77fxoLwQ49fBi6GKw51JYw&oe=62F7F197",

    comments: [
      {
        text: "indeed",
        _id: uuid(),
        firstName: "stuti",
        lastName: "Skk",
        username: "stutiSk",
        profilePic: "https://stutikumari17.netlify.app/images/my.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    content: "Dance is the hidden language of the soul.",
    likes: {
      likeCount: 0,
      likedBy: [
      ],
      dislikedBy: [],
    },
    bookmark: [],
    firstName: "shreya",
    lastName: "thakur",
    username: "ShreyaT",

    createdAt: "2022-03-23T10:38:12+05:30",
    updatedAt: formatDate(),

    link: "https://peerlist.io/stutisk",
    profilePic:
      "https://i.pinimg.com/originals/ae/78/04/ae780460656b0f63788cf5ff47812398.jpg",
    comments: [
      {
        text: "Right!!",
        _id: uuid(),
        firstName: "adarsh",
        lastName: "balika",
        username: "adarshbalika",
        profilePic: "https://picsum.photos/id/1027/200/300",
        id: uuid(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Nobody cares if you can’t dance well. Just get up and dance. Great dancers are great because of their passion.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
    firstName: "shreya",
    lastName: "thakur",
    username: "ShreyaT",

    createdAt:"2022-04-23T10:38:12+05:30",
    updatedAt: formatDate(),

    link: "https://peerlist.io/stutisk",
    profilePic:
      "https://i.pinimg.com/originals/ae/78/04/ae780460656b0f63788cf5ff47812398.jpg",
    comments: [
      {
        text: "Right!!",
        _id: uuid(),
        firstName: "adarsh",
        lastName: "balika",
        username: "adarshbalika",
        profilePic: "https://picsum.photos/id/1027/200/300",
        id: uuid(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. ",
    likes: {
      likeCount: 50,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark: [],
    firstName: "stuti",
    lastName: "Skk",
    username: "stutiSk",
    createdAt: "2022-05-23T10:38:12+05:30",
    updatedAt: formatDate(),

    profilePic: "https://stutikumari17.netlify.app/images/my.jpg",
    comments: [
      {
        _id: uuid(),
        firstName: "scooby ",
        username: "scooby",
        password: "scooby123",
        text: "🧸😂",
        profilePic:
          "https://scontent.fluh1-2.fna.fbcdn.net/v/t1.18169-9/20992941_10156238556155961_119237620566999832_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kvzimG9PKeEAX86fd_6&_nc_ht=scontent.fluh1-2.fna&oh=00_AT8mYah0yGGk5AALzDph4uGb77fxoLwQ49fBi6GKw51JYw&oe=62F7F197",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "shaurya",
        lastName: "kuamr",
        username: "shaurya",
        text: "Kuch Jayda hi gyaan nhi hogya 😂",
        profilePic:
          "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
