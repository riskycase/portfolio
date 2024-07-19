import { menus } from "@/data/content";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Hide,
  IconButton,
  Link,
  Show,
  Text,
  theme,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { useRef } from "react";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const menuRef = useRef(null);
  return (
    <header className="w-full sticky top-0 z-10">
      <Box
        width="100%"
        padding={4}
        backgroundColor={theme.colors.gray[700]}
        color={theme.colors.gray[50]}
      >
        <Show above="md">
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="end"
            gap={2}
          >
            {menus.map((menu, index) => (
              <Link key={index} as={NextLink} href={menu.link}>
                {menu.name}
              </Link>
            ))}
          </Flex>
        </Show>
        <Hide above="md">
          <IconButton
            as={motion.button}
            icon={<MdMenu />}
            onClick={onToggle}
            aria-label="Drawer menu"
            variant="text"
            whileTap={{
              scale: 0.8,
            }}
            transition="spring"
            ref={menuRef}
          />
          <Drawer
            placement="left"
            size="full"
            onClose={onClose}
            isOpen={isOpen}
            finalFocusRef={menuRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Text size="lg">Menu</Text>
              </DrawerHeader>
              <DrawerBody>
                <Flex direction="column" gap={2} padding={4}>
                  {menus.map((menu, index) => (
                    <Link
                      key={index}
                      as={NextLink}
                      href={menu.link}
                      fontSize="lg"
                      onClick={onClose}
                    >
                      {menu.name}
                    </Link>
                  ))}
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Hide>
      </Box>
    </header>
  );
}
