import React from 'react';

function Navbar(props){

    function ChangeSearch(event){
            props.setSearchText(event.target.value)        
    }

    return(
        <div>
            <div className='container'>
                <div className='up-nav'>
                    <div className='left-side'>
                        <img src='https://imgs.search.brave.com/k-PTi6DU3YPlpZKrRdRS6217c-y1sVe5fn9cVCo9FiI/rs:fit:1118:1103:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvbW92aWUtcG5n/LWhkLW1vdmllLWxv/Z28tY2xpcGFydHMt/MjUyNDkxMC0xMTE4/LnBuZw' alt='...' />
                    </div>
                    <div className='middle-side'>
                        <h1>Find Movies, TV shows and more</h1>
                    </div>
                    <div className='right-side'>
                        <button>LOGIN</button>
                    </div>
                </div>
                <div className='down-nav'>
                    <input type='text' placeholder='Enter Keywords...' onChange={ChangeSearch}/><button> <b>→</b> </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;