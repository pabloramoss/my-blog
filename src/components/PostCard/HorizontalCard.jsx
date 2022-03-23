import React from "react"
import { Flex } from "@chakra-ui/react"
import CardDescription from "./CardDescription"
import {motion} from "framer-motion"
import Image from "next/image"

const HorizontalCard = ( {post} ) => {
	const MotionFlex = motion(Flex)

	return(
		<MotionFlex 
			boxShadow="2xl"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.9 }}
			minH={200}
			my="30px"
			mx={5}
			direction={{base: "column", md: "row"}}
		>
			<Image 
				src={post.frontmatter.image} 
				height={350} 
				width={600} 
				objectFit="cover"
			/>
			<CardDescription post={post} />
		</MotionFlex>
	)
}
export default HorizontalCard