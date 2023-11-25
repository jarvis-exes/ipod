import React from 'react'
import MenuItem from './MenuItem';

const Screen =  (props)=>{
    const{menu} = props;
    // console.log(menu.options);
    
    return(
        <div className='screen'>
            <div className='menu-items'>
                {
                    menu.options.map((item)=>{
                        return(
                            <MenuItem
                                menuItem = {item}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
    
    
}
export default Screen