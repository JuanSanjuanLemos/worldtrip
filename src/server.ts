import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  return createServer({
    environment,

    models: {
      continent: Model,
    },

    seeds(server) {
      server.create("continent",
        {
          id: "northamerica",
          name: "América do Norte",
          link: "northamerica",
          carouselUrl: "/images/carousel/northamerica.png",
          bannerUrl: "/images/banner/northamerica.png",
          title: "A América do Norte é um subcontinente",
          text: "A América do Norte abrange a porção setentrional do continente americano, apesar desse “subcontinente” estar firmado em sua própria placa tectônica. O subcontinente da América do Norte compreende o Canadá, México, Groenlândia e os Estados Unidos da América (EUA). Ele exibe extensas cadeias montanhosas tal qual os Montes Apalaches e as Montanhas Rochosas, as quais integram as Cordilheiras Ocidentais.",
          countries: 20,
          langagues: 26,
          mostVisitedCities: [
            {
              name: "New York",
              cityImageUrl: "/images/card/newyork.png",
              country: "Estados Unidos",
              countryFlagUrl: "/images/flag/us.svg",
            },
            {
              name: "Miami",
              cityImageUrl: "/images/card/miami.png",
              country: "Estados Unidos",
              countryFlagUrl: "/images/flag/us.svg",
            },
            {
              name: "Los Angeles",
              cityImageUrl: "/images/card/losangeles.png",
              country: "Estados Unidos",
              countryFlagUrl: "/images/flag/us.svg",
            },
            {
              name: "Las Vegas",
              cityImageUrl: "/images/card/lasvegas.png",
              country: "Estados Unidos",
              countryFlagUrl: "/images/flag/us.svg",
            },
            {
              name: "Cancun",
              cityImageUrl: "/images/card/cancun.png",
              country: "México",
              countryFlagUrl: "/images/flag/mexico.svg",
            },
            {
              name: "Orlando",
              cityImageUrl: "/images/card/orlando.png",
              country: "Estados Unidos",
              countryFlagUrl: "/images/flag/us.svg",
            },
            {
              name: "Toronto",
              cityImageUrl: "/images/card/toronto.png",
              country: "Canadá",
              countryFlagUrl: "/images/flag/canada.svg",
            },
            {
              name: "Vancouver",
              cityImageUrl: "/images/card/vancouver.png",
              country: "Canadá",
              countryFlagUrl: "/images/flag/canada.svg",
            },
            {
              name: "São Francisco",
              cityImageUrl: "/images/card/sanfrancisco.png",
              country: "Estados Unidos",
              countryFlagUrl: "/images/flag/us.svg",
            },
            {
              name: "Honolulu",
              cityImageUrl: "/images/card/honolulu.png",
              country: "Estados Unidos",
              countryFlagUrl: "/images/flag/us.svg",
            },
          ]
        }
      )
      server.create("continent",
        {
          id: "southamerica",
          name: "América do Sul",
          link: "southamerica",
          carouselUrl: "/images/carousel/southamerica.png",
          bannerUrl: "/images/banner/southamerica.png",
          title: "O continente tropical",
          text: "América do Sul é localizada em sua parte meridional. Ela abrange uma área de 17.819.100 km2 e é habitada por cerca de 388 milhões de habitantes. O subcontinente é banhado pelo Oceano Atlântico, a leste, e pelo Oceano Pacífico, a oeste. Ao norte está limitado pela América Central, e, ao sul, pela Antártida. O subcontinente era habitado por povos nativos, sendo encontrado pelos portugueses por volta de 1498.",
          countries: 13,
          langagues: 18,
          mostVisitedCities: [
            {
              name: "Buenos Aires",
              cityImageUrl: "/images/card/buenosaires.png",
              country: "Argentina",
              countryFlagUrl: "/images/flag/argentina.svg",
            },
            {
              name: "Lima",
              cityImageUrl: "/images/card/lima.png",
              country: "Peru",
              countryFlagUrl: "/images/flag/peru.svg",
            },
            {
              name: "Rio de Janeiro",
              cityImageUrl: "/images/card/riodejaneiro.png",
              country: "Brasil",
              countryFlagUrl: "/images/flag/brazil.svg",
            },
          ]
        }
      )
      server.create("continent",
        {
          id: "asia",
          name: "Ásia",
          link: "asia",
          carouselUrl: "/images/carousel/asia.png",
          bannerUrl: "/images/banner/asia.png",
          title: "O maior dos continentes",
          text: "O continente asiático é o mais populoso do mundo, com impressionantes 4,4 bilhões de pessoas. Apesar disso, o número de línguas vivas é de 2.036, o segundo maior, atrás da África. Dessas, 199 são institucionalizadas e 363 estão em pleno desenvolvimento. Destaque para as 871 línguas em apuros, disparado o maior entre todos os continentes, dado que merece atenção especial. Por fim, outras 201 línguas asiáticas estão morrendo.",
          countries: 50,
          langagues: 199,
          mostVisitedCities: [
            {
              name: "Hong Kong",
              cityImageUrl: "/images/card/hongkong.png",
              country: "China",
              countryFlagUrl: "/images/flag/china.svg",
            },
            {
              name: "Bangkok",
              cityImageUrl: "/images/card/bangkok.png",
              country: "Tailândia",
              countryFlagUrl: "/images/flag/thailand.svg",
            },
            {
              name: "Macau",
              cityImageUrl: "/images/card/macau.png",
              country: "China",
              countryFlagUrl: "/images/flag/china.svg",
            },
            {
              name: "Singapura",
              cityImageUrl: "/images/card/singapore.png",
              country: "Singapura",
              countryFlagUrl: "/images/flag/singapore.svg",
            },
            {
              name: "Dubai",
              cityImageUrl: "/images/card/dubai.png",
              country: "Emirados Árabes Unidos",
              countryFlagUrl: "/images/flag/uae.svg",
            },
            {
              name: "Kuala Lumpur",
              cityImageUrl: "/images/card/kualalumpur.png",
              country: "Malásia",
              countryFlagUrl: "/images/flag/malaysia.svg",
            },
            {
              name: "Istambul",
              cityImageUrl: "/images/card/istanbul.png",
              country: "Turquia",
              countryFlagUrl: "/images/flag/turkey.svg",
            },
            {
              name: "Deli",
              cityImageUrl: "/images/card/delhi.png",
              country: "Índia",
              countryFlagUrl: "/images/flag/india.svg",
            },
            {
              name: "Antália",
              cityImageUrl: "/images/card/antalya.png",
              country: "Turquia",
              countryFlagUrl: "/images/flag/turkey.svg",
            },
            {
              name: "Shenzhen",
              cityImageUrl: "/images/card/shenzhen.png",
              country: "China",
              countryFlagUrl: "/images/flag/china.svg",
            },
            {
              name: "Mumbai",
              cityImageUrl: "/images/card/mumbai.png",
              country: "India",
              countryFlagUrl: "/images/flag/india.svg",
            },
            {
              name: "Phuket",
              cityImageUrl: "/images/card/phuket.png",
              country: "Tailândia",
              countryFlagUrl: "/images/flag/thailand.svg",
            },
            {
              name: "Tokyo",
              cityImageUrl: "/images/card/tokyo.png",
              country: "Japão",
              countryFlagUrl: "/images/flag/japan.svg",
            },
            {
              name: "Pattaya",
              cityImageUrl: "/images/card/pattaya.png",
              country: "Tailândia",
              countryFlagUrl: "/images/flag/thailand.svg",
            },
            {
              name: "Taipé",
              cityImageUrl: "/images/card/taipei.png",
              country: "Taiwan",
              countryFlagUrl: "/images/flag/taiwan.svg",
            },
            {
              name: "Mecca",
              cityImageUrl: "/images/card/mecca.png",
              country: "Arábia Saudita",
              countryFlagUrl: "/images/flag/saudiarabia.svg",
            },
            {
              name: "Guangzhou",
              cityImageUrl: "/images/card/guangzhou.png",
              country: "China",
              countryFlagUrl: "/images/flag/china.svg",
            },
            {
              name: "Medina",
              cityImageUrl: "/images/card/medina.png",
              country: "Arábia Saudita",
              countryFlagUrl: "/images/flag/saudiarabia.svg",
            },
            {
              name: "Seoul",
              cityImageUrl: "/images/card/seoul.png",
              country: "Coreia do sul",
              countryFlagUrl: "/images/flag/southkorea.svg",
            },
            {
              name: "Agra",
              cityImageUrl: "/images/card/agra.png",
              country: "India",
              countryFlagUrl: "/images/flag/india.svg",
            },
            {
              name: "Osaka",
              cityImageUrl: "/images/card/osaka.png",
              country: "Japão",
              countryFlagUrl: "/images/flag/japan.svg",
            },
            {
              name: "Shanghai",
              cityImageUrl: "/images/card/shanghai.png",
              country: "China",
              countryFlagUrl: "/images/flag/china.svg",
            },
            {
              name: "Ho Chi Minh City",
              cityImageUrl: "/images/card/hochiminhcity.png",
              country: "Vietnã",
              countryFlagUrl: "/images/flag/vietnam.svg",
            },
            {
              name: "Denpasar",
              cityImageUrl: "/images/card/denpasar.png",
              country: "Indonésia",
              countryFlagUrl: "/images/flag/indonesia.svg",
            },
            {
              name: "Chennai",
              cityImageUrl: "/images/card/chennai.png",
              country: "India",
              countryFlagUrl: "/images/flag/india.svg",
            },
            {
              name: "Johor Bahru",
              cityImageUrl: "/images/card/johorbahru.png",
              country: "Malásia",
              countryFlagUrl: "/images/flag/malaysia.svg",
            },
            {
              name: "Jaipur",
              cityImageUrl: "/images/card/jaipur.png",
              country: "India",
              countryFlagUrl: "/images/flag/india.svg",
            },
            {
              name: "Ha long",
              cityImageUrl: "/images/card/halong.png",
              country: "Vietnã",
              countryFlagUrl: "/images/flag/vietnam.svg",
            },
            {
              name: "Riyadh",
              cityImageUrl: "/images/card/riyadh.png",
              country: "Arábia Saudita",
              countryFlagUrl: "/images/flag/saudiarabia.svg",
            },
            {
              name: "Ha Noi",
              cityImageUrl: "/images/card/hanoi.png",
              country: "Vietnã",
              countryFlagUrl: "/images/flag/vietnam.svg",
            },
            {
              name: "Jakarta",
              cityImageUrl: "/images/card/jakarta.png",
              country: "Indonésia",
              countryFlagUrl: "/images/flag/indonesia.svg",
            },
            {
              name: "Beijing",
              cityImageUrl: "/images/card/beijing.png",
              country: "China",
              countryFlagUrl: "/images/flag/china.svg",
            },
            {
              name: "Jerusalem",
              cityImageUrl: "/images/card/jerusalem.png",
              country: "Israel",
              countryFlagUrl: "/images/flag/israel.svg",
            },
            {
              name: "Dammam",
              cityImageUrl: "/images/card/dammam.png",
              country: "Arábia Saudita",
              countryFlagUrl: "/images/flag/saudiarabia.svg",
            },
            {
              name: "Penang Island",
              cityImageUrl: "/images/card/penangisland.png",
              country: "Malásia",
              countryFlagUrl: "/images/flag/malaysia.svg",
            },
            {
              name: "Kyoto",
              cityImageUrl: "/images/card/kyoto.png",
              country: "Japão",
              countryFlagUrl: "/images/flag/japan.svg",
            },
            {
              name: "Zhuhai",
              cityImageUrl: "/images/card/zhuhai.png",
              country: "China",
              countryFlagUrl: "/images/flag/china.svg",
            },
            {
              name: "Chiang Mai",
              cityImageUrl: "/images/card/chiangmai.png",
              country: "Tailândia",
              countryFlagUrl: "/images/flag/thailand.svg",
            },
            {
              name: "Kolkatta",
              cityImageUrl: "/images/card/kolkatta.png",
              country: "India",
              countryFlagUrl: "/images/flag/india.svg",
            },
            {
              name: "Cebu",
              cityImageUrl: "/images/card/cebu.png",
              country: "Filipinas",
              countryFlagUrl: "/images/flag/philippines.svg",
            },
            {
              name: "Tel aviv",
              cityImageUrl: "/images/card/telaviv.png",
              country: "Israel",
              countryFlagUrl: "/images/flag/israel.svg",
            },
            {
              name: "Guilin",
              cityImageUrl: "/images/card/guilin.png",
              country: "China",
              countryFlagUrl: "/images/flag/china.svg",
            },
            {
              name: "Mugla",
              cityImageUrl: "/images/card/mugla.png",
              country: "Turquia",
              countryFlagUrl: "/images/flag/turkey.svg",
            },
            {
              name: "Chiba",
              cityImageUrl: "/images/card/chiba.png",
              country: "Japão",
              countryFlagUrl: "/images/flag/japan.svg",
            },
            {
              name: "Da Nang",
              cityImageUrl: "/images/card/danang.png",
              country: "Vietnã",
              countryFlagUrl: "/images/flag/vietnam.svg",
            },
            {
              name: "Batam",
              cityImageUrl: "/images/card/batam.png",
              country: "Indonésia",
              countryFlagUrl: "/images/flag/indonesia.svg",
            },
            {
              name: "Fukuoka",
              cityImageUrl: "/images/card/fukuoka.png",
              country: "Japão",
              countryFlagUrl: "/images/flag/japan.svg",
            },
            {
              name: "Abu Dhabi",
              cityImageUrl: "/images/card/abudhabi.png",
              country: "Arábia Saudita",
              countryFlagUrl: "/images/flag/saudiarabia.svg",
            },
            {
              name: "Jeju",
              cityImageUrl: "/images/card/jeju.png",
              country: "Coreia do sul",
              countryFlagUrl: "/images/flag/southkorea.svg",
            },
            {
              name: "Krabi",
              cityImageUrl: "/images/card/krabi.png",
              country: "Tailândia",
              countryFlagUrl: "/images/flag/thailand.svg",
            },
            {
              name: "Bangalore",
              cityImageUrl: "/images/card/bangalore.png",
              country: "Índia",
              countryFlagUrl: "/images/flag/india.svg",
            },
          ]
        }
      )
      server.create("continent",
        {
          id: "africa",
          name: "África",
          link: "africa",
          carouselUrl: "/images/carousel/africa.png",
          bannerUrl: "/images/banner/africa.png",
          title: "Localizado na zona intertropical",
          text: "A população do continente africano é de 1,2 bilhão de pessoas. No populoso continente, são 2.140 línguas vivas, o maior entre todos os continentes. São 197 institucionalizadas, 536 em desenvolvimento, 905 consideradas vigorosas, 373 sob ameaça e 129 em fase de desaparecimento. Neste último dado, chama a atenção a preservação da cultura falada e escrita, já que o número de línguas que estão saindo de cena é baixo em relação às línguas vivas.",
          countries: 54,
          langagues: 197,
          mostVisitedCities: [
            {
              name: "Cairo",
              cityImageUrl: "/images/card/cairo.png",
              country: "Egito",
              countryFlagUrl: "/images/flag/egypt.svg",
            },
            {
              name: "Johanesburgo",
              cityImageUrl: "/images/card/johannesburg.png",
              country: "África do Sul",
              countryFlagUrl: "/images/flag/southafrica.svg",
            },
            {
              name: "Marrakech",
              cityImageUrl: "/images/card/marrakech.png",
              country: "Marrocos",
              countryFlagUrl: "/images/flag/morocco.svg",
            },
            {
              name: "Hurghada",
              cityImageUrl: "/images/card/hurghada.png",
              country: "Egito",
              countryFlagUrl: "/images/flag/egypt.svg",
            },
          ]
        }
      )
      server.create("continent",
        {
          id: "europe",
          name: "Europa",
          link: "europe",
          carouselUrl: "/images/carousel/europe.png",
          bannerUrl: "/images/banner/europe.png",
          title: "O continente mais antigo",
          text: "A população europeia é de 746 milhões, e são 289 línguas vivas, o menor entre os cinco continentes em questão, e o único na casa das dezenas e não dos milhares, como os outros quatro. São 72 línguas institucionais, os mesmos 72 em desenvolvimento e mais 22 vigorosas. Se 72 estão evoluindo, outras 71 aparecem em reais dificuldades, enquanto 52 línguas estão morrendo. Logo, quando se olha para o todo, constata-se que a Europa tem questões por resolver quanto à preservação das línguas.",
          countries: 50,
          langagues: 60,
          mostVisitedCities: [
            {
              name: "Londres",
              cityImageUrl: "/images/card/london.png",
              country: "Reino Unido",
              countryFlagUrl: "/images/flag/unitedkingdon.svg",
            },
            {
              name: "Paris",
              cityImageUrl: "/images/card/paris.png",
              country: "França",
              countryFlagUrl: "/images/flag/france.svg",
            },
            {
              name: "Roma",
              cityImageUrl: "/images/card/rome.png",
              country: "Itália",
              countryFlagUrl: "/images/flag/italy.svg",
            },
            {
              name: "Praga",
              cityImageUrl: "/images/card/prague.png",
              country: "República Tcheca",
              countryFlagUrl: "/images/flag/czechrepublic.svg",
            },
            {
              name: "Amsterdâ",
              cityImageUrl: "/images/card/amsterdam.png",
              country: "Netherlands",
              countryFlagUrl: "/images/flag/netherlands.svg",
            },
            {
              name: "Barcelona",
              cityImageUrl: "/images/card/barcelona.png",
              country: "Espanha",
              countryFlagUrl: "/images/flag/spain.svg",
            },
            {
              name: "Milão",
              cityImageUrl: "/images/card/milan.png",
              country: "Itália",
              countryFlagUrl: "/images/flag/italy.svg",
            },
            {
              name: "Vienna",
              cityImageUrl: "/images/card/vienna.png",
              country: "Áustria",
              countryFlagUrl: "/images/flag/austria.svg",
            },
            {
              name: "Berlin",
              cityImageUrl: "/images/card/berlin.png",
              country: "Alemanha",
              countryFlagUrl: "/images/flag/germany.svg",
            },
            {
              name: "Atenas",
              cityImageUrl: "/images/card/athens.png",
              country: "Grécia",
              countryFlagUrl: "/images/flag/greece.svg",
            },
            {
              name: "Moscow",
              cityImageUrl: "/images/card/moscow.png",
              country: "Rússia",
              countryFlagUrl: "/images/flag/russia.svg",
            },
            {
              name: "Veneza",
              cityImageUrl: "/images/card/venice.png",
              country: "Itália",
              countryFlagUrl: "/images/flag/italy.svg",
            },
            {
              name: "Madrid",
              cityImageUrl: "/images/card/madrid.png",
              country: "Espanha",
              countryFlagUrl: "/images/flag/spain.svg",
            },
            {
              name: "Dublin",
              cityImageUrl: "/images/card/dublin.png",
              country: "Irlanda",
              countryFlagUrl: "/images/flag/ireland.svg",
            },
            {
              name: "Florença",
              cityImageUrl: "/images/card/florence.png",
              country: "Itália",
              countryFlagUrl: "/images/flag/italy.svg",
            },
            {
              name: "Munique",
              cityImageUrl: "/images/card/munich.png",
              country: "Alemanha",
              countryFlagUrl: "/images/flag/germany.svg",
            },
            {
              name: "St. Petersburg",
              cityImageUrl: "/images/card/stpetersburg.png",
              country: "Rússia",
              countryFlagUrl: "/images/flag/russia.svg",
            },
            {
              name: "Bruxelas",
              cityImageUrl: "/images/card/brussels.png",
              country: "Bélgica",
              countryFlagUrl: "/images/flag/belgium.svg",
            },
            {
              name: "Budapeste",
              cityImageUrl: "/images/card/budapest.png",
              country: "Hungria",
              countryFlagUrl: "/images/flag/hungary.svg",
            },
            {
              name: "Lisboa",
              cityImageUrl: "/images/card/lisbon.png",
              country: "Portugal",
              countryFlagUrl: "/images/flag/portugal.svg",
            },
            {
              name: "Heraklion",
              cityImageUrl: "/images/card/heraklion.png",
              country: "Grécia",
              countryFlagUrl: "/images/flag/greece.svg",
            },
            {
              name: "Copenhagen",
              cityImageUrl: "/images/card/copenhagen.png",
              country: "Dinamarca",
              countryFlagUrl: "/images/flag/denmark.svg",
            },
            {
              name: "Krakow",
              cityImageUrl: "/images/card/krakow.png",
              country: "Polônia",
              countryFlagUrl: "/images/flag/poland.svg",
            },
            {
              name: "Warsaw",
              cityImageUrl: "/images/card/warsaw.png",
              country: "Polônia",
              countryFlagUrl: "/images/flag/poland.svg",
            },
            {
              name: "Frankfurt",
              cityImageUrl: "/images/card/frankfurt.png",
              country: "Alemanha",
              countryFlagUrl: "/images/flag/germany.svg",
            },
            {
              name: "Stockholm",
              cityImageUrl: "/images/card/stockholm.png",
              country: "Suécia",
              countryFlagUrl: "/images/flag/sweden.svg",
            },
            {
              name: "Nice",
              cityImageUrl: "/images/card/nice.png",
              country: "França",
              countryFlagUrl: "/images/flag/france.svg",
            },
            {
              name: "Porto",
              cityImageUrl: "/images/card/porto.png",
              country: "Portugal",
              countryFlagUrl: "/images/flag/portugal.svg",
            },
            {
              name: "Rhodes",
              cityImageUrl: "/images/card/rhodes.png",
              country: "Grécia",
              countryFlagUrl: "/images/flag/greece.svg",
            },
          ]
        }
      )
      server.create("continent",
        {
          id: "oceania",
          name: "Oceania",
          link: "oceania",
          carouselUrl: "/images/carousel/oceania.png",
          bannerUrl: "/images/banner/oceania.png",
          title: "O menor continente da Terra",
          text: "A Oceania é o continente com o menor número de pessoas. A população é de 40,9 milhões, mas com um número alto proporcionalmente de línguas vivas: 1.323. Dessas, são apenas 38 institucionalizadas (atrás apenas da América), 354 em desenvolvimento e 347 vigorosas. Já as línguas em apuros somam 358 (bem próxima das em desenvolvimento e das fortalecidas) e mais 226 línguas nesse continente estão morrendo.",
          countries: 16,
          langagues: 38,
          mostVisitedCities: [
            {
              name: "Sydney",
              cityImageUrl: "/images/card/sydney.png",
              country: "Austrália",
              countryFlagUrl: "/images/flag/australia.svg",
            },
            {
              name: "Melbourne",
              cityImageUrl: "/images/card/melbourne.png",
              country: "Austrália",
              countryFlagUrl: "/images/flag/australia.svg",
            },
            {
              name: "Auckland",
              cityImageUrl: "/images/card/auckland.png",
              country: "Nova Zelândia",
              countryFlagUrl: "/images/flag/newzealand.svg",
            },
          ]
        }
      )
    },

    routes() {
      this.namespace = "/api"

      this.get("/continents")

      this.get("/continents/:id")


      this.passthrough((request) => {
        if (request.url === "/_next/static/development/_devPagesManifest.json") return true;
      });
      this.passthrough((request) => {
        if (request.url === "/_next/static/development/_devMiddlewareManifest.json") return true;
      });
    },
  })
}