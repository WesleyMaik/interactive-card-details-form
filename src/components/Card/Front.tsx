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
    number: string,
    name: string,
    date: Date
};

type Date = {
    month: string,
    year: string
};

export const Front = ({
    number,
    date: { month = "00", year = "00" },
    name,
    ...props
}: FrontProps) => {
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
                >{number || "0000 0000 0000 0000"}</Heading>
                <HStack
                    width="full"
                    alignItems="center"
                    fontWeight="bold"
                    textTransform="uppercase"
                >
                    <Text
                        fontFamily="Space Grotesk"
                    >{name || "jane appleseed"}</Text>
                    <Spacer />
                    <Text
                        fontFamily="Space Grotesk"
                    >{month || "00"}/{year || "00"}</Text>
                </HStack> 
            </Stack>
        </Stack>
    );
};