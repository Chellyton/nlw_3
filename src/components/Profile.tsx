import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level} = useContext(ChallengesContext)
    
    return(
        <div className={styles.profileContainer}>
            <img src="https://scontent.fbsb3-1.fna.fbcdn.net/v/t31.0-8/19956592_875521915928831_3126389440815660364_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=smJhWK5CXWsAX9-J_nk&_nc_ht=scontent.fbsb3-1.fna&oh=83ad7b60749dc48d440270e3b30e84f8&oe=6083FF9B" alt="Foto"/>
            <div>
                <strong>Chellyton Lucas</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}</p>
            </div>
        </div>

    );
}