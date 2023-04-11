import {
    Button as DefaultButton,
    ButtonProps as DefaultButtonProps
} from "@chakra-ui/react";

export interface ButtonProps extends DefaultButtonProps { };

export const Button = ({ ...props }: ButtonProps) => {
    return (
        <DefaultButton
            {...props}
            color="white"
            fontFamily="Space Grotesk"
            size="lg"
            background="primary"
            _hover={{
                background: "primary-hover"
            }}
        />
    );
};