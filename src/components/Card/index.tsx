import { Stack } from "@chakra-ui/react";

import { Back, type BackProps } from "./Back";
import { Front, type FrontProps } from "./Front";

export type CardProps = BackProps & FrontProps;

export const Card = ({
    cardNumber,
    cvv,
    date,
    name
}: CardProps) => {
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
                cvv={cvv}
                style={{
                    marginLeft: "auto"
                }}
            />
            <Front
                cardNumber={cardNumber}
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
};

export { Back, type BackProps } from "./Back";
export { Front, type FrontProps } from "./Front";