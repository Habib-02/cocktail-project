import {} from 'react'

import { FaRegEdit, FaTrash } from 'react-icons/fa'

const List = ({
  id,
  name,
  grocery,
  setGrocery,
  setAlert,
  showAlert,
  editGroceryItem,
}) => {
  const deleteGroceryItem = (id) => {
    setGrocery(grocery.filter((item) => item.id !== id))
    setAlert(showAlert('item remove', true, 'danger'))
  }

  return (
    <article className="grocery-item">
      <p className="title">{name}</p>
      <div className="btn-container">
        <button className="edit-btn" onClick={() => editGroceryItem(id)}>
          <FaRegEdit />
        </button>
        <button className="delete-btn" onClick={() => deleteGroceryItem(id)}>
          <FaTrash />
        </button>
      </div>
    </article>
  )
}

export default List
