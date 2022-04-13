import { Box, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useListContinents } from "../contexts/listContinentsContext";

interface BannerContinentProps{
  continentName:string;
  bannerUrl: string;
}

export function BannerContinent({continentName, bannerUrl}:BannerContinentProps){
  return(
    <Box bgImg={bannerUrl} height={500} w="100%">
      <Text as='h1'>
        {continentName}
      </Text>
    </Box>
  )
}