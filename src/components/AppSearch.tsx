import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { IPerson } from '../models/IPerson';
import { AppPerson } from './AppPerson';

export const AppSearch = () => {
  const [input, setInput] = useState('');
  const [person, setPerson] = useState<IPerson>({
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    gender: '',
    films: [],
    starships: [],
  });

  //   useEffect(() => {});

  const getData = async (search: string) => {
    const responseData = await axios.get<IPerson>(
      'https://swapi.dev/api/people/' + search
    );

    setPerson(responseData.data);

    setInput('');
  };

  const handleClick = () => {
    if (input === '') {
      return;
    }
    getData(input);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input type='text' value={input} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <AppPerson person={person} />
    </div>
  );
};
