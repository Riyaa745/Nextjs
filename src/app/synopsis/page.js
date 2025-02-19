import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <>

      {/* synopsis/research outline section  */}
      <div className="flex justify-center overflow-hidden  ">
        <div className=" w-full bg-gradient-to-b from-blue-950 to-gray-600 text-center py-20">
          <span className="text-2xl lg:text-5xl text-white px-4">
            SYNOPSIS/RESEARCH OUTLINE
            <p className="text-md md:text-xl text-white py-2">
              Home &gt; Services &gt; Synopsis/Research Outline
            </p>
          </span>
        </div>
      </div>

      {/* image of synopsis section  */}
      <div className='w-full flex justify-center pt-5'>
        <Image src="/synopsis.jpg" alt="error" width={400} height={100} className="w-[70%] h-auto max-h-[400px] sm:w-full md:w-[80%]"/>
      </div>

      {/* content section  */}
      <div className="px-4 sm:px-12 md:px-24 py-6 text-justify">
        <div className="h-auto w-full  bg-gray-100 shadow-lg shadow-blue-200 px-6 md:px-10 rounded-lg py-6">
          <p className="py-6">
            A synopsis is a brief summary of the major points of the subject. Our team will ensure
            that it is easy to understand by the scholars. Some factors that we take into consideration
            to write an outstanding synopsis for thesis projects:
          </p>

          {/* factor content */}
          <ul className="list-disc pl-5 space-y-2">
            <li>The title of the project topic or thesis project topic.</li>
            <li>The abstract for the research thesis topic for the project.</li>
            <li>The need for the project.</li>
            <li>Research Methodology.</li>
            <li>The review of related literature concerning your research topic.</li>
            <li>The materials and methods to be adopted.</li>
            <li>References.</li>
          </ul>

          {/* additional info of synopsis  */}
          <p className="py-4">
            *Synopsis Writing Services*: For a better “Research Thesis”, having a solid Synopsis is
            extremely important. The main objective of writing a synopsis is to prove to your professors
            that you have done good research on your topic. It guides you all through your Pg and PhD programme.
            So, our Synopsis Writing Services provides a framework for your research work. The most
            difficult task in making the thesis is creating the synopsis. To put the details of 100+ pages
            in 300-400 words is extremely difficult.
          </p>
        </div>

        <div className="h-auto w-full  bg-gray-100 shadow-lg shadow-blue-200 px-6 md:px-10 rounded-lg mt-4 py-6 mb-20">
          <h1 className="text-2xl font-bold py-4">Key Objective of Synopsis</h1>
          <p>
            The key objective of Synopsis Writing is to convince the committee of the authenticity, sanctity,
            and utility of the research that you want to undertake so that you can go ahead on the topic.
            Presentation in the writing should be made in such a way that the topic you have selected matches
            the area of research. A synopsis not prepared and presented properly can result in all efforts
            of the researcher going in vain.
          </p>
          <p className="py-4">
            It is also the blueprint of what the researcher will follow during the entire research. To write
            an effective synopsis, extra efforts are required. You can’t just prepare it in a couple of days.
            It takes a lot of *“Hard work, Research & Patience”*. According to a survey, more than 50%
            synopses get rejected by supervisors due to inconsistencies.
          </p>
        </div>
      </div>
    </>
  )
}
