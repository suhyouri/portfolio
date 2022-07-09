import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import Settings from "./views/Settings.js";
import About from "./views/About.js";
import Works from "./views/Works.js";

/* toggle */
const toggle = document.getElementById("toggle");
const page_link = document.getElementById("page_link");

let hidden = false;

function toggleHandler(e) {
  e.preventDefault();
  if (hidden) {
    page_link.classList.remove("hidden");
    page_link.classList.add("opened");
    console.log("visible")
    hidden = false;
  } else {
    page_link.classList.add("hidden");
    page_link.classList.remove("opened");
    console.log("hidden")
    hidden = true;
  }
}
toggle.addEventListener("click", toggleHandler)



const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
}

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
    // console.log(pathToRegex("/posts/:id"));
    // /posts:/:id
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: PostView },
    { path: "/settings", view: Settings },
    { path: "/about", view: About },
    { path: "/works/:id", view: Works },
    // { path: "/", view: () => console.log("viewing dashboard") },
    // { path: "/posts", view: () => console.log("viewing Posts") },
    // { path: "/settings", view: () => console.log("viewing Settings") },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
    //   isMatch: location.pathname === route.path,
        result: location.pathname.match(pathToRegex(route.path))
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

    const view = new match.route.view(getParams(match));


    document.querySelector("#app").innerHTML = await view.getHTML();
  //     // console.log(potentialMatches)
  //     // console.log(match.route.view());
//   console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});