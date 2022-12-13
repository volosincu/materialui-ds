/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { BaseType } from './Base';
import { JourneyDesignerType } from './JourneyDesigner';

type ThemeMode = 'light' | 'dark';

export type FtosDesign = {
  getMode: () => ThemeMode;
};

export type DesignSystem<T> = T & {
  Base: BaseType;
  JourneyDesigner: JourneyDesignerType;
};

declare module 'materialui-ds' {
  const _default: DesignSystem<FtosDesign>;
  export default _default;
}
