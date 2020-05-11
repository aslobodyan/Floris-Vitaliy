import React from 'react';
import css from './InfoBlock.module.css';

const InfoBlock = () => {
    return (
        <div className={css.container}>
            <h3>Definition of done:</h3>
            <ul className={css.listStyle}>
                <li>
                    The page looks like it is designed.
                    <div className={css.red}>
                        Existing design doesn't give the possibility to get <b>font</b> / <b>icon</b> / <b>size</b> / <b>padding</b> / <b>margin</b> / <b>radius</b> / <b>shadow</b> styles etc. So please don't pay attention on it for now.
                    </div>
                </li>
                <li>
                    User is able to change <b>price</b> and <b>title</b>.
                    <div className={css.green}>
                        Done.
                    </div>
                </li>
                <li>
                    Updated information can be stored in the state.
                    <div className={css.green}>
                        Done.
                    </div>
                </li>
            </ul>

            <h3>Additional info:</h3>
            <ul className={css.listStyle}>
                <li>There is UX Error in design: price has dark background and Image consists of dark element. I added white border for price ... to avoid overlapping both dark colors and to make them readable.</li>
                <li>To make the price/title editable I used react-contenteditable NPM-package. But seems like it has an error with jumping cursor while editing. So it is not ok for production, but for our purpose is ok.</li>
            </ul>
        </div>
    );
};

export default InfoBlock;