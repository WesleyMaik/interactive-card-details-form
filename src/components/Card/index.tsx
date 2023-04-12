import { Stack } from "@chakra-ui/react";

import { Back, type BackProps } from "./Back";
import { Front, type FrontProps } from "./Front";
import { forwardRef, useImperativeHandle, useState } from "react";
import { CardFormSchema } from "../Forms/CardForm";

export type CardProps = Partial<BackProps & FrontProps>;
export interface CardRef {
    handleSetData: (data:CardFormSchema) => void
};

export const Card = forwardRef<CardRef, CardProps>((props, ref) => {
    const [data, setData] = useState<CardFormSchema>({
        cvc: "000",
        date: {
            month: "00",
            year: "00"
        },
        name: "Jane Appleseed",
        number: "0000000000000000"
    });

    const {cvc, date, name, number} = data;

    useImperativeHandle(ref, () => ({
        handleSetData: setData
    }));

    return (
        <Stack
            id="card"
            width="full"
            maxWidth={["320px", "527px"]}
            alignItems="center"
            direction={["column", "column-reverse"]}
            spacing={10}
        >
            <Back
                cvc={cvc}
                style={{
                    marginLeft: "auto"
                }}
            />
            <Front
                number={number}
                name={name}
                date={date}
                transform={[
                    "translateY(-4.2rem)",
                    "translateY(0)"
                ]}
                style={{
                    marginRight: "auto"
                }}
            />
        </Stack>
    );
});

export { Back, type BackProps } from "./Back";
export { Front, type FrontProps } from "./Front";