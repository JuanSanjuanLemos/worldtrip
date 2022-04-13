import { Box, Flex, Img, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      width="100%"
      px={["4", "8"]}
      bgImg="/images/background.png"
      bgSize='cover'
      bgRepeat="no-repeat"
      justify="space-between"
    >
      <Box
        maxW={1160}
        margin="auto"
        flex="1"
        display="flex"
        justifyContent="space-between"
      >
        <Flex direction="column" pt="80px" pb="69px">
          <Text
            fontWeight="medium"
            color="gray.50"
            fontSize={36}
            lineHeight="54px"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text
            fontWeight="normal"
            color="gray.100"
            fontSize={20}
            lineHeight="30px"
            maxWidth={540}
            mt="5"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        {isWideVersion && <Img src="/images/airplane.png" transform="translateY(40px)" />}
      </Box>
    </Flex>
  );
}
