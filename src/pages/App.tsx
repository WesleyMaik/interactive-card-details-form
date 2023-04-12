//Modules
import { useRef } from "react";
import { background, backgroundMobile } from "@/utils/constants";

//Components
import { Stack } from "@chakra-ui/react";
import { Card, CardRef } from "@/components/Card";
import { CardForm, CardFormSchema } from "@/components/Forms/CardForm";


export default function App() {
  const cardRef = useRef<CardRef>(null);
  const handleSetData = (data:CardFormSchema) => {
    cardRef.current?.handleSetData(data)
  };

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
        ref={cardRef}
      />
      <CardForm
        maxWidth="380"
        onChangeData={handleSetData}
      />
    </Stack>
  );
};