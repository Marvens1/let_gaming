import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlateforms from "../hooks/usePlatforms";
import { platform } from "../hooks/useGames";

interface Props {
  onselectPlatform: (platform: platform) => void;
  selectedPlatform: platform | null;
}

const PlatformSelector = ({ onselectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlateforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>

      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onselectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
