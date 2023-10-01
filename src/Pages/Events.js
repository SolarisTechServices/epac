import React, { useState } from 'react'
import Navibar from '../Components/Navibar'
import Footeri from '../Components/Footer'
import { Carousel, Card } from 'flowbite-react'
import { natframes, eve_natframes1, eve_natframes2} from '../Images'
import { Navbar, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logo } from '../Images'


function Events() {
  const [showMore, setShowMore] = useState(false);
  const jumanji_text = "There's a somewhat soft scent lying upon these woods of pattering rain, of soothing herbs, ofhidden gold and untoward intentions. There's gold to be found and glory to be had, so step up and Sherlock your way through a checkpoint-dictated meander and claim victory before the nefariouslyevil competition gets its grubby mitts on the loot!"
  const vmw_text = "On the occasion of Van Mahotsav, the Environment Protection and Awareness Club organized a Virtual Van Mahotsav where we distributed saplings at selected cities. The cities opted were Ranchi, Agartala, Mamroda, Lucknow and Jamshedpur. We distributed 25 saplings in Ranchi, 15 saplings in Agartala, 501 saplings in Mamroda, 25 saplings in Lucknow and 89 saplings in Jamshedpur. Also, we provided 8 fruit bearing plans to BIT, Mesra. We were supported by some awesome nurseries like Saini Nursery, Didwana, Rajasthan, Bagiya, The Garden Shop in Jamshedpur, Tirupati Hi-tech Nursery in Lucknow, House of Plants in Agartala, and Shankar Nursery in Ranchi and sincere gratitude to Gram Vikas Sewa Samiti, Mamroda for the voluntary contribution in the distribution of 501 plants in this noble cause"
  const nat_text = "The Nat Frames was conducted from 19/03/2022 to 20/03/2022 in association with Photographic Society, in online mode. Participants were required to upload their details along with their clicked picture in a google form. The Picture was required to be a original work of the participant and any type of forgery led to disqualification. The top-3 pictures were selected and felicitated."
  const jsef_text = "JSEF is our Flagship event held every year in January and February. With this event,we aim to encourage the young generation to protect and preserve the environment.JSEF is a multi-day fest filled with   enthralling events such as debates,lucky brainiacs,penolution and AdSense.JSEF is alsoone of the largest Science-Environmental fests in the East zone with the participation of more than 25+ schools and 500students. JSEF has been restricted to the East zone for the past few years but in the year 2018 we had decided to spread our wings to the entire country."
  const dmtp_text = "This beautiful nature turns into most horrible nightmares at times.DMTP ensures that we are prepared for such times of need.Living in an earthquake prone area demands preparation for the worst cases."
  return (
    <div className='min-h-screen'>
          <Navbar className=' bg-green-200'
      fluid
      rounded
    >
      <Navbar.Brand href="#">
        <img
          alt="EPAC React Logo"
          className="mr-3 h-5 sm:h-16"
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white mb-2">
          EPAC
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          Events
        </Button>
        <Navbar.Toggle 
        className='mx-4'/>
      </div>
      <Navbar.Collapse
      className='m-4'>
        <Link  to='/'>
        <Navbar.Link
          
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        </Link>
        <Link  to='/events text-white'>
        <Navbar.Link active href="#">
          Events
        </Navbar.Link>
        </Link>
        <Link  to='/team'>
        <Navbar.Link href="#">
          Our Team
        </Navbar.Link>
        </Link>
        <Link  to='/gallery'>
        <Navbar.Link href="#">
          Gallery
        </Navbar.Link>
        </Link>
        <Link  to='/contact'>
        <Navbar.Link href="#">
          Contact Us
        </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>

      {/* Jsef */}
      <div>
        <center>
          <h5 className="text-4xl font-bold tracking-tight mt-8 mb-8 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Our Events</span>
            </p>
          </h5>
          <h5 className="text-2xl font-bold tracking-tight mt-4  text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Jharkhand Science and Environment Festival</span>
            </p>
          </h5>
        </center>
        <Carousel className='h-96 w-auto ml-5 mr-5 mb-4 '  >
        <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1rSFyo2B-Te-U7udR4ulHSTB132aO8_V-"
            />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1PSnmdIoVElEFYQtXrNCdDg49fJJ-YWWS"
            />
            <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1lOj8e1vtg3JJp6d-XdddTOvtw_w_8Yt7"
            />
        </Carousel>
        <center>

          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Media and Coverage</span>
            </p>
          </h5>
        </center>

        <Carousel className='h-96 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1sn1zNO0HBCFABjXWmqEdfys6kua7S4ko"
            />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1sjzik2cQJCh2YOE4vu_hmtjqI6imxJQp"
            />
            <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1ZQz1CUS56ibkX01eKqgTIyA2A1wCbgKa"
            />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1hYUfCrE78x6Uj_LZa98PUszQbH05V5vx"
            />
          <img  className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1puiBAzV6kqPClOrc9-0ixrZpJyXgNVGM"
          />
        </Carousel>

        {/* https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID */}
        <center>
          <video className='sm: h-auto w-auto  md:w-auto md:ml-4 md:mr-4 lg:h-[480px] w-auto  mb-8'
            src="https://drive.google.com/uc?id=1hVQd2hCIW4jkkBHBF7PyfBGb8kQzqqCj" controls>
          </video>
          <video className='sm: h-auto w-auto  md:w-auto md:ml-4 md:mr-4 lg:h-[480px] w-auto  mb-8'
            src="https://drive.google.com/uc?id=1yH7XDO2QR97KlL_h82_6KEQre-bIVd6Q" controls>
          </video>
          </center>
          


        <Card className='w-auto mx-6 mb-4 bg-green-100'
          href="#"
        >
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              {showMore ? jsef_text : `${jsef_text.substring(0, 250)}`}
              <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
            </p>
          </p>
        </Card>
      </div>

      {/* Jumanji */}
      <div>
        <center>

          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Jumanji</span>
            </p>
          </h5>

        </center>
        {/* https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID */}
        <Carousel className='h-96 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1Xq64C6KHUil5nJ-GPc7bcjOpDV6p-OI5"
            />
            
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=18RYP2zeolptehiuCgMmb_cdDZPQll4X2"
            />
            <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1p3KJGeiLW6GQnvwnTtSU_o9LdC5DqORV"
            />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1m4hi_K6BLF1e2ThLcKSAFP_duDIHCITk"
            />
          <img  className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1PnI13YThq5PS1kladynxYHPDD4gUbieJ"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1PiPXJ2Jq8u5RCDMUqtZoMCCR6L8oMYCL"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1Eeq1d_3mHVxURLdAGsUimcALtvXm24ah"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=17IqJzYAxRI-ur9Fn2Sgy4-8rJ8hVg0k9"
          />
          
        </Carousel>
        <center>
          <video className='sm: h-auto w-auto  md:w-auto md:ml-4 md:mr-4 lg:h-[480px] w-auto  mb-8'
            src="https://drive.google.com/uc?id=1Xq64C6KHUil5nJ-GPc7bcjOpDV6p-OI5" controls>
          </video>
          </center>
        <Card className='w-auto mx-6 mb-4 bg-green-100'
          href="#"
        >

          <center className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span>
            </p>
          </center>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              {showMore ? jumanji_text : `${jumanji_text.substring(0, 250)}`}
              <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
            </p>
          </p>
        </Card>
      </div>
      
      {/* Natframes */}
      <div>
        <center>
          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Nat Frames</span>
            </p>
          </h5>

        </center>

        <Carousel className='h-80 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src={natframes}
          />
          <img className='object-contain h-full '
            alt="..."
            src={eve_natframes1}
          />
          <img className='object-contain h-full '
            alt="..."
            src={eve_natframes2}
          />

        </Carousel>
        <Card className='w-auto mx-6 mb-4 bg-green-100'
          href="#"
        >

          <center className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span>
            </p>
          </center>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              {showMore ? nat_text : `${nat_text.substring(0, 250)}`}
              <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
            </p>
          </p>
        </Card>
      </div>

      {/* Van Mahotsav Week */}
      <div>
        <center>

          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Van Mahotsav Week</span>
            </p>
          </h5>
          </center>


          <Carousel className='h-80 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=13et8dK4h_i56txcB4uvH_JLprJTW6zga"
            />
            <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1OctYjpB0-hCL0nDJ2qjMoJnTJ831d9q4"
            />
            <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=13CApd98xkpoudQhX-xktEZfpbqxU9ku_"
            />
            <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1Gt_xRVFEgm80YJ0XA6JTINbkskU4A6UC"
            />
            <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1E2mmRzZ5sVZXZUDaiAO8JRqeTBtPSjdP"
            />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1THaFrXYfc1ipSk8TqSzfP3oZcWVQH_Xl"
            />
            <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=142R01wCvott5ygSkRN_ROvSyBXr-uglF"
            />
          </Carousel>
          

          <Card className='w-auto mx-6 mb-4 bg-green-100'
            href="#"
          >
            

            <center className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span>
              </p>
            </center>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                {showMore ? vmw_text : `${vmw_text.substring(0, 250)}`}
                <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
              </p>
            </p>
          </Card>
        
      </div>

      {/* dmtp */}
      <div>
        <center>

          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Disaster Management training Programme</span>
            </p>
          </h5>
          </center>


          <Carousel className='h-80 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1AjZnS5qYpNvBlYorhpZ8_mdVVztDP5_Z"
            />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1qXTvbfHxUck6Pz-Fv5-yXMn9-S65jJYH"
            />
            <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=15gLOgobtGm5GUtyEzi2s0Nb3QsdocUhU"
            />
          </Carousel>
          

          <Card className='w-auto mx-6 mb-4 bg-green-100'
            href="#"
          >
            <center className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span>
              </p>
            </center>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                {showMore ? dmtp_text : `${dmtp_text.substring(0, 250)}`}
                <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
              </p>
            </p>
          </Card>
        
      </div>

      {/* World Environment Day */}
      <div>
        <center>

          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">World Environment Day</span>
            </p>
          </h5>
          </center>


          <Carousel className='h-80 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1Yzt1mjECAH22euNCM2NidFOhrVCkYf4j"
            />
            
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1eHbAHN1G0eVKdktvoh8BoavhwNbzAgdf"
            />
          </Carousel>
          <center>
            <video className='sm: h-auto w-auto  md:w-auto md:ml-4 md:mr-4 lg:h-[480px] w-auto  mb-8'
              src="https://drive.google.com/uc?id=1JJlhoOwfEWBuGQP0a17Wul8lkzlQ5UjI" controls>
            </video>
          </center>
          <Card className='w-auto mx-6 mb-4 bg-green-100'
            href="#"
          >
            <center className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span>
              </p>
            </center>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                {showMore ? dmtp_text : `${dmtp_text.substring(0, 250)}`}
                <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
              </p>
            </p>
          </Card>
      </div>
      <Footeri />
    </div>
  )
}

export default Events