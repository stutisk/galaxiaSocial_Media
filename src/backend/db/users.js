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
    profilePic: "https://stutikumari17.netlify.app/images/my.jpg",

      followers: [
        {
          firstName: "Shubham",
          lastName: "Soni",
          username: "shubhamsoni",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        },
        {
          firstName: "Bharati",
          lastName: "Subramanian",
          username: "bhaaratii",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
        },
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          username: "janedoe",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
        },
      ],
    
  },
  {
    _id: uuid(),
    firstName: "shreya",
    lastName: "thakur",
    username: "ShreyaT",
    password: 'Shreya123',
    email:'shreya1799@gmail.com',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    Bio:"Dancer ",
    link:"https://peerlist.io/stutisk",
    profilePic: "https://i.pinimg.com/originals/ae/78/04/ae780460656b0f63788cf5ff47812398.jpg",
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
