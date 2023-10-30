// import styles from './page.module.css'

import { FeaturesAsymmetrical } from "@/components/FeaturesAsymmetrical/FeaturesAsymmetrical";
import { HeroContentLeft } from "@/components/HeroContentLeft/HeroContentLeft";
import { HeroText } from "@/components/HeroText/HeroText";
import { Box, Center, Flex } from "@mantine/core";

export default function Home() {
    return (
        <>
            {/* <Flex w='100%' h='100vh' align='center'>
                <Box w='100%'> */}
            {/* <HeroText /> */}
            <HeroContentLeft />
            <Box py='xl'>
                <FeaturesAsymmetrical />
            </Box>
            {/* </Box>
            </Flex> */}
        </>
    )
}