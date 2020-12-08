import Head from 'next/head'
import { connect } from 'react-redux'
import useSWR from 'swr'
import AboutUS from '../components/mains/AboutUS'
import ContactUs from '../components/mains/ContactUs'
import Courses from '../components/mains/Courses'
import Landing1 from '../components/mains/Landing1'
import Testimonials2 from '../components/mains/Testimonials2'
function Home(props) {
  const fetcher = url => fetch(url).then(res => res.json());

  const { data,error } = useSWR('https://tutelagedb.herokuapp.com/course',fetcher);

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
        <Courses />
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
