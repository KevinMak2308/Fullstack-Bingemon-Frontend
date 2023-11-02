import {Text, Image, Box, VStack} from '@chakra-ui/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Contentbox() {
    const percentage = 66;

    return (
        <VStack>


            <Image
                mb={{sm:"9px", md:"10px", lg:"11px"}}
                _hover={{transform: "scale(1.1)", filter: "auto", blur:"2px"}}
                transition=".2s"
                boxSize='200px'
                borderRadius="lg"
                src='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'/>

            <Box
                boxSize="50px"
                z-index="2"
                position="absolute"
                mt="135px"
                mr="125px"
            >
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    background
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',

                        // Text size
                        textSize: '25px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Colors
                        pathColor: `rgba(255, 252, 5, ${percentage / 100})`,
                        textColor: '#ffffff',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#000000',
                    })}
                />
            </Box>

            <Text
                fontSize={{sm:'18px', md:'22px', lg:'24px'}}
                fontWeight="bold"
                _hover={{color: "#E42F2F"}}
            >Movie Name</Text>
            <Text
                fontSize={{sm:'10px', md:'12px', lg:'14px'}}
            >23 jun 2021</Text>
        </VStack>
    );
}

export default Contentbox;
