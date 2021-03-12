export const getHeaders = () => {
  return {
    headers: { auth: localStorage.getItem("bill-token") },
  };
};
