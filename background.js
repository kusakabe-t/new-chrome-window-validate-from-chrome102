chrome.action.onClicked.addListener(() => {
  chrome.system.display.getInfo((display) => {
    // NOTE: 現在表示しているディスプレイサイズを取得
    const { width, height } = display[0].bounds

    chrome.windows.create(
      {
        url: 'https://google.com',
        type: 'popup',
        width,
        height,
      },
    )
  })
})
