import { FC } from "react";
import { ROUTES } from "config";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

interface Props {}

interface SidebarItem {
  title: string;
  route: ROUTES;
}

const SIDEBAR_ITEMS = [
  {
    title: "Home",
    route: ROUTES.BASE,
  },
];

export const Sidebar: FC<Props> = () => {
  const router = useRouter();

  return (
    <div>
      {SIDEBAR_ITEMS.map(({ title, route }, index) => (
        <Flex key={index}>
          <Link href={route}>{title}</Link>
        </Flex>
      ))}
    </div>
  );
};
