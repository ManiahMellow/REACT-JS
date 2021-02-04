import ListSiswa from "./ListSiswa";

function Siswa() {

  const nama = ['Xavira', 'Angkasa', 'Julian', 'Roy']
    return (
      <div className="App"> 
            
        <ListSiswa judul = {nama} />
      </div>
    );
  }
  
  export default Siswa;