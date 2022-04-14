import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../src/components/Navbar/Navbar"
import Footer from "../src/components/Footer/Footer"
import Script from "next/script"
import "../styles/style.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Blog by Pablo Ramos</title>
				<meta name="Pablo Ramos frontend developer blog" content="Blog Pablo Ramos" />
				{/* <link rel="icon" href="/favicon-32x32.png" /> */}
			</Head>
			<Script 
				async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`} 
				strategy="afterInteractive"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
			>
				{`window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', ${process.env.GOOGLE_ANALYTICS})`}
			</Script>
			<ChakraProvider>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ChakraProvider>
		</>
	)
}

export default MyApp
