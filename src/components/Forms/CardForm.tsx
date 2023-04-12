import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import {
    Stack,
    type StackProps,
    HStack,
    Text,
    Image,
    Heading
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react";
import { completed } from "@/utils/constants";

const cardFormSchema = z.object({
    name: z.string()
        .trim()
        .nonempty({ message: "Can't be blank" })
        .regex(/\D/, "Can't be numbers"),
    number: z.string()
        .trim()
        .nonempty({ message: "Can't be blank" })
        .min(19, { message: "Must have at least 16 numbers" })
        .max(19, { message: "Maximum 16 numbers" })
        .regex(/(\d{4}\s){3}\d{4}/),
    date: z.object({
        month: z.string()
            .trim()
            .min(2, "Min 2")
            .max(2, "Max 2")
            .refine((value) => (Number(value) < 13 && Number(value) > 0), "Invalid month"),
        year: z.string()
            .trim()
            .nonempty({ message: "Can't be blank" })
            .min(2, "Min 2")
            .max(2, "Max 2")
    }),
    cvc: z
        .string()
        .trim()
        .nonempty({ message: "Can't be blank" })
        .min(3, "Min 3")
        .max(4, "Max 4")
});

export type CardFormSchema = z.infer<typeof cardFormSchema>;

export interface CardFormProps extends StackProps { 
    onChangeData?:(data:CardFormSchema) => void;
};

export const CardForm = ({ onChangeData, ...props }: CardFormProps) => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<CardFormSchema>({
        resolver: zodResolver(cardFormSchema)
    });

    const dateError = errors.date;

    const [isSent, setIsSent] = useState(false);

    const handleSubmitForm = (data: CardFormSchema) => {
        reset();
        setIsSent(true);
    };

    useEffect(() => {
        if(onChangeData && Object.keys(watch()).length > 0) {
            onChangeData(watch())
        };
    }, [watch()]);

    if(isSent){
        const handleContinue = () => setIsSent(false);

        return(
            <Stack
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                <Image 
                    src={completed}
                    width={24}
                />
                <Heading
                    color="primary"
                    fontFamily="Space Grotesk"
                >Thank You!</Heading>
                <Text
                    fontFamily="Space Grotesk"
                    fontWeight={500}
                    color="gray.500"
                >We've added your card details</Text>
                <Button
                    width="full"
                    onClick={handleContinue}
                >Continue</Button>
            </Stack>
        );
    };

    return (
        <Stack
            as="form"
            method="POST"
            action="#"
            spacing={8}
            {...props}
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
                format="#### #### #### ####"
                error={errors.number?.message}
                {...register("number")}
            />
            <HStack
                alignItems="baseline"
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
                            error={dateError?.month?.message}
                            format="##"
                            hiddenErrorMessage
                            {...register("date.month")}
                        />
                        <Input
                            placeholder="YY"
                            maxWidth={32}
                            error={dateError?.year?.message}
                            format="##"
                            hiddenErrorMessage
                            {...register("date.year")}
                        />
                    </HStack>
                    {(!!dateError?.month?.message || !!dateError?.year?.message) && (
                        <Text
                            color="red.500"
                            fontFamily="body"
                            fontSize="sm"
                            style={{
                                marginTop:".5rem",
                                lineHeight:"normal"
                            }}
                        >{dateError?.month?.message || dateError?.year?.message}</Text>
                    )}
                </Stack>
                <Input
                    label="CVC"
                    placeholder="e.g. 123"
                    error={errors.cvc?.message}
                    format="####"
                    {...register("cvc")}
                />
            </HStack>
            <Button
                onClick={handleSubmit(handleSubmitForm)}
            >Confirm</Button>
        </Stack>
    );
};