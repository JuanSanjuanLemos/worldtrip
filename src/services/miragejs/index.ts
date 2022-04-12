import { createServer } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = 'api';
      this.get('/continentsData', () => {
        return [
          {
            url: "/continent-europe.png",
            name: "Europa",
            description: "O continente mais antigo.",
          },
          {
            url: "/continent-south-america.png",
            name: "América do Sul",
            description: "O continente Tropical.",
          },
          {
            url: "/continent-north-america.png",
            name: "América do Norte",
            description: "It's America.",
          },
          {
            url: "/continent-oceania.png",
            name: "Oceania",
            description: "A melhor qualidade de vida.",
          },
          {
            url: "/continent-asia.png",
            name: "Ásia",
            description: "A primavera mais bonita do mundo",
          },
        ]
      });
    },
  });
}
