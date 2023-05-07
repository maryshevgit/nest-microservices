import { defaultNS } from 'translation/config';
import ptbr from 'translation/locales/ptbr';

declare module 'i18next' {
interface CustomTypeOptions {
defaultNS: typeof defaultNS;
resources: typeof ptbr;
}
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof ptbr;
  }
}
