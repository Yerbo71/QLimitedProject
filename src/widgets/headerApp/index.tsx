import { Button } from '@/components/ui/button.tsx';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet.tsx';
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from '@/components/ui/navigation-menu.tsx';
import { MenuIcon } from 'lucide-react';

const Index = () => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-10 pl-4">
            <a
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Home
            </a>
            <a
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              About
            </a>
            <a
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Services
            </a>
            <a
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Portfolio
            </a>
          </div>
        </SheetContent>
      </Sheet>
      <NavigationMenu className="hidden lg:flex ml-3">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <a
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Home
            </a>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <a
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              About
            </a>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <a
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Services
            </a>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <a
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Portfolio
            </a>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex gap-2">
        <Button variant="outline">Sign in</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Index;
