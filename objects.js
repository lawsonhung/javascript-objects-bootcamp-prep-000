var playlist = new Object({ Adele: 'Hello' }, { JasonDerulo: 'Cheyenne' }, { Skillet: 'Monster'});

function updatePlayList(playList, artistName, songTitle) {
  playList.artistName = songTitle;
  return playList;
}