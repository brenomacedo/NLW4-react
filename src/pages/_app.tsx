import ChallangesProvider from '../contexts/ChallangesContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
      <ChallangesProvider>
        <Component {...pageProps} />
      </ChallangesProvider>
  )
}

export default MyApp
