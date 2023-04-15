const logReactError = (error: Error, info: { componentStack: string }) => {
  console.log(error.message, info.componentStack);
};

export default logReactError;
