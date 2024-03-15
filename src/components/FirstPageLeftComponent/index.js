
import girl from '../../assets/girl.png'
import building from '../../assets/building.png'

import styles from './style.module.css'
const FirstPageLeftComponent = () => {
    return (


        <div className={`${styles.main}`}>
                <div  className={`${styles.logo}`} ></div>
                <h1 className='d-none d-sm-block'>Welcome to Opptunity</h1>
                <div className={` d-none d-sm-flex     ${styles.images}` }>
                    <img src={girl} className=''></img>
                    <img src={building} className=''></img>
                </div>
                
    </div>
    
    

    )
}
export default FirstPageLeftComponent
