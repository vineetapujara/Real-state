import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout, FcCollapse } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex
      bg="#89d9a9"
      align="center"
      p="2"
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Box ml={6} fontSize="3xl" color="#32a852" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Sweet Home
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Flex>
          <Flex
            pos="fixed"
            top="1rem"
            right="1rem"
            align="center"
            justifyContent="space-between"
          ></Flex>
          <Flex
            justifyContent="space-between"
            bgColor="transparent"
            mr="10"
            display={["none", "none", "flex", "flex"]}
          >
            <Link href="/" passHref>
              <Button
                variant="ghost"
                my={5}
                w="100%"
                bgColor="transparent"
                icon={<FcHome />}
              >
                Home
              </Button>
            </Link>
            <Link variant="ghost" my={5} w="100%" href="/search" passHref>
              <Button
                as="a"
                variant="ghost"
                mr={4}
                my={5}
                w="100%"
                bgColor="transparent"
                icon={<BsSearch />}
              >
                Search
              </Button>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <Button
                as="a"
                variant="ghost"
                my={5}
                mr={9}
                w="100%"
                bgColor="transparent"
                icon={<FcAbout />}
              >
                Buy Property
              </Button>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <Button
                as="a"
                variant="ghost"
                my={5}
                w="100%"
                bgColor="transparent"
                icon={<FiKey />}
              >
                Rent Property
              </Button>
            </Link>
          </Flex>

          {/* </MenuList>
      </Menu> */}
        </Flex>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={6}
          icon={<FcMenu />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => changeDisplay("flex")}
        />
        <Flex
          w="100vw"
          bgColor="gray.300"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflow="auto"
          flexDir="column"
          display={display}
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={6}
              bgColor="gray.300"
              aria-label="Close Menu"
              size="lg"
              display={["flex", "flex", "none", "none"]}
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>

          <Flex flexDir="column" alignItems="center">
            <Link bgColor="transparent" href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                my={5}
                w="100%"
                bgColor="transparent"
                icon={<FcHome />}
              >
                Home
              </Button>
            </Link>
            <Link href="/search" passHref>
              <Button
                as="a"
                variant="ghost"
                my={5}
                w="100%"
                bgColor="transparent"
                icon={<BsSearch />}
              >
                Search
              </Button>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <Button
                as="a"
                variant="ghost"
                my={5}
                w="100%"
                bgColor="transparent"
                icon={<FcAbout />}
              >
                Buy Property
              </Button>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <Button
                as="a"
                variant="ghost"
                my={5}
                w="100%"
                bgColor="transparent"
                icon={<FiKey />}
              >
                Rent Property
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Navbar;
