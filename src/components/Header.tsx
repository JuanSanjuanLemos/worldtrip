import { Flex, Img } from "@chakra-ui/react";
import Link from "next/link";

export function Header(){
  return(
    <Flex as='header' alignItems='center' py='6' maxW={1440} margin='auto' paddingX={['5','32']}>
      <Link href='/'>
        <Img src="/images/back-button.png" marginRight='auto' />
      </Link>
      <Img src="/images/logo.svg" marginRight='calc(50% - 92px)'/>
    </Flex>
  )
}