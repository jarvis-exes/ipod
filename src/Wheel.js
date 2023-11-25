import React, {useState} from 'react'
import menuLogo from './images/buttons/menu.png'

const Wheel =  (props)=>{
    const {wheelRef} = props;
    
    const[isMouseDown, setIsMouseDown] = useState(false);

    const handleMouseDown = ()=>{
        setIsMouseDown(true);
    }
    const handleMouseUp = ()=>{
        setIsMouseDown(false);
    }
    
    
    
    return(
        <div className='wheel-box' draggable="false">
            <div className='outer-circle' ref={wheelRef}>
                <div 
                    className='inner-circle' 
                    draggable="false" 
                    onMouseDown={handleMouseDown} 
                    onMouseUp={handleMouseUp}
                    style = {{boxShadow : isMouseDown ? 'black 0px 0px 8px inset' : 'black 0px 0px 0px inset'}}
                >
                        
                </div>
                <div className='buttons'>
                    <img 
                        id='menu-button' 
                        draggable="false" 
                        alt='menu'
                        src= {menuLogo} 
                    />
                    <img 
                        id='play-button'  
                        draggable="false"
                        alt='play' 
                        src='https://cdn-icons-png.flaticon.com/128/7960/7960808.png' 
                    />
                    <img 
                        id='next-button' 
                        draggable="false"
                        alt='next' 
                        src='https://cdn-icons-png.flaticon.com/128/1/1371.png' 
                    />
                    <img 
                        id='previous-button'    
                        draggable="false"
                        alt='prev' 
                        src='https://cdn-icons-png.flaticon.com/128/2/2147.png' 
                    />
                </div>
            </div>
        </div>   
    )    
}


export default Wheel