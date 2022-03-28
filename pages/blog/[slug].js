import fs from "fs"
import path from "path"
import matter from "gray-matter"
import {marked} from "marked"
import Link from "next/link"
import 
{ 
	Heading, 
	Stack, 
	Button, 
	Box, 
	Icon,
	Image} from "@chakra-ui/react"
	import { FaChevronLeft } from "react-icons/fa"

export default function PostPage({
	frontmatter: { title, image },
	content,
}) {
	return (
		<Stack spacing={0}>
			<Stack 
				alignItems="center" 
				spacing={0}
				py={50}
			>
				<Link href='/'>
					<Button 
						boxShadow="2xl"
						bg="gray.300"
						mb={10}
					><Icon as={FaChevronLeft} me={2}/>Volver</Button>
				</Link>
				<Box 
					maxW="900px"
					boxShadow="2xl"
					p={{base: 5, md: 10}}
					bg="gray.300"
					borderRadius={20}
				>
					<div>
						<Image src={image} />
						<Heading py={5}>{title}</Heading>
						<Stack className='post-body' maxW={{base:"320px", sm: "500px", md:"750px"}}>
							<Box dangerouslySetInnerHTML={{ __html: marked(content) }} />
						</Stack>
					</div>
				</Box>
			</Stack>
		</Stack>
	)
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"))
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join("posts", slug + ".md"),
		"utf-8"
	)

	const { data: frontmatter, content } = matter(markdownWithMeta)

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	}
}