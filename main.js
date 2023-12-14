const apiManager = new APIManager();
const renderer = new Renderer();

const loadUserDataButton = $(".buttons button").filter(function () {
  return $(this).text() === "Load User Data";
});

const displayUserButton = $(".buttons button").filter(function () {
  return $(this).text() === "Display User";
});


displayUserButton.on("click", function () {
  renderRandomData()
});

loadUserDataButton.on("click", function () {
  loadData()
});

async function loadData() {
  await apiManager.loadData();
}


function renderRandomData() {
  renderer.render(apiManager.data);
  savedUsers.currentUser = data;
  renderer.render(data);
}
