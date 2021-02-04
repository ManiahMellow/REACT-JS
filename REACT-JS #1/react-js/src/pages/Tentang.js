import {useState} from 'react';

function Tentang() {

  const [count, setCount] = useState(0);
    function tambah() {
      setCount(count + 1);
    }

  function kurang() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

    return (
      <div className="App">
       <h3>All about SMK SAEBOM counter : {count} </h3>
       <p>Isi tentang SMK SAEBOM</p>

       <button type="button" onClick = {tambah} className="btn btn-light">Tambah</button>
       <button type="button" onClick = {kurang} className="btn btn-info">Kurang</button>
 
      </div>
    );
  }
  
  export default Tentang;