import FtosButton from './FtosButton';
import FtosIconButton from './FtosIconButton';
import FtosButtonGroup from './FtosButtonGroup';
import FtosCard from './FtosCard';

const Base = {
  FtosButton,
  FtosIconButton,
  FtosButtonGroup,
  FtosCard,
};

export type BaseType = typeof Base;
export default Base as BaseType;
