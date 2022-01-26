import React from "react"
import { Box, Flex, Heading, Link, Stack, Text, Image } from "@chakra-ui/react"
import config from "../../website-config"
const Footer = ()=> {

	return(
		<Flex justifyContent="space-around" bg="black" py={3} color="gray.300" position="bottom">
			<Stack direction="row" alignItems="center" gap={5}>
				<Text fontSize="sm">{config.title}</Text>
				<Link>Home</Link>
			</Stack>
			<Stack direction="row" alignItems="center" gap={5}>
				<Link>Linkedin</Link>
				<Link>Github</Link>
				<Link>Twitter</Link>
			</Stack>
		</Flex>
	)
}
export default Footer