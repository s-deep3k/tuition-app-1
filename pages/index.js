import Head from 'next/head'
import { connect } from 'react-redux'
import AboutUS from '../components/mains/AboutUS'
import Form from '../components/mains/Form'
import Landing1 from '../components/mains/Landing1'

function Home(props) {
  console.log(props) 
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-body">
        <Landing1 />
        <AboutUS />
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