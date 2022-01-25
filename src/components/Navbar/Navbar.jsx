import React from "react"
import { Box, Flex, Heading, Link, Stack, Spacer } from "@chakra-ui/react"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import config from "../../website-config"


const Navbar = ()=> {

	return(
		<Flex filter={{blur:"3"}} justifyContent="space-around" bg="black" py={3} color="gray.300" >
			<Stack direction="row" alignItems="center" gap={5}>
				<Heading fontSize="xl">PABLO</Heading>
				<Link>Home</Link>
			</Stack>
			<Stack direction="row" alignItems="center" gap={5}>
				<Link>Linkedin</Link>
				<Link>Github</Link>
				<Link>Twitter</Link>
			</Stack>
		</Flex>
	)
}
export default Navbar