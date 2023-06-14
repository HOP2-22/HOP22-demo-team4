import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";

import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

const AdminAccountSelect = ({ value, onClickFunc }) => {
  return (
    <Select.Root
      onValueChange={(val) => {
        onClickFunc(val);
      }}
    >
      <Select.Trigger
        className="w-[100px] inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
        aria-label="Sold"
      >
        <Select.Value placeholder={value} />
        <Select.Icon className="text-violet11">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <SelectItem
                value="true"
                onClickFunction={() => onClickFunc(true)}
              >
                True
              </SelectItem>
              <SelectItem
                value="false"
                onClickFunction={() => onClickFunc(false)}
              >
                False
              </SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default AdminAccountSelect;

const SelectItem = React.forwardRef(
  ({ children, className, onClickFunction, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1",
          className
        )}
        {...props}
        ref={forwardedRef}
        onClick={onClickFunction}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
