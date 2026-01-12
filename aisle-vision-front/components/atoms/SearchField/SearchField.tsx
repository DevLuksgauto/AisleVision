import { Input, InputGroup } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'

function SearchField() {
  return (
    <InputGroup 
      w={{ base: "140%", md: "612px" }} 
      startElement={<LuSearch color="#A99263" size={22}/>}
    >
      <Input
        color="#A99263"
        placeholder="Procurar Contatos"
        borderColor="#DCD2C7"
        borderRadius="2xl"
        bg="white"
        height={{ base: "48px", md: "50px" }}
        fontSize={{ base: "lg", md: "2xl" }}
        pl={{ base: "50px", md: "40px" }}
      />
    </InputGroup>
  );
};

export default SearchField;