import React from "react"
import { Box, Heading, Stack, Text } from "@chakra-ui/react"
import config from "../../website-config"
import Image from "next/image"

const Hero = ()=> {

	return(
		<Box 
			bgImage={config.coverImage}
			objectFit='cover'
			bgPosition="center"
			bgRepeat="repeat">
			<Stack 
				alignItems="center" 
				color="gray.200" 
				py={20}>
				<Image 
					height={150} 
					width={150} 
					src={config.avatar}/>
				<Heading>Pablo Ramos</Heading>
				<Text>{config.description}</Text>
			</Stack>
		</Box>
	)
}
export default Hero

