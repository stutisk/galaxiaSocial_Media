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
    password: 'StutiSk123',
    email:'stuti1799@gmail.com',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    Bio:"Frontend Developer ",
    link:"https://peerlist.io/stutisk",
    followers:[
      {
        _id:uuid(),
        firstName:"priya",
        lastName:"Sharma",
        username: "Priyasharma",

      },
    ]
  },
];
