import dynamic from 'next/dynamic';

const AuthForm = dynamic(
  () => import('@/components/common/form/AuthForm/AuthForm'),
  { ssr: false },
);

const Index = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <AuthForm />
    </div>
  );
};

export default Index;
