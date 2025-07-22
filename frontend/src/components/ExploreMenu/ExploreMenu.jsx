import React from 'react'
import './ExploreMenu.css'
import {menu_list}  from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac semper tortor. Cras eget mauris justo. Morbi maximus ligula in pharetra placerat. Nulla nec porttitor metus. Donec ac sem a diam feugiat consectetur. Donec non leo et nibh vestibulum dapibus. In ornare sagittis ante, sed lobortis metus laoreet ac. Proin ac urna felis. Duis tristique eros ac risus commodo, at aliquet lacus suscipit.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                  <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''></img>
                    <p>{item.menu_name}</p>

                  </div>  
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu