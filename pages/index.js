import Head from 'next/head'
import { connect } from 'react-redux'
import useSWR from 'swr'
import AboutUS from '../components/mains/AboutUS'
import ContactUs from '../components/mains/ContactUs'
import Courses from '../components/mains/Courses'
import Landing1 from '../components/mains/Landing1'
function Home(props) {

  //const { data,error } = useSWR('https://tutelagedb.herokuapp.com/course',fetcher);

  //console.log(data);

  console.log(props.data);

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

export async function getStaticProps(){
  const resp = await fetch(`https://tutelagedb.herokuapp.com/course`);
  const data = await resp.json();
  return {
    props : { data }
  }
}