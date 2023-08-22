import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import React, { ReactNode } from 'react'; // Import ReactNode

import { Button } from '@/components/ui/button';

interface menuDatatype {
  logo: ReactNode; // Change the type to React.ReactNode
  name: string;
  shortcut: string;
}
interface MenuCategory {
  label: string;
  data: menuDatatype[];
}

export function CustomDropDownMenu({
  data,
  buttonValue,
  menuBg,
  menuWidth,
  menuItemFocus,
}: {
  data: MenuCategory[];
  buttonValue: string;
  menuItemFocus: string;
  menuBg: string;
  menuWidth: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{buttonValue}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`${menuBg} ${menuWidth}`}>
        {data.map((category) => (
          <React.Fragment key={category.label}>
            <DropdownMenuLabel>{category.label}</DropdownMenuLabel>

            <DropdownMenuGroup>
              {category.data.map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  className={`${menuItemFocus}`}
                >
                  <span className="text-xs">{item.logo}</span>
                  <span>{item.name}</span>
                  <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
