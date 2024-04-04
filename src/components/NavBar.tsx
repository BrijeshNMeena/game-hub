import { HStack, Image, Input } from '@chakra-ui/react';
import logo from '../assets/game1.jpg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch : (searchText: string) => void;
}

const navBar = ({onSearch} : Props) => {
  return (
    <HStack padding='15px' paddingLeft='20px' spacing={5}>
        <Image src={logo} boxSize='60px' borderRadius={15}></Image>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
}

export default navBar