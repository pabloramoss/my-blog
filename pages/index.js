import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default function Home({posts}) {
	console.log(posts)
	return (
		<div>
      hello world
		</div>
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