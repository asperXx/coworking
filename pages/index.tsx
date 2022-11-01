import dynamic from 'next/dynamic';

const AuthForm = dynamic(
  () => import('@/components/common/form/AuthForm/AuthForm'),
  { ssr: false },
);

const Index = () => {
  return (
    <div id='wrapper'>
      <AuthForm />
    </div>
  );
};

export default Index;
