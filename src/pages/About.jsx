import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../App'; // Import the CSS file
import StripRating from '../Components/StripRating';

const About = () => {

  return (
      <>
      
      <Navbar/>
      
      <div className='body-font'>

      <div className='border bg-green-600 text-white text-center p-6 justify-center items-center flex flex-col'>
      <div className="slim-line bg-white h-4 rounded-lg flex justify-center items-center">
    <div className="slim-line bg-green-600 h-4 rounded-lg">
      </div>
    </div>

     
     <h1 className='font-extrabold text-5xl p-3'>About Us</h1>
        <p className='p-3 md-w-[70%] text-center'>Our agency is committed to fighting drug addiction with prevention, treatment, and rehabilitation services, promoting healthier, drug-free communities.</p>
       
      </div>



       <div className="bg-white py-12 flex justify-center items-center ">
      <div className="container mx-auto w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <section className="text-justify">
              <p className="mb-4">
                The AntiDrug Agency is a charitable, not-for-profit organization established to provide services to the most marginalized and vulnerable groups in society, including drug users, persons at risk of or infected by HIV/AIDS, prison inmates, juvenile offenders, minor children in detention with female prisoners, street children, women and children in crisis, refugees, victims of war and disasters. All these groups are mostly poor and lack the resources to live normal lives. Poverty reduces them to a state of marginalization and deprivation in all those conditions which contribute to the quality of human life e.g. health, education, justice, safety, security, housing, employment, and credit.
              </p>
              <p className="mb-4">
                The AntiDrug Agency reaches out to these unfortunate, miserable, and stigmatized individuals living in difficult and inhuman conditions, through a process of awareness, primary prevention, rehabilitation, and social development, and ensures their well-being and recovery. The Agency's services are Rights-based and Needs-based and include a comprehensive range of activities that cater to the physical, psychological, social, spiritual, and financial needs of clients and their families. The Agency provides quality services through its large service delivery network and comprehensive awareness programs extending all over the country. The Agency’s programs are intended to stimulate and facilitate positive change, with a significant impact and long-lasting effects. The Agency's strategies are aimed at individuals, families, and communities in a spirit of self-help, community support, and participation.
              </p>
              <p className="mb-4">
                At the time of the Agency’s establishment, drug abuse problems were increasing progressively due to the easy availability of cheap drugs smuggled across borders. A combination of geo-political, social, and economic factors contributed to the escalation of drug-related issues, crime, social disorder, injustice, poverty, and human rights abuses. A shift in the traditional modes of drug use from inhaling and smoking to injecting has added to the risk of HIV/AIDS, STIs, Hepatitis B/C among drug users and other vulnerable groups. Since there were hardly any treatment facilities in existence to cater to the affected population, the founding members were motivated to set up the Agency’s drug addiction treatment programs. The pioneering role of the Agency is now recognized nationally as well as internationally.
              </p>
              <p className="mb-4">
                The scope of our services comprises primary prevention, early intervention, treatment, rehabilitation, reintegration, aftercare, and follow-up. These services are provided in different locations and settings such as streets, prisons, homes, refugee camps, mobile camps, drop-in centers, out-patient, and residential facilities.
              </p>
              <p className="mb-4">
                <strong className='text-green-700'>ORGANIZATION’S VISION:</strong><br />
                The Agency's vision is of a society where the most marginalized and stigmatized groups have access to rights-based and needs-based services, to empower and heal them in body, mind, and spirit, and enable them to live productive and fulfilling lives.
              </p>
              <p className="mb-4">
                <strong className='text-green-700'>ORGANIZATION’S MISSION:</strong>
              </p>
              <p className="mb-4">
                The Agency's Programs are Rights-Based and Needs-Based and fall into five main thematic areas, which are multidimensional, multipronged, multifaceted, and holistic. All the themes are also cross-cutting. They have been developed keeping in view the needs and rights of clients and encompass a diverse range of services and activities.
              </p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Drug Demand Reduction and Harm Reduction</li>
                <li>HIV/AIDS Prevention, Care, and Support</li>
                <li>Human Rights Protection of vulnerable groups</li>
                <li>Human Resource Development of all stakeholders</li>
                <li>Community Development</li>
              </ul>
            </section>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center">
              <img
                className="w-full h-auto rounded-lg"
                src="https://newportbeachrecoverycenter.com/wp-content/uploads/2020/06/nbrc-bk-1-1024x598.jpg"
                alt="AntiDrug Agency Image 1"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-full h-auto rounded-lg"
                src="https://dostfoundation.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-16-at-6.14.02-PM.jpeg"
                alt="AntiDrug Agency Image 2"
              />
            </div>
          </div>
        </div>
      </div>
       </div>


  <section
      className="bg-green-700"
    
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/5 flex justify-center p-4">
          <img
            src="https://dostfoundation.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-16-at-6.06.29-PM.jpeg"
            alt="Inspiration Image"
            className="rounded"
          />
        </div>
        <div className="w-full md:w-3/5 text-white p-4">
          <h2 className="text-3xl mb-4 border-b border-white pb-2">AntiDrug Agency Inspiration</h2>
          <div className="text-lg space-y-4">
            <p className="text-justify">Dost Mohammad Khanzada (07 MARCH 1907 TO 03 AUGUST 1956)</p>
            <p className="text-justify">BSc. Engineering, University of Glasgow, Scotland.</p>
            <p className="text-justify">I was 15 years old and studying at the Convent of Jesus and Mary, Murree, when my father Dost Mohammad Khanzada said to me “I want you to be a missionary doctor. I’ll build you a hospital, support you financially and buy you a car, so that you can travel to different communities and provide services to the sick and needy.” I understood at that time that missionary work meant working with lepers who were the most hopeless and ostracized sections of society.</p>
            <p className="text-justify">In December 1954 I left the Convent after appearing in the Senior Cambridge examination, carrying my father’s dream with me. However, I was shattered when my father passed away in August 1956, even before my admission in medical college. However, his dream lived on and was turned into reality with the creation in 1992 of Dost Welfare Foundation, which was named after my father.</p>
            <p className="text-right">Dr. Parveen Azam Khan</p>
          </div>
        </div>
      </div>
    </section>

    <section
      className="relative flex justify-center items-center shadow py-8 px-4"
      
      style={{ backgroundImage: "url('https://newportrec.wpengine.com/wp-content/uploads/2020/04/transparent-2.png')", backgroundPosition: '100% 20%' }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-transparent"></div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2 text-green-700">helping others find recovery</h3>
          <h2 className="text-2xl font-bold mb-4 text-green-700">Our Mission</h2>
          <p className="mb-6">
            Newport Beach Recovery Center is designed to help individuals who suffer from alcohol and/or drug addiction obtain sobriety and recovery. We are dedicated to helping men and women live sober and healthy lives. We want to assist our clients in a course correction for their life that will refresh and renew their future. We strive to replace old behaviors with positive reframing to include an action plan for recovery. We incorporate a value-based life philosophy that becomes the basis for an attitude of action leading to a higher quality of life. We provide a supportive environment for men and women to learn life skills and regain their maximum cognitive functioning. We help each client build a foundation that will ensure lifestyle changes to reduce the chance of relapse dramatically.
          </p>
        </div>
      </div>
    </section>


 
   <StripRating/>

    <div className="container mx-auto p-4 ">
      <section className="flex justify-center items-center shadow p-4 mb-8">
        <div className="relative w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
          <div className="absolute top-0 left-0 w-full h-full bg-transparent"></div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2 text-green-700">we walk the walk</h3>
            <h2 className="text-2xl font-bold mb-4 text-center text-green-700">We Don't Just Say It, We Live It.</h2>
            <p className="mb-6 text-center">
              Newport Beach Recovery Center offers a full continuum of care, meaning we offer detoxification, inpatient, outpatient and sober living options to all clients who are in need of treatment for drug & alcohol abuse.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 text-green-700 shadow-lg ">
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="text-center flex flex-col">
              
                <h1 className="text-lg font-semibold" >Trained Staff to Care for You</h1>
                <h1 className="text-2xl font-bold">11</h1>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="text-center flex flex-col">
                <h1 className="text-lg font-semibold w-t">Executive Staff</h1>
                <h1 className="text-2xl font-bold">4</h1>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="text-center flex flex-col">
                <dh1 className="text-lg font-semibold ">Total Years Open</dh1>
                <dh1 className="text-2xl font-bold">13</dh1>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="text-center flex flex-col">
               
                <h1 className="text-lg font-semibold">Clients We've Helped</h1>
                <h1 className="text-2xl font-bold">2,000+</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>


     <div className="container mx-auto py-8 shadow">
      <div className="flex flex-wrap -mx-4">
        {/* Left Column */}
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <div className="text-center border-2 border-green-700 " >
            <a href="https://antidrugagency.com" >
              <img
                src=""
                alt="LOGO AntiDrug Agency"
                className="mx-auto mb-4"
              />
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/antidrugagency" target="_blank" rel="noopener noreferrer" className="text-blue-600">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/antidrugagency" target="_blank" rel="noopener noreferrer" className="text-pink-600">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 shadow-lg">
          <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://maps.google.com/maps?q=123%20Main%20Street%2C%20City%2C%20Country&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
              title="AntiDrug Agency Location"
              aria-label="AntiDrug Agency Location"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 px-4">
          <div className="text-center mb-4">
            <span className="text-2xl font-bold ">Get In Touch</span>
          </div>
          <div className="text-center">
              <h1 className='text-green-700 font-bold text-3xl'>AntiDrug Agency</h1 >
            <p className="text-lg">
              <br />
              123 Main Street, Suite 456,
              <br />
              City, Country,
              <br />
              Phone: 123-456-7890
            </p>
            <p>
              <a href="mailto:contact@antidrugagency.com" className="text-blue-600 underline">
                contact@antidrugagency.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>


      <Footer/>
      
      
      </>)
}

export default About