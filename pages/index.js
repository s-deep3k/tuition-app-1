import Head from 'next/head'
import { connect } from 'react-redux'
import Faq from '../components/mains/Faq'
import Form from '../components/mains/Form'
import Landing1 from '../components/mains/Landing1'
import Dropdown from '../components/UI/Dropdown.component'

function Home(props) {
  console.log(props)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-body">
        <Form />
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