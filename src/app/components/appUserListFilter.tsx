import { FC } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { Button } from '@/components/ui/button.tsx';

interface Props {
  city: string;
  setCity: (value: string) => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (value: 'asc' | 'desc') => void;
  viewMode: 'grid' | 'list';
  setViewMode: (value: 'grid' | 'list') => void;
  cities: string[];
}

const AppUserListFilter: FC<Props> = ({
  city,
  setCity,
  sortOrder,
  setSortOrder,
  viewMode,
  setViewMode,
  cities,
}) => {
  return (
    <div className="mb-4 flex gap-2 justify-between">
      <div className="flex gap-2">
        <Select value={city} onValueChange={setCity}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Choose a city" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All cities</SelectItem>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        >
          {sortOrder === 'asc' ? 'Сортировать Z-A' : 'Сортировать A-Z'}
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          variant={viewMode === 'grid' ? 'default' : 'outline'}
          onClick={() => setViewMode('grid')}
        >
          Сетка
        </Button>
        <Button
          variant={viewMode === 'list' ? 'default' : 'outline'}
          onClick={() => setViewMode('list')}
        >
          Список
        </Button>
      </div>
    </div>
  );
};

export default AppUserListFilter;
