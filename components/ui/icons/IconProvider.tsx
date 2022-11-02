import React, { Suspense } from 'react';

import { Icon } from '@/types/common';

interface IconProviderProps {
  icon: Icon;
  [x: string]: any;
}

const IconProvider = ({ icon, ...props }: IconProviderProps) => {
  const IconComponent = React.lazy(() => import(`./${icon}.tsx`));
  return (
    <Suspense fallback={icon}>
      <IconComponent {...props} />
    </Suspense>
  );
};

export default IconProvider;
