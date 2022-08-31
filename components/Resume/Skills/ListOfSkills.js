import { CgWebsite } from "react-icons/cg";
import { BsGraphUp } from "react-icons/bs";

const skills = {
  web: {
    label: "Software development",
    icon: <CgWebsite />,
    items: {
      html: {
        label: "HTML5",
        icon: "/skills/icons8-html-5.svg",
        year: 2015,
        mood: "🙂",
        about:
          "Many people don’t want to remember their 2015; for me HTML happened in 2015 and for that I am grateful. I need to work on making my code more semantic and keeping accessibility in mind.",
      },
      css: {
        label: "CSS3",
        icon: "/skills/icons8-css3.svg",
        year: 2015,
        mood: "🤔",
        about:
          "I enjoy it despite my limited design skills. I don’t subscribe to one solution in particular; depending on what I am doing, I use less-CSS/vanilla-CSS/tailwind-CSS. In some projects I made, I used sass as a CSS framework.",
      },
      js: {
        label: "Java-Script",
        icon: "/skills/icons8-javascript.svg",
        year: 2015,
        mood: "🤩",
        about:
          "Ever since I started learning it, hardly any day passes without using it or learning something new.",
      },
      react: {
        label: "Python",
        icon: "/skills/icons8-python.svg",
        year: 2019,
        mood: "🤓",
        about:
          " I used python sometimes during my Learnership. Later in 2019, I started using it more while practicing machine learning. I did not use it that much outside the scope of data analysis/science. I might consider using it for back-end web development.",
      },
      next: {
        label: "Next.js",
        icon: "/skills/next-js-logo.svg",
        year: 2021,
        mood: "🙂",
        about:
          " I built the first version of this website using create-react-app. I wanted later to make the website faster by using a static site generator. I tried Gatsby and Next.js and went finally with the latter. I haven’t had the opportunity yet to try server-side-rendering with Next.js.",
      },
      tailwind: {
        label: "Tailwind-CSS",
        icon: "/skills/tailwindcss-icon.svg",
        year: 2021,
        mood: "😆",
        about: " I used it to style this website.",
      },
      d3: {
        label: "Java",
        icon: "/skills/java-seeklogo.svg",
        year: 2016,
        mood: "🤩",
        about:
          "Back in 2016 during my undergraduate programme when a I saw (Hello Word) on the console that made be happy. Then i started enjoying Java for both frontend and backend development using this technologies, tools and frameworks (JSP, JEE, HTML5, Maven, JSTL, JSF, XML,JBOSS, GLassfish, Wildfly, Tomcat, JPA, PL/SQL,IntelliJ, Git, Jenkins, Micro Services Integration, Openshift and Docker.",
      },

      node: {
        label: "Node-JS",
        icon: "/skills/icons8-nodejs.svg",
        year: 2019,
        mood: "🙂",
        about:
          "After becoming familiar with JavaScript, it was relatively easy for me to lean node-JS. I am not as skilled with it as with the front-end technologies on this list, but I was comfortable enough to use it alongside express-JS and mongo-db as a back-end solution for some of my projects.",
      },
      firebase: {
        label: "PHP",
        icon: "/skills/new-php-logo.svg",
        year: 2015,
        mood: "😀",
        about:
          "I appreciate it for making my life simpler when implementing back-end solutions in some of my projects.",
      },
      database: {
        label: "SQL/NoSQL",
        icon: "/skills/Applications-database.svg",
        year: 2015,
        mood: "😀",
        about:
          "I appreciate it for making my life simpler when implementing back-end solutions in some of my projects.",
      },
      
    },
  },
  
  data: {
    label: "Frameworks",
    icon: <BsGraphUp />,
    items: {
      python: {
        label: "ITIL",
        icon: "/skills/icon8-itil.svg",
        year: 2020,
        mood: "🤓",
        about:
          " I have a little knowlege of Information Technology Infrastructure Library (ITIL). Currently, I'm self studying this framework and very soon will be sitting for an exam of ITIL 4 Foundation Service Management certificate.",
      },
      pd: {
        label: "Ionic",
        icon: "/skills/ionic.svg",
        year: 2019,
        mood: "🤩",
        about:
          "Basically, Ionic i used it for developing android client application in 2019 and I found it pretty much all the time when I use php laravel as a backend for api endpoints.",
      },
      sklearn: {
        label: "Laravel",
        icon: "/skills/laravel.svg",
        year: 2019,
        mood: "😀",
        about:
          "I once used PHP Laravel Framework for API endpoints; web services(RESTFul/SOAP) .",
      },
      tensorflow: {
        label: "Spring boot",
        icon: "/skills/springio-icon.svg",
        year: 2018,
        mood: "🤩",
        about:
          "The framework I used the most for Java applications. Very helpful.",
      },

      root: {
        label: "React",
        icon: "/skills/icons8-react.svg",
        year: 2021,
        mood: "🙂",
        about: "This JavaScript framework got me this website to be live.",
      },
    },
  },
};

export default skills;
