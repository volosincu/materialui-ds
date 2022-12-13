import { FtosDesign, ThemeMode, DesignSystem } from '.';
import Base from './Base';
import JourneyDesigner from './JourneyDesigner';

function getMode(): ThemeMode {
  return 'light';
}

export * from './Base';
export * from './JourneyDesigner';
export default { getMode, Base, JourneyDesigner } as DesignSystem<FtosDesign>;
