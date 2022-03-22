import React from "react"
import { Link, Stack, Box } from "@chakra-ui/react"
import HorizontalCard from "./HorizontalCard"
import VerticalCard from "./VerticalCard"

const PostCard = ( {posts} )=> {

	return(
		<Box>
			<Stack
					/* display={{base:"none", md:"flex"}} */
			>
			{posts.map((post, index) => 
				<Link _hover={{textDecoration:"none"}} key={index} href={`/blog/${post.slug}`}>
					<HorizontalCard post={post} />
				</Link>)}
		</Stack>
	{/* 	<Stack
		display={{base:"flex", md:"none"}}
		>
			{posts.map((post, index) => 
				<Link _hover={{textDecoration:"none"}} key={index} href={`/blog/${post.slug}`}>
					<VerticalCard post={post} />
				</Link>)}
		</Stack> */}
		</Box>
	)
}
export default PostCard

