export const errorParsing = (errorCode) =>{

  switch(errorCode){

    case 'JsonWebTokenError': {
      return 'You are not authorized to access this page'
    }

    case 'TokenExpiredError': {
      return 'Your offer has expired please contact support'
    }

    default:{
      return 'Something went wrong please contact support'
    }
    
  }
}