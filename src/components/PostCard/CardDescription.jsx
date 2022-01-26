import React from "react"
import { Heading, Stack, Text } from "@chakra-ui/react"
import config from "../../website-config"

const CardDescription = ( {post} )=> {
	console.log("el post que llega a CardDescription es: ", post)
	return(
		<Stack minW="200px" p={5}>
			<Text color="gray.500" >Escrito por {post.frontmatter.writtenBy}</Text>
			<Heading fontSize="2xl">{post.frontmatter.title}</Heading>
			<Text>{post.frontmatter.summary}</Text>
		</Stack>
	)
}
export default CardDescription