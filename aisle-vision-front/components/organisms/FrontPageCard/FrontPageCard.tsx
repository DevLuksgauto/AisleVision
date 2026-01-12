import { VStack, Box, Text, Image } from "@chakra-ui/react";
import SearchField from "@/components/atoms/SearchField";
import PrimaryButton from '@/components/atoms/ButtonPrimary'


function FrontPageCard() {
    return (
<Box
      w="100%"
      maxW="700px"
      textAlign="center"
    >
        <VStack spaceY={8}>
           <Image 
              src="/logo.png" 
              alt="Aisle Vision Logo" 
              width={{ base: "120px", md: "300px" }}
              height="auto"
              objectFit="contain"
        />
        <SearchField />
        
        <PrimaryButton>
          Cadastrar Loja
        </PrimaryButton>
      </VStack>
    </Box>
    );
};

export default FrontPageCard;