import React from "react"
import { Link } from "@chakra-ui/react"
import config from "../../website-config"

const SocialMedia = ( {social} )=> {
	const socialUrl = "config." + social

	return(
		<Link href={socialUrl} isExternal>{social}</Link>
	)
}
export default SocialMedia