import React, { useContext, useState } from "react";
import "@/Components/Works/Works.css";
import hroseHD from "@/Components/Works/hroseHD.png";
import Logoactic from "@/Components/Works/Logoactic.png";
import web from "@/Components/Works/web.png";
import LogoComorLab from "@/Components/Works/LogoComorLab.png";
import logoacticacademy from "@/Components/Works/logoacticacademy.png";
import { motion } from "framer-motion";
// import {Link} from 'react-scroll'

type PartenerType = {
    title: string
    description: string
}


export default function Works(){
  // context
//   const texts = ["Texte du div 1", "Texte du div 2", "Texte du div 3", "Texte du div 4", "Texte du div 5"];
//   const titre = ["Titre 1", "Tittre 2", "Titre 3", "Titre 4", "Titre 5"];
//   const soutitre = ["souTitre 1", "souTittre 2", "souTitre 3", "souTitre 4", "souTitre 5"];

    // const titre = ["Comor'Lab","Actic","Actic Academy","24 by Webcup","LeCube"];

    // const description = [
    //     "Comor’Lab est un espace de Coworking imaginé par l’association comorienne des technologies de l’information et de la communication (ACTIC), afin de répondre à un besoin de mutualisation des ressources logistiques et humaines, dans le but de créer une synergie et d’aider à la montée en compétences des startups et entrepreneurs comoriens du numérique. Cet espace a pour ambition d’être un lien d’échanges, de partage et d’apprentissage orienté entreprenariat et innovation.",
    //     "Principale association comorienne des Technologies de l’Information et de la Communication, L'ACTIC, s'est fait défenseur des intérêts des utilisateurs de l’internet, elle est l’interlocuteur privilégié des parties prenantes et des autorités publiques. Son rôle a évolué avec le développement d'activités professionnelles du secteur.",
    //     "Nous sommes un centre de formation technique et d'insertion professionnelle aux métiers du numérique. Nous nous trouvons sur les îles de Ndzuawani, Ngazidja et Mwali.",
    //     "Le 24 heures by Webcup est un concours annuel de développement web, entre les îles des Comores, Madagascar, Maurice, Rodrigues, Mayotte, La Réunion et Les Seychelles. Elles concourent simultanément avec le même sujet pour sélectionner l’équipe qui les représentera en fin d’année à la finale internationale de l’océan Indien.",
    //     "Le Cup insertion"
    // ];


    const parteners : Array<PartenerType> = [
        {
            title: "Comor'lab", description: "Comor’Lab est un espace de Coworking imaginé par l’association comorienne des technologies de l’information et de la communication (ACTIC), afin de répondre à un besoin de mutualisation des ressources logistiques et humaines, dans le but de créer une synergie et d’aider à la montée en compétences des startups et entrepreneurs comoriens du numérique. Cet espace a pour ambition d’être un lien d’échanges, de partage et d’apprentissage orienté entreprenariat et innovation."
        },
        {
            title: 'Actic', description: "Principale association comorienne des Technologies de l’Information et de la Communication, L'ACTIC, s'est fait défenseur des intérêts des utilisateurs de l’internet, elle est l’interlocuteur privilégié des parties prenantes et des autorités publiques. Son rôle a évolué avec le développement d'activités professionnelles du secteur."
        },
        {
            title:"Actic Academy",
            description:"Nous sommes un centre de formation technique et d'insertion professionnelle aux métiers du numérique. Nous nous trouvons sur les îles de Ndzuawani, Ngazidja et Mwali."
        },
        {
            title:"24 by Webcup",
            description:"Le 24 heures by Webcup est un concours annuel de développement web, entre les îles des Comores, Madagascar, Maurice, Rodrigues, Mayotte, La Réunion et Les Seychelles. Elles concourent simultanément avec le même sujet pour sélectionner l’équipe qui les représentera en fin d’année à la finale internationale de l’océan Indien."
        },
        {
            title:"LeCube",
            description:"Le Cup insertion"
        }
    ]


  const [partener, setPartener] = useState<PartenerType>(parteners[3]);

  const handleDivClick = (index: number) => {
    setPartener(parteners[index]);
  };
  const titreVariant = {
    visible: {
      y: 0,
      transition: {
        duration: 1,

      },
    },
    hidden: { y: '-20vh' },
  }


  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome mb-3">
          {/* dark Mode */}
          <motion.span variants={titreVariant} animate="visible" initial="hidden" style={{"marginBottom":" 20px"}}>
            {partener.title}
          </motion.span>

            <motion.p
            initial ={{opacity:0, y:'-150px'}}
            animate={{opacity:1, y:0}}
            transition={{duration:4, delay:5}}
            style={{fontSize:"1rem",color:"black"}}>
                {partener.description}
            </motion.p>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <div className="azad">
            <motion.div
            initial={{ rotate: 360 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{
                duration:5,
                delay:0,
                type: "spring",
                repeat:Infinity, }}
            className="w-mainCircle"
            >
            <div className="w-secCircle">
                <img src={LogoComorLab} alt="description"   onClick={()=>handleDivClick(0) } />
            </div>
            <div className="w-secCircle">
                <img src={Logoactic} alt="description1"  onClick={()=>handleDivClick(1) } />
            </div>
            <div className="w-secCircle">
                <img src={hroseHD} alt="description2"   onClick={()=>handleDivClick(3)} />
            </div>
                <div className="w-secCircle">
                <img src={logoacticacademy} alt="description3"  onClick={()=>handleDivClick(2) } />
                </div>
            <div className="w-secCircle">
                <img src={web} alt="description4"  onClick={()=>handleDivClick(4) } />
            </div>
            </motion.div>
            {/* background Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
};


