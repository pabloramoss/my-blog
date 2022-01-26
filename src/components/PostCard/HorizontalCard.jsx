import React from "react"
import { Flex } from "@chakra-ui/react"
import CardDescription from "./CardDescription"
import {motion} from "framer-motion"
import Image from "next/image"

const HorizontalCard = ( {post} ) => {
	const MotionFlex = motion(Flex)
	console.log("el post que llega a horizontalCard es ",post)
	console.log("el titulo de cardDescription es ",post.frontmatter.title)

	return(
		<MotionFlex 
			boxShadow="2xl"
			height="100%"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		>
			<Image src={post.frontmatter.image} 
				height={350} 
				width={600} 
				objectFit="cover"
			/>
			<CardDescription post={post} />
		</MotionFlex>
	)
}
export default HorizontalCard