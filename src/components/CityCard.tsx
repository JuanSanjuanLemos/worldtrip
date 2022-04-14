import { Avatar, Box, Flex, Img, Text } from "@chakra-ui/react";

type CityCardProps = {
  name: string;
  cityImageUrl: string;
  country: string;
  countryFlagUrl: string;
};


export default function CityCard({name, cityImageUrl, country, countryFlagUrl}: CityCardProps){
  return(
    <Box as='article' overflow='hidden' borderRadius='6px' width='256px' margin='auto'>
      <Img src={cityImageUrl} w='100%' maxH='173px' objectFit='cover' alt={name} />
        <Flex justifyContent='space-between' alignItems='center' p='24px' border='1px' borderColor='yellow.300'>
          <Box>
            <Text as='h2' color='gray.900' fontSize={20}  fontWeight='semibold' lineHeight='25px'>
              {name}
            </Text>
            <Text as='h3' color='gray.600' fontSize={16} fontWeight='medium' lineHeight='26px'>
              {country}
            </Text>
          </Box>
            <Avatar size='sm' name={name} src={countryFlagUrl} />
        </Flex>
    </Box>
  )
}