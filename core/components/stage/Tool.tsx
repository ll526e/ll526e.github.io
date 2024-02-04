import {
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  Persona
} from "@fluentui/react-components";
import { Svg } from "@components/common"
import { useNavigate } from "react-router-dom"

export const HeaderTool = () => {
  const navigate = useNavigate()
  const onExit = () => {
    useCookie.remove('token')
    navigate('/stage/login')
  }
  return (
    <Menu openOnHover closeOnScroll>
      <MenuTrigger disableButtonEnhancement>
        <Persona className="cursor-pointer"
          name="小鱼儿"
          secondaryText="ll526e.cn"
          presence={{ status: "available" }}
          avatar={{
            image: {
              src: "https://gravatar.com/userimage/224128994/d5ef703baaa37c449015605a25e75d52.jpeg?size=256",
            },
          }} />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem icon={<Svg name="person" />}>个人中心</MenuItem>
          <MenuItem icon={<Svg name="exit" />} onClick={onExit}>退出账号</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}