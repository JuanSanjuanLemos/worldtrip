import { QuestionIcon, WarningIcon } from "@chakra-ui/icons";
import { AlertIcon, Box, Flex, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";

interface BoxDataProps {
  value: number;
  text: string;
  is100?: boolean;
}

export function BoxData({ value, text, is100 }: BoxDataProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box textAlign="center">
      <Text
        as="h1"
        color="yellow.600"
        fontWeight="semibold"
        fontSize={["24px", "36px", "48px"]}
        lineHeight={1.5}
      >
        {value}
      </Text>
      <Flex align='center' gap='8px'>
        <Text
          as="h2"
          color="gray.900"
          fontWeight={["semibold", "normal"]}
          fontSize={["18px", "24px"]}
          lineHeight={1.5}
          textAlign='center'
        >
          {text}
        </Text>
        {is100 && isWideVersion &&(
          <Tooltip label={`Esse continente possui ${value} cidades do top 100 cidades mais
          visitadas do mundo!`}>
          <WarningIcon outlineColor='gray.100' fontSize={[14,18]} color='gray.100' cursor='pointer' />
          </Tooltip>
        )
        }
      </Flex>
    </Box>
  );
}
