import React from "react"
import { Box, Flex, Heading, Link, Stack, Image, Grid, GridItem } from "@chakra-ui/react"
import CardDescription from "./CardDescription"

const PostCard = ()=> {

	return(
		<Grid 
			templateRows="repeat(2, 1fr)"
			templateColumns="repeat(3, 1fr)"
			gap={4}
			width="1000px"
			p={10}
		>
			<GridItem colSpan={3} bg="gray.400" boxShadow="dark-lg">
				<Flex>
					<Image src="https://via.placeholder.com/600x400" />
					<CardDescription />
				</Flex>
			</GridItem>
			<GridItem bg="gray.400">
				<Image src="https://via.placeholder.com/350x200" />
				<CardDescription />
			</GridItem>
			<GridItem bg="gray.400">
				<Image src="https://via.placeholder.com/350x200" />
				<CardDescription />
			</GridItem>
			<GridItem bg="gray.400">
				<Image src="https://via.placeholder.com/350x200" />
				<CardDescription />
			</GridItem>
		</Grid>
	)
}
export default PostCard