import { type FooterProps } from "../libs/Footer";
import { Text, Group } from "@mantine/core";
export default function Footer({ year, fullName, studentId }: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text py={5} fz="h2">
        Copyright © {year} {fullName} {studentId}
      </Text>
    </Group>
  );
}
