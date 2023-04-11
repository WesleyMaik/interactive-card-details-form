import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import {
    Stack,
    type StackProps,
    HStack,
    Text
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const cardFormSchema = z.object({
    name: z.string().nonempty({ message: "Can't be blank" }),
    number: z.string()
        .nonempty({ message: "Can't be blank" })
        .min(16, { message: "Must have at least 16 numbers" })
        .max(16, { message: "Maximum 16 numbers" })
        .regex(/(\d{4}\s){3}\d{4}/),
    date: z.object({
        month: z.string().nonempty({ message: "Can't be blank" }),
        year: z.string().nonempty({ message: "Can't be blank" })
    }),
    cvc: z
        .string()
        .nonempty({ message: "Can't be blank" })
        .min(3, "Min 3")
        .max(4)
});

type CardFormSchema = z.infer<typeof cardFormSchema>;

export interface CardFormProps extends StackProps { };

export const CardForm = ({ ...props }: CardFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<CardFormSchema>({
        resolver: zodResolver(cardFormSchema)
    });

    const handleSubmitForm = (data: CardFormSchema) => {
        return;
    };

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
                error={errors.name?.message}
                {...register("name")}
            />
            <Input
                label="Card Number"
                placeholder="e.g 1234 5678 9123 0000"
                error={errors.number?.message}
                {...register("number")}
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
                            error={errors.date?.month?.message}
                            {...register("date.month")}
                        />
                        <Input
                            placeholder="YY"
                            maxWidth={32}
                            error={errors.date?.year?.message}
                            {...register("date.year")}
                        />
                    </HStack>
                </Stack>
                <Input
                    label="CVC"
                    placeholder="e.g. 123"
                    error={errors.cvc?.message}
                    {...register("cvc")}
                />
            </HStack>
            <Button
                onClick={handleSubmit(handleSubmitForm)}
            >Confirm</Button>
        </Stack>
    );
};