import {useState} from 'react';
import Tabel from './Tabel';


function Menu() {
    const title = "Daftar Menu Restoran";
    const [menus, setMenu] = useState(
        [
            {
                idmenu : 11,
                idkategori : 37, 
                menu : "Mangga",
                gambar : "mangga.jpg", 
                harga : 15000
            },
            {
                idmenu : 12, 
                idkategori : 37, 
                menu : "Pisang", 
                gambar : "pisang.jpg", 
                harga : 8000
            },
            {
                idmenu : 13, 
                idkategori : 37, 
                menu : "Apel", 
                gambar : "apel.jpg", 
                harga : 9000
            },
            {
                idmenu : 14, 
                idkategori : 37, 
                menu : "Melon", 
                gambar : "melon.jpg", 
                harga : 6000
            },
            {
                idmenu : 15, 
                idkategori : 35, 
                menu : "Es Jeruk", 
                gambar : "es-jeruk.jpg",
                harga : 3000
            },
            {
                idmenu : 16, 
                idkategori : 35, 
                menu : "Es Cincau", 
                gambar : "es-cincau.jpg",
                harga : 3000
            },
            {
                idmenu : 17, 
                idkategori : 35, 
                menu : "Es Pisang Ijo", 
                gambar : "es-pisang-ijo.jpg",
                harga : 3000
            },
            {
                idmenu : 18, 
                idkategori : 35, 
                menu : "Es Doger", 
                gambar : "es-doger.jpg",
                harga : 3000
            }
        ]
    );
    return (
      <div className="App">       
       <Tabel menu={menus} title={title} />
      </div>
    );
  }
  
  export default Menu;