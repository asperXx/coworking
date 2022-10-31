import AppInput from '@/components/ui/AppInput/AppInput';
import { getRandomString } from '@/utils/string';

const Index = ({ inputId }) => {
  return (
    <div>
      index page
      <AppInput
        inputId={inputId}
        label='lol'
        attrs={{ type: 'text' }}
      />
    </div>
  );
};

export default Index;

export function getStaticProps() {
  return {
    props: { inputId: getRandomString() },
  };
}
