import {
    Stack,
    type StackProps,
    HStack,
    Text,
    Heading,
    Image,
    Spacer
} from "@chakra-ui/react";
import { frontCard, brand } from "@/utils/constants";

export interface FrontProps extends StackProps {
    cardNumber: string,
    name: string,
    date: Date
};

type Date = {
    month: string,
    year: string
};

export const Front = ({
    cardNumber = "0000000000000000",
    date: { month = "00", year = "00" },
    name = "jane appleseed",
    ...props
}: FrontProps) => {
    const convertDigit = (valueAsString: string) => {
        return valueAsString
            .substring(0, 16)
            .split(/(\d{4})/)
            .join(" ");
    };

    return (
        <Stack
            width="fit-content"
            position="relative"
            overflow="hidden"
            {...props}
        >
            <Image
                src={frontCard}
                alt="Front Card"
                maxWidth={["300px", "max-content"]}
                width="full"
            />
            <Stack
                width="full"
                height="full"
                position="absolute"
                color="white"
                padding="1.6rem 2rem"
                left={0}
            >
                <Image
                    src={brand}
                    maxWidth={["48px", "75px"]}
                />
                <Spacer />
                <Heading
                    whiteSpace="nowrap"
                    fontSize={["1.1rem", "1.8rem"]}
                    fontFamily="Space Grotesk"
                    style={{
                        marginBottom: 14
                    }}
                >{convertDigit(cardNumber)}</Heading>
                <HStack
                    width="full"
                    alignItems="center"
                    fontWeight="bold"
                    textTransform="uppercase"
                >
                    <Text
                        fontFamily="Space Grotesk"
                    >{name}</Text>
                    <Spacer />
                    <Text
                        fontFamily="Space Grotesk"
                    >{month}/{year}</Text>
                </HStack>
            </Stack>
        </Stack>
    );
};