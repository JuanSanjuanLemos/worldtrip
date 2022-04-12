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
      <Type imgUrl="/cocktail.png" title="vida noturna" />
      <Type imgUrl="/surf.png" title="praia" />
      <Type imgUrl="/building.png" title="moderno" />
      <Type imgUrl="/museum.png" title="clássico" />
      <Type imgUrl="/earth.png" title="e mais..." />
    </List>
  );
}
