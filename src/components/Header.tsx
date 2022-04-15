import { Flex, Img } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps{
  isContinentPage?: boolean;
}

export function Header({isContinentPage}:HeaderProps){
  return(
    <Flex as='header' alignItems='center' justify='center' py='6' maxW={1440} margin='auto' position='relative'>
      {isContinentPage && (
        <Link href='/' >
          <Img src="/images/back-button.png" marginRight='auto' position='absolute' right="90%" cursor='pointer' />
        </Link>
      )}
      <Img src="/images/logo.svg"/>
    </Flex>
  )
}