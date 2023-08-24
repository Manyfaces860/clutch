import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformList = () => {
    const {data ,error} = usePlatforms();

    if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} margin={'10px'}>Platforms</MenuButton>
        <MenuList>
            {data.map(p => <MenuItem key={p.name}>{p.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformList