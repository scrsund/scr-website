import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      entries: [
        {
          title: "Project 1",
          icon: "fa-solid fa-code",
          description: "A recipe management web application using Vue.js. <br><br>• Reusable components<br>• State management<br>• Component communication patterns<br>• Scoped CSS styles",
          heading: "Recipe App",
          customBorderClass: "border-bottom-right",
        },
        {
          title: "Project 2",
          icon: "fa-solid fa-code",
          description: "An interactive game using Python's Turtle graphics module. <br><br>• Object-Oriented Programming<br>• Real-time event handling<br>• Game loop management<br>• Modular code design",
          heading: "Turtle Cross",
          customBorderClass: "border-left-right",
        },
        {
          title: "Project 3",
          icon: "fa-solid fa-code",
          description: "<i>• Vuex<br>• Vue Router<br>• PostgreSQL<br>• Express.js",
          heading: "Trading Journal<br><i>(coming soon)</i>",
          customBorderClass: "border-bottom-left",
        },
        {
          title: "Self-Taught",
          icon: "fa-solid fa-graduation-cap",
          description:
            "I taught myself how to do music, how to understand financial markets, and now, how to code. Learning new skills and challenging myself is my hobby.",
          heading: "2007 - Present",
          customBorderClass: "border-top-bottom",
        },
        {
          title: "Me",
          icon: null,
          description: null,
          customBorderClass: "border-none",
        },
        {
          title: "Leader",
          icon: "fa-solid fa-trophy",
          description:
            "Led as a music instructor, youth leader, and preschool assistant. I've worked with people of all ages-- from 2 years to 60 years old.",
          heading: "2016 - 2022",
          customBorderClass: "border-top-bottom",
        },
        {
          title: "Aspiring Developer",
          icon: "fa-solid fa-code",
          description:
            "Python, JavaScript/HTML/CSS and postgreSQL. Although I'm open to both front and backend development, I've been enjoying frontend development recently.",
          heading: "2023 - Present",
          customBorderClass: "border-top-right",
        },
        {
          title: "Financial Analyst",
          icon: "fa-solid fa-coins",
          description:
            "Trading Forex, Cryptocurrency, and NFTs through market sentiment and technical analysis. I've been able to multiply my portfolio in the last 3 years.",
          heading: "2021 - Present",
          customBorderClass: "border-left-right",
        },
        {
          title: "Musician",
          icon: "fa-solid fa-music",
          description:
            "Playing the drums, guitar, piano, bass, and writing songs. I've played for crowds of thousands and have experience as a studio musician.",
          heading: "2008 - 2019",
          customBorderClass: "border-top-left",
        },
      ],
      // iconList: [
      //   "fa-solid fa-music",
      //   "fa-solid fa-code",
      //   "fa-solid fa-people-group",
      //   "fa-solid fa-graduation-cap",
      //   "fa-solid fa-trophy",
      //   "fa-solid fa-handshake-angle",
      //   "fa-solid fa-person-running",
      //   "fa-solid fa-guitar",
      //   "fa-solid fa-drum",
      //   "fa-solid fa-dumbbell",
      //   "fa-solid fa-ice-cream",
      //   "fa-solid fa-dog",
      //   "fa-solid fa-gamepad",
      // ],
      // {
      //   title: "Growth",
      //   icon: "fa-solid fa-person-running",
      //   description:
      //     "I believe that your mind is your greatest asset. I always want to improve and better myself mentally and emotionally by reading books and being open to critique.",
      //   heading: "On-Going",
      //   customBorderClass: "border-top-right",
      // },
      // {
      //   title: "Team Player",
      //   icon: "fa-solid fa-people-group",
      //   description:
      //     "I have a genuine interest in people and find that I can work well with almost anyone. My optimistic personality makes it easy to collaborate with others and their ideas.",
      //   heading: "On-Going",
      //   customBorderClass: "border-left-right",
      // },
      // {
      //   title: "Serving",
      //   icon: "fa-solid fa-handshake-angle",
      //   description:
      //     "Helping others and being generous when I can be. I've been volunteering my time at various organizations my whole life.",
      //   heading: "On-Going",
      //   customBorderClass: "border-top-left",
      // },
      // {
      //   title: "Self-Taught",
      //   icon: "fa-solid fa-graduation-cap",
      //   description:
      //     "I taught myself how to do music, how to understand financial markets, and now, how to code. Learning new skills and challenging myself is my hobby.",
      //   heading: "2007 - Present",
      //   customBorderClass: "border-top-bottom",
      // },
      // {
      //   title: "Me",
      //   icon: null,
      //   description: null,
      //   customBorderClass: "border-none",
      // },
      // {
      //   title: "Leader",
      //   icon: "fa-solid fa-trophy",
      //   description:
      //     "Led as a music instructor, youth leader, and preschool assistant. I've worked with people of all ages-- from 2 years to 60 years old.",
      //   heading: "2016 - 2022",
      //   customBorderClass: "border-top-bottom",
      // },
      // {
      //   title: "Aspiring Developer",
      //   icon: "fa-solid fa-code",
      //   description:
      //     "Python, JavaScript/HTML/CSS and postgreSQL. Although I'm open to both front and backend development, I've been enjoying frontend development recently.",
      //   heading: "2023 - Present",
      //   customBorderClass: "border-top-right",
      // },
      // {
      //   title: "Financial Analyst",
      //   icon: "fa-solid fa-coins",
      //   description:
      //     "Trading Forex, Cryptocurrency, and NFTs through market sentiment and technical analysis. I've been able to multiply my portfolio in the last 3 years.",
      //   heading: "2021 - Present",
      //   customBorderClass: "border-left-right",
      // },
      // {
      //   title: "Musician",
      //   icon: "fa-solid fa-music",
      //   description:
      //     "Playing the drums, guitar, piano, bass, and writing songs. I've played for crowds of thousands and have experience as a studio musician.",
      //   heading: "2008 - 2019",
      //   customBorderClass: "border-top-left",
      // },
    };
  },
});

export default store;
