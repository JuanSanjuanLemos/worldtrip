import { Box, Flex, Text } from "@chakra-ui/react";

interface BannerContinentProps {
  continentName: string;
  bannerUrl: string;
}

export function BannerContinent({
  continentName,
  bannerUrl,
}: BannerContinentProps) {
  return (
    <Flex
      bgImg={bannerUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      height={[150, 300, 400, 500]}
      maxW={1440}
      margin="auto"
      alignItems={['center', 'flex-end']}
      justify={['center', 'center', 'flex-start']}
      padding={["0", "0", "30"]}
    >
      <Text as="h1" fontSize={[28,36,48]} color="gray.50" fontWeight="semibold">
        {continentName}
      </Text>
    </Flex>
  );
}
