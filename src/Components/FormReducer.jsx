import React from 'react'

function FormReducer(user, action) {
    switch (action.type) {
      case 'name': {
        return {...user, name: action.nextVal};
      }
      case 'age': {
        return {...user, age: action.nextVal};
      }
      case 'phone': {
        return {...user, phone: action.nextVal};
      }
      case 'email': {
        return {...user, email: action.nextVal};
      }
      case 'level': {
        return {...user, level: action.nextVal};
      }
      case 'date': {
        return {...user, date: action.nextVal};
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

export default FormReducer