import { IComponentProps } from '../models/IComponentProps';

export const AppFooter = (props: IComponentProps) => {
  return (
    <>
      <h2>{props.content}</h2>
    </>
  );
};
