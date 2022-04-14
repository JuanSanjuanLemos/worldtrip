import { BannerContinent } from "../../components/BannerContinent";
import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { AboutContinent } from "../../components/AboutContinent";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import CityCard from "../../components/CityCard";

type CityProps = {
  name: string;
  cityImageUrl: string;
  country: string;
  countryFlagUrl: string;
};

type ContinentProps = {
  id: string;
  name: string;
  title: string;
  text: string;
  bannerUrl: string;
  countries: number;
  langagues: number;
  mostVisitedCities: CityProps[];
};

export default function Continent() {
  const [continentContent, setContinentContent] = useState<ContinentProps>(
    {} as ContinentProps
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const { continent } = router.query;

  const getContinent = async () => {
    const response = await api.get(`/continents/${continent}`);
    const data = await response.data.continent;

    setIsLoaded(!isLoaded);
    setContinentContent(data);
  };

  useEffect(() => {
    getContinent();
  }, []);
  return (
    <>
      <Head>
        <title>WorldTrip | {continentContent.name}</title>
      </Head>
      <Header />
      {isLoaded ? (
        <>
          <BannerContinent
            bannerUrl={continentContent.bannerUrl}
            continentName={continentContent.name}
          />
          <AboutContinent
            description={continentContent.text}
            mostVisitedCities={continentContent.mostVisitedCities.length}
            countries={continentContent.countries}
            langagues={continentContent.langagues}
          />
          <Box as="section" maxWidth={1190} marginX='auto' mb='35px' px={["4", "8"]} >
            <Text color='gray.900' fontSize={[36]} lineHeight={['54px']} mb='40px' fontWeight='medium'>Cidades +100</Text>
            <SimpleGrid columns={[1,2,2,3,4]} spacing={10}>
              {continentContent.mostVisitedCities.map((city) => {
                return (
                  <CityCard
                    name={city.name}
                    cityImageUrl={city.cityImageUrl}
                    country={city.country}
                    countryFlagUrl={city.countryFlagUrl}
                  />
                );
              })}
            </SimpleGrid>
          </Box>
        </>
      ) : (
        <Text>Carregando...</Text>
      )}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { continent: "europe" } },
      { params: { continent: "northamerica" } },
      { params: { continent: "southamerica" } },
      { params: { continent: "asia" } },
      { params: { continent: "oceania" } },
      { params: { continent: "africa" } },
    ],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async function (context) {
  return {
    props: {}, // will be passed to the page component as props
  };
};
