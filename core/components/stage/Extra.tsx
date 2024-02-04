import {
  Dropdown,
  Option,
} from "@fluentui/react-components";

export const HeaderExtra = () => {
  return (
    <Dropdown
      defaultValue="工作台"
      defaultSelectedOptions={["1"]}
      placeholder="-"
      appearance="underline"
    >
      <Option value="1">工作台</Option>
      <Option value="2">管理中心</Option>
    </Dropdown>
  );
}