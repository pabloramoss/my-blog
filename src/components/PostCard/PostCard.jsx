import React from "react"
import { Link, Stack, Box } from "@chakra-ui/react"
import HorizontalCard from "./HorizontalCard"
import VerticalCard from "./VerticalCard"

const PostCard = ( {posts} )=> {

	return(
	//Formato a futuro (está hardcodeado, necesita un fix)
	/* 		<Grid 
			templateRows="repeat(2, 1fr)"
			templateColumns="repeat(3, 1fr)"
			gap={8}
			width="1000px"
			p={10}
		>
			<GridItem colSpan={3}>
				<Link>
					<HorizontalCard post={posts[0]} />
				</Link>
			</GridItem>
			<Link>
				<VerticalCard post={posts[1]} />
			</Link>
			<Link>
				<VerticalCard post={posts[2]}/>
			</Link>
			<Link>
				<VerticalCard post={posts[3]} />
			</Link>
		</Grid> */
		<Box>
			<Stack
					display={{base:"none", md:"flex"}}
			>
			{posts.map((post, index) => 
				<Link _hover={{textDecoration:"none"}} key={index} href={`/blog/${post.slug}`}>
					<HorizontalCard post={post} />
				</Link>)}
		</Stack>
		<Stack
		display={{base:"flex", md:"none"}}
		>
			{posts.map((post, index) => 
				<Link _hover={{textDecoration:"none"}} key={index} href={`/blog/${post.slug}`}>
					<VerticalCard post={post} />
				</Link>)}
		</Stack>
		</Box>
	)
}
export default PostCard

