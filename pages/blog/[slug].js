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
	Image} from "@chakra-ui/react"
import Navbar from "../../src/components/Navbar/Navbar"
import Footer from "../../src/components/Footer/Footer"

export default function PostPage({
	frontmatter: { title, image },
	content,
}) {
	return (
		<Stack>
			<Navbar />
			<Stack 
				alignItems="center" 
				py={50}
			>
				<Link href='/'>
					<Button 
						boxShadow="2xl"
						bg="gray.300"
					>Volver</Button>
				</Link>
				<Box 
					maxW="900px"
					boxShadow="2xl"
					p={20}
					bg="gray.300"
					borderRadius={20}
				>
					<div>
						<Image src={image} />
						<Heading py={5}>{title}</Heading>
						<Stack className='post-body'>
							<Box dangerouslySetInnerHTML={{ __html: marked(content) }}></Box>
						</Stack>
					</div>
				</Box>
			</Stack>
			<Footer />
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