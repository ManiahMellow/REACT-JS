function ListSiswa(props) {

  const siswa = props.judul.map((item, i) => 
      <li key={i}>{item}</li>
    )

    return (
      <div className="App">       
        {/* <h2>{props.judul[3]}</h2>       */}

        <ul>
          {siswa}
        </ul>
      </div>
    );
  }
  
  export default ListSiswa;