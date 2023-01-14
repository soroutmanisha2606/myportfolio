import React from "react";



import { Link } from "react-scroll";
import { motion } from "framer-motion";


import "../newstyles/Homenew.css";
import { Heading, Image, Text } from "@chakra-ui/react";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const HomeNew = () => {
  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <Heading>Hi There, (^人^)</Heading>
        <Heading>I’m Nidhish Pareek</Heading>
        <Text>I am a MERN stack developer. </Text>
        <Link
          className="home-btn"
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          See My Work
        </Link>
      </motion.div>

      <motion.div
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <Image src="https://camo.githubusercontent.com/5ff9182d12e799168a3bb67b88df7388ae08ede3/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3837352f312a7164415731546a434e353768316c6275757a766368672e676966" zIndex={'1'} style={{height:"400px",width:"400px"}} alt="Developer" />
      </motion.div>
    </section>
  );
};

export default HomeNew;