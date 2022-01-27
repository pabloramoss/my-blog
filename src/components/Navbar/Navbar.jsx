import React from "react"
import { Flex, Heading, Link, Stack, Icon } from "@chakra-ui/react"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import config from "../../website-config"

const Navbar = ()=> {

	//Crear un componente el cual se le pase como prop el componente del icono pero no se como hacerlo (todavía, 27 Enero 2022)
	return(
		<Flex 
			justifyContent="space-around" 
			bg="black" 
			py={5} 
			color="gray.300" >
			<Stack 
				direction="row" 
				alignItems="center" 
				gap={5}>
				<Link>
					<Heading 
						fontSize="xl">PABLO</Heading>
				</Link>
				<Link>Home</Link>
			</Stack>
			<Stack 
				direction="row" 
				alignItems="center" 
				gap={5}>
				<Link 
					href={config.linkedin} 
					isExternal>
					<Icon 
						width={8} 
						height={8} 
						_hover={{color:"gray.500"}}>
						<FaLinkedin ></FaLinkedin>
					</Icon>
				</Link>
				<Link 
					href={config.github} 
					isExternal>
					<Icon 
						width={8} 
						height={8} 
						_hover={{color:"gray.500"}}>
						<FaGithub></FaGithub>
					</Icon>
				</Link>
				<Link 
					href={config.twitter} 
					isExternal>
					<Icon 
						width={8} 
						height={8} 
						_hover={{color:"gray.500"}}>
						<FaTwitter></FaTwitter>
					</Icon>
				</Link>
			</Stack>
		</Flex>
	)
}
export default Navbar