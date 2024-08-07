import '../App.css'
// import Donor from '../Components/Donor'
import Footer from '../Components/Footer'
import MobileNavbar from '../Components/MobileNavbar'
import Navbar from '../Components/Navbar'
import StripRating from '../Components/StripRating'
import Testimonials from '../Components/Testimonials'

function Home() {

  return (
    <>
        <Navbar /> 
        <MobileNavbar/>
        <section className="text-white body-font bg-no-repeat bg-cover bg-center" style={{backgroundImage:'URL("/bg.png")'}}>
        <div className='bg-[#00000090] '>

  <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
    
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-6xl text-3xl mb-4 font-extrabold text-gray-100">Zindagi Welfare Organization</h1>
      <p className="mb-8 leading-relaxed">ZINDAGI Welfare Organization (ZWO) is a charitable, not-for-profit organization, for providing services to the most marginalized and vulnerable groups in society.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#353980] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Us</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">About Us</button>
      </div>
    </div>
  </div>
  </div>

</section>

<StripRating/>


<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Our Background Story
      </h1>
      <p className="mb-8 leading-relaxed">At the first quarter of 21st century that the necessity for a drug treatment and rehabilitation facility was envisaged. At that time drug abuse problems were increasing progressively in Pakistan and more specifically in NWFP/FATA (now Khyber Pakhtunkhwa) due to easy availability of cheap drugs.<br/>
A combination of economic, social and political factors in the region contributed to the escalation of drug related issues, crimes, social disorder, injustices, poverty and human rights abuses. Since there were hardly any rehabilitation facilities to cater to the affected population, the Founding members were motivated to establish the ZINDAGI Welfare Organization  (a not-for-profit NGO) under the Societies Registration Act, 1860. It started functioning in rented premises. The pioneering role of ZINDAGI Welfare Organization is now recognized both nationally and internationally.
.</p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/about.jpeg" />
    </div>
  </div>
</section>


<Testimonials/>

{/* <Donor/> */}




        <Footer />     
    </>
  )
}

export default Home
