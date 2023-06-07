import { IComponentProps } from '../models/IComponentProps';
import { AppSearch } from './AppSearch';

export const AppMain = (props: IComponentProps) => {
  return (
    <main>
      <h2>{props.content}</h2>
      <AppSearch />
    </main>
  );
};
