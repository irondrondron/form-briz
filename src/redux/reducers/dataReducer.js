const initialState = []
const shortid = require('shortid');

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.payload
    }
    case 'ADD': {
      const savedData = JSON.parse(localStorage.getItem('savedData')) == null ? [] : JSON.parse(localStorage.getItem('savedData'))
      const addObject = {
        id: shortid(),
        ...action.payload
      }
      savedData.push(addObject)
      localStorage.setItem("savedData", JSON.stringify(savedData))
      return [
        ...state,
        addObject
      ]
    }
    case 'UPDATE': {
      const savedData = JSON.parse(localStorage.getItem('savedData'))
      const updatedObj = action.payload
      const updatedData = savedData.map(o => {
        if (o.id === updatedObj.id) {
          return updatedObj
        }
        return o
      })
      localStorage.setItem("savedData", JSON.stringify(updatedData))
      return updatedData
    }
    case 'DELETE': {
      const savedData = JSON.parse(localStorage.getItem('savedData'))
      const filteredArr = savedData.filter(n => n.id !== action.payload)
      localStorage.setItem("savedData", JSON.stringify(filteredArr))
      return filteredArr
    }

    default:
      return state
  }
}

export default dataReducer