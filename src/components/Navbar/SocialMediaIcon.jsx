import React from "react"
import { Icon } from "@chakra-ui/react"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { MdSettings } from "react-icons/md"



const SocialMediaIcon = ( {icon} )=> {

	return(
		<Icon _hover={{color:"gray.500"}} as={icon}>{icon}</Icon>
	)
}
export default SocialMediaIcon