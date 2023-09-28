export async function init() {
    await miro.board.ui.on('app_card:open', (event) => {
    const {appCard} = event;
    
    // Fetch a specific app card by specifying its ID
    const url = `http://localhost:3000/app.html?id=${appCard.id}`;
    
    // Open the modal to display the content of the fetched app card
    miro.board.ui.openModal({ url });
  });
}

init();
