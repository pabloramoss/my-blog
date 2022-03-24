import React from "react"
import { Heading, Stack, Text, Avatar, Badge } from "@chakra-ui/react"
import config from "../../website-config"

const CardDescription = ( {post} )=> {
	return(
		<Stack minW="200px" maxW="400px" p={5} justifyContent="space-between">
			<Stack>
				<Badge bg="gray.200" color="gray.500" alignSelf="start">{post.frontmatter.tag}</Badge>
				<Heading fontSize={{base: "lg", md:"2xl"}}>{post.frontmatter.title}</Heading>
				<Text fontSize={{base: "sm", md:"md"}} noOfLines={4}>{post.frontmatter.summary}</Text>
			</Stack>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Avatar src={config.avatar} h={8} w={8} />
				<Text color="gray.500" fontSize="sm">{post.frontmatter.minRead} MIN READ</Text>
			</Stack>
		</Stack>
	)
}
export default CardDescription