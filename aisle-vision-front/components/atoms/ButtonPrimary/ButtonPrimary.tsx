import { Button, ButtonProps } from "@chakra-ui/react";

const ButtonPrimary = (props: ButtonProps) => {
  return (
  <Button
      height="48px"
          width={{ base: "120%", md: "350px" }}
      borderRadius="2xl"
      background="linear-gradient(to bottom right, #C8B381, #A99263)"
      fontWeight="light"
      color="white"
      fontSize="3xl"
      fontFamily="var(--font-inter)"
      _hover={{ 
        background: "linear-gradient(to bottom right, #b8a371, #998253)" 
      }}
      {...props}
    />
  )
}

export default ButtonPrimary