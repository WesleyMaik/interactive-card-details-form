//Modules
import { background, backgroundMobile } from "@/utils/constants";

//Components
import { Stack, Text } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { CardForm } from "@/components/Forms/CardForm";

export default function App() {
  return (
    <Stack
      direction={["column", "row"]}
      as="main"
      width="full"
      height="full"
      justifyContent={[
        "flex-start",
        "center"
      ]}
      alignItems="center"
      backgroundImage={[backgroundMobile, background]}
      backgroundRepeat="no-repeat"
      backgroundSize={[
        "100% 15rem",
        "33.5% 100%"
      ]}
      padding={8}
      spacing={["0", "32"]}
    >
      <Card
        name="Jane Appleseed"
        cardNumber="0000000000000000"
        cvv="000"
        date={{
          month: "00",
          year: "00"
        }}
      />
      <CardForm
        maxWidth="380"
      />
    </Stack>
  );
};