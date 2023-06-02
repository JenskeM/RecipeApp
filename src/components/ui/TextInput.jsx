import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      variant={"filled"}
      focusBorderColor="blue.400"
      _focus={{ background: "white" }}
      fontSize={"sm"}
      color="blue.400"
      fontStyle={"italic"}
      placeholder="Please, put your search right here"
      _placeholder={{ color: "gray.400" }}
      _hover={{ background: "#dbecc9" }}
      onChange={changeFn}
      {...props}
    ></Input>
  );
};
