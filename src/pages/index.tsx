import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { SectionTypes } from '../components/SectionTypes/SectionTypes';
import { CallToAction } from '../components/CallToAction';
import { Carousel } from '../components/CarouselFiles/Carousel';
import { Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

interface Continent{
  id:string;
  name: string;
  carouselUrl: string;
  title:string;
  link:string;
  description: string;
  numberCountries:number;
  numberLanguages: number;
  citiesMostVisitedInWorld: object[];
}

export default function Home(){
  const [listContinents, setListContinents] = useState<Continent[]>([]);
  const setList = async () =>{
    try{
      const response = await api.get("/continents")
  
      const data = await response.data.continents
      
      setListContinents(data)
    }
    catch(error){
      console.log('error')
    }
  }

  useEffect(()=>{
    setList()
  },[])
  
  return (
    <>
      <Header />
      <Banner />
      <SectionTypes />
      <CallToAction />
      {listContinents.length
        ?
        <Carousel listContinents={listContinents} />
        :
        <Spinner margin='auto' />
      }
    </>
  )
}