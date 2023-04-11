import {
    Input as DefaultInput,
    InputProps as DefaultInputProps,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    InputLeftElement,
    InputRightElement,
    InputGroup
} from "@chakra-ui/react";
import { ReactNode, forwardRef } from "react";

export interface InputProps extends DefaultInputProps {
    label?: string,
    helper?: string,
    error?: string,
    inputLeftElement?: ReactNode,
    inputRightElement?: ReactNode
};

export const Input = forwardRef<HTMLInputElement, InputProps>((
    { label, helper, error, inputLeftElement, inputRightElement, isRequired, ...props }, ref
) => {
    return (
        <FormControl
            isRequired={isRequired}
            isInvalid={Boolean(error)}
        >
            <FormLabel
                color="primary"
                textTransform="uppercase"
                fontFamily="Space Grotesk"
                fontSize={12}
            >{label}</FormLabel>
            <InputGroup>
                {!!inputLeftElement && (
                    <InputLeftElement>{inputLeftElement}</InputLeftElement>
                )}
                <DefaultInput
                    ref={ref}
                    fontFamily="Space Grotesk"
                    size="lg"
                    fontWeight={500}
                    color="primary"
                    focusBorderColor="#21092F"
                    border="1px solid #DEDDDF"
                    {...props}
                />
                {!!inputRightElement && (
                    <InputRightElement>{inputRightElement}</InputRightElement>
                )}
            </InputGroup>
            {!!helper && (
                <FormHelperText>{helper}</FormHelperText>
            )}
            {!!error && (
                <FormErrorMessage>{error}</FormErrorMessage>
            )}
        </FormControl>
    );
});

Input.displayName = "Input";