import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../src/components/Navbar/Navbar"
import Footer from "../src/components/Footer/Footer"
import "../styles/style.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Blog by Pablo Ramos</title>
				<meta name="Pablo Ramos frontend developer blog" content="Blog Pablo Ramos" />
				{/* <link rel="icon" href="/favicon-32x32.png" /> */}
			</Head>
			<ChakraProvider>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ChakraProvider>
		</>
	)
}

export default MyApp
