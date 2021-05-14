import React from 'react';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import EditForm from './EditForm';
import ListItem from './ListItem';
const List = () => {
  const data = useSelector((state) => state.data);
  const selectedObject = useSelector((state) => state.object.selectedObject);
  
  return (
    <div className="container">
      <div className="list">
        {data.map((item) => {
          return (
            <ListItem key={item.id} item={item}/>
          );
        })}
        <Modal>
          {selectedObject && (
            <>
              <EditForm editableObject={selectedObject} />
            </>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default List;
