import dynamic from 'next/dynamic';

import AppHeader from '@/components/common/header/AppHeader';

const AuthForm = dynamic(
  () => import('@/components/common/form/AuthForm/AuthForm'),
  { ssr: false },
);

const Index = () => {
  return (
    <div id='wrapper'>
      <AppHeader />
      <AuthForm />
    </div>
  );
};

export default Index;
