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
          label={<Text px={5} fz={22} fw={500}>Home</Text>}
          h={61}
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label={<Text px={5} fz={22} fw={500}>About</Text>}
          h={61}
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box px={15} py={15}>
        <Group >
         <Indicator inline size={16} offset={7} position="bottom-end" color="red" withBorder>
           <Avatar src="me.PNG" alt="it's me" variant="filled" radius="xl" size="lg" />
          </Indicator>
          <Text px={10} fw={500} fz={25}>
            User : Wasawat : Admin
          </Text>
        </Group>
      </Box>
    </Stack>
  );
}
