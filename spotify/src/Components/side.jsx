
import { Flex,  Box } from '@chakra-ui/react';

const Sidebar = () => {
  
    return (
        <Flex h="100vh">
          <Box
            w="250px"
            minW="100px"
            maxW="500px"
            bg="gray.800"
            handleStyles={{
              left: {
                bg: 'gray.700',
              },
              right: {
                bg: 'gray.700',
              },
            }}
          >
            {/* Sidebar content goes here */}
          </Box>
          <Box flex="1">
            {/* Main content goes here */}
          </Box>
        </Flex>
  );
};

export default Sidebar;
