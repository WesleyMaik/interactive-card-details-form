import { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/style/theme";

export interface ProvidersProps extends PropsWithChildren { };

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
};