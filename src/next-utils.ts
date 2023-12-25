import next from "next";

const PORT = Number(process.env.PORT) || 3000;

// Uma instância do aplicativo Next.js
export const nextApp = next({
  // indica que o aplicativo está em modo de desenvolvimento.
  dev: process.env.NODE_ENV !== "production",
  port: PORT,
});

//chamado para obter o manipulador de rotas do aplicativo Next.js.
export const nextHandler = nextApp.getRequestHandler()