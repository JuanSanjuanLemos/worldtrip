import { Flex, Img } from "@chakra-ui/react";

export function Header(){
  return(
    <Flex as='header' justify='center' py='6'>
      <Img src="/images/logo.svg"/>
    </Flex>
  )
}