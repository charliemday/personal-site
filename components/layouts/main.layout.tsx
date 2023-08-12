import { Box } from "@chakra-ui/react";
import { Sidebar } from "components/sidebar";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => (
  <div>
    <Box p={12}>
      <Sidebar />
    </Box>
    {children}
  </div>
);
