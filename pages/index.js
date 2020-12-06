import Head from 'next/head'
import { connect } from 'react-redux'
import useSWR from 'swr'
import AboutUS from '../components/mains/AboutUS'
import ContactUs from '../components/mains/ContactUs'
import Form from '../components/mains/Form'
import Landing1 from '../components/mains/Landing1'
import Testimonials from '../components/mains/Testimonials'

function Home(props) {
  const fetcher = url => fetch(url).then(res => res.json());

  const { data,error } = useSWR('https://tutelagedb.herokuapp.com/tutor',fetcher);

  console.log(data);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-body">
        <Landing1 />
        <AboutUS />
        <ContactUs />
      </main>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    test : state.test
  }
}

export default connect(mapStateToProps)(Home);
