import { Box, Text } from "@chakra-ui/react";

export function CallToAction() {
  return (
    <Text
      fontWeight="medium"
      position='relative'
      fontSize="36px"
      lineHeight="54px"
      textAlign="center"
      color="gray.900"
      mt={132}

      _before={{
        content: '""',
        position: "absolute",
        top:'-50px',
        left:'calc(50% - 45px)',
        bgColor: 'gray.900',
        width: '90px',
        height: '2px'
      }}
    >
      Vamos nessa?
      <br />
      Então escolha seu continente
    </Text>
  );
}
