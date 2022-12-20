import { FtosDesign, ThemeMode, DesignSystem } from '.';
import Base from './Base';
import JourneyDesigner from './JourneyDesigner';
import Common from './Common';
import UploadComponent from './Common/UploadComponent';

function getMode(): ThemeMode {
  return 'light';
}

export * from './Base';
export * from './JourneyDesigner';
export * from './Common';
export default {
  getMode,
  Base,
  JourneyDesigner,
  Common,
  UploadComponent,
} as DesignSystem<FtosDesign>;
