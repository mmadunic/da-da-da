import React from 'react';
import './biranje.css'

function Choosing() {
    return (
        <div>
            <h1>Rent-a-Car Fast and Easy</h1>
            <form>
                <label htmlFor="pickup-location">Mjesto preuzimanja: <t />
                    <select id="pickup-location">
                        <option value="">Odaberi mjesto</option>
                        <option value="mall">Mall of Split, Split</option>
                        <option value="joker">Trgovački centar Joker, Split</option>
                        <option value="city">City Center one, Split</option>
                    </select>
                </label>

                <label htmlFor="return-location">Mjesto vraćanja: <t />
                    <select id="return-location">
                        <option value="">Odaberi mjesto</option>
                        <option value="mall">Mall of Split, Split</option>
                        <option value="joker">Trgovački centar Joker, Split</option>
                        <option value="city">City Center one, Split</option>
                    </select>
                </label>

                <label htmlFor="pickup-date">Datum polaska: <t />
                    <input type="date" id="pickup-date" />
                </label>

                <label htmlFor="return-date">Datum povratka: <t />
                    <input type="date" id="return-date" />
                </label>

                <button type="submit">Pretraži</button>
            </form>
        </div>
    );
}

export default Choosing;
