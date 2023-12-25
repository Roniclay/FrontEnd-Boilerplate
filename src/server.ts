import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  // O nextHandler é responsável por direcionar a solicitação para a página apropriada do Next.js, garantindo que o roteamento do lado do servidor seja tratado corretamente.
  app.use((req, res) => nextHandler(req, res));

  // garante que o servidor Express seja iniciado apenas quando o Next.js estiver pronto para lidar com as solicitações.
  nextApp.prepare().then(() => {
    //payload.logger.info('Next.js started')

    app.listen(PORT, async () => {
      //payload.logger.info(`Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
    });
  });
};

start();