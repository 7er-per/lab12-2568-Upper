import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps  {
  userName: string;
  type: "admin" |"student";
}
export type { SidebarComponentProps };
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box >
        <NavLink
          color="cyan"
          label={<Text fz="sm" >Home</Text>}
          h={41}
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label={<Text fz="sm" >About</Text>}
          h={41}
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box px={10} py={10}>
        <Group >
         <Indicator inline  size={12} offset={7} position="bottom-end" color="red" withBorder>
           <Avatar src="me.PNG" alt="it's me" variant="filled" radius="xl" size="md" />
          </Indicator>
          <Text  >
            User : Wasawat : Admin
          </Text>
        </Group>
      </Box>
    </Stack>
  );
}
