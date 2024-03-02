import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btc from "../Assets/btc.png";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {" "}
      <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} marginTop={"20"}>
        <motion.div
          style={{
            height: "80vh",
          }}
          animate={{
            translateY: "20px",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            w={"full"}
            h={"full"}
            objectFit={"contain"}
            src={btc}
            filter={"grayscale(1)"}
          />
        </motion.div>

        <Text
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={"thin"}
          color={"whiteAlpha.700"}
          mt={"-20"}
        >
          Xcrypto
        </Text>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default Home;
