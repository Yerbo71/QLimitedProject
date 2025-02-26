import { useState } from 'react';
import { cn } from '@/lib/utils.ts';
import { useUsers } from '@/lib/hooks/useUsers.tsx';
import { toast } from 'sonner';
import AppUserListCard from '@/app/components/appUserListCard.tsx';
import AppUserListFilter from '@/app/components/appUserListFilter.tsx';

const AppUserList = () => {
  const { data: users = [], isLoading, error } = useUsers();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [city, setCity] = useState<string | 'all'>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  if (isLoading)
    return <p className="text-center text-gray-500">Загрузка...</p>;

  if (error) return toast('Произошла ошибка при загрузке пользователей');

  const cities = Array.from(new Set(users.map((user) => user.address.city)));

  const filteredUsers =
    city === 'all' ? users : users.filter((user) => user.address.city === city);

  const sortedUsers = [...filteredUsers].sort((a, b) =>
    sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name),
  );

  return (
    <div className="p-4">
      <AppUserListFilter
        city={city}
        setCity={setCity}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        viewMode={viewMode}
        setViewMode={setViewMode}
        cities={cities}
      />
      <div
        className={cn(
          'grid gap-4',
          viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
            : 'grid-cols-1',
        )}
      >
        {sortedUsers.map((user) => (
          <AppUserListCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default AppUserList;
