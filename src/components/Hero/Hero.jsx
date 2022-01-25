import React from "react"
import { Box, Flex, Heading, Link, Stack, Text, Image } from "@chakra-ui/react"
import config from "../../website-config"


const Hero = ()=> {

	return(
		<Box>
			<Stack bg="gray.700" alignItems="center" color="gray.200" py={20}>
				<Image borderRadius={5000} h="150px" w="150px" src="https://via.placeholder.com/150" />
				<Heading>Pablo Ramos</Heading>
				<Text>{config.description}</Text>
			</Stack>
		</Box>
	)
}
export default Hero