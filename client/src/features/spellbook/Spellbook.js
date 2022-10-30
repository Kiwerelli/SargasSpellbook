import { Spellcard } from './spellcard/Spellcard';
import { useSelector } from 'react-redux';
import { getSpells } from './spellbookSlice';

export function Spellbook() {
    const spells = useSelector(getSpells);
    return (
        <>
            {spells.map((spell, index) => (
                <Spellcard
                    key={index}
                    index={index}
                />
            ))}
        </>  
    );
};