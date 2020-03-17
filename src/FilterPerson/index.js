import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';
import { tagOptions } from '../constants';
import './style.css';

const FilterPerson = () => {
  return (
    <Dropdown
    text='Filter By People'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Input icon='search' iconPosition='left' className='search' />
      <Dropdown.Divider />
      <Dropdown.Header icon='tags' content='Tag Label' />
      <Dropdown.Menu scrolling>
        {tagOptions.map((option) => (
          <Dropdown.Item key={option.value} {...option} />
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
  );
};

export default FilterPerson;
