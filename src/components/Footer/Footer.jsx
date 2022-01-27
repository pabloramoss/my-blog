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
			<Stack direction="row" alignItems="center" gap={5}>
				<Text fontSize="sm">{config.title}</Text>
				<Link>Home</Link>
			</Stack>
			<Stack direction="row" alignItems="center" gap={5}>
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