import type { NextPage } from 'next';
import { Header } from '../src/components/Header';
import { Banner } from '../src/components/Banner';
import { SectionTypes } from '../src/components/SectionTypes/SectionTypes';
import { CallToAction } from '../src/components/CallToAction';
import { Carousel } from '../src/components/Carousel/Carousel';

const Home: NextPage = () => {
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

export default Home
