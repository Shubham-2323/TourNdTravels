import React from 'react'
import './Main.css'
import './Main.scss'
import img from '../../Assests/img(1).jpg'
import img2 from '../../Assests/img(2).jpg'
import img3 from '../../Assests/img(3).jpg'
import img4 from '../../Assests/img(4).jpg'
import img5 from '../../Assests/img(5).jpg'
import img6 from '../../Assests/img(6).jpg'
import img7 from '../../Assests/img(7).jpg'
import img8 from '../../Assests/img(8).jpg'
import img9 from '../../Assests/img(9).jpg'
import img10 from '../../Assests/img(10).jpg'

import { MdAddLocationAlt } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


// data
const data = [{

  id: 1,
  imgSrc: img2,
  destTitle: 'Taj Mahal',
  location: 'India',
  grade: 'Cultural Architecture',
  fees: '$500',
  description: "Majestically located on the banks of Yamuna River, this wonder of the world was built by the Mughal Emperor Shah Jahan as a memorial for his beloved wife Mumtaz Mahal.."
}, {
  id: 2,
  imgSrc: img10,
  destTitle: 'Niagara Falls',
  location: 'New York',
  grade: 'Relax',
  fees: '$1000',
  description: "Niagara Falls, waterfall on the Niagara River in northeastern North America, one of the continent’s most famous spectacles. The falls lie on the border between Ontario, Canada, and New York state."
},
{
  id: 3,
  imgSrc: img3,
  destTitle: 'Zurich',
  location: 'Switzerland',
  grade: 'Winter Enjoy',
  fees: '$1200',
  description: "Thanks to its vicinity to many ski regions, Zurich is the perfect base for winter enthusiasts who want to combine activities in the snow with culture and cuisine.."
},
{
  id: 4,
  imgSrc: img4,
  destTitle: 'Machu Picchu',
  location: 'South America',
  grade: 'Ancient civilisation',
  fees: '$700',
  description: "In 2007, Machu Picchu was voted one of the New Seven Wonders of the World. Known to some as a ‘lost city’, in fact there were several farming families living in the surrounds of Machu Picchu when it was discovered by the explorer Hiram Bingham in 1911."
},
{
  id: 5,
  imgSrc: img5,
  destTitle: 'Bali',
  location: 'Indonesia',
  grade: 'Relax',
  fees: '$800',
  description: "An exotic tropical destination that flaunts scenic beaches and mountains, Bali is deep-rooted in culture and tradition, which adds to the charm of this scenic island."
},
{
  id: 6,
  imgSrc: img6,
  destTitle: 'The Forbidden City',
  location: 'China',
  grade: 'Cultural Relax',
  fees: '$600',
  description: "The Forbidden City is a large precinct of red walls and yellow glazed roof tiles located in the heart of China’s capital, Beijing. ."
},
{
  id: 7,
  imgSrc: img7,
  destTitle: 'Louvre',
  location: 'Paris',
  grade: 'Cultural ',
  fees: '$900',
  description: "It is the world’s most-visited art museum, with a collection that spans work from ancient civilizations to the mid-19th century."
},
{
  id: 8,
  imgSrc: img8,
  destTitle: 'Disneyland',
  location: 'California',
  grade: 'Fun Enjoyment',
  fees: '$1500',
  description: "Disneyland is a theme park at the Disneyland Resort in Anaheim, California. It was the first theme park opened by The Walt Disney Company."
},
{
  id: 9,
  imgSrc: img9,
  destTitle: 'Lake Powell',
  location: 'New Zealand',
  grade: 'Vacation',
  fees: '$800',
  description: "Lake Powell is an artificial reservoir on the Colorado River in Utah and Arizona, United States. It is a major vacation destination visited by approximately two million people every year."
},
{
  id: 10,
  imgSrc: img,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade: 'Cultural Relax',
  fees: '$900',
  description: "Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora’s, lush, blossom with hibiscus."
},

]

const Main = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className='title'>
          Most Visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
          return (
            <div key={id} data-aos='fade-up'className='singleDestination'>
              <div className="imagediv">
                <img src={imgSrc} alt={destTitle} />
              </div>
              <div className="card-info">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <MdAddLocationAlt className='icon' />
                  <span className="name">{location}</span>
                </span>


                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className='btn flex'>
                  Details <FaRegClipboard className='icon' />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Main
