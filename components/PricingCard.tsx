import { Box, Button, Center, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, InfoIcon } from "@chakra-ui/icons";

export type ListItem = {
  type: "info" | "pro" | "con";
  text: string;
};

export type PricingCardParams = {
  price: number;
  name: string;
  recommend?: boolean;
  details: ListItem[];
};

export default function PricingCard({ details, price, name, recommend = false }: PricingCardParams) {
  const padding = recommend ? 6 : 3;
  return (
    <Box
      zIndex={recommend ? 1 : 0}
      mx={recommend ? -4 : 0}
      my={8}
      maxW={"400px"}
      w={"full"}
      bg={"white"}
      boxShadow={recommend ? "2xl" : "xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Stack textAlign={"center"} p={padding} color={"gray.800"} align={"center"}>
        <Text
          fontSize={"md"}
          fontWeight={500}
          bg={recommend ? "purple.50" : "purple.50"}
          p={2}
          px={3}
          color={"purple.500"}
          rounded={"full"}
        >
          {name}
        </Text>
        <Stack direction={"row"} align={"flex-start"} justify={"center"}>
          <Text fontSize={"3xl"} mt={4}>
            $
          </Text>
          <Text
            fontSize={recommend ? "7xl" : "6xl"}
            fontWeight={800}
            color={recommend ? "purple.900" : "purple.700"}
          >
            {price}
          </Text>
        </Stack>
      </Stack>

      <Box bg={"gray.50"} px={8} py={padding + 4}>
        <List spacing={3}>
          {details.map((detail) => {
            const defaultParams = {
              key: JSON.stringify(detail),
              fontSize: recommend ? "lg" : "sm",
            };
            if (detail.type === "info")
              return (
                <ListItem {...defaultParams}>
                  <ListIcon as={InfoIcon} color="blue.400" />
                  {detail.text}
                </ListItem>
              );

            if (detail.type === "pro")
              return (
                <ListItem {...defaultParams}>
                  <ListIcon as={CheckIcon} color="green.400" />
                  {detail.text}
                </ListItem>
              );

            return (
              <ListItem {...defaultParams}>
                <ListIcon as={CloseIcon} color="red.400" />
                {detail.text}
              </ListItem>
            );
          })}
        </List>

        <Button variant={recommend ? "solid" : "outline"} mt={10} w={"full"} colorScheme={"purple"}>
          Register
        </Button>
      </Box>
    </Box>
  );
}
