import { IComponentProps } from '../models/IComponentProps';

export const AppHeader = (props: IComponentProps) => {
  return (
    <>
      <h1>{props.content}</h1>
    </>
  );
};
