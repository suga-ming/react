// React Component!
// Follow <-> following
function FollowButton() {
  return React.createElement("div", {}, "Follow");
}

const domContainer = document.querySelector("#Follow_button_container");
ReactDOM.render(React.createElement(FollowButton), domContainer);
