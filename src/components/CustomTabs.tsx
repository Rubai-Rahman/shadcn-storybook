import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ReactElement, useState } from 'react';
interface tabsType {
  name: string;
  count?: number;
  panel: ReactElement;
}

export function CustomTabs({
  data,
  tabTrigeerBgColor,
  tabListBgColor,
  textSize,
}: {
  data: tabsType[];
  tabTrigeerBgColor: string;
  tabListBgColor: string;
  textSize: string;
}) {
  return (
    <Tabs className="w-full">
      <TabsList className={`w-full ${tabListBgColor}`}>
        {data.map((tab) => (
          <TabsTrigger
            key={tab.name}
            value={tab.name}
            className={`flex gap-x-2 w-full  ${textSize}  data-[state=active]:${tabTrigeerBgColor}
            `}
          >
            {tab.name}

            {tab.count ? (
              <p className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-500 flex justify-center items-center text-xs">
                {tab.count}
              </p>
            ) : null}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map((tab) => (
        <TabsContent key={tab.name} value={tab.name}>
          {tab.panel}
        </TabsContent>
      ))}
    </Tabs>
  );
}
