// import styles from './page.module.css'
import Image from "next/image";
import { Box, Button, Container, Link, Typography } from "@mui/joy";

export default function Home() {
    return (
        <>
            <Container sx={{ height: '100%' }}>
                <Box className='flying'>
                    <Link href='/calculator'>
                        {/* <Typography variant="solid" color="primary" noWrap>
                            udregn løn
                        </Typography> */}
                        <Button color='neutral' size='lg'>
                            udregn løn
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ height: '100%' }}>
                    <Box sx={{ height: '100%' }}>
                        <Typography className="infoText">
                            Lønsedler kan være sværre og forvirrende at forstå. Du er i tvivl om lønsedlen er rigtigt og om du den løn du har arbejdet for.
                        </Typography>
                    </Box>
                    <Box className='homeSvgBox'>
                        <span>
                            Få den løn du fortjener
                        </span>
                    </Box>
                </Box>
            </Container>
        </>
    )
}