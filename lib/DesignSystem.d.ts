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
declare const _default: DesignSystem<FtosDesign>;
export default _default;
export { BaseType, JourneyDesignerType };
