import { BaseType } from './Base';
import { JourneyDesignerType } from './JourneyDesigner';

type ThemeMode = 'light' | 'dark';

declare module 'materialui-ds' {
  export function getMode(): ThemeMode;
  export const Base: BaseType;
  export const JourneyDesigner: JourneyDesignerType;
}
