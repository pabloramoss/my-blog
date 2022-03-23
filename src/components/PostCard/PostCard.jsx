import React from "react"
import { Link, Stack } from "@chakra-ui/react"
import HorizontalCard from "./HorizontalCard"

const PostCard = ( {posts} )=> {

	return(
		<Stack>
			{posts.map((post, index) => 
				<Link 
					_hover={{textDecoration:"none"}} 
					key={index} 
					href={`/blog/${post.slug}`}
				>
					<HorizontalCard post={post} />
				</Link>)}
		</Stack>
	)
}
export default PostCard

