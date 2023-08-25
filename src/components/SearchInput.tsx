import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch />} />
      <Input
        variant={"filled"}
        placeholder="Search on..."
        borderRadius={20}
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
