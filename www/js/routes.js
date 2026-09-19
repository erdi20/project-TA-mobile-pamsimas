function cekStatusLogin() {
  return localStorage.getItem("petugas_login") === "true";
}

var routes = [
  {
    path: "/",
    async: function ({ resolve }) {
      // Jika sudah login arahkan ke home, jika belum ke login
      if (cekStatusLogin()) {
        resolve({ componentUrl: "pages/home.html" }); // Gunakan componentUrl
      } else {
        resolve({ componentUrl: "pages/login.html" }); // Gunakan componentUrl
      }
    },
  },
  {
    path: "/login/",
    componentUrl: "pages/login.html", // Gunakan componentUrl
    name: "login",
  },
  {
    path: "/home/",
    componentUrl: "pages/home.html", // Gunakan componentUrl
    name: "home",
  },
  {
    path: "/about/",
    componentUrl: "pages/about.html", // Gunakan componentUrl
    name: "about",
  },
];
