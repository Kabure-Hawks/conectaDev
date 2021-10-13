import React from "react";

function Header() {
    return (
        <header className='header'>
                <div className='toolbar'>
                    <div className=''>
                        <a href='#'>Conecta Dev - Alterado</a>
                    </div>

                    <div className=''>
                        <button>Novo Post</button>
                        <span>Img1</span>
                        <span>Img2</span>
                    </div>
                </div>
        </header>
    );
};

export default Header;