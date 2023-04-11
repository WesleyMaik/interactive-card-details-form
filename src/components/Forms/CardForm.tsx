import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import {
    Stack,
    type StackProps,
    HStack,
    Text
} from "@chakra-ui/react";

export interface CardFormProps extends StackProps { };

export const CardForm = ({ ...props }: CardFormProps) => {
    return (
        <Stack
            as="form"
            method="POST"
            action="#"
            {...props}
            spacing={8}
        >
            <Input
                label="Cardholder Name"
                placeholder="e.g Jane Appleseed"
            />
            <Input
                label="Card Number"
                placeholder="e.g 1234 5678 9123 0000"
            />
            <HStack
                alignItems="center"
            >
                <Stack
                    spacing={0}
                >
                    <Text
                        color="primary"
                        fontFamily="Space Grotesk"
                        fontWeight="medium"
                        fontSize={12}
                    >EXP. DATE (MM/YY)</Text>
                    <HStack>
                        <Input
                            placeholder="MM"
                            maxWidth={32}
                        />
                        <Input
                            placeholder="YY"
                            maxWidth={32}
                        />
                    </HStack>
                </Stack>
                <Input
                    label="CVC"
                    placeholder="e.g. 123"
                />
            </HStack>
            <Button>Confirm</Button>
        </Stack>
    );
};