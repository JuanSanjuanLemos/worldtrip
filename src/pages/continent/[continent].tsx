import { BannerContinent } from "../../components/BannerContinent";
import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import Head from "next/head";

type CityProps = {
  name: string;
  cityImageUrl: string;
  country: string;
  countryFlagUrl: string;
}

type ContinentProps = {
  id: string;
  name: string;
  title: string;
  text: string;
  bannerUrl: string;
  countries: number;
  langagues: number;
  mostVisitedCities: CityProps[];
}

export default function Continent(){
  const [continentContent, setContinentContent] = useState<ContinentProps>({} as ContinentProps);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const { continent } = router.query;

  const getContinent = async() =>{
    try{
      const response = await api.get(`/continents/${continent}`);
      console.log(response)
      const data = await response.data.continent;
      console.log(data)

      setContinentContent(data)
      setIsLoaded(!isLoaded)

    }catch (error) {
      alert(`Error to handle Continent load\n${error}`)
    }
  }

  useEffect(() => {
    getContinent()
  }, [])
  return(
    <>
      <Head>
        <title>WorldTrip | {continentContent.name}</title>
      </Head>
      <Header />
      <BannerContinent bannerUrl={continentContent.bannerUrl} continentName={continentContent.name} />
    </>
  )
}