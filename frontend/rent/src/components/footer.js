import './footer.css';
import React from 'react';

function Footer() {
    return (
        
            <div class="footer-content">

                <div class="footer-about">

                    <h3>O nama</h3>

                    <p>Rent-a-Car Fast and Easy je tvrtka osnovana 2018. godine. Fokusira se na pružanje visoko kvalitetne usluge iznajmljivanja vozila svojim klijentima.
                        Ova tvrtka ima za cilj svojim klijentima pružiti najbolje iskustvo iznajmljivanja automobila, sa modernim vozilima,
                        fleksibilnim uslovima iznajmljivanja i vrhunskom korisničkom podrškom. Svojim klijentima daje na raspolaganje širok izbor vozila,
                        od gradskih automobila do luksuznih vozila za poslovne potrebe.
                        Tvrtka radi sa ciljem da svoje usluge pruži po najpovoljnijim cijenama na tržištu, kako bi zadovoljila potrebe svih svojih klijenata.
                    </p>

                </div>

                <div className="footer-hours">

                    <h3>Radno vrijeme</h3>

                    <p><b>Ponedjeljak - Petak:</b> 8:00 - 18:00</p>
                    <p><b>Subota - Nedjelja:</b> 9:30 - 16:00</p>

                </div>

                <div className="footer-address">
                    <h3>Adresa</h3>
                    
                    <p>Ruđera Boškovića 33, 21000 Split</p>
                </div>
                
                <div className="footer-social">

                    <h3>Zapratite nas</h3>
                    
                    <p>Facebook <a href="https://facebook.com"><img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" width="20" height="20" alt="fb"/></a></p>
                    <p>Instagram <a href="https://instagram.com"><img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" width="20" height="20" alt="inst"/></a></p>
                
                </div>

            </div>
            
        
    );
}

export default Footer;