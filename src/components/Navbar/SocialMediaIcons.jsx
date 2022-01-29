import React from "react"
import { Link, Stack, Icon } from "@chakra-ui/react"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import config from "../../website-config"

const SocialMediaIcons = ()=> {

  return(
    <Stack 
        display={{base:"none", md:"flex"}}
				direction="row" 
				alignItems="center" 
				gap={5}>
				<Link 
					href={config.linkedin} 
					isExternal>
					<Icon 
						width={6} 
						height={6} 
						_hover={{color:"gray.500"}}
						as={FaLinkedin}
						/>
				</Link>
				<Link 
					href={config.github} 
					isExternal>
					<Icon 
						width={6} 
						height={6} 
						_hover={{color:"gray.500"}}
						as={FaGithub}
						/>
				</Link>
				<Link 
					href={config.twitter} 
					isExternal>
					<Icon 
						width={6} 
						height={6} 
						_hover={{color:"gray.500"}} 
						as={FaTwitter}
						/>
				</Link>
			</Stack>
  )
}
export default SocialMediaIcons