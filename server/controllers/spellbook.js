import spellList from '../models/spellList.json' assert { type: "json" };

export const fetchAll = (req, res) => {
    res.json(spellList);
}