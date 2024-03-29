import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/game1.jpg';
import ColorModeSwitch from './ColorModeSwitch';

const navBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' borderRadius={15}></Image>
        <ColorModeSwitch />
    </HStack>
  )
}

export default navBar