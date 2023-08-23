import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card overflow={"hidden"} borderRadius={20} >
        <Skeleton height={"200px"} />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
    )
}

export default GameCardSkeleton