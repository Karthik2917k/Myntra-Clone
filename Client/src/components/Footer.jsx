import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box borderTopWidth={1} borderStyle={"solid"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Text color="grey.700" fontSize={"20px"} fontWeight={600}>
              Company
            </Text>
            <Link to="/">About Us</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text color="grey.700" fontSize={"20px"} fontWeight={600}>
              Support
            </Text>
            <Link to="/">Help Center</Link>
            <Link to="/">Safety Center</Link>
            <Link to="/">Community Guidelines</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text color="grey.700" fontSize={"20px"} fontWeight={600}>
              Legal
            </Text>
            <Link to="/">Cookies Policy</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Law Enforcement</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text color="grey.700" fontSize={"20px"} fontWeight={600}>
              Install App
            </Text>
            <Image
              w="50%"
              h="30%"
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              alt="playstore"
            />
            <Image
              w="50%"
              h="30%"
              src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              alt="apple"
            />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 Myntra All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <FaTwitter />

            <FaYoutube />

            <FaInstagram />
          </Stack>
        </Container>
      </Box>
      <Box w="80%" m="auto" color={"gray.400"}>
        <Box>
          <Text color={"gray.700"} as="b">MYNTRA APP</Text>
          <Text>
            Myntra, India’s no. 1 online fashion destination justifies its
            fashion relevance by bringing something new and chic to the table on
            the daily. Fashion trends seem to change at lightning speed, yet the
            Myntra shopping app has managed to keep up without any hiccups. In
            addition, Myntra has vowed to serve customers to the best of its
            ability by introducing its first-ever loyalty program, The Myntra
            Insider. Gain access to priority delivery, early sales, lucrative
            deals and other special perks on all your shopping with the Myntra
            app. Download the Myntra app on your Android or IOS device today and
            experience shopping like never before!
          </Text>
        </Box>
        <Box>
          <Text color={"gray.700"} as="b">HISTORY OF MYNTRA</Text>
          <Text>
            Becoming India’s no. 1 fashion destination is not an easy feat.
            Sincere efforts, digital enhancements and a team of dedicated
            personnel with an equally loyal customer base have made Myntra the
            online platform that it is today. The original B2B venture for
            personalized gifts was conceived in 2007 but transitioned into a
            full-fledged ecommerce giant within a span of just a few years. By
            2012, Myntra had introduced 350 Indian and international brands to
            its platform, and this has only grown in number each passing year.
            Today Myntra sits on top of the online fashion game with an
            astounding social media following, a loyalty program dedicated to
            its customers, and tempting, hard-to-say-no-to deals.
          </Text>
        </Box>
        <Box>
          <Text color={"gray.700"} as="b" >SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</Text>
          <Text>
            Another reason why Myntra is the best of all online stores is the
            complete convenience that it offers. You can view your favourite
            brands with price options for different products in one place. A
            user-friendly interface will guide you through your selection
            process. Comprehensive size charts, product information and
            high-resolution images help you make the best buying decisions. You
            also have the freedom to choose your payment options, be it card or
            cash-on-delivery. The 30-day returns policy gives you more power as
            a buyer. Additionally, the try-and-buy option for select products
            takes customer-friendliness to the next level.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
