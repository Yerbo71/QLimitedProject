import HeaderApp from '@/widgets/headerApp';
import FooterApp from '@/widgets/footerApp';
import AppUserList from '@/app/blocks/appUserList.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner.tsx';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <HeaderApp />
      <QueryClientProvider client={queryClient}>
        <AppUserList />
      </QueryClientProvider>
      <FooterApp />
      <Toaster />
    </>
  );
}

export default App;
