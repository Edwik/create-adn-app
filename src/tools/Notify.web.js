const Notify = async (message, type) => {
  const { toaster } = await import('evergreen-ui')
  switch(type) {
    case 'warning' :
      toaster.warning(message)
      break
    case 'success' :
      toaster.success(message)
      break
    case 'error' :
      toaster.danger(message)
      break
    default :
      toaster.notify(message)
      break
  }
}

export { Notify }
