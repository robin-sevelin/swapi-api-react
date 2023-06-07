import { IPersonProps } from '../models/IPersonProps';

export const AppPerson = (props: IPersonProps) => {
  const html = (
    <div>
      <h2>{props.person?.name}</h2>
      <p>{props.person.gender}</p>
      <p>{props.person.height}</p>
    </div>
  );

  return <>{html}</>;
};
