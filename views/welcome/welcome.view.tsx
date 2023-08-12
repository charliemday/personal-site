import { Stack, Heading, Text, Container } from "@chakra-ui/react";
import { FC } from "react";

interface Props {}

export const WelcomeView: FC<Props> = () => (
  <Container>
    <Stack>
      <Heading>{`Hi, I'm Charlie`}</Heading>
      <Text>{`I currently working in startups`}</Text>
    </Stack>
  </Container>
);
