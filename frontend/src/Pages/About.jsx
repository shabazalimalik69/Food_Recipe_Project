
 import style from "./Common.module.css"
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  About = () => {
  var settings = {
    autoplay: true,
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover:true,
  };
  return (
    <Box className={style.body}>
    <Slider {...settings}>
      <Box>
      <Image className={style.imag} src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/newscms/2022_23/1877787/jj-smith-te-main-220606.jpg" alt="image"/>
      </Box>
      <Box>
      <Image className={style.imag} src ="https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg" alt=""/>
      </Box>
      <Box>
        <Image className={style.imag} src="https://images.hindustantimes.com/img/2023/01/20/550x309/photo_2023-01-20_00-15-30_1674202591634_1674202596903_1674202596903.jpg"/>
      </Box>
      <Box>
        <Image className={style.imag} src="https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg"/>
      </Box>
      <Box>
        <Image className={style.imag} src="https://www.seriouseats.com/thmb/BBksd7FXnrkxFa8Dipf_LmgP9HA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Filipino-Features-Hero-Final-2-b785e627967843b0aa631c6a977adabe.jpg"/>
      </Box>
      <Box>
        <Image className={style.imag} src="https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg"/>
      </Box>
      <Box>
        <Image className={style.imag} src="https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg"/>
      </Box>
      <Box>
        <Image className={style.imag} src="https://www.aldi.us/fileadmin/fm-dam/Recipes/2022/Featured_Recipe/PB_J_Banana_Bites_Featured_Recipe.jpg" />
      </Box>
      <Box>
        <Image className={style.imag} src="https://irepo.primecp.com/2022/12/544963/Strawberry-French-Toast-Roll-Ups-8131-H_Large600_ID-5038789.jpg?v=5038789" />
      </Box>
      <Box>
        <Image className={style.imag} src="https://www.foodandwine.com/thmb/AcsX4qdM-DfR8sV4bRcRTzQwu28=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-swiss-cheese-fondue-FT-RECIPE0422-35e22a24bcb24899840568271197377b.jpg" />
      </Box>
    </Slider>
    </Box>
  );
}

export default About