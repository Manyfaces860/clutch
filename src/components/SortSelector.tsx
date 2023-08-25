import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
    onSelectedSortOrder : (order : string) => void ;
    appliedSorter : string; // appliedsorter value can be sortingv[0].value
}

const SortSelector = ({ onSelectedSortOrder, appliedSorter }: Props) => {
    const sortingv = [
        {value : '', label : 'Relevance'},
        {value : '-added', label : 'Date added'},
        {value : 'name', label : 'Name'},
        {value : '-release', label : 'Release date'},
        {value : 'metacritic', label : 'Popularity'},
        {value : '-rating', label : 'Average Rating'}
    ]

    const selectedSorter = sortingv.find((Object) => appliedSorter === Object.value);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>} marginX={'10px'}>
                Order by: {selectedSorter?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortingv.map((object) => (<MenuItem onClick={() => onSelectedSortOrder(object.value)} value={object.value} key={object.value} >{object.label}</MenuItem>))}
            </MenuList>
        </Menu>
      )
}

export default SortSelector