import { useSelector } from 'react-redux';
import { getSpells } from '../spellbookSlice';
import styles from './Spellcard.module.css';

export function Spellcard(props) {
    const index = props.index;
    const spells = useSelector(getSpells);
    const singleSpell = spells[index];
    const verbale = singleSpell.components.v ? 'V' : '';
    const somatico = singleSpell.components.s ? 'S' : '';
    const materiale = singleSpell.components.m ? 'M' : '';
    const componenti = verbale + somatico + materiale
    return (
        <div className={styles.container}>
            <div className={styles.levelbox}>
                <span className={styles.level}>{singleSpell.level}</span>
            </div>
            <div className={styles.namebox}>
                <span className={styles.name}>{singleSpell.name}</span>
            </div>
            {singleSpell.meta && singleSpell.meta.ritual ? 
                <span className={styles.ritualtag}>Ritual</span>
            : null}

            {Array.isArray(singleSpell.duration) && singleSpell.duration[0] && singleSpell.duration[0].concentration ? 
                <span className={styles.concentrationtag}>Concentation</span>
            : null}
            <span className={styles.components}>{componenti}</span>
        </div>
    );
};