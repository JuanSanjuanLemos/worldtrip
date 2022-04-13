import { List } from "@chakra-ui/react";
import { Type } from "./Type";

export function SectionTypes() {
  return (
    <List
      flexWrap="wrap"
      display="flex"
      justifyContent="center"
      flex="1"
      mx="auto"
      maxW={1160}
      px={["4", "8", "0"]}
      gap={["70px", "120", "151px"]}
      mt="100px"
    >
      <Type imgUrl="/images/cocktail.svg" title="vida noturna" />
      <Type imgUrl="/images/surf.svg" title="praia" />
      <Type imgUrl="/images/building.svg" title="moderno" />
      <Type imgUrl="/images/museum.svg" title="clássico" />
      <Type imgUrl="/images/earth.svg" title="e mais..." />
    </List>
  );
}
