import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Center } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout, FcAddImage, FcDatabase, FcGrid, FcFilledFilter } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100' justify='space-between'>
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>ShelterHub</Link>
    </Box>
    <Spacer />
    
          <Link href='/' passHref>
            <Box  p='2.5' display='flex' alignItems='center' fontWeight='semibold' cursor='pointer'><FcHome />Home</Box>
          </Link>
          <Link href='/search' passHref>
            <Box p='2.5' display='flex' alignItems='center' fontWeight='semibold' cursor='pointer'><FcFilledFilter />Filters</Box>
          </Link>
          
          <Link href='/search?purpose=for-rent' passHref>
            <Box p='2.5' display='flex' alignItems='center' fontWeight='semibold' cursor='pointer'><FcAbout />Suggestions</Box>
          </Link>
        
  </Flex>
);

export default Navbar;
