import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '@/lib/fakeInterface.ts';

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(
    'https://jsonplaceholder.typicode.com/users',
  );
  return data;
};

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,
  });
};
