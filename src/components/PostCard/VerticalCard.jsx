import React from "react"
import { Stack } from "@chakra-ui/react"
import CardDescription from "./CardDescription"
import {motion} from "framer-motion"
import Image from "next/image"
import config from "../../website-config"
const VerticalCard = ( {post} )=> {
	const MotionStack = motion(Stack)

	return(
		<MotionStack
			boxShadow="2xl" 
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		>
			<Image src={post.frontmatter.image} height={200} width={350} />
			<CardDescription post={post} />
		</MotionStack>
	)
}
export default VerticalCard