import { Flex, Text } from "@chakra-ui/react";
import { BoxData } from "./BoxData";

interface AboutContinentProps {
  description: string;
  mostVisitedCities: number;
  langagues: number;
  countries: number;
}

export function AboutContinent({
  description,
  mostVisitedCities,
  langagues,
  countries,
}: AboutContinentProps) {
  return (
    <Flex
      p={["15px", "60px"]}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      maxWidth={1440}
      margin="auto"
      gap="70px"
      flex='1'
      
    >
      <Text flex='1' maxW={600} textAlign='justify' fontSize={["14px", "16px"]} minWidth={300}  margin='auto'>{description}</Text>
      <Flex flex='1' w='100%' maxW={490} gap='3' justify="space-between" margin='auto'>
        <BoxData value={countries} text="países" />
        <BoxData value={langagues} text="línguas" />
        <BoxData value={mostVisitedCities} text="cidades +100" is100={true} />
      </Flex>
    </Flex>
  );
}
