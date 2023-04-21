import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs';

import { useState } from 'react';

const SpotifySlider = () => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  return (
    <Box display="flex" alignItems="center" w={'100px'}>
      <BsFillVolumeMuteFill color='white' boxSize={10} />
      <Slider
        defaultValue={50}
        value={volume}
        min={0}
        max={100}
        onChange={handleVolumeChange}
        colorScheme="green"
        size="lg"
        ml={2}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={1} />
      </Slider>
      {/* <BsFillVolumeUpFill /> */}
    </Box>
  );
};

export default SpotifySlider;
