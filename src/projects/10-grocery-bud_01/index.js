import { useState, useEffect } from 'react'
import Alert from './Alert'
import List from './List'

import './index.css'

const getLocalStorage = () => {
  const grocery = localStorage.getItem('grocery')
  if (grocery) {
    return JSON.parse(grocery)
  } else {
    return []
  }
}

const GroceryBud = () => {
  const [grocery, setGrocery] = useState(getLocalStorage())
  const [groceryName, setGroceryName] = useState('')
  const [alert, setAlert] = useState({
    msg: '',
    show: false,
    type: '',
  })
  const [isEdit, setIsEdit] = useState(false)
  const [editID, setEditID] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()
    if (!groceryName) {
      setAlert(showAlert('please enter your item', true, 'danger'))
    } else if (groceryName && isEdit) {
      setGrocery(
        grocery.map((groceryItem) => {
          if (groceryItem.id === editID) {
            return { ...groceryItem, name: groceryName }
          }
          return groceryItem
        })
      )
      setGroceryName('')
      setEditID(null)
      setIsEdit(false)
      setAlert(showAlert('item edited', true, 'success'))
    } else {
      setGrocery([
        ...grocery,
        { id: Math.random().toString(), name: groceryName },
      ])
      setGroceryName('')
      setAlert(showAlert('item added', true, 'success'))
    }
  }

  const editGroceryItem = (id) => {
    setIsEdit(true)
    setEditID(id)
    const specificGroceryItem = grocery.find(
      (groceryItem) => groceryItem.id === id
    )
    setGroceryName(specificGroceryItem.name)
  }

  const clearGrocery = () => {
    setGrocery([])
    setAlert(showAlert('empty grocey', true, 'danger'))
  }

  const showAlert = (msg, show, type) => {
    return { msg, show, type }
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(showAlert('', false, ''))
    }, 3000)
    return () => clearTimeout(timeout)
  }, [grocery])

  useEffect(() => {
    localStorage.setItem('grocery', JSON.stringify(grocery))
  }, [grocery])

  return (
    <section className="section-center">
      {alert && <Alert type={alert.type} msg={alert.msg} />}
      <form className="grocery-form" onSubmit={submitHandler}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={groceryName}
            onChange={(e) => setGroceryName(e.target.value)}
          />
          <button className="submit-btn">{isEdit ? 'edit' : 'submit'}</button>
        </div>
      </form>
      {grocery.length > 0 && (
        <div className="grocery-container">
          <div className="grocery-list">
            {grocery.map((groceryItem) => {
              return (
                <List
                  key={groceryItem.id}
                  {...groceryItem}
                  grocery={grocery}
                  setGrocery={setGrocery}
                  setAlert={setAlert}
                  showAlert={showAlert}
                  editGroceryItem={editGroceryItem}
                />
              )
            })}
          </div>
          <button className="clear-btn" onClick={clearGrocery}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default GroceryBud
