import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "stuti",
    lastName: "Skk",
    username: "stutiSk",
    password: "StutiSk123",
    email: "stuti1799@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    Bio: "Frontend Developer ",
    link: "https://peerlist.io/stutisk",
    profilePic: "https://stutikumari17.netlify.app/images/my.jpg",

    followers: [],
  },
  {
    _id: uuid(),
    firstName: "shreya",
    lastName: "thakur",
    username: "ShreyaT",
    password: "Shreya123",
    email: "shreya1799@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    Bio: "Dancer ",
    link: "https://peerlist.io/stutisk",
    profilePic:
      "https://i.pinimg.com/originals/ae/78/04/ae780460656b0f63788cf5ff47812398.jpg",
    followers: [
      {
        _id: uuid(),
        firstName: "priya",
        lastName: "Sharma",
        username: "Priyasharma",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "adarsh",
    lastName: "balika",
    username: "adarshbalika",
    password: "adarsh123",
    email: "shreya1799@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    Bio: "adarsh student ",
    link: "https://peerlist.io/stutisk",
    profilePic: "https://picsum.photos/id/1027/200/300",
    followers: [
      {
        _id: uuid(),
        firstName: "priya",
        lastName: "Sharma",
        username: "Priyasharma",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "shaurya",
    lastName: "kuamr",
    username: "shaurya",
    password: "sk123",
    email: "shaurya@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    Bio: "student ",
    link: "https://peerlist.io/stutisk",
    profilePic:
      "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    followers: [
      {
        _id: uuid(),
        firstName: "priya",
        lastName: "Sharma",
        username: "Priyasharma",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "kailey",
    username: "kailey",
    password: "sk123",
    email: "kailey@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    Bio: "Making Hoomans smile since 21' ",
    link: "https://peerlist.io/stutisk",
    profilePic:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1657787764/y7yiyiogvkanju8hyzwq.jpg",
    followers: [
      {
        _id: uuid(),
        firstName: "priya",
        lastName: "Sharma",
        username: "Priyasharma",
      },
    ],
  },
];
