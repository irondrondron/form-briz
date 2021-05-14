import React from 'react';
import { IconContext } from 'react-icons';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toggleModalActive } from '../redux/actions/modal';
import { setSelectedObject } from '../redux/actions/object';

const ListItem = ({item}) => {
  const dispatch = useDispatch();
  return (
    <div className="item" key={item.id}>
      <div className="item__info">
        <div className="item__text">
          <p>{item.phoneNumber}</p>
        </div>
        <div className="item__text">
          <p>{item.lastName}</p>
        </div>
      </div>
      <div className="item__tool">
        <button
          className="item__button item__button--edit"
          onClick={(e) => {
            dispatch(setSelectedObject(item));
            dispatch(toggleModalActive(true));
          }}
        >
          <IconContext.Provider
            value={{ className: 'item__button--edit', size: '2em' }}
          >
            <div>
              <MdEdit />
            </div>
          </IconContext.Provider>
        </button>
        <button
          className="item__button item__button--del"
          onClick={(e) => dispatch({ type: 'DELETE', payload: item.id })}
        >
          <IconContext.Provider
            value={{ className: 'item__button--del', size: '2em' }}
          >
            <div>
              <MdDeleteForever />
            </div>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default ListItem;
