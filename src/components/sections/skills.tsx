import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, ShoppingBag } from "lucide-react";

const tabItems: {
  title: string;
  icon: React.ReactNode;
  content?: React.ReactNode;
}[] = [
  {
    title: "Expertise",
    icon: <ShoppingBag className="h-4 w-4 mr-2" />,
  },
  {
    title: "Languages",
    icon: <User className="h-4 w-4 mr-2" />,
  },
];

export const SkillsSection = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="p-0 bg-transparent border-b border-b-neutral-400 rounded-none w-full justify-start">
        {tabItems.map((item) => (
          <TabsTrigger
            key={item.title}
            value={item.title}
            className="m-0 shadow-none bg-transparent rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-neutral-700 dark:data-[state=active]:border-neutral-300"
          >
            {item.icon}
            <span>{item.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabItems.map((itemContent) => (
        <TabsContent key={itemContent.title} value={itemContent.title}>
          {itemContent.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};
