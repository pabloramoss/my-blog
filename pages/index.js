import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Box, Flex } from "@chakra-ui/react"
import Hero from "../src/components/Hero/Hero"
import PostCard from "../src/components/PostCard/PostCard"

export default function Home( {posts} ) {
	return (
		<Box bg="gray.300">
			<Hero />
			<Flex justifyContent="center">
				<PostCard posts={posts}/>
			</Flex>
		</Box>
	)
}

//fetching data in built time
//Se podría separar en un archivo getFiles y pasarle el directory como param pero me da error :-/
export async function getStaticProps(){
	const files = fs.readdirSync(path.join("posts"))	//get files from the posts directory
	const posts = files.map(filename =>{	//get slug and frontmatter from posts
		const slug = filename.replace(".md", "")		//create slug
		const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8")		//get frontmatter
		const {data:frontmatter} = matter(markdownWithMeta)
		return {
			slug,
			frontmatter,
		}
	})
	return {
		props: {
			posts,
		}
	}

}