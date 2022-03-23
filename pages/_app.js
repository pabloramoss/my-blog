import { ChakraProvider } from "@chakra-ui/react"
import "../styles/style.css"
import Navbar from "../src/components/Navbar/Navbar"
import Footer from "../src/components/Footer/Footer"

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	)
}

export default MyApp
