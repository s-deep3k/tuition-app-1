import React from 'react'

const AboutUS = () => {
    return (
        <section className="py-12 px-4 text-center">
            <h2 className="text-4xl mb-8 font-semibold font-heading">Portfolio</h2>
            <div className="max-w-2xl mx-auto">
                <img className="rounded-xl shadow" src="/images/teach.jpg" alt="teach" />
                <div className="text-center mt-8 mb-6">
                <button className="inline-flex items-center justify-center h-3 w-3 mr-2 bg-blue-400 rounded-full" />
                <button className="inline-flex items-center justify-center h-3 w-3 mr-2 bg-green-200 rounded-full" />
                <button className="inline-flex items-center justify-center h-3 w-3 mr-2 bg-yellow-200 rounded-full" />
                </div>
                <div>
                <h3 className="text-2xl mb-4 font-semibold font-heading">Client: Realweb</h3>
                <p className="text-gray-400 leading-relaxed">Great offer, competitive prices, professional service. That’s how I’d remember the Dunder Mifflin. Although I had to switch paper provider, sometimes I really miss Dunder family. I also got gift basket from the team!</p>
                </div>
            </div>
        </section>

    )
}

export default AboutUS
