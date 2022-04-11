import { Box, Img, Text } from "@chakra-ui/react";

interface TypeProps{
  title: string;
  imgUrl: string;
}

export function Type({title, imgUrl}:TypeProps){
  return(
    <Box as='article' display='flex' flexDir='column' alignItems='center'>
      <Img src={imgUrl} />
      <Text color='gray.900' fontSize='24px' fontWeight='semibold' mt='6'>
        {title}
      </Text>
    </Box>
  )
}