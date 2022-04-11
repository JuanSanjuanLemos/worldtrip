import { Flex } from "@chakra-ui/react";
import { Type } from "./Type";

export function SectionTypes(){
  return(
    <Flex as='section' flexWrap='wrap' justify='space-between' flex="1" mx='auto' maxW={1160} px={["4", "8",'0']} gap='80px' mt='100px'>
      <Type imgUrl="/cocktail.png" title="vida noturna"/>
      <Type imgUrl="/surf.png" title="praia"/>
      <Type imgUrl="/building.png" title="moderno"/>
      <Type imgUrl="/museum.png" title="clássico"/>
      <Type imgUrl="/earth.png" title="e mais..."/>
    </Flex>
  )
}