import React from "react"
import { Flex, Link, Stack, Text } from "@chakra-ui/react"
import config from "../../website-config"
const Footer = ()=> {

	return(
		<Flex 
			justifyContent="space-around" 
			bg="black" 
			py={3} 
			color="gray.300" 
			position="bottom">
			<Stack 
			direction="row" 
			alignItems="center" 
			me={2}
			>
				<Text fontSize={10}>{config.title}</Text>
				<Link _hover={{textDecoration:"none"}} href="/">Home</Link>
			</Stack>
			<Stack 
			direction="row" 
			alignItems="center" 
			gap={2}>
				<Link 
					href={config.linkedin} 
					isExternal>
					Linkedin
				</Link>
				<Link 
					href={config.github} 
					isExternal>
					Github
				</Link>
				<Link 
					href={config.twitter} 
					isExternal>
					Twitter
				</Link>
			</Stack>
		</Flex>
	)
}
export default Footer