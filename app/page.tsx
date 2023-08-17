import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

export default function Home() {
  return <div className={styles.main}>
	<Header />
	<Content />
	<Footer />
  </div>
}
