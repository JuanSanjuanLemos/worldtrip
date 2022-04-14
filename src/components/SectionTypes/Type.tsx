import {
  Icon,
  Img,
  ListItem,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface TypeProps {
  title: string;
  imgUrl: string;
}

export function Type({ title, imgUrl }: TypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <ListItem
      display="flex"
      flexDir={["row", "row", "row", "column"]}
      justifyContent="center"
      gap="6px"
      alignItems="center"
    >
      {isWideVersion ? (
        <Img src={imgUrl} />
      ) : (
        <Icon viewBox="0 0 200 200" boxSize="6" color="yellow.600">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
      )}

      <Text color="gray.900" fontSize="24px" fontWeight="semibold">
        {title}
      </Text>
    </ListItem>
  );
}
