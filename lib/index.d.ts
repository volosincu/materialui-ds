import { BaseType } from './Base';
import { JourneyDesignerType } from './JourneyDesigner';

type ThemeMode = 'light' | 'dark';
type FtosDesign = {
  getMode: () => ThemeMode;
};

type DesignSystem<T> = T & {
  Base: BaseType;
  JourneyDesigner: JourneyDesignerType;
};

declare module '@fintechos-com/ftos-design-system' {
  export function getMode(): ThemeMode;
  export const Base: BaseType;
}
