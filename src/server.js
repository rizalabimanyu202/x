const Hapi = require("@hapi/hapi");
const accountHandler = require("./handler");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route([
    {
      method: "GET",
      path: "/account",
      handler: accountHandler.getAccount,
    },
    {
      method: "POST",
      path: "/account",
      handler: accountHandler.addAccount,
    },
    {
      method: "DELETE",
      path: "/account",
      handler: accountHandler.deleteAccount,
    },
    {
      method: "PATCH",
      path: "/account",
      handler: accountHandler.editAccount,
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
