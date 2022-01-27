import fs from "fs"
import matter from "gray-matter"
import path from "path"

export async function getFiles(postsDir){
	const files = fs. readdirSync(path.join(postsDir))	//get files from the posts directory
	const posts = files.map(filename =>{	//get slug and frontmatter from posts
		const slug = filename.replace(".md", "")		//create slug
		const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8")		//get frontmatter
		const {data:frontmatter} = matter(markdownWithMeta)
		return {
			slug,
			frontmatter,
		}
	})

}