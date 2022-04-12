import { Container, Img, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./style.module.css";
import { ReactNode, useEffect, useState } from "react";
import { makeServer } from "../../services/miragejs";
import { api } from "../../services/api";

interface Continent{
  name:string;
  url:string;
  description:string;
}

makeServer();

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  const [listContinents,setListContinents] = useState<Continent[]>([]);
  const slides:ReactNode[] =[];
  useEffect(() =>{
    api.get('/continentsData')
    .then(response => setListContinents(response.data))
  },[])
  listContinents.map(continent => {
    slides.push(
      <SwiperSlide key={`slide-${continent.name}`} tag="li">
        <Img src={continent.url} w="100%" h="100%" objectFit="cover" />
        <Container top='50%' left='50%' transform='translateY(-50%) translateX(-50%)' position='absolute' textAlign='center'>
          <Text as='h1' fontSize={["24px", "32px","48px"]} fontWeight='bold' color='gray.50' lineHeight={1.5}>{continent.name}</Text>
          <Text as='h2' fontSize={["14px", "18px", "24px"]} fontWeight='bold' color='gray.100' lineHeight={1.5}>{continent.description}</Text>
        </Container>
      </SwiperSlide>
    );
  })

  return (
    <Swiper
      className={styles.carousel}
      tag="section"
      wrapperTag="ul"
      navigation
      pagination={{ clickable: true }}
      spaceBetween={12}
      color='yellow'
    >
      {slides}
    </Swiper>
  );
}
