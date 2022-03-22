import React from "react"
import { Heading, Stack, Text } from "@chakra-ui/react"

const CardDescription = ( {post} )=> {
	return(
		<Stack minW="200px" maxW="400px" p={5}>
			<Text color="gray.500">Escrito por {post.frontmatter.writtenBy}</Text>
			<Heading fontSize={{base: "lg", md:"2xl"}}>{post.frontmatter.title}</Heading>
			<Text fontSize={{base: "sm", md:"md"}} noOfLines={4}>{post.frontmatter.summary}</Text>
		</Stack>
	)
}
export default CardDescription