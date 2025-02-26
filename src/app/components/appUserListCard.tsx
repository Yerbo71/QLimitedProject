import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { FC } from 'react';
import { User } from '@/lib/fakeInterface.ts';

const AppUserListCard: FC<User> = (user) => {
  return (
    <Card key={user.id}>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription className="truncate whitespace-nowrap">
          {`${user.company.name}, ${user.company.bs}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="gap-2 rounded-md border p-2">
          <div className="flex gap-2">
            <p className="text-sm text-gray-600">Phone:</p>
            <p className="text-sm text-gray-600">{user.phone}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm text-gray-600">Email:</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm text-gray-600">City:</p>
            <p className="text-sm text-gray-600">{user.address.city}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Hire</Button>
      </CardFooter>
    </Card>
  );
};

export default AppUserListCard;
