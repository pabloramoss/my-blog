import React from "react"
import { Link } from "@chakra-ui/react"
import HorizontalCard from "./HorizontalCard"

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
		<div>
			{posts.map((post, index) => 
				<Link key={index} href={`/blog/${post.slug}`}>
					<HorizontalCard post={post} />
				</Link>)}
		</div>
	)
}
export default PostCard

