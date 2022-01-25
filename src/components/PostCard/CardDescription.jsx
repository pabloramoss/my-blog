import React from "react"
import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react"
import config from "../../website-config"

const CardDescription = ()=> {

	return(
		<Stack minW="200px" p={5}>
			<Text color="gray.500" >REACT</Text>
			<Heading fontSize="2xl">Titulo del post</Heading>
			<Text>Esta es una pequena desripcion del post. Espero que les guste XD</Text>
		</Stack>
	)
}
export default CardDescription