import { Stack, type StackProps, Text, Image } from "@chakra-ui/react";
import { backCard } from "@/utils/constants";

export interface BackProps extends StackProps {
    cvv: string
};

export const Back = ({
    cvv = "000",
    ...props
}: BackProps) => {
    return (
        <Stack
            width="fit-content"
            position="relative"
            overflow="hidden"
            {...props}
        >
            <Image
                src={backCard}
                alt="Front Card"
                maxWidth={["300px", "max-content"]}
                width="full"
            />
            <Stack
                width="full"
                height="full"
                justifyContent="center"
                alignItems="flex-end"
                position="absolute"
                color="white"
                padding="3.5rem"
                left={0}
            >
                <Text
                    fontWeight="bold"
                    fontFamily="Space Grotesk"
                    marginTop={-5}
                >{cvv}</Text>
            </Stack>
        </Stack>
    );
};