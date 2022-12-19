import { Box, Grid, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
const menslogos = [
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/846beb79-ada7-48c3-a6c6-4448f276c2111651599573979-Sports-Shoes_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg",
];

const TopBrands = [
  {
    img1: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg",
    img2: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg",
  },
  {
    img1: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg",
    img2: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg",
  },
  {
    img1: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg",
    img2: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg",
  },
  {
    img1: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg",
    img2: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg",
  },
];

const category = [
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg",
];

const footwear = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7472ab66-adf2-4d1d-9379-4770a73c1efe1597841103172-Content-sportswear-brand-proline.png",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/65bafbc5-f83b-4158-8168-f7553043814c1597841103082-Content-sportswear-brand-Asics.png",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg",
];

const indianwear = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/83d9ca97-4aa3-46ce-bd28-b135d3b94a021595935030673-Content-ethnicwear-essentials-everydaykurtas.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9d248917-d1b0-4910-8de0-4ed7c2b4af8e1595935030939-Content-ethnicwear-trends-printedkurtaset.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/0d1e0a28-3088-4719-a692-4cdaa7a33cc71597840342726-Content-ethnicwear-occasion-casuallook.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a9f68785-e282-425a-b270-c978c387b0f31597840342635-Content-ethnicwear-color-whites.jpg",
];
function Home() {
  const slide = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const carousel = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
    ],
  };
  let user = useSelector((store) => store.user.data);
  console.log(user);

  return (
    <div>
      <Navbar user={user} />

      <Box w="90%" m="auto">
        <Box
          m="50px 0px"
          boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
        >
          <Slider {...slide}>
            {menslogos.map((img, i) => {
              return (
                <div key={img}>
                  <Link to="/mens">
                    <Image src={img} alt={i} />
                  </Link>
                </div>
              );
            })}
          </Slider>
        </Box>
        <Box>
          <Text
            m="20px 0"
            fontSize={{ base: "16px", sm: "20px", md: "25px" }}
            fontWeight={500}
            letterSpacing={{ base: 1, sm: 2, md: 3 }}
          >
            BIGGEST DEALS ON TOP BRANDS
          </Text>
          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={{ base: "8", sm: "12", md: "16" }}
          >
            {TopBrands.map((img, i) => {
              return (
                <div key={i}>
                  <Link to="/mens">
                    <Image src={img.img1} alt={i} />
                    <Image src={img.img2} alt={i} />
                  </Link>
                </div>
              );
            })}
          </Grid>
        </Box>
        <Box>
          <Text
            m="20px 0"
            fontSize={{ base: "16px", sm: "20px", md: "25px" }}
            fontWeight={500}
            letterSpacing={{ base: 1, sm: 2, md: 3 }}
          >
            CATEGORIES TO BAG
          </Text>
          <Slider {...carousel}>
            {category.map((img, i) => {
              return (
                <div key={i}>
                  <Link to="/mens">
                    {" "}
                    <Image src={img} alt={i} />
                  </Link>
                </div>
              );
            })}
          </Slider>
        </Box>
        <Box>
          <Text
            m="20px 0"
            fontSize={{ base: "16px", sm: "20px", md: "25px" }}
            fontWeight={500}
            letterSpacing={{ base: 1, sm: 2, md: 3 }}
          >
            TRENDING IN INDIAN WEAR
          </Text>
          <Slider {...carousel}>
            {indianwear.map((img, i) => {
              return (
                <div key={i}>
                  <Link to="/mens">
                    <Image src={img} alt={i} />
                  </Link>
                </div>
              );
            })}
          </Slider>
        </Box>
        <Box>
          <Text
            m="20px 0"
            fontSize={{ base: "16px", sm: "20px", md: "25px" }}
            fontWeight={500}
            letterSpacing={{ base: 1, sm: 2, md: 3 }}
          >
            TRENDING IN SPORTS WEAR
          </Text>
          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={{ base: "8", sm: "12", md: "16" }}
          >
            {footwear.map((img, i) => {
              return (
                <div key={i}>
                  <Link to="/mens">
                    <Image src={img} alt={i} />
                  </Link>
                </div>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
