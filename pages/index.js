import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Box, Flex, Stack, Heading, Text } from "@chakra-ui/react"
import Navbar from "../src/components/Navbar/Navbar"
import Hero from "../src/components/Hero/Hero"
import Footer from "../src/components/Body.jsx/Footer.jsx/Footer"
import PostCard from "../src/components/PostCard/PostCard"

export default function Home({posts}) {
	console.log(posts)
	const posteos = posts.map((post, index)=><li key={index}>{post.frontmatter.title}</li>)
	return (
		<Box bg="gray.100">
			<Navbar />
			<Hero />
			<Flex justifyContent="center">
				<PostCard />

			</Flex>
			<ul>{posteos}</ul>
			<Footer />
		</Box>
	)
}

//fetching data in built time
export async function getStaticProps(){
	//get files from the posts directory
	const files = fs. readdirSync(path.join("posts"))

	//get slug and frontmatter from posts
	const posts = files.map(filename =>{
		//create slug
		const slug = filename.replace(".md", "")
		//get frontmatter
		const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8")
		const {data:frontmatter} = matter(markdownWithMeta)
		return {
			slug,
			frontmatter,
		}
	})
	console.log(posts)
	return {
		props: {
			posts,
		}
	}

}