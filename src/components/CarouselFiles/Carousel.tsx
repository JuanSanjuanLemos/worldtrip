import { Container, Img, Text, Link as ChakraLink } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./style.module.css";
import { ReactNode } from "react";
import { useListContinents } from "../../contexts/listContinentsContext";
import Link from "next/link";


type Continent = {
  id: string;
  name: string;
  title: string;
  link: string;
  carouselUrl: string;
}

type CarouselProps = {
  continents: Continent[]
}

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  const slides:ReactNode[] =[];
  const listContinents = useListContinents();
  listContinents.map(continent => {
    slides.push(
      <SwiperSlide key={`slide-${continent.name}`} tag="li">
        <Link href={`/continent/${continent.link}`} passHref>
          <ChakraLink
                position="relative"
                display="block"
                _before={{
                  position: 'absolute',
                  content: '""',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  width: '100%',
                  height: '100%',
                  bg: '#1C140159'
                }}
              >
            <Img src={continent.carouselUrl} alt={continent.name} w="100%" h="100%" objectFit="cover" />
            <Container top='50%' left='50%' transform='translateY(-50%) translateX(-50%)' position='absolute' textAlign='center'>
              <Text as='h1' fontSize={["24px", "32px","48px"]} fontWeight='bold' color='gray.50' lineHeight={1.5}>{continent.name}</Text>
              <Text as='h2' fontSize={["14px", "18px", "24px"]} fontWeight='bold' color='gray.100' lineHeight={1.5}>{continent.title}</Text>
            </Container>
          </ChakraLink>
        </Link>
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
      loop={true}
      mousewheel={true}
      autoplay= {true}
      modules= {[Autoplay]}
    >
      {slides}
    </Swiper>
  );
}
