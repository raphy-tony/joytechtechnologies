import {services} from "../assets";
import styles, { layout } from "../style";
import Image from 'next/image'

import { motion } from 'framer-motion';
import { TitleText} from '.';

import { fadeIn, staggerContainer,planetVariants } from '../utils/motion';

const Services = () => (
  <motion.section id="visa" className={`flex flex-col lg:flex-row ${styles.paddingY}`} >
    <motion.div className={layout.sectionInfo}>
      <TitleText
        title={(
        <h2>
          Services We Offer
        </h2>
        )}
        textStyles=" "
      />     
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Joytech Technologies main specialty is the Sales & Services, Supply, installation and
          commissioning of electric fence and razor wire, Supply and installation of CCTV cameras,
          Supply and repair & Maintenance of Computers, Printers, Stationeries, Tonners, Cartridges,
          Software Installation, Printing Services, Designing, Photograph, Video games & Cameras, and
          all related ICT appliances and accessories. We also offer Travel Consultation Services
        </p>
      </motion.div>

      <div className={`flex-end ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10`}>
        <div className="sm:h-[400px]">
          <Image src={services} alt="services" className="w-[100%] h-[100%]" />
        </div>
      </div>
  </motion.section>
);

export default Services;
