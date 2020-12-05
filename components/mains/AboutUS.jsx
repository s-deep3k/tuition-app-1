import React from 'react'
import { ChevronDown, ChevronUp } from '../utils/Icons';

const AboutUS = () => {
    const [readMore,setRead] = React.useState(false);
    const [readState,setState] = React.useState('more');

    const readStateToggler = _ => {
        const textToggler = readMore ? 'more' : 'less';
        setState(textToggler);
        setRead(!readMore);
    }

    return (
        <section className="py-12 px-4 text-center">
            <h2 className="text-4xl font-semibold font-heading text-blue-600 p-0">About us</h2>
            <div className="bg-blue-200 w-14 h-1 mx-auto my-3 rounded-xl mb-8"/>
            <div className="max-w-2xl mx-auto">
                <img className="rounded-3xl shadow" src="/images/teach.jpg" alt="teach" />
                <div className="text-center mt-8 mb-6">
                <span className="inline-flex items-center justify-center h-3 w-3 mr-2 bg-blue-400 rounded-full cursor-pointer" />
                <span className="inline-flex items-center justify-center h-3 w-3 mr-2 bg-green-200 rounded-full" />
                <span className="inline-flex items-center justify-center h-3 w-3 mr-2 bg-red-200 rounded-full" />
                </div>
                <div>
                <h3 className="text-2xl mb-4 font-semibold font-heading">Client: Realweb</h3>
                <p className="text-gray-400 leading-relaxed">We, The WISDOM TUTELAGE, give proper guidance, support, and knowledge to get everyone’s destiny and success. Our motto is to offer a quality service to the candidates who have the real urge to be the leaders in their respective academic fields. There are no short-cuts in this competitive world.{ readMore && <span>So, here, we are always ready to help the students to achieve their goals by giving them proper wisdom.The perfect forum for cracking all India competitive tests such as CSIR-UGC NET-LS / JRF. Doors towards ICMR JRF and DBT JRF is WISDOMTUTELAGE.We are proficient in all areas of life sciences, including BOTANY, BIOCHEMISTRY, ZOOLOGY, ECOLOGY, GENETICS, MICROBIOLOGY, MOLECULAR BIOLOGY, and CHEMISTRY.As a subject expert, our esteemed educators guide the student for more than the past 10 years on the different career options that can be selected. Many of our graduates are well-respected national researchers (IISER, CDRI, IITs, NIPGR, BSI, CU, JU, Presidency University), bankers and businessmen, etc.</span>}</p>
                <div className="text-blue-600 font-semibold cursor-pointer flex items-center gap-1 w-max mx-auto" onClick={readStateToggler}>
                    <span>Read {readState}</span>
                    <span>
                        {
                            readMore ? <ChevronUp size="1rem" className="text-blue-600"/> : <ChevronDown size="1rem" className="text-blue-600"/>
                        }
                    </span>
                </div>
                </div>
            </div>
        </section>

    )
}

export default AboutUS
