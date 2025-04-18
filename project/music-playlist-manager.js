class SongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null;
    this.prev = null;
  }
}

class Playlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
    this.loop = false;
  }
  getPlaylist() {
    let curr = this.head;
    let playlist = [];
    while (curr) {
      playlist.push(`${curr.title} - ${curr.artist}`);
      curr = curr.next;
    }
    return playlist;
  }
  // Add Song | Append new node at the end
  addSong(title, artist) {
    const newSong = new SongNode(title, artist);
    if (!this.head) {
      this.head = this.tail = this.current = newSong;
    } else {
      this.tail.next = newSong;
      newSong.prev = this.tail;
      this.tail = newSong;
    }
  }
  // Delete Song | Remove node by title
  deleteSong(title) {
    let curr = this.head.next;

    while (curr) {
      if (curr.title === title) {
        let prevSong = curr.prev;
        let nextSong = curr.next;

        if (prevSong) prevSong.next = nextSong;
        else this.head = curr.next;

        if (nextSong) nextSong.prev = prevSong;
        else this.tail = curr.prev;

        if (this.current === curr) this.current = curr.next || curr.prev || null;
        return "Song Deleted!"
      }
      curr = curr.next;
    }
    return "Song Not found !!"
  }
  // Get currently playing song
  getCurrentSong() {
    if (!this.current) return null;
    return {
      title: this.current.title,
      artist: this.current.artist,
    };
  }
  // Play Next
  playNextSong() {
    if (!this.current) return null;
    this.current = this.current.next || (this.loop ? this.head : null);
    return this.getCurrentSong();
  }
  // Play Previous
  playPrevSong() {
    if (!this.current) return null;
    this.current = this.current.prev || (this.loop ? this.tail : null);
    return this.getCurrentSong();
  }
  // Loop Mode | Link tail → head
  toggleLoop() {
    this.loop = !this.loop;
  }

  shufflePlaylist() {
    let shufflePlaylist = [];
    let node = this.head;
    while (node) {
      shufflePlaylist.push(node);
      node = node.next;
    }
    let i = shufflePlaylist.length, j;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      [shufflePlaylist[i], shufflePlaylist[j]] = [shufflePlaylist[j], shufflePlaylist[i]];
    }
    this.head = shufflePlaylist[0]
    this.tail = shufflePlaylist[shufflePlaylist.length - 1]
    this.head = shufflePlaylist[0]

    for (let i = 0; i < shufflePlaylist.length; i++) {
      shufflePlaylist[i].next = shufflePlaylist[i + 1] || null;
      shufflePlaylist[i].prev = shufflePlaylist[i - 1] || null;
    }

  }
}
const playlist = new Playlist();

playlist.addSong("Maine Khud Ko", "Mustafa Zahid")
playlist.addSong("Tu hai kahin", "PABLO")
playlist.addSong("Aaoge Tum Kabhi", "The Local Train")
playlist.addSong("Photograph", "Ed Sheeran")
playlist.addSong("Kabhi Yaadon Mein Aaun", "Abhijeet")
playlist.addSong("Tu Jhoom", "Naseebo Lal")
playlist.addSong("Hosanna", "A.R. Rahman")
playlist.addSong("Girta Sambhalta", "Aditya N.")
playlist.addSong("Faasle", "Kaavish")
playlist.addSong("Vhalam Aavo Ne", "Sachin-Jigar")

console.log("🎧 === PLAYLIST === 🎧", playlist.getPlaylist());

console.log('▶️ Now Playing:', playlist.getCurrentSong());

console.log('⏭️ Next:', playlist.playNextSong());
console.log('⏭️ Next:', playlist.playNextSong());
console.log('⏭️ Next:', playlist.playNextSong());
console.log('⏭️ Next:', playlist.playNextSong());

console.log('⏮️ Previous:', playlist.playPrevSong());

playlist.shufflePlaylist();
console.log('🔀 Shuffled Playlist:', playlist.getPlaylist());



// console.log(playlist.deleteSong("Kyu"));
// console.log("🎧 === PLAYLIST === 🎧", playlist.getPlaylist());