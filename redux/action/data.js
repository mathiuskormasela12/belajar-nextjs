// ========= Data Action

export const setData = (data) => ({
  type: 'SET_DATA',
  payload: {
    data: { ...data },
  },
});
