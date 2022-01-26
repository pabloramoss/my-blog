import React from "react"
import { Link, Grid, GridItem } from "@chakra-ui/react"
import HorizontalCard from "./HorizontalCard"
import VerticalCard from "./VerticalCard"

const PostCard = ( {posts} )=> {
	console.log("las props que llegan a PostCard son ",posts)
	console.log(posts[0])
	console.log(posts[0].frontmatter.title)
	console.log(posts[1].frontmatter.title)
	console.log(posts[2].frontmatter.title)
	console.log(posts[3].frontmatter.title)

	return(
		<Grid 
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
		</Grid>
	)
}
export default PostCard