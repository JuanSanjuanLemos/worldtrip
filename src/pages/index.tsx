import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { SectionTypes } from '../components/SectionTypes/SectionTypes';
import { CallToAction } from '../components/CallToAction';
import { Carousel } from '../components/CarouselFiles/Carousel';

export default function Home(){
  return (
    <>
      <Header />
      <Banner />
      <SectionTypes />
      <CallToAction />
      <Carousel />
    </>
  )
}