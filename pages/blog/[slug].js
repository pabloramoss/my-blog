import fs from "fs"
import path from "path"
import matter from "gray-matter"
import {marked} from "marked"
import Link from "next/link"
import { Heading, Stack, Button, Box } from "@chakra-ui/react"

export default function PostPage({
	frontmatter: { title, cover_image },
	content,
}) {
	return (
		<Stack 
			alignItems="center" 
			pt={100}
			bg="gray.100"
		>
			<Link href='/'>
				<Button 
					boxShadow="2xl"
					bg="gray.200"
				>Go Back</Button>
			</Link>
			<Box 
				maxW="900px"
				boxShadow="2xl"
				p={20}
				bg="gray.200"
				borderRadius={20}
			>
				<div className='card card-page'>
					<Heading py={5}>{title}</Heading>
					<img src={cover_image} alt='' />
					<Stack justifyContent="center" className='post-body'>
						<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
					</Stack>
				</div>

			</Box>
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