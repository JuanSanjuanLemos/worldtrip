import { Container, Img, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./style.module.css";
import { ReactNode } from "react";

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  const slides: ReactNode[] = [];
  const listContinents = [
    {
      url: "/continent-europe.png",
      name: "Europa",
      description: "O continente mais antigo."
    },
    {
      url: "/continent-south-america.png",
      name: "América do Sul",
      description: "O continente Tropical."
    },
    {
      url: "/continent-north-america.png",
      name: "América do Norte",
      description: "It's America."
    },
    {
      url: "/continent-oceania.png",
      name: "Oceania",
      description: "A melhor qualidade de vida."
    },
    {
      url: "/continent-asia.png",
      name: "Ásia",
      description: "A primavera mais bonita do mundo"
    },
  ];

  listContinents.map(continent => {
    slides.push(
      <SwiperSlide key={`slide-${continent.name}`} tag="li">
        <Img src={continent.url} w="100%" h="100%" objectFit="cover" />
        <Container top='50%' left='50%' transform='translateY(-50%) translateX(-50%)' position='absolute' textAlign='center'>
          <Text as='h1' fontSize='48px' fontWeight='bold' color='gray.50' lineHeight='72px'>{continent.name}</Text>
          <Text as='h2' fontSize='24px' fontWeight='bold' color='gray.100' lineHeight='36px'>{continent.description}</Text>
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
