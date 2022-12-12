import { BaseType } from './Base';
import { JourneyDesignerType } from './JourneyDesigner';

type ThemeMode = 'light' | 'dark';

declare module '@fintechos-com/ftos-design-system' {
  export function getMode(): ThemeMode;
  export const Base: BaseType;
  export const JourneyDesigner: JourneyDesignerType;
}
