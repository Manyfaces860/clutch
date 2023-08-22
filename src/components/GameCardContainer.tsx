import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Card width="300px" overflow={"hidden"} borderRadius={"10px"}>
      {children}
    </Card>
  );
};

export default GameCardContainer;
