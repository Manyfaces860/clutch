import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearchText : (SearchText: string) => void;
}

const SearchInput = ({ onSearchText } : Props) => {

    const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearchText(ref.current.value);
    }}>
        <InputGroup>
        <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            variant={"filled"}
            placeholder="Search on..."
            borderRadius={20}
          ></Input>
        </InputGroup>
    </form>
  );
};

export default SearchInput;
