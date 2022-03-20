import React from "react"
import { Flex, Heading, Link, Stack } from "@chakra-ui/react"
import SocialMediaIcons from "./SocialMediaIcons"

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
				<Link _hover={{textDecoration:"none"}} href="/">
					<Heading 
						fontSize="xl">PABLO</Heading>
				</Link>
				<Link _hover={{textDecoration:"none"}} href="/">Home</Link>
			</Stack>
			<SocialMediaIcons />
		</Flex>
	)
}
export default Navbar