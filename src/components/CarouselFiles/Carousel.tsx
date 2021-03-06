import Link from "next/link";
import { Container, Img, Text} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./style.module.css";
import { ReactNode } from "react";

type Continent = {
  id: string;
  name: string;
  title: string;
  link: string;
  carouselUrl: string;
}

type CarouselProps = {
  listContinents: Continent[]
}

SwiperCore.use([Navigation, Pagination]);

export function Carousel({listContinents}:CarouselProps) {
  const slides:ReactNode[] =[];
  listContinents.map(continent => {
    slides.push(
      <SwiperSlide key={`slide-${continent.name}`} tag="li">
        <Link href={`/continent/${continent.link}`} passHref>
          <a>
            <Img src={continent.carouselUrl} alt={continent.name} w="100%" h="100%" objectFit="cover" />
            <Container top='50%' left='50%' transform='translateY(-50%) translateX(-50%)' position='absolute' textAlign='center'>
              <Text as='h1' fontSize={["24px", "32px","48px"]} fontWeight='bold' color='gray.50' lineHeight={1.5}>{continent.name}</Text>
              <Text as='h2' fontSize={["14px", "18px", "24px"]} fontWeight='bold' color='gray.100' lineHeight={1.5}>{continent.title}</Text>
            </Container>
          </a>
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
      keyboard={true}
      autoplay= {true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
    >
      {slides}
    </Swiper>
  );
}
