const addLoadingMessage = () => {
  const wrapper = $("<div>");
  const message = $("<h3>").text("Loading.");
  wrapper.append(message);
  window.setInterval(() => changeText(message), 1000);
  return wrapper;
};

const changeText = message => {
  if (message.text() === "Loading.") message.text("Loading..");
  else if (message.text() === "Loading..") message.text("Loading...");
  else message.text("Loading.");
};
