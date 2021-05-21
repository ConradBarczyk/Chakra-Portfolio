import React from 'react';
import {useState} from 'react';
import {Switch, Flex, Button, IconButton, useColorMode, Image, useColorModeValue } from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import blackLogo from '../assets/images/CB-logo.png';
import whiteLogo from '../assets/images/CB-whitelogo.png';


const Header = ():JSX.Element => {
    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === 'dark'
		const [display,changeDisplay] = useState('none');
		const [isOpen,changeIsOpen] = useState(false);
		

		const drawerOpener =():void =>{
			changeDisplay('flex');
			changeIsOpen(true);
			console.log(colorMode)
		}
		const drawerCloser=():void =>{
			changeDisplay('none');
			changeIsOpen(false);
		}

    return(
        <Flex
					bg={useColorModeValue('white', 'gray.800')}
					color={useColorModeValue('gray.600', 'white')}
					minH={'80px'}
					minW='100%'
					borderBottom={1}
					borderStyle={'solid'}
					borderColor={useColorModeValue('gray.200', 'gray.900')}
					mb='8'
					justify="flex-start"
					as='nav'
					pos='fixed'
					top='0'
					opacity='.95'
				>
					<Flex
					pos="fixed"
					top='1rem'
					left='1rem'
					align='center'
					justify="flex-start"
					>
						<Image
							boxSize="50px"
							objectFit='cover'
							src={isDark ? whiteLogo : blackLogo}
							alt='logo'
							href='/'
						/>
					</Flex>
					<Flex
						pos="fixed"
						top='1rem'
						right='1rem'
						align='center'
					>
						<Flex
							display={['none','none','flex','flex']}
						>
							<Button href='/'
							as='a'
							variant='ghost'
							aria-label='Home'
							my='5'
							w='100%'
							>
								Home
							</Button>
							<Button href='/about'
							as='a'
							variant='ghost'
							aria-label='Home'
							my='5'
							w='100%'
							>
								About
							</Button>
							<Button href='/resume'
							as='a'
							variant='ghost'
							aria-label='Home'
							my='5'
							w='100%'
							>
								Resume
							</Button>
							<Button href='/contact'
							as='a'
							variant='ghost'
							aria-label='Home'
							my='5'
							w='100%'
							>
								Contact
							</Button>
						</Flex>
						{isOpen ? <> </> :  <>
						<IconButton
							aria-label='Open Menu'
							size='lg'
							mr={2}
							icon={<HamburgerIcon/>}
							display={['flex','flex','none','none']}
							onClick={() => drawerOpener()}

						/>
						<Switch
						color='green'
						isChecked={isDark}
						onChange={toggleColorMode}
          />
					</> 
						}
					<Flex
						w='100vw'
						zIndex={20}
						h='100vh'
						pos='fixed'
						top='0'
						left='0'
						overflow='auto'
						flexDir="column"
						bgColor='gray.50'
						display={display}
					>
						<Flex justify='flex-end'>
							<IconButton 
								mt={2}
								mr={2}
								aria-label='Close Menu'
								size='lg'
								icon={
									<CloseIcon />
								}
								onClick={() => drawerCloser()}
							/>
							<Flex
								align='center'
							>
								<Switch
								color='green'
								isChecked={isDark}
								onChange={toggleColorMode}
							/>
							</Flex>
						</Flex>
						<Flex
							dir='column'
							align='center'
						>
							<Button href='/'
							as='a'
							variant='ghost'
							aria-label='Home'
							my='5'
							w='100%'
							textColor='black'
							>
								Home
							</Button>
							<Button href='/about'
							as='a'
							variant='ghost'
							aria-label='Home'
							my='5'
							w='100%'
							textColor='black'
							>
								About
							</Button>
							<Button href='/resume'
							as='a'
							variant='ghost'
							aria-label='Home'
							my='5'
							w='100%'
							textColor='black'
							>
								Resume
							</Button>
							<Button href='/contact'
							as='a'
							variant='ghost'
							aria-label='Home'
							my='5'
							w='100%'
							textColor='black'
							>
								Contact
							</Button>
						</Flex>
						</Flex>
					</Flex>
        </Flex>
    );
}

export default Header;