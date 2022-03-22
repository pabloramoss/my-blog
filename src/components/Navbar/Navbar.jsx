import React from "react"
import { Flex, Heading, Stack } from "@chakra-ui/react"
import SocialMediaIcons from "./SocialMediaIcons"
import NextLink from "next/link"

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
				<NextLink _hover={{textDecoration:"none"}} href="/">
					<Heading _hover={{cursor: "pointer"}} fontSize="xl">PABLO</Heading>
				</NextLink>
				<NextLink _hover={{textDecoration:"none"}} href="/">Home</NextLink>
			</Stack>
			<SocialMediaIcons />
		</Flex>
	)
}
export default Navbar