import { Box, Text } from "@chakra-ui/react";

interface BoxDataProps{
  value:number;
  text:string
}

export function BoxData({value, text}: BoxDataProps) {
  return (
    <Box textAlign='center'>
      <Text as="h1" color="yellow.600" fontWeight='semibold' fontSize={['24px', '36px', '48px']} lineHeight={1.5}>
        {value}
      </Text>
      <Text as="h2" color="gray.900" fontWeight={['semibold', 'normal']} fontSize={['18px', '24px']} lineHeight={1.5}>
        {text}
      </Text>
    </Box>
  );
}
