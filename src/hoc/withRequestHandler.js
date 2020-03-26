import React, { useState, useEffect } from 'react'

/**
 * This High Order Component is for handle the request and responses
 * to the server using the Redux actions.
 * @param {*} WrappedComponent 
 */
const withRequestHandler = (WrappedComponent) => (
  props => {
    // Hook to handle a loading state in the WrappedComponent
    const [loading, setLoading] = useState(false)

    /**
     * Executes the requestFunction when the component is mounted.
     * @param {*} requestFunction 
     */
    const initRequest = (requestFunction) => {
      return useEffect(() => {
        setLoading(true)
        requestFunction()
      }, [])
    }

    /**
     * Handles a change in data. If data changes, it is going to check
     * if data is a success response (with status 200) or a bad one.
     * @param {*} data : a prop from Redux state
     * @param {*} onSuccessFunction 
     * @param {*} onFailFunction 
     */
    const responseHandler = (data ,onSuccessFunction, onFailFunction) => {
      return useEffect(async () => {
        if(data && data.status === 200) {
          await onSuccessRequest()
          onSuccessFunction()
        } else {
          await onFailRequest()
          onFailFunction()
        }
        setLoading(false)
      }, [data])
    }

    const onSuccessRequest = async () => {
      // Show success notification
    }

    const onFailRequest = async () => {
      // Show error notification
      // Send error log
    }

    return (
      <WrappedComponent
        loading={loading}
        setLoading={setLoading}
        initRequest={initRequest}
        responseHandler={responseHandler}
        {...props}
      />
    )
  }
)

export default withRequestHandler
